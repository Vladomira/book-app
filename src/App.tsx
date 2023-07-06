import { Routes, Route } from "react-router-dom";
import { BooksPage } from "./pages/BooksPage";
import { NotesPage } from "./pages/NotesPage";
import { NotfoundPage } from "./pages/NotfoundPage";
import { AuthPage } from "./pages/AuthPage";

import { NaBar } from "./components/NavBar";
import { RequireAuth } from "./hoc/RequireAuth";
import { MyBooks } from "./pages/MyBooks";
import { MyPage } from "./pages/MyPage";
import "./App.css";
import { BookPage } from "./pages/BookPage";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/store";
import { useEffect } from "react";
import { authOperations } from "./redux/auth";

function App() {
   const dispatch = useDispatch<AppDispatch>();

   const token = localStorage.getItem("persist:auth");

   useEffect(() => {
      if (token) {
         const parsedToken = JSON.parse(token).token.replace(/"/g, "");

         parsedToken.length > 0 && dispatch(authOperations.checkAuth());
      }
   }, []);
   return (
      <Routes>
         <Route path="/" element={<NaBar />}>
            <Route index path="/" element={<BooksPage />} />
            <Route path="/:id" element={<BookPage />} />

            <Route path="auth" element={<AuthPage />} />
            <Route
               path="user/:userId"
               element={
                  <RequireAuth>
                     <MyPage />
                  </RequireAuth>
               }
            />
            <Route
               path="user/:userId/my-books"
               element={
                  <RequireAuth>
                     <MyBooks />
                  </RequireAuth>
               }
            />
            <Route
               path="user/:userId/my-notes"
               element={
                  <RequireAuth>
                     <NotesPage />
                  </RequireAuth>
               }
            />

            <Route path="/*" element={<NotfoundPage />} />
         </Route>
      </Routes>
   );
}

export default App;
