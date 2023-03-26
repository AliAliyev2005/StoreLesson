import { Box, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import useCategory from "./useCategory";
import usePrice from "./usePrice";

function Filter() {
    const { Category } = useCategory();
    const { PriceRange } = usePrice();

    return (
        <Box p={4}>
            <Heading>Filter</Heading>
            <VStack spacing={4}>
                {Category}
                {PriceRange}
            </VStack>
        </Box>
    );
}

export default Filter;
