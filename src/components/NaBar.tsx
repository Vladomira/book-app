import { Outlet } from "react-router-dom";
import { AppBar, Toolbar } from "@mui/material";
import { CssBaseline } from "@material-ui/core";
import { useStylesNavBar } from "./NavBar/NavBar.style";
import { NavList } from "./NavBar/NavList";
import { NavUser } from "./NavBar/NavUser";

export const NaBar = () => {
   const classes = useStylesNavBar();
   return (
      <>
         <AppBar position="fixed" className={classes.header}>
            <CssBaseline />
            <Toolbar className={classes.navBar}>
               <NavList />
               <NavUser />
            </Toolbar>
         </AppBar>
         <main className={classes.container}>
            <Outlet />
         </main>
      </>
   );
};
