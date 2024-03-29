import { makeStyles } from "@material-ui/core";
import { colors } from "./colors";

export const useStylesButtons = makeStyles(() => ({
   greenVariant: {
      fontSize: "14px !important",
      padding: "5px 3px !important",
      color: "#FAEBE2  !important",
      backgroundColor: "#004C4C !important",
      border: "1px solid #004C4C !important",
      borderRadius: 10,
      cursor: "pointer",

      "&:hover": {
         color: "#008080 !important",
         backgroundColor: "#FAEBE2 !important",
         border: "1px solid #004C4C !important",
      },
   },
   cherryVariant: {
      fontSize: "14px !important",
      padding: "5px 3px !important",
      background: "#800000 !important",
      color: "#FAEBE2 !important",
      borderRadius: 10,
      cursor: "pointer",

      "&:hover": {
         color: "#800000 !important",
         backgroundColor: "#FAEBE2 !important",
         border: "1px solid #800000 !important",
      },
   },
   orangeVarint: {
      marginTop: "20px",
      backgroundColor: "#FF802D !important",
      color: "#FFFFFF",

      "&:hover": {
         backgroundColor: "#FF9900 !important",
      },
   },
   btnsBox: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
   },
   deleteBtn: {
      minWidth: "24px !important",
      color: "#008080  !important",
      padding: "3px 3px !important",
      transition: "transform 250ms cubic-bezier(0.4, 0, 0.2, 1) !important",
      transform: "scale(1)",

      "&:hover": {
         transform: "scale(1.3)",
      },
   },
   statusBtn: {
      position: "relative",
      minWidth: "24px !important",
      padding: "3px 3px !important",
      "&:not(:last-child)": { marginRight: "10px" },
   },
   statusBtnHint: {
      position: "absolute",
      bottom: 30,
      left: -35,
      padding: "5px 8px",
      whiteSpace: "nowrap",
      color: "rgb(200, 60, 40)",
      fontWeight: 600,
      fontSize: "14px",
      textTransform: "lowercase",
   },
   statusIcon: {
      width: "24px",
   },
   updateBtn: {
      minWidth: "24px",
      padding: "3px 3px !important",
      color: "#FF7F50  !important",
      transform: "scale(1)",
      transition: "transform 250ms cubic-bezier(0.4, 0, 0.2, 1) !important",

      "&:hover": {
         transform: "scale(1.4)",
      },
   },
   closeBtn: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: "auto !important",
      minWidth: "24px",
      height: "24px",

      padding: "13px 1px",
      background: "transparent",
      borderRadius: "4px",
      borderColor: colors.yellow,
      color: colors.yellow,
      border: "1px solid",

      cursor: "pointer",
      transition: "color 250ms cubic-bezier(0.4, 0, 0.2, 1)",

      "&:hover": {
         borderColor: colors.brightOrange,
         color: colors.brightOrange,

         border: "1px solid",
      },
   },
}));
