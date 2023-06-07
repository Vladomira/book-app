import { makeStyles } from "@material-ui/core";
import { colors } from "../CommonStyles/colors";

export const useStylesNoteForm = makeStyles(() => ({
   form: {
      "& .MuiInputBase-root": {
         outline: `2px solid ${colors.teal}`,

         "& .Base-root-MuiOutlinedInput-root": {
            borderColor: " transparent",
         },

         //  fieldset outline
         "& > .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
            outline: `1px solid transparent`,
            "&:hover": {
               borderColor: "transparent",
               outline: `1px solid transparent`,
            },

            "&:focus": {
               borderColor: "transparent",
               outline: `1px solid transparent`,
            },
         },
      },
      "& .MuiFormLabel-root": {
         background: colors.gentleOrange,
         color: `${colors.teal} !important`,
      },
   },
}));
