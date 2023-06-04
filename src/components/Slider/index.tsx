import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useStylesCarousel } from "./Slider.style";
import { sliderSettings } from "./slider-settings";
import { PropsWithChildren } from "react";

export const SliderComponent = ({ children }: PropsWithChildren) => {
   const classes = useStylesCarousel();
   return (
      <div style={{ padding: "0px 16px" }}>
         <Slider {...sliderSettings} className={classes.slider}>
            {children}
         </Slider>
      </div>
   );
};
