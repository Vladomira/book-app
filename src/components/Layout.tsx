import { Outlet } from "react-router-dom";
import "../App.css";
import { CustomLink } from "./CustomLink";

export const Layout = () => {
   return (
      <>
         <header className="App-header">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/books">Books</CustomLink>
            <CustomLink to="/authors">Authors</CustomLink>
            <CustomLink to="/notes">Notes</CustomLink>
         </header>
         <main className="container">
            <Outlet />
         </main>
         <footer>2023</footer>
      </>
   );
};
