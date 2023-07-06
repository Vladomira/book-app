import { Link } from "react-router-dom";
import { BooksType } from "../../types/book";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { booksOperations } from "../../redux/user-books";
import { Button, ListItem } from "@mui/material";
import { toast } from "react-toastify";
import { useStylesBooks } from "./Books.style";
import { BookInfoBox } from "./BooksInfoBox";
import { useStylesBookItem } from "../CommonStyles/BookItem.style";
import { useAppSelector } from "../../redux/hooks";
import { Notification } from "../Notification";
import { getAuthor, getImage } from "../../helpers/getFromBook";

type BookItemProps = {
   el: BooksType;
};

export const BookItem = ({ el }: BookItemProps) => {
   const userId = useAppSelector((state: RootState) => state.auth.user.id);
   const dispatch = useDispatch<AppDispatch>();
   const userBooks = useAppSelector((state: RootState) => state.books);
   const classes = useStylesBooks();
   const bookClasses = useStylesBookItem();

   const addBook = () => {
      if (!userId) {
         toast.error("Please authorize");
      }
      if (userId) {
         dispatch(
            booksOperations.addBook({
               book: {
                  favorite: false,
                  finished: false,
                  inProgress: false,
                  author: getAuthor(el),
                  title: el.volumeInfo?.title,
                  image: getImage(el),
               },
               bookId: el.id,
            })
         );
         toast.success("Book was added");
      }
   };
   const { title, categories } = el.volumeInfo;

   return (
      <ListItem className={classes.listItem}>
         <Link to={`/${el.id}`} className={classes.link}>
            <img className={classes.bookImg} src={getImage(el)} alt="" />
            <BookInfoBox title={title} categories={categories} />
         </Link>
         <Button
            disabled={
               userId ? userBooks.some((book) => book.bookId === el.id) : false
            }
            type="button"
            onClick={() => addBook()}
            className={bookClasses.bookButton}
            variant="outlined"
         >
            Add to my
         </Button>
         <Notification />
      </ListItem>
   );
};
