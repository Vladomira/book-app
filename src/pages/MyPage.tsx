import { useEffect } from "react";
import { useAppSelector } from "../redux/hooks";
import { AppDispatch, RootState } from "../redux/store";
import { useDispatch } from "react-redux";
import { booksOperations } from "../redux/user-books";
import { notesOperations } from "../redux/user-notes";
import { BooksCarousel } from "../components/MyPageInfo/BooksCarousel";
import { PageNav } from "../components/PageNav";
import { MyNotesList } from "../components/MyNotes";
import { ReceivedNote } from "../types/note";
import { useStylesBook } from "../components/BookInfo/Book.style";

export const MyPage = () => {
   const userId = useAppSelector((state: RootState) => state.auth.user.id);
   const userBooks = useAppSelector((state: RootState) => state.books);
   const userNotes = useAppSelector(
      (state: RootState) => state.notes as ReceivedNote[]
   );
   const dispatch = useDispatch<AppDispatch>();
   const classes = useStylesBook();

   useEffect(() => {
      if (userId) {
         dispatch(booksOperations.getBooks());
         dispatch(notesOperations.getNotes(userId));
      }
   }, [dispatch, userId]);

   return (
      <>
         <PageNav />
         {userBooks[0]?.bookId ? (
            <BooksCarousel userBooks={userBooks} />
         ) : (
            <p className={classes.title}>No books yet. You can add book</p>
         )}
         {userNotes[0]?.id ? (
            <div
               style={{
                  marginTop: "100px",
                  paddingBottom: "100px",
               }}
            >
               <MyNotesList notes={userNotes} />
            </div>
         ) : (
            <p className={classes.title} style={{ marginTop: "30px" }}>
               No notes yet
            </p>
         )}
      </>
   );
};
