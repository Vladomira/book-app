import React from "react";
import { AuthPage } from "../pages/AuthPage";
import { BookPage } from "../pages/BookPage";
import { BooksPage } from "../pages/BooksPage";

import { MyPage } from "../pages/MyPage";
import { NotfoundPage } from "../pages/NotfoundPage";

interface Routes {
   path: string;
   RequireAuth: boolean;
   element: JSX.Element;
}
export const routes: Routes[] = [
   { path: "/", RequireAuth: false, element: <BooksPage /> },
   { path: "/:id", RequireAuth: false, element: <BookPage /> },
   { path: "/auth", RequireAuth: false, element: <AuthPage /> },
   { path: "/user/:userId", RequireAuth: true, element: <MyPage /> },

   { path: "/*", RequireAuth: false, element: <NotfoundPage /> },
];
