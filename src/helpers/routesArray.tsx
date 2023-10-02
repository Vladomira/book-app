import { AuthPage } from "../pages/AuthPage";
import { BookPage } from "../pages/BookPage";
import { BooksPage } from "../pages/BooksPage";

import { MyPage } from "../pages/MyPage";
import { NotesPage } from "../pages/NotesPage";
import { NotfoundPage } from "../pages/NotfoundPage";

export const routes = [
   { path: "/", RequireAuth: false, element: <BooksPage /> },
   { path: "/:id", RequireAuth: false, element: <BookPage /> },
   { path: "auth", RequireAuth: false, element: <AuthPage /> },
   { path: "user/:userId", RequireAuth: true, element: <MyPage /> },
   { path: "user/:userId/my-notes", RequireAuth: true, element: <NotesPage /> },
   { path: "/*", RequireAuth: false, element: <NotfoundPage /> },
];
