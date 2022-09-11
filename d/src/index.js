import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/homePage";
import Payment from "./pages/paymentPage";
import Product from "./pages/productPage";
import ErrorPage from "./pages/errorPage";
import CryptoCurrencylist from "./pages/cryptoCurrencylist";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <div>
    <div>Our App</div>  
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/payment" element={<Payment />}>
        <Route path=":price" element={<Payment />} />
      </Route>
      <Route path="/product" element={<Product />} />
      <Route path ="/crypto" element={<CryptoCurrencylist />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    </div>
  </BrowserRouter>
);