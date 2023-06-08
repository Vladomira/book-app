import { Typography } from "@mui/material";
import { FC } from "react";

type TextComponentProps = {
   text: string;
   className?: string;
   color?: string;
};
export const TextComponent: FC<TextComponentProps> = ({
   text,
   className,
   color,
}) => {
   return (
      <Typography className={className} color={color}>
         {text}
      </Typography>
   );
};
