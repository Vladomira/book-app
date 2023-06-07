import { makeStyles } from "@material-ui/core";
import { colors } from "../CommonStyles/colors";

export const useStylesModal = makeStyles(() => ({
   overlay: {
      position: "fixed",
      top: "0",
      left: "0",
      height: "100vh",
      width: " 100vw",
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      scale: 1,
      opacity: 1,
      transition:
         "opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),  transform 250ms cubic-bezier(0.4, 0, 0.2, 1)",
   },
   modal: {
      maxWidth: "610px",
      padding: "20px 30px",
      width: "100vw",
      position: "absolute",
      top: " 50%",
      left: "50%",
      backgroundColor: colors.gentleOrange,

      transform: "translate(-50%, -50%) rotate(1turn) scaleX(1)",
      borderRadius: "4px",
      opacity: "1",
      transition:
         "opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1) ",
   },
}));
