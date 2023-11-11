import { makeStyles } from "@material-ui/core";

export const useStylesNavBar = makeStyles(() => ({
   header: {
      backgroundColor: "#004C4C !important",
   },
   container: {
      padding: "100px 30px 30px",
   },

   navBar: {
      paddingTop: "10px",
      paddingBottom: "8px",
      display: "flex",
      justifyContent: "space-between",
   },
   navList: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
   },
   navLink: {
      textDecoration: "none",
      color: "white",
      fontSize: "20px",
      paddingBottom: "5px",

      "&:hover": {
         color: "#FFA500 !important",
         borderBottom: "1px solid #FFA500",
      },
      "&:not(:last-child)": {
         marginRight: "50px",
      },
   },
   greetingBox: {
      display: "flex",
      alignItems: "center",
      minWidth: "140px",
   },
   greetingText: {
      color: "white",
   },
   logoutButton: {
      background: "transparent",
      border: "none",
      cursor: "pointer",
      color: "#FF7F50",
      padding: "0px",
      marginLeft: "5px",
   },
   logoutIcon: {
      width: "28px",
      height: "28px",
   },
}));
