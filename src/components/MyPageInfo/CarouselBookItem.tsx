import { FC } from "react";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import { Typography, Button } from "@mui/material";
import { toast } from "react-toastify";
import DeleteIcon from "@material-ui/icons/Delete";
import { MyBookStatus } from "./MyBookStatus";
import { useStylesBookItem } from "../CommonStyles/BookItem.style";
import { useStylesCarousel } from "../Slider/Slider.style";
import { useStylesButtons } from "../CommonStyles/Buttons.style";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { booksOperations } from "../../redux/user-books";
import { BookWithId } from "../../types/book";

type CarouselBookItemProps = { book: BookWithId };
export const CarouselBookItem: FC<CarouselBookItemProps> = ({ book }) => {
   const classes = useStylesCarousel();
   const bookClasses = useStylesBookItem();
   const btnClass = useStylesButtons();
   const dispatch = useDispatch<AppDispatch>();
   return (
      <Box className={classes.slide}>
         <Link
            to={`/${book.bookId}`}
            style={{ textDecoration: "none" }}
            className={bookClasses.bookInfoBox}
         >
            <img className={classes.itemImg} src={book.image} alt="" />
            <Typography className={bookClasses.bookInfoTitle}>
               {book.title.slice(0, 28)}
            </Typography>
         </Link>

         <Box
            className={btnClass.btnsBox}
            style={{ padding: "0px 7px", marginTop: "30px" }}
         >
            <Button
               className={btnClass.deleteBtn}
               type="button"
               onClick={() => {
                  dispatch(booksOperations.deleteBook(book.id));
                  toast.success("Book was deleted");
               }}
            >
               <DeleteIcon />
            </Button>
            <MyBookStatus
               bookId={book.id}
               credentials={{
                  finished: book.finished,
                  favorite: book.favorite,
                  inProgress: book.inProgress,
               }}
            />
         </Box>
      </Box>
   );
};
