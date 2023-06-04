import { SyntheticEvent, useState } from "react";
import Button from "@mui/material/Button";
import { BookStatusProps, PossibleStatus } from "../../../types/book";
import { AppDispatch } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { booksOperations } from "../../../redux/user-books";
import { useStylesBooksStatus } from "./MyBooks.style";
import { booksStatusList } from "./BooksStatusList";

type BookStatusWithId = {
   credentials: BookStatusProps;
   bookId: number;
};
export const MyBookStatus = ({ credentials, bookId }: BookStatusWithId) => {
   const { favorite, finished, inProgress } = credentials;
   const [status, setStatus] = useState<BookStatusProps>({
      favorite,
      finished,
      inProgress,
   });
   const dispatch = useDispatch<AppDispatch>();
   const classes = useStylesBooksStatus();

   const onHandleChange = (event: SyntheticEvent) => {
      event.preventDefault();
      const { id } = event.currentTarget as HTMLButtonElement;

      setStatus((prev: BookStatusProps) => {
         return {
            ...prev,
            [id]: !prev[id],
         };
      });

      dispatch(
         booksOperations.changeBookStatus({
            credentials: { [id]: !status[id] } as PossibleStatus,
            bookId,
         })
      );
   };

   return (
      <ul className={classes.wrapper}>
         {booksStatusList.map((el) => {
            return (
               <Button
                  key={el.idName}
                  className={classes.statusBtn}
                  type="button"
                  onClick={(id) => onHandleChange(id)}
                  id={el.idName}
               >
                  {el.iconComponent(
                     status[el.idName] ? "#ff6250" : "rgba(255, 165, 0, 0.5)"
                  )}
               </Button>
            );
         })}
      </ul>
   );
};
