import { FC, useEffect, useState } from "react";
import { parse } from "node-html-parser";
import { SinglePageProps } from "../../types";
import { toast } from "react-toastify";
import { Notification } from "../Notification";
import { BooksType, initialBook } from "../../types/book";
import { fetchById } from "../../api/books";
import { ModalWrapper } from "../Modal";
import { NoteForm } from "../NoteForm/NoteForm";
import { useAppSelector } from "../../redux/hooks";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { booksOperations } from "../../redux/user-books";
import { notesOperations } from "../../redux/user-notes";
import { ReceivedNote } from "../../types/note";
import { MyNotesList } from "../MyNotes";
import { Box, Button } from "@mui/material";
import { useStylesBook } from "./Book.style";
import { TextComponent } from "../TextComponent";
import { BookMainInfo } from "./BookMainInfo";
import { DownLoadBox } from "./DownLoadBox";
import { useStylesButtons } from "../CommonStyles/Buttons.style";
import { getAuthor, getImage } from "../../helpers/getFromBook";

export const BookInfo: FC<SinglePageProps> = ({ id }) => {
   const [data, setData] = useState<BooksType>(initialBook);
   const [isOpen, setIsOpen] = useState(false);
   const [dbBookId, setDbBookId] = useState<number | null>(null);
   const books = useAppSelector((state: RootState) => state.books);
   const booksNotes = useAppSelector(
      (state: RootState) => state.notes as ReceivedNote[]
   );
   const [bookFormat, setBookFormat] = useState({ pdf: "", epub: "" });
   const userId = useAppSelector((state: RootState) => state.auth.user.id);
   const dispatch = useDispatch<AppDispatch>();

   const classes = useStylesBook();
   const btnClass = useStylesButtons();

   useEffect(() => {
      fetchById(id)
         .then((data) => {
            const accessInfo = data.accessInfo;

            if (accessInfo?.epub.isAvailable) {
               const epubLink = accessInfo?.epub?.acsTokenLink;
               setBookFormat((prev) => {
                  return { ...prev, epub: epubLink };
               });
            }

            if (accessInfo?.pdf && accessInfo?.pdf.isAvailable) {
               const pdfLink = accessInfo?.pdf?.acsTokenLink;
               setBookFormat((prev) => {
                  return { ...prev, pdf: pdfLink };
               });
            }
            setData(data);
         })
         .catch((error) => {
            return new Error(error);
         });
   }, []);

   useEffect(() => {
      const matchingBook = books.find((el) => el.bookId === id);

      if (matchingBook) {
         setDbBookId(matchingBook.id);
         dispatch(notesOperations.getNotesByBookId(matchingBook.id));
      }
   }, [userId]);
   const { volumeInfo } = data;

   const addBook = () => {
      if (!userId) {
         toast.error("Please authorize");
      }
      if (userId) {
         dispatch(
            booksOperations.addBook({
               book: {
                  favorite: false,
                  finished: false,
                  inProgress: false,
                  author: getAuthor(data),
                  title: volumeInfo.title,
                  image: getImage(data),
               },
               bookId: id,
            })
         );
         toast.success("Book was added");
      }
   };

   return (
      <Box style={{ paddingBottom: "50px" }}>
         {data?.id && (
            <>
               <BookMainInfo data={volumeInfo} />

               {(bookFormat.pdf || bookFormat.epub) && (
                  <DownLoadBox pdf={bookFormat.pdf} epub={bookFormat.epub} />
               )}

               <TextComponent
                  className={classes.info}
                  text={
                     volumeInfo.description
                        ? parse(volumeInfo.description)?.text
                        : ""
                  }
               />
            </>
         )}
         {dbBookId ? (
            <Button
               type="button"
               onClick={() => setIsOpen(!isOpen)}
               style={{ marginBottom: "30px", marginTop: "30px" }}
               className={btnClass.cherryVariant}
            >
               Create note
            </Button>
         ) : (
            <Button
               type="button"
               onClick={() => addBook()}
               style={{ marginBottom: "30px", marginTop: "30px" }}
               className={btnClass.cherryVariant}
            >
               Add to my
            </Button>
         )}
         {isOpen && dbBookId !== null && (
            <ModalWrapper setIsOpen={setIsOpen} isOpen={isOpen}>
               <NoteForm id={dbBookId} setIsOpen={setIsOpen} />
            </ModalWrapper>
         )}

         {booksNotes[0]?.id && <MyNotesList notes={booksNotes} />}
         <Notification />
      </Box>
   );
};
