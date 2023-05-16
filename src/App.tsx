import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { BooksPage } from "./pages/BooksPage";
import { SinglePage } from "./pages/SinglePage";
import { AuthorsPage } from "./pages/AuthorsPage";
import { NotesPage } from "./pages/NotesPage";
import { NotfoundPage } from "./pages/NotfoundPage";
import { AuthPage } from "./pages/AuthPage";

import { Layout } from "./components/Layout";
import { RequireAuth } from "./hoc/RequireAuth";

function App() {
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
