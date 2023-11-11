import { FC, useEffect, useState } from "react";
import { parse } from "node-html-parser";
import { toast } from "react-toastify";
import { Box } from "@mui/material";
import { BooksType } from "../../types/book";
import { ModalWrapper } from "../Modal";
import { NoteForm } from "../NoteForm/NoteForm";
import { useAppSelector } from "../../redux/hooks";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { booksOperations } from "../../redux/user-books";
import { notesOperations } from "../../redux/user-notes";
import { ReceivedNote } from "../../types/note";
import { MyNotesList } from "../MyNotes";

import { useStylesBook } from "./Book.style";
import { TextComponent } from "../TextComponent";
import { BookMainInfo } from "./BookMainInfo";
import { getAuthor, getImage } from "../../helpers/getFromBook";
import AddNoteButton from "./AddNoteButton";

type BookInfoProps = { book: BooksType };

export const BookInfo: FC<BookInfoProps> = ({ book }) => {
   const [isOpen, setIsOpen] = useState(false);
   const [dbBookId, setDbBookId] = useState<number | null>(null);
   const books = useAppSelector((state: RootState) => state.books);
   const booksNotes = useAppSelector(
      (state: RootState) => state.notes as ReceivedNote[]
   );
   const userId = useAppSelector((state: RootState) => state.auth.user.id);
   const dispatch = useDispatch<AppDispatch>();

   const classes = useStylesBook();
   const { volumeInfo } = book;

   useEffect(() => {
      if (books.length > 1) {
         const matchingBook = books.find((el) => el.bookId === book.id);

         if (matchingBook) {
            setDbBookId(matchingBook.id);
            dispatch(notesOperations.getNotesByBookId(matchingBook.id));
         }
      }
   }, [books, book]);

   const addBook = () => {
      try {
         if (!userId) {
            toast.error("Please authorize");
         } else if (userId) {
            dispatch(
               booksOperations.addBook({
                  book: {
                     favorite: false,
                     finished: false,
                     inProgress: false,
                     author: getAuthor(book),
                     title: volumeInfo.title,
                     image: getImage(book),
                  },
                  bookId: book.id,
               })
            );
            toast.success("Book was added");
         }
      } catch (error) {
         toast.error("Something went wrong. Please try again");
      }
   };

   return (
      <Box style={{ paddingBottom: "50px" }}>
         {book?.id && (
            <>
               <BookMainInfo data={volumeInfo} />

               <TextComponent
                  className={classes.info}
                  text={
                     volumeInfo?.description
                        ? parse(volumeInfo.description)?.text || ""
                        : ""
                  }
               />
            </>
         )}
         {dbBookId ? (
            <AddNoteButton
               onClick={() => setIsOpen(!isOpen)}
               text=" Create note"
            />
         ) : (
            <AddNoteButton onClick={() => addBook()} text="Add to my" />
         )}

         {isOpen && dbBookId !== null && (
            <ModalWrapper setIsOpen={setIsOpen} isOpen={isOpen}>
               <NoteForm id={dbBookId} setIsOpen={setIsOpen} />
            </ModalWrapper>
         )}

         {booksNotes[0]?.id && <MyNotesList notes={booksNotes} />}
      </Box>
   );
};
