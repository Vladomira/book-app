import React from "react";
import { useAuth } from "../hook/useAuth";

export const HomePage = () => {
   const { signIn, user } = useAuth();
   console.log("home", user);
   return <h1>Homepage</h1>;
};
