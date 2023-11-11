import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { PasswordVisibilityProps } from "../../types/form";

export const PasswordVisibility = ({
   setShowPassword,
   showPassword,
}: PasswordVisibilityProps) => {
   return (
      <InputAdornment position="end">
         <IconButton
            aria-label="toggle password visibility"
            onClick={() => setShowPassword(!showPassword)}
            edge="end"
         >
            {!showPassword ? <VisibilityOff /> : <Visibility />}
         </IconButton>
      </InputAdornment>
   );
};
