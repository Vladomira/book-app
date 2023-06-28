import { useDispatch } from "react-redux";
import { Typography } from "@mui/material";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { AppDispatch, RootState } from "../../redux/store";
import { useAppSelector } from "../../redux/hooks";
import { useStylesNavBar } from "./NavBar.style";
import { authOperations } from "../../redux/auth";
import { useNavigate } from "react-router-dom";

export const NavUser = () => {
   const user = useAppSelector((state: RootState) => state.auth.user);
   const dispatch = useDispatch<AppDispatch>();
   const navigate = useNavigate();
   const classes = useStylesNavBar();

   return (
      <>
         {user.name && (
            <div className={classes.greetingBox}>
               <Typography className={classes.greetingText}>
                  Welcome, {user.name}
               </Typography>
               <button
                  className={classes.logoutButton}
                  type="button"
                  onClick={() => {
                     dispatch(authOperations.logout({ id: user.id }));
                     navigate("/");
                  }}
               >
                  <ExitToAppIcon className={classes.logoutIcon} />
               </button>
            </div>
         )}
      </>
   );
};
