import { FC, useState } from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { ReceivedNote } from "../../types/note";
import { notesOperations } from "../../redux/user-notes";
import { ModalWrapper } from "../Modal";
import { NoteForm } from "../NoteForm/NoteForm";

type noteItemProps = {
   note: ReceivedNote;
   bookId: number | null;
};
export const NoteItem: FC<noteItemProps> = ({ note, bookId }) => {
   const [isOpen, setIsOpen] = useState(false);
   const dispatch = useDispatch<AppDispatch>();

   return (
      <li
         style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid teal",
            padding: "10px",

            maxWidth: "300px",
            width: "100%",
            marginLeft: "30px",
            marginTop: "30px",
            flexBasis: "calc(100% / 2 - 30px)",
         }}
      >
         <div onClick={() => {}}>
            <p>{note.chapter}</p>
            <p>{note.text}</p>
         </div>

         <div style={{ display: "flex" }}>
            <Button
               type="button"
               variant="outlined"
               color="primary"
               size="small"
               onClick={() => setIsOpen(true)}
               sx={{ marginRight: "auto" }}
            >
               Update
            </Button>
            <Button
               type="button"
               variant="outlined"
               color="primary"
               size="small"
               onClick={() => dispatch(notesOperations.deleteNoteById(note.id))}
               sx={{ marginRight: "auto" }}
            >
               Delete
            </Button>
         </div>

         {isOpen && (
            <ModalWrapper setIsOpen={setIsOpen} isOpen={isOpen}>
               <NoteForm id={bookId} setIsOpen={setIsOpen} currentNote={note} />
            </ModalWrapper>
         )}
      </li>
   );
};
