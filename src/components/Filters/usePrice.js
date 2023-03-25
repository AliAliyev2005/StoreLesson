import { Input, HStack, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import React from "react";

function usePrice() {
    const PriceRange = (
        <HStack spacing={4}>
            <InputGroup>
                <InputLeftAddon children="₼" />
                <Input placeholder="Min" />
            </InputGroup>
            <InputGroup>
                <InputLeftAddon children="₼" />
                <Input placeholder="Max" />
            </InputGroup>
        </HStack>
    );

    return { PriceRange };
}

export default usePrice;
