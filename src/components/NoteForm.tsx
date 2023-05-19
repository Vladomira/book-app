import { FC } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { NoteFormProps, NoteProps } from "../types/note";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { notesOperations } from "../redux/user-notes";
import { useForm } from "react-hook-form";

export const NoteForm: FC<NoteFormProps> = ({ id }) => {
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm<NoteProps>();
   const dispatch = useDispatch<AppDispatch>();

   const onSubmit = (data: NoteProps) => {
      const noteInfo = {
         text: data.text,
         chapter: data.chapter,
         id: id,
      };
      dispatch(notesOperations.createNote(noteInfo));
      reset();
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <TextField
            label="Chapter"
            {...register("chapter")}
            fullWidth
            margin="normal"
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
         />
         <Button type="submit" variant="contained" color="primary">
            Submit
         </Button>
      </form>
   );
};
