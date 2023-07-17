import { FC } from "react";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import { Typography, Button } from "@mui/material";
import { toast } from "react-toastify";
import DeleteIcon from "@material-ui/icons/Delete";
import { InitBookState } from "../../types/book";
import { MyBookStatus } from "./MyBookStatus";
import { useStylesBookItem } from "../CommonStyles/BookItem.style";
import { useStylesCarousel } from "../Slider/Slider.style";
import { SliderComponent } from "../Slider";
import { Notification } from "../Notification";
import { useStylesButtons } from "../CommonStyles/Buttons.style";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { booksOperations } from "../../redux/user-books";

type BooksCarouselProps = {
   userBooks: InitBookState;
};

export const BooksCarousel: FC<BooksCarouselProps> = ({ userBooks }) => {
   const classes = useStylesCarousel();
   const bookClasses = useStylesBookItem();
   const btnClass = useStylesButtons();
   const dispatch = useDispatch<AppDispatch>();
   return (
      <SliderComponent>
         {userBooks.map((el) => (
            <Box key={el.id} className={classes.slide}>
               <Link
                  to={`/${el.bookId}`}
                  style={{ textDecoration: "none" }}
                  className={bookClasses.bookInfoBox}
               >
                  <img className={classes.itemImg} src={el.image} alt="" />
                  <Typography className={bookClasses.bookInfoTitle}>
                     {el.title.slice(0, 28)}
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
                        dispatch(booksOperations.deleteBook(el.id));
                        toast.success("Book was deleted");
                     }}
                  >
                     <DeleteIcon />
                  </Button>
                  <MyBookStatus
                     bookId={el.id}
                     credentials={{
                        finished: el.finished,
                        favorite: el.favorite,
                        inProgress: el.inProgress,
                     }}
                  />
               </Box>
            </Box>
         ))}
         <Notification />
      </SliderComponent>
   );
};
