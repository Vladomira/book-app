import { FC } from "react";
import { TextComponent } from "../TextComponent";
import { useStylesBookList } from "./Book.style";

type BookInfoListProps = {
   data: string[];
   className: string;
   color?: string;
};
export const BookInfoList: FC<BookInfoListProps> = ({
   data,
   className,
   color,
}) => {
   const classes = useStylesBookList();
   const ifTheLast = (idx: number) => idx === data.length - 1;
   return (
      <ul className={classes.list}>
         {data?.map((el, idx) => (
            <TextComponent
               className={className}
               text={`${el}${!ifTheLast(idx) && ", \u00A0"}`}
               key={el}
               color={color}
            />
         ))}
      </ul>
   );
};
