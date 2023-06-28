import { makeStyles } from "@material-ui/core";

export const useStylesBookItem = makeStyles(() => ({
   bookInfoBox: {
      padding: "8px 10px 0px",
      minHeight: "85px",
   },
   bookInfoTitle: {
      fontWeight: "600 !important",
      fontSize: "13px",
      color: "#80010B",
      minHeight: "48px",
   },
   bookInfoCategories: {
      minHeight: "39px ",
      fontWeight: "600 !important",
      fontSize: "13px !important",
      marginTop: "10px !important",
      color: "#FF802D",
   },
   bookButton: {
      fontSize: "12px !important",
      padding: "10px 5px 10px",
      color: "#800000 !important",
      width: "110px",
      marginTop: "10px !important",
      borderRadius: 10,
      cursor: "pointer",
      border: "1px solid #800000 !important",

      "&:hover": {
         background: "#800000 !important",
         color: "white !important",
         borderBottom: "1px solid #FFA500",
      },

      "&:disabled": {
         opacity: 0.5,
         cursor: "not-allowed",
      },
   },
   // btnsBox: {
   //    display: "flex",
   //    alignItems: "center",
   //    justifyContent: "space-between",
   //    padding: "0px 8px",
   // },
}));
