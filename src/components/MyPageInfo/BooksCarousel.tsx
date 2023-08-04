import { FC } from "react";
import { InitBookState } from "../../types/book";
import { SliderComponent } from "../Slider";
import { Notification } from "../Notification";

import { CarouselBookItem } from "./CarouselBookItem";

type BooksCarouselProps = {
   userBooks: InitBookState;
};

export const BooksCarousel: FC<BooksCarouselProps> = ({ userBooks }) => {
   return (
      <SliderComponent>
         {userBooks.map((el) => (
            <CarouselBookItem book={el} key={el.id} />
         ))}
         <Notification />
      </SliderComponent>
   );
};
