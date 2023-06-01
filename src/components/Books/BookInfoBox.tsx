import { FC } from "react";
import { useStylesBooks } from "./Books.style";
import { Typography } from "@mui/material";

type BookInfoBoxProps = {
   title: string;
   categories: string[];
};
export const BookInfoBox: FC<BookInfoBoxProps> = ({ title, categories }) => {
   const classes = useStylesBooks();
   const booksCategories = categories?.map((el, idx) =>
      idx !== categories.length - 1 ? `${el},` : `${el}`
   );

   return (
      <div className={classes.bookInfoBox}>
         <Typography className={classes.bookInfoTitle}>
            {title.slice(0, 28)}
         </Typography>
         {categories?.length > 0 && (
            <Typography className={classes.bookInfoCategories}>
               Categorie: {booksCategories}
            </Typography>
         )}
      </div>
   );
};
