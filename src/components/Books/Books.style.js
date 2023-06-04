import { makeStyles } from "@material-ui/core";

export const useStylesBooks = makeStyles(() => ({
   list: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      padding: "0px",
      marginLeft: "-30px",
      marginTop: "-30px",
      marginBottom: "50px",
   },
   listItem: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between !important",

      maxWidth: "198px",
      width: "100%",
      padding: "0px 0px 15px !important",
      marginLeft: "30px",
      marginTop: "30px",
      flexBasis: "calc(100% / 2 - 30px)",
      borderRadius: 10,
      overflow: "hidden",
      backgroundColor: "#FAEBE2",
      boxShadow: "5px 3px 5px 1px rgba(0,0,0,0.34)",
   },

   bookImg: {
      width: "198px",
      height: "260px",
      display: "block",
      borderRadiusTopLeft: 10,
      borderRadiusTopRight: 10,
   },
   link: {
      margin: "0 auto",
      textDecoration: "none",
   },
}));
