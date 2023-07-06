export const getTokenFromLocalStorage = () => {
   let token = localStorage.getItem("persist:auth");
   if (token) {
      token = JSON.parse(token).token.replace(/"/g, "");
   }
   return token;
};
