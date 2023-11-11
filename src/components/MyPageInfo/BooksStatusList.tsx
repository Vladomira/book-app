import { ReactElement } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import CachedIcon from "@material-ui/icons/Cached";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

export interface StatusProps {
   idName: string;
   iconComponent: (color: string, isHovered: boolean) => ReactElement;
}
const transition = "transform 250ms cubic-bezier(0.4, 0, 0.2, 1)";

const iconTransform = (isHovered: boolean) =>
   isHovered ? "scale(1.3)" : "scale(1)";

export const booksStatusList: StatusProps[] = [
   {
      idName: "favorite",
      iconComponent(color, isHovered) {
         return (
            <FavoriteBorderIcon
               style={{
                  fill: color,
                  transition: transition,
                  transform: iconTransform(isHovered),
               }}
            />
         );
      },
   },
   {
      idName: "inProgress",
      iconComponent(color, isHovered) {
         return (
            <CachedIcon
               style={{
                  fill: color,
                  transition: transition,
                  transform: iconTransform(isHovered),
               }}
            />
         );
      },
   },
   {
      idName: "finished",
      iconComponent(color, isHovered) {
         return (
            <CheckCircleOutlineIcon
               style={{
                  fill: color,
                  transition: transition,
                  transform: iconTransform(isHovered),
               }}
            />
         );
      },
   },
];
