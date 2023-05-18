import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Stack, Box } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { FiltredBlock } from "../components/FiltredBlock";
import { BooksType, initialBook } from "../types/book";
import { BookItem } from "../components/BookItem";
import { fetchBooks } from "../api/books";

export const BooksPage = () => {
   const [data, setData] = useState<BooksType[]>([initialBook]);
   const [countPage, setCountPage] = useState<number>(1);
   const [pageNumber, setPageNumber] = useState<number>(1);
   const [query, setQuery] = useState("");
   const [searchParams, setSearchParams] = useSearchParams();
   const limit = 10;
   const bookQuery = searchParams.get("book") || "";

   useEffect(() => {
      const offset = (pageNumber - 1) * limit;
      fetchBooks(query, limit, offset)
         .then((data) => {
            const count = Math.floor(data.totalItems / limit);
            setCountPage(count);
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
         <ul
            style={{
               display: "flex",
               flexWrap: "wrap",
               justifyContent: "center",
               marginLeft: "-30px",
               marginTop: "-30px",
               marginBottom: "50px",
            }}
         >
            {data.length > 0 &&
               data
                  .filter((book) => book.volumeInfo.title.includes(bookQuery))

                  .map((el) => <BookItem key={el.id} el={el} />)}
         </ul>
         {data.length > 0 && (
            <Box display="flex" justifyContent="center">
               <Stack spacing={2}>
                  <Pagination
                     count={countPage}
                     page={pageNumber}
                     onChange={handleChange}
                  />
               </Stack>
            </Box>
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
