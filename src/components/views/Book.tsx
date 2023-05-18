import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { SinglePageProps } from "../../types";
import { BooksType, initialBook } from "../../types/book";
import { fetchById } from "../../api/books";

export const Book: FC<SinglePageProps> = ({ id }) => {
   const [data, setData] = useState<BooksType>(initialBook);

   useEffect(() => {
      fetchById(id).then((data) => {
         setData(data);
      });
   }, [id]);
   const userId = 3;

   return (
      <div>
         {data.id && (
            <>
               <p>{data.volumeInfo.title}</p>
               <img
                  style={{
                     width: "110px",
                  }}
                  src={
                     data.volumeInfo.imageLinks?.smallThumbnail ||
                     data.volumeInfo.imageLinks?.thumbnail ||
                     ""
                  }
                  alt=""
               />
               <p>{data.volumeInfo.authors?.[0]}</p>
               <p>{data.volumeInfo.categories?.[0]}</p>
            </>
         )}
         <Link to={`/user/${userId}/book/${id}/notes`}>Notes</Link>
      </div>
   );
};

// https://www.googleapis.com/books/v1/volumes?q=isbn:<your_isbn_here>
// https://www.googleapis.com/books/v1/volumes?q=isbn:0735619670
