import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { SinglePageProps } from "../../types";
import { BooksType, initialBook } from "../../types/book";
import { fetchById } from "../../api/books";
import { ModalWrapper } from "../Modal";
import { NoteForm } from "../NoteForm";
import { useAppSelector } from "../../redux/hooks";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { booksOperations } from "../../redux/user-books";

export const Book: FC<SinglePageProps> = ({ id }) => {
   // & { dbId?: number }
   const [data, setData] = useState<BooksType>(initialBook);
   const [isOpen, setIsOpen] = useState(false);
   const [dbBookId, setDbBookId] = useState<number | null>(null);
   const books = useAppSelector((state: RootState) => state.books);
   const userId = useAppSelector((state: RootState) => state.auth.user.id);
   const dispatch = useDispatch<AppDispatch>();

   useEffect(() => {
      fetchById(id).then((data) => {
         setData(data);
      });
   }, []);

   useEffect(() => {
      if (userId) {
         dispatch(booksOperations.getBooks());
      }
      const matchingBook = books.find((el) => el.bookId === data.id);
      matchingBook && setDbBookId(matchingBook.id);
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
            </>
         )}
         {dbBookId && (
            <button type="button" onClick={() => setIsOpen(!isOpen)}>
               Create note
            </button>
         )}

         {isOpen && (
            <ModalWrapper setIsOpen={setIsOpen}>
               <NoteForm id={dbBookId} />
            </ModalWrapper>
         )}
      </div>
   );
};

// https://www.googleapis.com/books/v1/volumes?q=isbn:<your_isbn_here>
// https://www.googleapis.com/books/v1/volumes?q=isbn:0735619670
