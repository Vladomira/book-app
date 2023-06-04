import { FC } from "react";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import { Typography, Button } from "@mui/material";
import { InitBookState } from "../../../types/book";
import { MyBookStatus } from "./MyBookStatus";
import { useStylesBookItem } from "../../UnitedStyles/BookItem.style";
import { useStylesCarousel } from "../../Slider/Slider.style";
import { SliderComponent } from "../../Slider";

type BooksCarouselProps = {
   userBooks: InitBookState;
   deleteUserBook: (prop: number) => void;
};

export const BooksCarousel: FC<BooksCarouselProps> = ({
   userBooks,
   deleteUserBook,
}) => {
   const classes = useStylesCarousel();
   const bookClasses = useStylesBookItem();

   return (
      <SliderComponent>
         {userBooks.map((el) => {
            return (
               <Box key={el.id} className={classes.slide}>
                  <img className={classes.itemImg} src={el.image} alt="" />
                  <Link
                     to={`/${el.bookId}`}
                     style={{ textDecoration: "none" }}
                     className={bookClasses.bookInfoBox}
                  >
                     <Typography className={bookClasses.bookInfoTitle}>
                        {el.title.slice(0, 28)}
                     </Typography>
                  </Link>

                  <MyBookStatus
                     bookId={el.id}
                     credentials={{
                        finished: el.finished,
                        favorite: el.favorite,
                        inProgress: el.inProgress,
                     }}
                  />
                  <Button
                     className={bookClasses.bookButton}
                     type="button"
                     onClick={() => deleteUserBook(el.id)}
                  >
                     Delete
                  </Button>
               </Box>
            );
         })}
      </SliderComponent>
   );
};
