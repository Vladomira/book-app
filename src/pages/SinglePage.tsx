import { PropsWithChildren } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { BookInfo } from "../components/BookInfo";
// import { Author } from "../components/views/Author";

type SinglePageProps = { page: "book" | "author" };

export const SinglePage = ({ page }: PropsWithChildren<SinglePageProps>) => {
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
         {/* {page === "book" ? <BookInfo id={id} /> : <Author id={id} />} */}
      </div>
   );
};
