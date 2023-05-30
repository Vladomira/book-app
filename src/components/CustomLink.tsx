import { useMatch, Link } from "react-router-dom";
import { PropsWithChildren } from "react";
import { useStylesNavBar } from "./NavBar/NavBar.style";

type CustomLinkProps = {
   to: string;
};
export const CustomLink = ({
   children,
   to,
}: PropsWithChildren<CustomLinkProps>) => {
   const match = useMatch(to);
   const classes = useStylesNavBar();

   const linkColor = `${match ? "#FFA500" : "#FFFAFA"}`;

   return (
      <Link to={to} style={{ color: linkColor }} className={classes.navLink}>
         {children}
      </Link>
   );
};
