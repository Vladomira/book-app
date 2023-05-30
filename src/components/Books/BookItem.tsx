import { Link } from "react-router-dom";
import { BooksType } from "../../types/book";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { booksOperations } from "../../redux/user-books";
import { Button, ListItem, Typography } from "@mui/material";
import { useStylesBooks } from "./Books.style";
import { BookInfoBox } from "./BookInfoBox";

type BookItemProps = {
   el: BooksType;
};

export const BookItem = ({ el }: BookItemProps) => {
   const date = new Date(el.volumeInfo.publishedDate);
   const dispatch = useDispatch<AppDispatch>();
   const classes = useStylesBooks();

   const getImage =
      el.volumeInfo.imageLinks?.smallThumbnail ||
      el.volumeInfo.imageLinks?.thumbnail ||
      "";

   const addBook = () => {
      dispatch(
         booksOperations.addBook({
            book: {
               favorite: true,
               finished: false,
               inProgress: true,
               author:
                  el.volumeInfo.authors?.length > 0
                     ? el.volumeInfo.authors[0]
                     : "",
               title: el.volumeInfo.title,
               image: getImage,
            },
            bookId: el.id,
         })
      );
   };
   const { title, categories, averageRating } = el.volumeInfo;

   return (
      <ListItem className={classes.listItem}>
         <Link to={`/books/${el.id}`} className={classes.link}>
            <img className={classes.bookImg} src={getImage} alt="" />
            <BookInfoBox title={title} categories={categories} />
         </Link>
         <Button
            type="button"
            onClick={() => addBook()}
            className={classes.addToMy}
            variant="outlined"
         >
            Add
         </Button>
      </ListItem>
   );
};
// {!Number.isNaN(date.getFullYear()) && (
//    <p>{date.getFullYear()}</p>
// )}
