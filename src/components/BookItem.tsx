import { Link } from "react-router-dom";
import { BooksType } from "../types/book";

type BookItemProps = {
   el: BooksType;
};
export const BookItem = ({ el }: BookItemProps) => {
   const date = new Date(el.volumeInfo.publishedDate);

   return (
      <li
         style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "120px",
            outline: "1px solid purple",
            padding: "5px",
            margin: "10px",
         }}
      >
         <Link to={`/books/${el.id}`}>
            <img
               style={{
                  width: "110px",
               }}
               src={
                  el.volumeInfo.imageLinks?.smallThumbnail ||
                  el.volumeInfo.imageLinks?.thumbnail ||
                  ""
               }
               alt=""
            />
            <p>{el.volumeInfo.title}</p>
            <p>{el.volumeInfo.authors}</p>
            <p>{el.volumeInfo.categories?.[0]}</p>
            <div
               style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                  outline: "1px solid teal",
               }}
            >
               {!Number.isNaN(date.getFullYear()) ? (
                  <p>{date.getFullYear()}</p>
               ) : (
                  <p>unknown year</p>
               )}

               <p>{el.volumeInfo.averageRating}</p>
            </div>
         </Link>
      </li>
   );
};
