import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

import { CustomLink } from "./CustomLink";
import { useAppSelector } from "../redux/hooks";
import { AppDispatch, RootState } from "../redux/store";
import { authOperations } from "../redux/auth";
import "../App.css";

export const Layout = () => {
   const user = useAppSelector((state: RootState) => state.auth.user);
   const dispatch = useDispatch<AppDispatch>();

   return (
      <>
         <header className="App-header">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/books">Books</CustomLink>
            <CustomLink to="/authors">Authors</CustomLink>
            {/* bar with logout and delete user + my notes list and my books lsit */}
            {!user.id ? (
               <CustomLink to="/auth">Signin</CustomLink>
            ) : (
               <CustomLink to={`user/${user.id}`}>My page</CustomLink>
            )}

            {user.name && (
               <div
                  style={{
                     display: "flex",
                     flexDirection: "column",
                  }}
               >
                  <p style={{ color: "olive", margin: "0px 0px 5px" }}>
                     Welcome, {user.name}
                  </p>
                  <button
                     type="button"
                     onClick={() =>
                        dispatch(authOperations.logout({ id: user.id }))
                     }
                  >
                     Logout
                  </button>
               </div>
            )}
         </header>
         <main className="container">
            <Outlet />
         </main>
         <footer>2023</footer>
      </>
   );
};
