import { useLocation, useNavigate } from "react-router-dom";
import { FormEvent, SyntheticEvent, useState } from "react";
import { useAuth } from "../hook/useAuth";

export const AuthPage = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const { signIn } = useAuth();
   const [userName, setUserName] = useState("");

   const fromPage = location.state?.from?.pathname || "/";

   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      // event.preventDefault();
      event.preventDefault();
      signIn(userName, () => navigate(fromPage, { replace: true }));
   };

   return (
      <div>
         <h1>Login</h1>
         <form onSubmit={(event) => handleSubmit(event)}>
            <label>
               Name:
               <input
                  autoComplete="off"
                  name="username"
                  value={userName}
                  onChange={({ target }) => {
                     setUserName(target.value);
                  }}
               />
            </label>
            <button type="submit">Login</button>
         </form>
      </div>
   );
};
