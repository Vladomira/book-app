import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStylesButtons } from "../components/CommonStyles/Buttons.style";

export const NotfoundPage = () => {
   const navigate = useNavigate();
   const btnClasses = useStylesButtons();
   return (
      <h1>
         This page doesn't exist. Go{" "}
         <Button
            type="button"
            className={btnClasses.greenVariant}
            onClick={() => navigate("/")}
         >
            Home
         </Button>
      </h1>
   );
};
