import { Book } from "@material-ui/icons";
import { FC } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

export const BookPage: FC = () => {
   const { id } = useParams();
   const navigate = useNavigate();

   const goBack = () => navigate(-1);

   return (
      <div>
         <button type="button" onClick={() => goBack()}>
            Back
         </button>
         <button type="button">
            <Link to="/">Home</Link>
         </button>
         <Book id={id} />
      </div>
   );
};
