import React, { FC, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FiltredBlock } from "../components/Filter";
import { BooksType, initialBook } from "../types/book";
import { fetchBooks } from "../api/books";
import { BooksList } from "../components/BooksList/BooksList";
import { PaginationComponent } from "../components/Pagination";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { booksOperations } from "../redux/user-books";
import { toast } from "react-toastify";

export const BooksPage: FC = () => {
   const [data, setData] = useState<BooksType[]>([initialBook]);
   const [countPage, setCountPage] = useState<number>(1);
   const [pageNumber, setPageNumber] = useState<number>(1);
   const [query, setQuery] = useState("");
   const dispatch = useDispatch<AppDispatch>();
   const [searchParams, setSearchParams] = useSearchParams();
   const limit = 10;
   const bookQuery = searchParams.get("book") || "";

   const getBooks = useCallback(async () => {
      const offset = (pageNumber - 1) * limit;
      try {
         const response = await fetchBooks(query, limit, offset);
         if (response?.items?.length > 0) {
            setData(response.items);
            return response.totalItems;
         } else {
            toast.warn("Sorry, this page is empty");
            return 0;
         }
      } catch (error) {
         throw error;
      }
   }, [query, pageNumber, limit]);

   const handleBooksFetch = async () => {
      try {
         const total = await getBooks();
         const count = Math.ceil(total / limit);
         setCountPage(count);
      } catch (error) {
         console.error(error);
      }
   };

   useEffect(() => {
      dispatch(booksOperations.getBooks());
      handleBooksFetch();
   }, [query]);

   useEffect(() => {
      const fetchBooks = async () => {
         try {
            dispatch(booksOperations.getBooks());
            await getBooks();
         } catch (error) {
            console.error("Error fetching books:", error);
         }
      };

      fetchBooks();
   }, [pageNumber]);

   return (
      <>
         <FiltredBlock
            query={query}
            setQuery={setQuery}
            setSearchParams={setSearchParams}
         />
         {data?.length > 0 && (
            <>
               <BooksList books={data} bookQuery={bookQuery} />

               <PaginationComponent
                  count={countPage}
                  page={pageNumber}
                  onChange={(
                     event: React.ChangeEvent<unknown>,
                     value: number
                  ) => setPageNumber(value)}
               />
            </>
         )}
      </>
   );
};
