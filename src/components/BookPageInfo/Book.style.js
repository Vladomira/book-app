import { makeStyles } from "@material-ui/core";
import { colors } from "../CommonStyles/colors";

export const useStylesBook = makeStyles(() => ({
   bookNavBox: { display: "flex", marginBottom: "30px" },
   descBox: {
      display: "flex",
      marginBottom: "30px",
   },

   imgsBox: {
      position: "relative",
      display: "inline",
   },
   bookImg: {
      minWidth: "150px",
      minHeight: "230px",
      borderRadius: 4,
      boxShadow:
         "0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)",
   },

   blurImg: {
      position: "absolute",
      filter: "blur(10px)",
      left: "10px",
      bottom: "-10px",
      opacity: "50%",
      zIndex: "-1",
   },
   textBox: {
      marginLeft: "70px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
   },
   title: {
      color: colors.yellow,
      fontSize: "19px !important",
      fontWeight: "600 !important",
   },
   info: {
      color: "#FAE9FF", // #FAE9FF
      fontSize: "16px",
      lineHeight: 1.5,
      fontWeight: 500,
   },
   //
   downloadBox: {
      display: "flex",
      alignItems: "center",
      marginBottom: "20px",
      padding: "15px 0px",
      marginTop: "30px",
   },
   downloadLink: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      textDecoration: "none  !important",
      // width: "34px",
      // height: "34px",
      color: `${colors.gentleOrange} !important`,
      fontSize: "16px  !important",
      lineHeight: 1.5,
      fontWeight: 500,
      marginRight: "13px  !important",

      "&:hover": {
         color: `${colors.yellow} !important`,
      },
      "&:focus": {
         color: `${colors.yellow} !important`,
      },
   },
   converter: {
      textDecoration: "none  !important",
      fontSize: "16px  !important",
      lineHeight: 1.5,
      fontWeight: 500,
      color: `${colors.yellow} !important`,
      "&:hover": {
         color: `${colors.gentleOrange} !important`,
      },
      "&:focus": {
         color: `${colors.gentleOrange} !important`,
      },
   },
}));
export const useStylesBookList = makeStyles(() => ({
   list: {
      display: "flex",
      flexWrap: "wrap",
   },
}));
