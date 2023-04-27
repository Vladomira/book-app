import { PropsWithChildren, createContext, useState } from "react";

type User = string | null;
type CallBack = () => void;

interface CurrentUserContextType {
   user: User;
   signIn: (newUser: string | null, cb: CallBack) => void;
   signOut: (cb: CallBack) => void;
}
export const AuthContext = createContext<CurrentUserContextType>({
   user: null,
   signIn: () => {},
   signOut: () => {},
});

// через редакс можна робити
// type AuthProviderType = {
//    children: ReactNode;
// };
export const AuthProvider = ({ children }: PropsWithChildren) => {
   const [user, setUser] = useState<User>(null); //must be an object

   const signIn = (newUser: User, cb: CallBack) => {
      setUser(newUser);
      cb();
   };
   console.log("from authcontecn", user);

   const signOut = (cb: CallBack) => {
      setUser(null);
      cb();
      console.log("from signOut", user);
   };

   const value = { user, signIn, signOut };
   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
