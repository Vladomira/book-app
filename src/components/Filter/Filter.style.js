import { makeStyles } from "@material-ui/core";

export const useStylesFilter = makeStyles(() => ({
   form: {
      display: "flex",
      justifyContent: "center",
      margin: "0px auto 33px",
      maxWidth: "100%",
   },

   input: {
      "& .MuiOutlinedInput-input": {
         padding: "10px 8px 10px 12px",
      },

      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
         borderColor: "#333333",
         border: "2px solid",
      },
   },
}));
