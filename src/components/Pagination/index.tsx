import { FC } from "react";
import { Stack, Box, Pagination } from "@mui/material";
import { PaginationProps } from "../../types/pagination";
import { useStylesPagination } from "./Pagintaion.style";

export const PaginationComponent: FC<PaginationProps> = ({
   count,
   page,
   onChange,
}) => {
   const classes = useStylesPagination();
   return (
      <Box className={classes.paginationBox}>
         <Stack spacing={2}>
            <Pagination
               className={classes.paginationItems}
               count={count}
               page={page}
               onChange={onChange}
            />
         </Stack>
      </Box>
   );
};
