import { makeStyles } from "@material-ui/core";

export const useStylesNavBar = makeStyles(() => ({
   container: {
      padding: "100px 30px 30px",
      // backgroundColor: "#003366",
   },
   header: {
      backgroundColor: "#333333 !important",
      // #003366 #333333 #36454F
      // modern:#008080
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
         // FF7F50
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
      // red: #FF0000  deep #800000
      // orange:' #FFA500 FF7F50
      // greay #333333
      padding: "0px",
      marginLeft: "5px",
   },
   logoutIcon: {
      width: "28px",
      height: "28px",
   },
}));
