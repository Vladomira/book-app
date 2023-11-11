import { useEffect, FC, useRef } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@material-ui/core";

import { FormData } from "../../types/auth";
import { FormProps } from "../../types/form";
import { AppDispatch, RootState } from "../../redux/store";
import { authOperations } from "../../redux/auth";
import { useStylesAuth } from "./Auth.style";
import { useNavigate } from "react-router-dom";
import { useStylesButtons } from "../CommonStyles/Buttons.style";
import { toast } from "react-toastify";
import { useAppSelector } from "../../redux/hooks";
import { emailPattern, passwordPattern } from "../../constants/formPatterns";

export const AuthForm: FC<FormProps> = ({ switcher }) => {
   const {
      register,
      handleSubmit,
      reset,
      watch,
      formState: { errors },
   } = useForm<FormData>();
   const password = useRef({});
   password.current = watch("password", "");
   const dispatch = useDispatch<AppDispatch>();
   const classes = useStylesAuth();
   const btnClass = useStylesButtons();
   const navigate = useNavigate();
   const user = useAppSelector((state: RootState) => state.auth.user);

   const onSubmit = async (data: FormData) => {
      let action;
      switch (switcher) {
         case "Sign up":
            action = await dispatch(authOperations.register(data));
            break;

         case "Log in":
            action = await dispatch(authOperations.logIn(data));
            break;
      }

      if (
         authOperations.register.rejected.match(action) ||
         authOperations.logIn.rejected.match(action)
      ) {
         toast.error(`Error: ${action.payload}`);
      } else {
         reset();
      }
   };
   useEffect(() => {
      if (user.email) {
         toast.success(`You entered as ${user.name}`);
         navigate("/");
      }
   }, [user]);

   return (
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
         {switcher === "Sign up" && (
            <TextField
               {...register("name", { required: "Name is required" })}
               label="Name"
               error={!!errors.name}
               helperText={errors.name?.message}
               autoComplete="off"
               className={classes.input}
            />
         )}

         <TextField
            {...register("email", emailPattern)}
            label="Email"
            error={!!errors.email}
            helperText={errors.email?.message}
            autoComplete="off"
            className={classes.input}
         />

         <TextField
            {...register("password", passwordPattern)}
            label="Password"
            type="password"
            error={!!errors.password}
            helperText={errors.password?.message}
            autoComplete="off"
            className={classes.input}
         />
         {switcher === "Sign up" && (
            <TextField
               {...register("checkPassword", {
                  required: "Password is required",
                  validate: (value) =>
                     value === watch("password") || "Passwords do not match",
               })}
               label="Confirm Password"
               type="password"
               error={!!errors.checkPassword}
               helperText={errors.checkPassword?.message}
               autoComplete="off"
               className={classes.input}
            />
         )}

         <Button
            type="submit"
            variant="contained"
            className={btnClass.orangeVarint}
         >
            {switcher === "Sign up" ? "Sign up" : "Login"}
         </Button>
      </form>
   );
};
