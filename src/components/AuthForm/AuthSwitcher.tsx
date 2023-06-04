import { FC } from "react";
import { AuthSwitcherProps } from "../../types/form";
import { useStylesAuth } from "./Auth.style";
import { Typography } from "@mui/material";

export const AuthSwitcherComponent: FC<AuthSwitcherProps> = ({
   setSwitchForm,
   isAccount,
   authButtonText,
}) => {
   const classes = useStylesAuth();
   return (
      <div className={classes.isAccountBox}>
         <Typography className={classes.isAcountText}> {isAccount}</Typography>

         <button
            className={classes.switchButton}
            type="button"
            onClick={() => setSwitchForm(authButtonText)}
         >
            {authButtonText}
         </button>
      </div>
   );
};
