import { FC } from "react";
import { Box } from "@mui/material";
import { useStylesNotes } from "./MyNotes.style";
import { ContentProp } from "./MyNoteContent";
import { getDate } from "../../helpers/date";

export const MyNoteDate: FC<ContentProp> = ({ note }) => {
   const noteClasses = useStylesNotes();
   return (
      <Box className={noteClasses.dateBox}>
         <Box className={noteClasses.dateTextBox}>
            Created:
            <p className={noteClasses.date}>{getDate(note.createdAt)}</p>
         </Box>
         <Box className={noteClasses.dateTextBox}>
            Updated:
            <p
               className={noteClasses.date}
               style={{
                  marginLeft: "34px",
               }}
            >
               {getDate(note.updatedAt)}
            </p>
         </Box>
      </Box>
   );
};
