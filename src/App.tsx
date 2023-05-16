import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { HomePage } from "./pages/HomePage";
import { BooksPage } from "./pages/BooksPage";
import { SinglePage } from "./pages/SinglePage";
import { AuthorsPage } from "./pages/AuthorsPage";
import { NotesPage } from "./pages/NotesPage";
import { NotfoundPage } from "./pages/NotfoundPage";
import { AuthPage } from "./pages/AuthPage";

import { Layout } from "./components/Layout";
import { RequireAuth } from "./hoc/RequireAuth";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/store";
import { authOperations } from "./redux/auth";

function App() {
   const dispatch = useDispatch<AppDispatch>();
   const token = localStorage.getItem("persist:auth");

   useEffect(() => {
      if (token) {
         dispatch(authOperations.getCurrentUser());
      }
   }, [dispatch, token]);
   // dispatch, token
   return (
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route index path="/" element={<HomePage />} />
            <Route path="books" element={<BooksPage />} />
            <Route path="books/:id" element={<SinglePage page="book" />} />

            <Route path="authors" element={<AuthorsPage />} />
            <Route path="authors/:id" element={<SinglePage page="author" />} />

            <Route path="auth" element={<AuthPage />} />
            {/* user/id/bookId/notes */}
            <Route
               path="user/:userId/book/:id/notes"
               element={
                  <RequireAuth>
                     <NotesPage />
                  </RequireAuth>
               }
            />
            <Route path="*" element={<NotfoundPage />} />
         </Route>
      </Routes>
   );
}

export default App;
