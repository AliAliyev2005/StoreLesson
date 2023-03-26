import { Select } from "@chakra-ui/react";
import React from "react";

function useCategory() {
    const data = []; // TODO : get data

    const Category = (
        <Select placeholder="Kateqoriya" onChange={() => console.log("som")}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </Select>
    );

    return { Category };
}

export default useCategory;
