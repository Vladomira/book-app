import { FC } from "react";
import { Button } from "@mui/material";
import { useStylesButtons } from "../CommonStyles/Buttons.style";

interface AddNoteButtonProps {
   onClick: () => void;
   text: string;
}

const AddNoteButton: FC<AddNoteButtonProps> = ({ onClick, text }) => {
   const btnClass = useStylesButtons();
   return (
      <Button
         type="button"
         onClick={onClick}
         style={{ marginBottom: "30px", marginTop: "30px" }}
         className={btnClass.cherryVariant}
      >
         {text}
      </Button>
   );
};

export default AddNoteButton;
