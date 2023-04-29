import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FiltredBlock } from "../components/FiltredBlock";
// import { env } from "process";
// import { Link } from "@mui/material";

export const BooksPage = () => {
   const [data, setData] = useState([
      { body: "", id: 0, title: "", userId: 0 },
   ]);
   const [searchParams, setSearchParams] = useSearchParams();
   const [query, setQuery] = useState("");
   const bookQuery = searchParams.get("book") || "";
   // AIzaSyDyOmRZlMhsG5lRQl5Xb4ObRxZ0hY5uaOU
   console.log("dot.", process.env.REACT_APP_API_KEY);

   useEffect(() => {
      // fetch("https://www.googleapis.com/books")
      //    .then((res) => res.json())
      //    .then((data) => console.log("data", data));
      // fetch("https://jsonplaceholder.typicode.com/posts")
      //    .then((res) => res.json())
      //    .then((data) => setData(data))
      //    .catch((error) => console.log("error:", error));
   }, []);
   // https://www.googleapis.com/books

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
