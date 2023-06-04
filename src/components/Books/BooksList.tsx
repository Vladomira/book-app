import { FC } from "react";
import List from "@material-ui/core/List";

import { BooksListPros } from "../../types/book";
import { BookItem } from "./BooksItem";
import { useStylesBooks } from "./Books.style";

export const BooksList: FC<BooksListPros> = ({ books, bookQuery }) => {
   const classes = useStylesBooks();
   return (
      <List className={classes.list}>
         {books.length > 0 &&
            books
               .filter((book) => book.volumeInfo.title.includes(bookQuery))
               .map((el) => <BookItem key={el.id} el={el} />)}
      </List>
   );
};
