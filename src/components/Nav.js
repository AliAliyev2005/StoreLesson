import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    HStack,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightAddon,
    InputRightElement,
} from "@chakra-ui/react";
import useBasket from "../pages/Home/hooks/useBasket";
import { Search2Icon } from "@chakra-ui/icons";
import { BsCart3 } from "react-icons/bs";
import React from "react";

function Nav() {
    const { onOpen, BasketDrawer } = useBasket();

    return (
        <Box h={"60px"} bg="teal.400">
            <Container h={"100%"} maxW={"1200px"}>
                <Flex h={"100%"} justifyContent={"space-between"} alignItems={"center"}>
                    <Heading color={"white"}>store.az</Heading>
                    <InputGroup maxW={"800px"}>
                        <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em" children={<Search2Icon />} />
                        <Input bg={"white"} placeholder="Axtarış" />
                    </InputGroup>
                    <HStack>
                        <Button rightIcon={<BsCart3 />} onClick={onOpen}>
                            Səbət
                        </Button>
                    </HStack>
                </Flex>
            </Container>
            {BasketDrawer}
        </Box>
    );
}

export default Nav;
