import { FC, useEffect, useState } from "react";
import { SinglePageProps } from "../../types";
import { BooksType, initialBook } from "../../types/book";
import { fetchById } from "../../api/books";
import { ModalWrapper } from "../Modal";
import { NoteForm } from "../NoteForm";
import { useAppSelector } from "../../redux/hooks";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { booksOperations } from "../../redux/user-books";
import { notesOperations } from "../../redux/user-notes";
import { NoteItem } from "../notes/NoteItem";
import { ReceivedNote } from "../../types/note";

export const Book: FC<SinglePageProps> = ({ id }) => {
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

   useEffect(() => {
      fetchById(id).then((data) => {
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
      });
   }, []);
   useEffect(() => {
      if (userId) {
         dispatch(booksOperations.getBooks());
      }
      const matchingBook = books.find((el) => el.bookId === id);
      if (matchingBook) {
         setDbBookId(matchingBook.id);
         dispatch(notesOperations.getNotesByBookId(matchingBook.id));
      }
   }, [data.id, dispatch, userId]);

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
               <p>{data.volumeInfo.description}</p>
               {bookFormat.pdf && <a href={bookFormat.pdf}>Download</a>}
               {bookFormat.epub && <a href={bookFormat.epub}>Download</a>}
               <a href="https://www.acsmconverter.com/">
                  If you need to convert downloaded boook
               </a>
            </>
         )}
         {dbBookId && (
            <button
               type="button"
               onClick={() => setIsOpen(!isOpen)}
               style={{ marginBottom: "30px" }}
            >
               Create note
            </button>
         )}

         {isOpen && (
            <ModalWrapper setIsOpen={setIsOpen}>
               <NoteForm id={dbBookId} setIsOpen={setIsOpen} />
            </ModalWrapper>
         )}
         {booksNotes[0]?.id === null ? (
            <p>No notes yet</p>
         ) : (
            <ul
               style={{
                  display: "flex",
                  flexWrap: "nowrap",
                  marginLeft: "-30px",
                  marginTop: "-30px",
               }}
            >
               {booksNotes.map((el) => {
                  return <NoteItem key={el.id} note={el} bookId={dbBookId} />;
               })}
            </ul>
         )}
      </div>
   );
};

// https://www.googleapis.com/books/v1/volumes?q=isbn:<your_isbn_here>
// https://www.googleapis.com/books/v1/volumes?q=isbn:0735619670
// https://openlibrary.org/isbn/9780140328721.json
// https://openlibrary.org/search.json?isbn=0521898587
// https://openlibrary.org/isbn/0521898587.json
// http://openlibrary.org/api/books?bibkeys=ISBN:0201558025,LCCN:93005405
// fetch("https://openlibrary.org/isbn/0521898587.json?jscmd=viewapi")
//    // .then((res) => res.json())
//    .then(({ body }) => {
//       // const formats = data.docs[0]?.formats;
//
//    });
