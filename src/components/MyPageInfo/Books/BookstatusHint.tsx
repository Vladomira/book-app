import { SyntheticEvent, useState } from "react";
import { useStylesButtons } from "../../CommonStyles/Buttons.style";
import Button from "@mui/material/Button";
import { StatusProps } from "./BooksStatusList";

interface HintProps {
   onHandleChange: (event: SyntheticEvent) => void;
   el: StatusProps;
   status: boolean;
}
export const BookStatusHint = ({ onHandleChange, el, status }: HintProps) => {
   const btnsClasses = useStylesButtons();
   const [isHovered, setIsHovered] = useState(false);

   const separateWords = (str: string) =>
      str.replace(/([a-z])([A-Z])/g, "$1 $2");

   const handleMouseEnter = () => setIsHovered(true);

   const handleMouseLeave = () => setIsHovered(false);

   return (
      <Button
         className={btnsClasses.statusBtn}
         type="button"
         onClick={(id) => onHandleChange(id)}
         id={el.idName}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
      >
         {el.iconComponent(status ? "rgb(200, 60, 40)" : "#FF9900")}
         {isHovered && (
            <p className={btnsClasses.statusBtnHint}>
               {separateWords(el.idName)}
            </p>
         )}
      </Button>
   );
};
