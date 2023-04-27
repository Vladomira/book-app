import { FC, useEffect, useState } from "react";
import { SinglePageProps } from "../../types";

export const Author: FC<SinglePageProps> = ({ id }) => {
   const [data, setData] = useState({ body: "", id: 0, title: "", userId: 0 });

   useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
         .then((res) => res.json())
         .then((data) => setData(data));
   }, []);

   return (
      <div>
         Author
         {data && (
            <>
               <p>{data.title}</p>
               <p> {data.body}</p>
            </>
         )}
      </div>
   );
};
