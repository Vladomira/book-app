import * as React from "react";
import usePagination from "@mui/material/usePagination";
import { styled } from "@mui/material/styles";

const List = styled("ul")({
   listStyle: "none",
   padding: 0,
   margin: 0,
   display: "flex",
});
type BookPaginationprops = { countPage: number };
export default function BookPagination({ countPage }: BookPaginationprops) {
   const { items } = usePagination({
      count: countPage,
   });

   return (
      <nav>
         <List>
            {items.map(({ page, type, selected, ...item }, index) => {
               let children = null;

               if (type === "start-ellipsis" || type === "end-ellipsis") {
                  children = "…";
               } else if (type === "page") {
                  children = (
                     <button
                        type="button"
                        style={{
                           fontWeight: selected ? "bold" : undefined,
                        }}
                        {...item}
                        onClick={() => console.log("from btn")}
                     >
                        {page}
                     </button>
                  );
               } else {
                  children = (
                     <button
                        type="button"
                        {...item}
                        onClick={(e) => console.log(e.target, "from btn")}
                     >
                        {type}
                     </button>
                  );
               }

               return <li key={index}>{children}</li>;
            })}
         </List>
      </nav>
   );
}
