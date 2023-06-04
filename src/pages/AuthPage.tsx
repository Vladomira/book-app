import { useState } from "react";
import { AuthForm } from "../components/AuthForm";
import { SwitchForm } from "../types/form";
import { AuthSwitcherComponent } from "../components/AuthForm/AuthSwitcher";
import { useStylesAuth } from "../components/AuthForm/Auth.style";

export const AuthPage = () => {
   const [switchForm, setSwitchForm] = useState<SwitchForm>("Signup");
   const classes = useStylesAuth();

   return (
      <div className={classes.formBox}>
         <h1 className={classes.title}>{switchForm}</h1>
         <AuthForm switcher={switchForm} />
         {switchForm === "Signup" ? (
            <AuthSwitcherComponent
               setSwitchForm={setSwitchForm}
               isAccount={"I have account."}
               authButtonText={"Login"}
            />
         ) : (
            <AuthSwitcherComponent
               setSwitchForm={setSwitchForm}
               isAccount={" I don't have account."}
               authButtonText={"Signup"}
            />
         )}
      </div>
   );
};
