import { Select } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

function useCategory() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get("data/categories.json").then((res) => setCategories(res.data));
    }, []);

    const Category = (
        <Select placeholder="Kateqoriya" onChange={() => console.log("filter")} bg={"white"}>
            {categories.map((category) => (
                <option value={category.id}>{category.name}</option>
            ))}
        </Select>
    );

    return { Category };
}

export default useCategory;
