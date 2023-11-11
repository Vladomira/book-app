export const emailPattern = {
   required: "Email is required",
   pattern: {
      value: /^\S+@\S+$/i,
      message: "Invalid email format",
   },
};
export const passwordPattern = {
   required: "Password is required",
   minLength: {
      value: 6,
      message: "Password must be at least 6 characters long",
   },
};
