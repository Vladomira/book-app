import { FC } from "react";
import { Box } from "@mui/material";
import { useStylesBook } from "./Book.style";
import { BookVolumeInfo } from "../../types/book";
import { TextComponent } from "../TextComponent";
import { BookInfoList } from "./BookInfoList";
import { chageFormat } from "../../helpers/date";
import { colors } from "../CommonStyles/colors";

type BookMainInfoProps = {
   data: BookVolumeInfo;
};
export const BookMainInfo: FC<BookMainInfoProps> = ({ data }) => {
   const classes = useStylesBook();
   const img =
      data?.imageLinks?.smallThumbnail || data?.imageLinks?.thumbnail || "";
   const bookData = ` ${
      data.publishedDate ? `● ${chageFormat(data.publishedDate)}` : ""
   }`;
   return (
      <Box className={classes.descBox}>
         <Box className={classes.imgsBox}>
            <img className={classes.bookImg} src={img} alt="" />
            <img
               className={`${classes.bookImg} ${classes.blurImg}`}
               src={img}
               alt=""
            />
         </Box>

         <Box className={classes.textBox}>
            <div>
               <TextComponent className={classes.title} text={data.title} />
               <BookInfoList className={classes.info} data={data.authors} />

               <TextComponent
                  text={`${data.publisher}${bookData}`}
                  className={classes.info}
               />
            </div>
            <div>
               <BookInfoList className={classes.info} data={data.categories} />
               <TextComponent
                  text={`Page count: ${data.pageCount}`}
                  className={classes.info}
                  color={colors.yellow}
               />
            </div>
         </Box>
      </Box>
   );
};
