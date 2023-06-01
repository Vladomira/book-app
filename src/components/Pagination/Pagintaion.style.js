import { makeStyles } from "@material-ui/core";

export const useStylesPagination = makeStyles(() => ({
   paginationBox: {
      display: "flex",
      justifyContent: "center",
   },

   paginationItems: {
      fontSize: "13px",
      "& .MuiPaginationItem-root": {
         fontWeight: 600,
         fontSize: "16px",
         color: "#80010B",
      },
      "& .Mui-selected": {
         color: "#FF802D",
      },
   },
}));
