import { PropsWithChildren } from "react";
import ReactDOM from "react-dom";
import CloseIcon from "@material-ui/icons/Close";
import { useStylesModal } from "./Modal.style";
import { Box, Button } from "@material-ui/core";
import { useStylesButtons } from "../CommonStyles/Buttons.style";

type ModalProps = { isOpen: boolean; setIsOpen: (prop: boolean) => void };

export const ModalWrapper = ({
   setIsOpen,
   isOpen,
   children,
}: PropsWithChildren<ModalProps>) => {
   const classes = useStylesModal();
   const btnClass = useStylesButtons();

   if (!isOpen) return null;

   return ReactDOM.createPortal(
      <Box className={classes.overlay}>
         <Box className={classes.modal}>
            <Button
               className={btnClass.closeBtn}
               onClick={() => setIsOpen(false)}
            >
               <CloseIcon />
            </Button>
            {children}
         </Box>
      </Box>,
      document.getElementById("modal-root")!
   );
};
