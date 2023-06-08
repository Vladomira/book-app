import { FC } from "react";
import { useStylesBook } from "./Book.style";
import { Box, Link } from "@mui/material";
import GetAppIcon from "@material-ui/icons/GetApp";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";

interface DownLoadBoxProps {
   pdf: string;
   epub: string;
}
export const DownLoadBox: FC<DownLoadBoxProps> = ({ pdf, epub }) => {
   const classes = useStylesBook();
   const converterLink = "https://www.acsmconverter.com/";

   return (
      <Box className={classes.downloadBox}>
         {pdf && (
            <Link href={pdf} className={classes.downloadLink}>
               <PictureAsPdfIcon className={classes.downloadLink} />
            </Link>
         )}
         {epub && (
            <Link href={epub} className={classes.downloadLink}>
               EPUB
               <GetAppIcon className={classes.downloadLink} />
            </Link>
         )}
         <Link href={`${converterLink}`} className={classes.converter}>
            Converter
         </Link>
      </Box>
   );
};
