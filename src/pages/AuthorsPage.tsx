import { useEffect, useState } from "react";
import { Link } from "@mui/material";

export const AuthorsPage = () => {
   const [data, setData] = useState([
      { body: "", id: 0, title: "", userId: 0 },
   ]);

   useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts`)
         .then((res) => res.json())
         .then((data) => setData(data));
   }, []);

   return (
      <>
         <h1>Authorspage</h1>
         <ul>
            {data.map((el) => {
               return (
                  <li key={el.id}>
                     <Link href={`/authors/${el.id}`}>
                        <p>{el.title}</p>
                     </Link>
                  </li>
               );
            })}
         </ul>
      </>
   );
};
