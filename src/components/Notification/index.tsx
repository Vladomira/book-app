import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Notification = () => (
   <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
   />
);
