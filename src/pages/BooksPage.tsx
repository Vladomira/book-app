import { FC, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FiltredBlock } from "../components/Filter";
import { BooksType, initialBook } from "../types/book";
import { fetchBooks } from "../api/books";
import { BooksList } from "../components/Books/BooksList";
import { PaginationComponent } from "../components/Pagination";

export const BooksPage: FC = () => {
   const [data, setData] = useState<BooksType[]>([initialBook]);
   const [countPage, setCountPage] = useState<number>(1);
   const [pageNumber, setPageNumber] = useState<number>(1);
   const [query, setQuery] = useState("");
   const [searchParams, setSearchParams] = useSearchParams();
   const limit = 14;
   const bookQuery = searchParams.get("book") || "";

   useEffect(() => {
      const offset = (pageNumber - 1) * limit;
      fetchBooks(query, limit, offset)
         .then((data) => {
            const count = Math.floor(data.totalItems / limit);

            setCountPage(count - 11);
            setData([...data.items]);
         })
         .catch(console.error);
   }, [query]);

   const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
      event.preventDefault();
      setPageNumber(value);

      const offset = (value - 1) * limit;
      fetchBooks(query, limit, offset)
         .then((data) => {
            setData([...data.items]);
         })
         .catch(console.error);
   };

   return (
      <>
         <FiltredBlock
            query={query}
            setQuery={setQuery}
            setSearchParams={setSearchParams}
         />
         <BooksList books={data} bookQuery={bookQuery} />

         {data.length > 0 && (
            <PaginationComponent
               count={countPage}
               page={pageNumber}
               onChange={handleChange}
            />
         )}
      </>
   );
};
// "https://www.googleapis.com/books/v1/volumes?q=isbn:" +
//    query +
//    "&key=" +
//    apiKey,
// { method: "get" }

// nytimes: jC3tUx7sOOydWYTSMMWEi7tCwDWvUzd3
