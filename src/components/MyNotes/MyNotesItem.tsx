import { FC, useState } from "react";
import { ReceivedNote } from "../../types/note";
import { useStylesNotes } from "./MyNotes.style";
import { Box } from "@mui/material";
import { ModalWrapper } from "../Modal";
import { NoteForm } from "../NoteForm/NoteForm";
import { MyNoteContent } from "./MyNoteContent";
import { MyNoteDate } from "./MyNoteDate";
import { MyNoteActionBtns } from "./MyNoteActionBtns";

export const MyNotesItem: FC<ReceivedNote> = (note) => {
   const [isOpen, setIsOpen] = useState(false);
   const noteClasses = useStylesNotes();

   return (
      <>
         <Box className={noteClasses.notesSlide}>
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
