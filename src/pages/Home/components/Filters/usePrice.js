import { Input, HStack, InputGroup, InputLeftAddon, InputLeftElement } from "@chakra-ui/react";
import React from "react";

function usePrice() {
    const PriceRange = (
        <HStack spacing={4}>
            <InputGroup>
                <InputLeftElement children="₼" />
                <Input bg={"white"} placeholder="Min" />
            </InputGroup>
            <InputGroup>
                <InputLeftElement children="₼" />
                <Input bg={"white"} placeholder="Max" />
            </InputGroup>
        </HStack>
    );

    return { PriceRange };
}

export default usePrice;
