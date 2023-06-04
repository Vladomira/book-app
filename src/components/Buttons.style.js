import { makeStyles } from "@material-ui/core";

export const useStylesButtons = makeStyles(() => ({
   orangeVariant: {
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
}));
