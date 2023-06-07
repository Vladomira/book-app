import { useEffect } from "react";
import { useAppSelector } from "../redux/hooks";
import { AppDispatch, RootState } from "../redux/store";
import { useDispatch } from "react-redux";
import { booksOperations } from "../redux/user-books";
import { notesOperations } from "../redux/user-notes";
import { BooksCarousel } from "../components/MyPageInfo/Books/BooksCarousel";
import { PageNav } from "../components/PageNav";
import { MyNotesList } from "../components/MyNotes";
import { ReceivedNote } from "../types/note";

export const MyPage = () => {
   const userId = useAppSelector((state: RootState) => state.auth.user.id);
   const userBooks = useAppSelector((state: RootState) => state.books);
   const userNotes = useAppSelector(
      (state: RootState) => state.notes as ReceivedNote[]
   );
   const dispatch = useDispatch<AppDispatch>();

   useEffect(() => {
      if (userId) {
         dispatch(booksOperations.getBooks());
         dispatch(notesOperations.getNotes(userId));
      }
   }, [dispatch, userId]);

   return (
      <>
         <PageNav />
         <BooksCarousel userBooks={userBooks} />

         <div
            style={{
               marginTop: "100px",
               paddingBottom: "100px",
            }}
         >
            <MyNotesList notes={userNotes} />
         </div>
      </>
   );
};
