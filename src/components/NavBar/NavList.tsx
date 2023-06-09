import { CustomLink } from "../CustomLink";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { useStylesNavBar } from "./NavBar.style";

export const NavList = () => {
   const user = useAppSelector((state: RootState) => state.auth.user);
   const classes = useStylesNavBar();

   return (
      <div className={classes.navList}>
         <CustomLink to="/">Books</CustomLink>

         {!user.id ? (
            <CustomLink to="/auth">Sign up</CustomLink>
         ) : (
            <CustomLink to={`user/${user.id}`}>My page</CustomLink>
         )}
      </div>
   );
};
