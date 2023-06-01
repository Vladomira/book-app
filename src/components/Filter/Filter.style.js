import { makeStyles } from "@material-ui/core";

export const useStylesFilter = makeStyles(() => ({
   form: {
      display: "flex",
      justifyContent: "center",
      margin: "0px auto 33px",
      maxWidth: "100%",
   },

   input: {
      borderRadius: "4px",
      "& .MuiInputBase-root": {
         padding: "0px 0px 0px 9px",
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
         border: "none",
      },
      "& .MuiInputBase-input": {
         color: "#80010B",
      },
      backgroundColor: "#FAEBE2",
      "& .MuiOutlinedInput-input": {
         padding: "10px 8px",
      },

      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
         borderColor: "#80010B",
      },

      "& .MuiSvgIcon-root": {
         color: "#FF802D",
      },
   },
   buttonsBox: {
      display: "flex",
      alignItems: "center",
   },
   clearButton: {
      backgroundColor: "transparent",
      "&:hover": {
         backgroundColor: "transparent",
      },
   },
   clearIcon: {
      color: "#80010B !important",
      width: "22px !important",
   },
}));
