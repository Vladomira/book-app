import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";

import { store } from "./redux/store";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
   document.getElementById("root") as HTMLElement
);

const modalRoot = document.createElement("div");
modalRoot.setAttribute("id", "modal-root");
document.body.appendChild(modalRoot);

root.render(
   <React.StrictMode>
      <Provider store={store}>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </Provider>
   </React.StrictMode>
);

reportWebVitals();
