import { FC } from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Button } from "@material-ui/core";
import { NoteProps, ReceivedNote } from "../../types/note";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { notesOperations } from "../../redux/user-notes";
import { useStylesButtons } from "../CommonStyles/Buttons.style";
import { useStylesNoteForm } from "./NoteForm.style";

type FormProp = {
   id: number | null;
   setIsOpen: (prop: boolean) => void;
   currentNote?: ReceivedNote;
};
export const NoteForm: FC<FormProp> = ({ id, setIsOpen, currentNote }) => {
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm<NoteProps>();
   const dispatch = useDispatch<AppDispatch>();
   const btnClass = useStylesButtons();
   const classes = useStylesNoteForm();

   const onSubmit = (data: NoteProps) => {
      const { text, chapter } = data;
      const noteInfo = { text, chapter, id };
      if (currentNote) {
         dispatch(
            notesOperations.updateNoteById({
               id: currentNote.id,
               text,
               chapter,
            })
         );
      } else {
         dispatch(notesOperations.createNote(noteInfo));
      }

      reset();
      setIsOpen(false);
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
         <TextField
            label="Chapter"
            {...register("chapter")}
            fullWidth
            margin="normal"
            defaultValue={currentNote?.chapter || ""}
         />
         <TextField
            label="Note text"
            {...register("text", { required: true })}
            error={errors.text ? true : false}
            helperText={errors.text ? "Note text is required" : ""}
            fullWidth
            margin="normal"
            multiline
            rows={4}
            defaultValue={currentNote?.text || ""}
         />
         <Button
            type="submit"
            variant="contained"
            className={btnClass.orangeVarint}
         >
            Submit
         </Button>
      </form>
   );
};
