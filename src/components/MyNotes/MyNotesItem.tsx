import { FC, useState } from "react";
import { ReceivedNote } from "../../types/note";
import { useStylesNotes } from "./MyNotes.style";
import { Box } from "@mui/material";
import { ModalWrapper } from "../Modal";
import { NoteForm } from "../NoteForm/NoteForm";
import { MyNoteContent } from "./MyNoteContent";
import { MyNoteDate } from "./MyNoteDate";
import { MyNoteActionBtns } from "./MyNoteActionBtns";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";

interface IMyNotesItem {
   note: ReceivedNote;
}

export const MyNotesItem: FC<IMyNotesItem> = ({ note }) => {
   const [isOpen, setIsOpen] = useState(false);
   const noteClasses = useStylesNotes();
   const userBooks = useAppSelector((state: RootState) => state.books);
   const bookTitle = userBooks.find((book) => book.id === Number(note.bookId));

   return (
      <>
         <Box className={noteClasses.notesSlide}>
            <h2 className={noteClasses.title}>{bookTitle?.title}</h2>
            <MyNoteContent note={note} />
            <MyNoteDate note={note} />
            <MyNoteActionBtns noteId={note.id} setIsOpen={setIsOpen} />
         </Box>
         {isOpen && (
            <ModalWrapper setIsOpen={setIsOpen} isOpen={isOpen}>
               <NoteForm
                  id={note.id}
                  setIsOpen={setIsOpen}
                  currentNote={note}
               />
            </ModalWrapper>
         )}
      </>
   );
};
