import { makeStyles } from "@material-ui/core";

export const useStylesBooks = makeStyles(() => ({
   list: {
      display: "flex",
      flexWrap: "wrap",
      //   justifyContent: "center",
      padding: "0px",
      marginLeft: "-30px",
      marginTop: "-30px",
      marginBottom: "50px",
   },
   listItem: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between !important",

      maxWidth: "190px",
      width: "100%",
      padding: "0px 0px 15px !important",
      marginLeft: "30px",
      marginTop: "30px",
      flexBasis: "calc(100% / 2 - 30px)",
      borderRadius: 10,
      overflow: "hidden",
      boxShadow: "5px 3px 5px 1px rgba(0,0,0,0.34)",
   },
   bookImg: {
      width: "190px",
      height: "260px",
      display: "block",
      borderRadiusTopLeft: 10,
      borderRadiusTopRight: 10,
   },
   link: {
      margin: "0 auto",
      textDecoration: "none",
   },
   bookInfoBox: {
      padding: "8px 8px 0px",
      color: "#800000",
   },
   bookInfoTitle: {
      fontWeight: "600 !important",
      fontSize: "13px",
   },
   bookInfoCategories: {
      fontSize: "14px !important",
      marginTop: "10px !important",
   },
   addToMy: {
      padding: "10px 5px 10px",
      color: "#FFA500 !important",
      width: "100px",
      marginTop: "10px !important",
      borderRadius: 10,
      cursor: "pointer",
      borderColor: "#FFA500 !important",

      "&:hover": {
         background: "#800000 !important",
         color: "white !important",
         borderBottom: "1px solid #FFA500",
      },
   },
}));
