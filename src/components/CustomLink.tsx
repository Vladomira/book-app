import { useMatch, Link } from "react-router-dom";
import { PropsWithChildren } from "react";

// import { Link } from "@mui/material";

type CustomLinkProps = {
   to: string;
};
export const CustomLink = ({
   children,
   to,
}: PropsWithChildren<CustomLinkProps>) => {
   const match = useMatch(to);

   return (
      // Link на матеріал не міняти!!
      <Link to={to} color={match ? "rgb(255,127,80)" : "#FFFAFA"}>
         {children}
      </Link>
   );
};
