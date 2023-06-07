import { makeStyles } from "@material-ui/core";

export const useStylesAuth = makeStyles(() => ({
   formBox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#FAEBE2",
      padding: "20px",
      borderRadius: "10px",
      maxWidth: "400px",
      margin: "0 auto",
   },
   title: { color: "#800000" },
   form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
   },
   input: {
      margin: "10px 0",
      width: "300px",
      "& .MuiInput-underline:after": { borderBottom: "2px solid #80010B" },

      "& .MuiOutlinedInput-root": {
         "& fieldset": {
            borderColor: "#80010B",
         },
      },
      "& .MuiInputBase-root": {
         color: "#80010B",
      },
      "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
         borderBottom: "2px solid #80010B",
      },
      "& .MuiFormLabel-root": {
         color: "#800000",
      },
   },

   isAccountBox: { display: "flex", marginTop: "18px" },
   isAcountText: {
      color: "#800000",
      fontSize: "10px",
   },
   switchButton: {
      background: "transparent",
      border: "none",
      cursor: "pointer",
      color: "#008080",
      fontSize: "16px",
      fontWeight: 600,
      "&:hover": {
         color: "#FF802D  !important",
      },
   },
}));
