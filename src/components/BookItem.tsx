import { Link } from "react-router-dom";
import { BooksType } from "../types/book";
import { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux";
import { booksOperations } from "../redux/user-books";

type BookItemProps = {
   el: BooksType;
};
export const BookItem = ({ el }: BookItemProps) => {
   const date = new Date(el.volumeInfo.publishedDate);
   const dispatch = useDispatch<AppDispatch>();

   const getImage =
      el.volumeInfo.imageLinks?.smallThumbnail ||
      el.volumeInfo.imageLinks?.thumbnail ||
      "";

   const addBook = () => {
      dispatch(
         booksOperations.addBook({
            book: {
               favorite: true,
               finished: false,
               inProgress: true,
               author:
                  el.volumeInfo.authors?.length > 0
                     ? el.volumeInfo.authors[0]
                     : "",
               title: el.volumeInfo.title,
               image: getImage,
            },
            bookId: el.id,
         })
      );
   };
   return (
      <li
         style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",

            maxWidth: "180px",
            width: "100%",
            marginLeft: "30px",
            marginTop: "30px",
            flexBasis: "calc(100% / 2 - 30px)",

            borderRadius: 15,
            boxShadow: "5px 3px 5px 1px rgba(0,0,0,0.34)",
         }}
      >
         <Link
            to={`/books/${el.id}`}
            style={{
               margin: "0 auto",
               textDecoration: "none",
            }}
         >
            <img
               style={{
                  width: "180px",
                  height: "260px",
                  display: "block",
                  margin: "0 auto",
                  borderRadius: 15,
               }}
               src={getImage}
               alt=""
            />
            <div
               style={{
                  padding: "0 5px",
               }}
            >
               <p
                  style={{
                     fontWeight: 600,
                     fontSize: 15,
                  }}
               >
                  {el.volumeInfo.title}
               </p>
               {/* <p
                  style={{
                     fontWeight: 400,
                     fontSize: 12,
                  }}
               >
                  Categorie: {el.volumeInfo.categories?.[0]}
               </p>
               <p
                  style={{
                     color: "red",
                  }}
               >
                  {el.volumeInfo.authors}
               </p> */}

               {/* <div
                  style={{
                     display: "flex",
                     justifyContent: "space-between",
                     marginTop: "10px",
                     outline: "1px solid teal",
                  }}
               >
                  <p>{el.volumeInfo.averageRating}</p>
               </div> */}
            </div>
         </Link>
         <button
            type="button"
            onClick={() => addBook()}
            style={{
               padding: "10px 5px 10px",
               background: "cadetblue",
               color: "white",
               width: "100px",
               margin: "13px auto 25px",
               display: "block",
               borderRadius: 10,
               cursor: "pointer",
               outline: "1px solid black",
               border: "transparent",
            }}
         >
            Add to my
         </button>
      </li>
   );
};
// {!Number.isNaN(date.getFullYear()) && (
//    <p>{date.getFullYear()}</p>
// )}
