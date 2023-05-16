import { PropsWithChildren } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

export const RequireAuth = ({ children }: PropsWithChildren) => {
   const location = useLocation();
   const userId = useAppSelector((state: RootState) => state.auth.user.id);

   if (!userId) {
      // login& register
      return <Navigate to="/auth" state={{ from: location }} />;
   }
   return <>{children}</>;
};
