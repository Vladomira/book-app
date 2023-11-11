import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { RequireAuth } from "./hoc/RequireAuth";
import { getTokenFromLocalStorage } from "./helpers/getTokenFromStorage";

import { AppDispatch } from "./redux/store";
import { authOperations } from "./redux/auth";

import "./App.css";
import { Notification } from "./components/Notification";
import { NaBar } from "./components/NavBar";
import { routes } from "./constants/routesArray";

function App() {
   const dispatch = useDispatch<AppDispatch>();

   useEffect(() => {
      const token = getTokenFromLocalStorage();
      if (!token) return;

      dispatch(authOperations.checkAuth());
   }, []);

   return (
      <>
         <Routes>
            <Route path="/" element={<NaBar />}>
               {routes.map((route) => (
                  <Route
                     key={route.path}
                     path={route.path}
                     element={
                        route.RequireAuth ? (
                           <RequireAuth>{route.element}</RequireAuth>
                        ) : (
                           route.element
                        )
                     }
                  />
               ))}
            </Route>
         </Routes>
         <Notification />
      </>
   );
}

export default App;
