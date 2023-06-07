import { FC } from "react";
import { Typography } from "@mui/material";
import { useStylesBookItem } from "../CommonStyles/BookItem.style";

type BookInfoBoxProps = {
   title: string;
   categories: string[];
};
export const BookInfoBox: FC<BookInfoBoxProps> = ({ title, categories }) => {
   const bookClasses = useStylesBookItem();

   const booksCategories = categories?.map((el, idx) =>
      idx !== categories.length - 1 ? `${el},` : `${el}`
   );

   return (
      <div className={bookClasses.bookInfoBox}>
         <Typography className={bookClasses.bookInfoTitle}>
            {title.slice(0, 28)}
         </Typography>
         {categories?.length > 0 && (
            <Typography className={bookClasses.bookInfoCategories}>
               Categorie: {booksCategories}
            </Typography>
         )}
      </div>
   );
};
