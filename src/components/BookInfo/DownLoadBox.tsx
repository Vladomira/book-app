import { FC } from "react";
import { useStylesBook } from "./Book.style";
import { Box, Link } from "@mui/material";

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
               <p
                  className={classes.downloadLink}
                  style={{ marginRight: "10px" }}
               >
                  download
               </p>
            </Link>
         )}
         {epub && (
            <Link href={epub} className={classes.downloadLink}>
               <p className={classes.downloadLink}>download</p>
            </Link>
         )}
         <Link href={`${converterLink}`} className={classes.converter}>
            Converter
         </Link>
      </Box>
   );
};
