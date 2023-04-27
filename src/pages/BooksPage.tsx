import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FiltredBlock } from "../components/FiltredBlock";
// import { Link } from "@mui/material";

export const BooksPage = () => {
   const [data, setData] = useState([
      { body: "", id: 0, title: "", userId: 0 },
   ]);
   const [searchParams, setSearchParams] = useSearchParams();
   const [query, setQuery] = useState("");
   const bookQuery = searchParams.get("book") || "";

   useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
         .then((res) => res.json())
         .then((data) => setData(data))
         .catch((error) => console.log("error:", error));
   }, []);

   return (
      <>
         <FiltredBlock
            query={query}
            setQuery={setQuery}
            setSearchParams={setSearchParams}
         />
         <ul>
            {data
               .filter((book) => book.title.includes(bookQuery))
               .map((el) => {
                  return (
                     <li key={el.id}>
                        <Link to={`/books/${el.id}`}>
                           <p>{el.title}</p>
                        </Link>
                     </li>
                  );
               })}
         </ul>
      </>
   );
};
