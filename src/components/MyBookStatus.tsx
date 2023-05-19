import { SyntheticEvent, useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import CachedIcon from "@material-ui/icons/Cached";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import Button from "@mui/material/Button";
import { BookStatusProps, PossibleStatus } from "../types/book";
import { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux";
import { booksOperations } from "../redux/user-books";

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
      <div style={{ margin: "0px 0px 23px auto", paddingRight: "10px" }}>
         <Button
            type="button"
            onClick={(id) => onHandleChange(id)}
            sx={{ padding: "5px 5px", minWidth: 45 }}
            id="favorite"
         >
            <FavoriteBorderIcon
               style={{ fill: status.favorite ? "red" : "black" }}
            />
         </Button>
         <Button
            type="button"
            onClick={(event) => onHandleChange(event)}
            sx={{ padding: "5px 5px", minWidth: 45 }}
            id="inProgress"
         >
            <CachedIcon style={{ fill: status.inProgress ? "red" : "black" }} />
         </Button>
         <Button
            type="button"
            onClick={(event) => onHandleChange(event)}
            sx={{ padding: "5px 5px", minWidth: 45 }}
            id="finished"
         >
            <CheckCircleOutlineIcon
               style={{ fill: status.finished ? "red" : "black" }}
            />
         </Button>
      </div>
   );
};
