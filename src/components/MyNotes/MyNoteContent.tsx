import { FC } from "react";
import { Box } from "@mui/material";
import { ReceivedNote } from "../../types/note";
import { RootState } from "../../redux/store";
import { useAppSelector } from "../../redux/hooks";
import { useStylesNotes } from "./MyNotes.style";

export type ContentProp = {
   note: ReceivedNote;
};

export const MyNoteContent: FC<ContentProp> = ({ note }) => {
   const books = useAppSelector((state: RootState) => state.books);
   const bookTitle = books.find((el) => el.id === note.bookId);
   const noteClasses = useStylesNotes();
   return (
      <Box className={noteClasses.textBox}>
         {bookTitle && <p className={noteClasses.title}>{bookTitle.title}</p>}
         <p className={noteClasses.chapter}>Chapter: {note.chapter}</p>
         <p style={{ fontSize: "15px" }}> {note.text}</p>
      </Box>
   );
};
