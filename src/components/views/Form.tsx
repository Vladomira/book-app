import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@material-ui/core";

import { FormData } from "../../types/auth";
import { SwitchForm } from "../../types/form";
import { AppDispatch } from "../../redux/store";
import { authOperations } from "../../redux/auth";

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

   const onSubmit = (data: FormData) => {
      const { name, email, password } = data;
      switch (switcher) {
         case "Signup":
            dispatch(authOperations.register({ name, email, password }));
            break;

         case "Login":
            dispatch(authOperations.logIn({ email, password }));
            break;
      }
      reset();
   };
   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         {switcher === "Signup" && (
            <TextField
               {...register("name", { required: "Name is required" })}
               label="Name"
               error={!!errors.name}
               helperText={errors.name?.message}
               autoComplete="off"
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
         />

         <Button type="submit" variant="contained" color="primary">
            {switcher === "Signup" ? "Signup" : "Login"}
         </Button>
      </form>
   );
};
