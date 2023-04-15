import React from "react";
import { Route, Routes } from "react-router-dom";
import { useGlobalContext } from "./Contexts/GlobalContex";
import ProductsList from "./pages/Home/components/Body/ProductsList";

const MyRouter = () => {
    const { Filter } = useGlobalContext();

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <div>
                        {Filter}
                        <ProductsList />
                    </div>
                }
            />
            <Route path="/items/:id" element={{}} />
        </Routes>
    );
};

export { MyRouter };
