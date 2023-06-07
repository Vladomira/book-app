import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useStylesButtons } from "./CommonStyles/Buttons.style";
import { useStylesBook } from "./BookInfo/Book.style";

export const PageNav: FC = () => {
   const navigate = useNavigate();
   const btnClasses = useStylesButtons();
   const classes = useStylesBook();

   const goBack = () => navigate(-1);
   return (
      <div className={classes.bookNavBox}>
         <Button
            className={btnClasses.cherryVariant}
            type="button"
            onClick={() => goBack()}
         >
            Back
         </Button>
         <div style={{ marginLeft: "20px" }}>
            <Button
               type="button"
               className={btnClasses.greenVariant}
               onClick={() => navigate("/")}
            >
               Home
            </Button>
         </div>
      </div>
   );
};
