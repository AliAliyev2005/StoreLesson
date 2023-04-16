import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="*" element={<h1>404</h1>}></Route>
        </Routes>
    );
}

export default Router;
