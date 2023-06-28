import React from "react";
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
      formState: { errors },
   } = useForm<FormData>();
   const dispatch = useDispatch<AppDispatch>();
   const classes = useStylesAuth();
   const btnClass = useStylesButtons();
   const navigate = useNavigate();

   const onSubmit = (data: FormData) => {
      const { name, email, password } = data;
      switch (switcher) {
         case "Sign up":
            dispatch(authOperations.register({ name, email, password }));
            break;

         case "Log in":
            dispatch(authOperations.logIn({ email, password }));
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
