import { FC } from "react";
import { Box } from "@mui/material";
import { useStylesButtons } from "../CommonStyles/Buttons.style";
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { notesOperations } from "../../redux/user-notes";

type ActionBtnsProps = {
   setIsOpen: (prop: boolean) => void;
   noteId: number;
};

export const MyNoteActionBtns: FC<ActionBtnsProps> = ({
   noteId,
   setIsOpen,
}) => {
   const btnClass = useStylesButtons();

   const dispatch = useDispatch<AppDispatch>();
   return (
      <Box className={btnClass.btnsBox}>
         <Button
            className={btnClass.deleteBtn}
            type="button"
            onClick={() => {
               dispatch(notesOperations.deleteNoteById(noteId));
               toast.success("Note was deleted");
            }}
         >
            <DeleteIcon />
         </Button>
         <Button
            className={btnClass.updateBtn}
            type="button"
            onClick={() => setIsOpen(true)}
         >
            <EditIcon />
         </Button>
      </Box>
   );
};
