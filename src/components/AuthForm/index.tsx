import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@material-ui/core";

import { FormData } from "../../types/auth";
import { SwitchForm } from "../../types/form";
import { AppDispatch } from "../../redux/store";
import { authOperations } from "../../redux/auth";
import { useStylesAuth } from "./Auth.style";
import { useNavigate } from "react-router-dom";
import { useStylesButtons } from "../CommonStyles/Buttons.style";

type FormProps = {
   switcher: SwitchForm;
};

export const AuthForm: React.FC<FormProps> = ({ switcher }) => {
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

   const onSubmit = (data: FormData) => {
      switch (switcher) {
         case "Sign up":
            dispatch(authOperations.register(data));
            break;

         case "Log in":
            dispatch(authOperations.logIn(data));
            break;
      }
      reset();
      navigate("/");
   };
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
            {...register("email", {
               required: "Email is required",
               pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
               },
            })}
            label="Email"
            error={!!errors.email}
            helperText={errors.email?.message}
            autoComplete="off"
            className={classes.input}
         />

         <TextField
            {...register("password", {
               required: "Password is required",
               minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
               },
            })}
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
                  required: "Confirm Password is required",
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
