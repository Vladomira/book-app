import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import CachedIcon from "@material-ui/icons/Cached";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

export const booksStatusList = [
   {
      idName: "favorite",
      iconComponent(color: string) {
         return <FavoriteBorderIcon style={{ fill: color }} />;
      },
   },
   {
      idName: "inProgress",
      iconComponent(color: string) {
         return <CachedIcon style={{ fill: color }} />;
      },
   },
   {
      idName: "finished",
      iconComponent(color: string) {
         return <CheckCircleOutlineIcon style={{ fill: color }} />;
      },
   },
];
