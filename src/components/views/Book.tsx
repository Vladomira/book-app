import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { SinglePageProps } from "../../types";

export const Book: FC<SinglePageProps> = ({ id }) => {
   const [data, setData] = useState({ body: "", id: 0, title: "", userId: 0 });

   useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
         .then((res) => res.json())
         .then((data) => setData(data));
   }, []);
   const userId = 3;
   return (
      <div>
         Book
         {data && (
            <>
               <p>{data.title}</p>
               <p> {data.body}</p>
            </>
         )}
         <Link to={`/user/${userId}/book/${id}/notes`}>Notes</Link>
      </div>
   );
};
