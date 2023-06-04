import { FC } from "react";
import { useParams } from "react-router-dom";
import { BookInfo } from "../components/BookInfo";
import { PageNav } from "../components/PageNav";

export const BookPage: FC = () => {
   const { id } = useParams();

   return (
      <>
         <PageNav />
         <BookInfo id={id} />
      </>
   );
};
