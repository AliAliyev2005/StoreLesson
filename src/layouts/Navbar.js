import { Box, Button, Container, Flex, Heading, HStack, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useGlobalContext } from "../context/GlobalContext";
import { Search2Icon } from "@chakra-ui/icons";
import { BsCart3 } from "react-icons/bs";
import { ImFilter } from "react-icons/im";
import React from "react";
import { useBasketContext } from "../context/BasketContext";

function Navbar() {
    const { onOpen: onOpenBasket, BasketDrawer } = useBasketContext();
    const { onToggleFilter } = useGlobalContext();

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
                        <Button rightIcon={<ImFilter />} onClick={onToggleFilter}>
                            Filter
                        </Button>
                        <Button rightIcon={<BsCart3 />} onClick={onOpenBasket}>
                            Səbət
                        </Button>
                    </HStack>
                </Flex>
            </Container>
            {BasketDrawer}
        </Box>
    );
}

export default Navbar;
