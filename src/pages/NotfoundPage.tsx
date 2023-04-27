import { Link } from "react-router-dom";

export const NotfoundPage = () => {
   return (
      <h1>
         this page doesn't exist. Go <Link to="/">home</Link>.
      </h1>
   );
};
