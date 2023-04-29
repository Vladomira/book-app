import { PropsWithChildren } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth } from "../hook/useAuth";

// import { RootState } from "../redux/store";

export const RequireAuth = ({ children }: PropsWithChildren) => {
   const location = useLocation();
   const { user } = useAuth();
   // const auth = useSelector((state: RootState) => state.auth.user);
   // console.log("auth", auth);

   // if (!auth.id) {
   if (!user) {
      // login& register
      return <Navigate to="/auth" state={{ from: location }} />;
   }
   return <>{children}</>;
};

// ***********
// import { useAuth } from "../hook/useAuth";
// import { useAppSelector, useAppDispatch } from "../redux/hooks";
// const { user } = useAuth();s
