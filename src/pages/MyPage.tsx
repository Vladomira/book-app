import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useAppSelector } from "../redux/hooks";
import { AppDispatch, RootState } from "../redux/store";
import { useDispatch } from "react-redux";
import { booksOperations } from "../redux/user-books";
import { MyBookStatus } from "../components/MyBookStatus";
import { notesOperations } from "../redux/user-notes";

export const MyPage = () => {
   const userId = useAppSelector((state: RootState) => state.auth.user.id);
   const userBooks = useAppSelector((state: RootState) => state.books);
   const userNotes = useAppSelector((state: RootState) => state.notes);
   const dispatch = useDispatch<AppDispatch>();

   useEffect(() => {
      if (userId) {
         dispatch(booksOperations.getBooks());
         dispatch(notesOperations.getNotes(userId));
      }
   }, [dispatch, userId]);

   const deleteUserBook = (id: number) => {
      dispatch(booksOperations.deleteBook(id));
   };
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
                        key={el.id}
                        style={{
                           display: "flex",
                           flexDirection: "column",
                           justifyContent: "space-between",

                           maxWidth: "180px",
                           width: "100%",
                           marginLeft: "30px",
                           marginTop: "30px",
                           flexBasis: "calc(100% / 2 - 30px)",
                           padding: "0px 0px 20px",

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
                        <MyBookStatus
                           bookId={el.id}
                           credentials={{
                              finished: el.finished,
                              favorite: el.favorite,
                              inProgress: el.inProgress,
                           }}
                        />
                        <button
                           style={{
                              padding: "10px 5px",
                              borderRadius: 5,
                              width: 100,
                              display: "block",
                              margin: "0 auto",
                           }}
                           type="button"
                           onClick={() => deleteUserBook(el.id)}
                        >
                           Delete
                        </button>
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
            {userNotes.length > 0 && (
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
                  {userNotes.map((el) => (
                     <li
                        key={el.id}
                        style={{
                           display: "flex",
                           flexDirection: "column",
                           justifyContent: "space-between",

                           maxWidth: "180px",
                           width: "100%",
                           marginLeft: "30px",
                           marginTop: "30px",
                           flexBasis: "calc(100% / 2 - 30px)",
                           padding: "0px 0px 20px",

                           borderRadius: 15,
                           boxShadow: "5px 3px 5px 1px rgba(0,0,0,0.34)",
                        }}
                     >
                        <div>
                           {" "}
                           <p>{el.chapter}</p>
                           <p>: {el.text}</p>
                        </div>

                        <button
                           style={{
                              padding: "10px 5px",
                              borderRadius: 5,
                              width: 100,
                              display: "block",
                              margin: "0 auto",
                           }}
                           type="button"
                           // onClick={() => deleteUserBook(el.id)}
                        >
                           Delete
                        </button>
                     </li>
                  ))}
               </ul>
            )}
         </div>
      </div>
   );
};
