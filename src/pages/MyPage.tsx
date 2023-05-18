import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { AppDispatch, RootState } from "../redux/store";
import { useDispatch } from "react-redux";
import { booksOperations } from "../redux/user-books";

export const MyPage = () => {
   const userId = useAppSelector((state: RootState) => state.auth.user.id);
   const userBooks = useAppSelector((state: RootState) => state.books);
   const dispatch = useDispatch<AppDispatch>();

   useEffect(() => {
      dispatch(booksOperations.getBooks());
   }, [userId]);

   return (
      <div>
         <div>Bar</div>
         <div>
            <Link
               to={`/user/${userId}/my-books`}
               style={{
                  margin: "0 auto",
                  textDecoration: "none",
               }}
            >
               My books
            </Link>
            {userBooks.length > 0 && (
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
                  {userBooks.map((el) => (
                     <li
                        key={el.bookId}
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
                           to={`/books/${el.bookId}`}
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
                              src={el.image}
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
                                 {el.title}
                              </p>
                           </div>
                        </Link>
                     </li>
                  ))}
               </ul>
            )}
         </div>
         <div>
            <Link
               to={`/user/${userId}/my-notes`}
               style={{
                  margin: "0 auto",
                  textDecoration: "none",
               }}
            >
               My notes
            </Link>
            <ul>
               <li></li>
            </ul>
         </div>
      </div>
   );
};
