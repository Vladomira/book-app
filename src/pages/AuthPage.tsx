import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthForm } from "../components/views/Form";
import { SwitchForm } from "../types/form";

export const AuthPage = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const [switchForm, setSwitchForm] = useState<SwitchForm>("Signup");
   // const fromPage = location.state?.from?.pathname || "/";

   return (
      <div>
         <h1>{switchForm}</h1>
         <AuthForm switcher={switchForm} />
         {switchForm === "Signup" ? (
            <div>
               <p>
                  I have account.{" "}
                  <button
                     type="button"
                     onClick={() => setSwitchForm("Login")}
                     style={{
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                     }}
                  >
                     Login
                  </button>
               </p>
            </div>
         ) : (
            <div>
               <p>
                  I don't have account.
                  <button
                     type="button"
                     onClick={() => setSwitchForm("Signup")}
                     style={{
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                     }}
                  >
                     Signup
                  </button>
               </p>
            </div>
         )}
      </div>
   );
};
