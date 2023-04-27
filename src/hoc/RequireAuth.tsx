import { PropsWithChildren } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

export const RequireAuth = ({ children }: PropsWithChildren) => {
   const location = useLocation();
   const { user } = useAuth();

   if (!user) {
      // login& register
      return <Navigate to="/auth" state={{ from: location }} />;
   }
   return <>{children}</>;
};
