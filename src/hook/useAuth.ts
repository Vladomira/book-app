import { useContext } from "react";
import { AuthContext } from "../hoc/AuthProvider";

export const useAuth = () => {
   // для редаксу можливо не знадобиться
   return useContext(AuthContext);
};
