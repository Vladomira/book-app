import { PropsWithChildren } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@material-ui/icons/Close";

type ModalProps = { setIsOpen: (prop: boolean) => void };
// change to Portal
export const ModalWrapper = ({
   setIsOpen,
   children,
}: PropsWithChildren<ModalProps>) => {
   return (
      <div
         style={{
            position: "fixed",
            top: "0",
            left: "0",
            height: "100vh",
            width: " 100vw",
            backgroundColor: " rgba(0, 0, 0, 0.2)",
            scale: 1,
            opacity: 1,
            transition:
               " opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),  transform 250ms cubic-bezier(0.4, 0, 0.2, 1)",
         }}
      >
         <div
            style={{
               maxWidth: "610px",
               padding: "20px 30px",
               width: "100vw",
               position: "absolute",
               backgroundColor: "#fff",
               top: " 50%",
               left: "50%",
               transform: "translate(-50%, -50%) rotate(1turn) scaleX(1)",
               borderRadius: "4px",
               opacity: "1",
               transition:
                  "opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),    transform 250ms cubic-bezier(0.4, 0, 0.2, 1) ",
            }}
         >
            <IconButton
               color="inherit"
               onClick={() => setIsOpen(false)}
               sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "auto",
                  height: "30px",
                  width: "30px",
                  background: "transparent",
                  bordeRradius: "50%",
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                  transition: "color 250ms cubic-bezier(0.4, 0, 0.2, 1)",
               }}
            >
               <CloseIcon />
            </IconButton>
            {children}
         </div>
      </div>
   );
};
