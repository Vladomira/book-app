import { SyntheticEvent, useState } from "react";
import { BookStatusProps, PossibleStatus } from "../../../types/book";
import { AppDispatch } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { booksOperations } from "../../../redux/user-books";
import { booksStatusList } from "./BooksStatusList";
import { BookStatusHint } from "./BookstatusHint";

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
      <ul
         style={{
            display: "flex",
         }}
      >
         {booksStatusList.map((el) => {
            return (
               <BookStatusHint
                  key={el.idName}
                  onHandleChange={onHandleChange}
                  el={el}
                  status={status[el.idName]}
               />
            );
         })}
      </ul>
   );
};
