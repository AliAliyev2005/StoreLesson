import { Input, HStack, InputGroup, InputLeftAddon, InputLeftElement, Box } from "@chakra-ui/react";
import { MdStar } from "react-icons/md";
import React from "react";

function useRating() {
    const Star = () => <Box as={MdStar} color="orange.400" />;

    const RatingRange = (
        <HStack spacing={4}>
            <InputGroup>
                <InputLeftElement children={<Star />} />
                <Input bg={"white"} placeholder="Min" />
            </InputGroup>
            <InputGroup>
                <InputLeftElement children={<Star />} />
                <Input bg={"white"} placeholder="Max" />
            </InputGroup>
        </HStack>
    );

    return { RatingRange };
}

export default useRating;
