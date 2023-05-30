import React from "react";
import { useEffect, useState } from "react";
import { Link } from "@mui/material";
import { FiltredBlock } from "../components/Filter";
import { useSearchParams } from "react-router-dom";

// "https://openlibrary.org/authors/OL23919A.json" //about author
//  `https://openlibrary.org/search/authors.json?q=${reqQuery}`
// https://www.googleapis.com/books/v1/volumes?q=inauthor:${reqQuery}

export const AuthorsPage = () => {
   const [authorsList, setAuthorsList] = useState<
      { name: string; key: string }[]
   >([]);
   const [query, setQuery] = useState("");
   const [searchParams, setSearchParams] = useSearchParams();

   useEffect(() => {
      // const reqQuery = query.split(" ").join("+");
      // fetch(`https://openlibrary.org/search/authors.json?q=${reqQuery}`)
      //    .then((res) => res.json())
      //    .then((data) => {
      //       // console.log("data", data.docs);
      //       // data?.docs?.map((el: any) => console.log("el", el.name));
      //       data?.docs?.map(
      //          (el: any) => authorsList.push({ name: el.name, key: el.key })
      //       );
      //    });
      let timer: string | number | NodeJS.Timeout | undefined;

      const fetchData = () => {
         const reqQuery = query.split(" ").join("+");
         console.log(reqQuery, "reqQuery");

         fetch(`https://openlibrary.org/search/authors.json?q=${reqQuery}`)
            .then((res) => res.json())
            .then((data) => {
               console.log("data", data);
               data?.docs?.map((el: any) =>
                  authorsList.push({ name: el.name, key: el.key })
               );
            });
      };

      const delayedAPICall = () => {
         clearTimeout(timer);
         timer = setTimeout(fetchData, 300);
      };

      delayedAPICall();
      return () => clearTimeout(timer);
   }, [query]);

   return (
      <>
         <h1>Authorspage</h1>
         <FiltredBlock
            query={query}
            setQuery={setQuery}
            setSearchParams={setSearchParams}
            // typePage="author"
         />
         {authorsList?.length > 0 && (
            <ul>
               {authorsList?.map((el) => {
                  return (
                     <li key={el.key}>
                        <p>{el.name}</p>
                     </li>
                  );
               })}
            </ul>
         )}
      </>
   );
};
