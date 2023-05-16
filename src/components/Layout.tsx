import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

import { CustomLink } from "./CustomLink";
import { useAppSelector } from "../redux/hooks";
import { AppDispatch, RootState } from "../redux/store";
import { authOperations } from "../redux/auth";
import "../App.css";

export const Layout = () => {
   const userId = useAppSelector((state: RootState) => state.auth.user.id);
   const dispatch = useDispatch<AppDispatch>();

   return (
      <>
         <header className="App-header">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/books">Books</CustomLink>
            <CustomLink to="/authors">Authors</CustomLink>
            <CustomLink to="/auth">Signin</CustomLink>
            {userId && (
               <button
                  type="button"
                  onClick={() =>
                     dispatch(authOperations.logout({ id: userId }))
                  }
               >
                  Logout
               </button>
            )}
         </header>
         <main className="container">
            <Outlet />
         </main>
         <footer>2023</footer>
      </>
   );
};
