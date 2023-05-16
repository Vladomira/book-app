import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Stack } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { FiltredBlock } from "../components/FiltredBlock";
import { BooksType, initialBook } from "../types/book";
import { BookItem } from "../components/BookItem";

export const BooksPage = () => {
   const [data, setData] = useState<BooksType[]>([initialBook]);
   const [countPage, setCountPage] = useState<number>(1);
   const [currentPage, setCurrentPage] = useState<number | undefined>(1);
   const [searchParams, setSearchParams] = useSearchParams();
   const [query, setQuery] = useState("");
   const bookQuery = searchParams.get("book") || "";
   // const apiKey = "AIzaSyDyOmRZlMhsG5lRQl5Xb4ObRxZ0hY5uaOU";

   const url = "https://www.googleapis.com/books/v1/volumes?";
   useEffect(() => {
      const fetchData = async () => {
         const data = await fetchBooks(10, 0);
         return data;
      };
      fetchData()
         .then((data) => {
            setCountPage(Math.floor(data.totalItems / 10));
            setData([...data.items]);
         })
         .catch(console.error);
   }, [query]);

   const fetchBooks = (limit: number | null, offset: number | null) => {
      return fetch(
         `${url}q=${
            query.split(" ").join("+") || "hardcover-fiction"
         }&maxResults=${limit}&startIndex=${offset}&country=IN&langRestrict=en
        `
      ).then((res) => res.json());
   };
   const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
      event.preventDefault();
      setCurrentPage(value);
      const fetchData = async () => {
         return await fetchBooks(10, value * 10 - 10);
      };
      fetchData()
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
         <ul
            style={{
               display: "flex",
               flexWrap: "wrap",
               justifyContent: "center",
            }}
         >
            {data.length > 0 &&
               data
                  .filter((book) => book.volumeInfo.title.includes(bookQuery))

                  .map((el) => <BookItem key={el.id} el={el} />)}
         </ul>
         {data.length > 0 && (
            <Stack spacing={2}>
               <Pagination
                  count={countPage}
                  page={currentPage}
                  onChange={handleChange}
               />
            </Stack>
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
