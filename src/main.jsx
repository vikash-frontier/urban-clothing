import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import { UserProvider } from "./context/UserContext.jsx";

import "./index.scss";
import { ProductsProvider } from "./context/ProductContext.jsx";
import { CartProvider } from "./context/CartContex.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
