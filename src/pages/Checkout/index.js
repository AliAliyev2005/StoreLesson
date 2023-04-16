import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import CartInformation from "./components/CartInfo/CartInfo";

function Checkout() {
    return (
        <Container maxW={"1200px"}>
            <Flex>
                <Box w={"60%"}>
                    <Heading>Checkout</Heading>
                </Box>
                <Box w={"40%"} bg={"whitesmoke"} h={1000}>
                    <CartInformation />
                </Box>
            </Flex>
        </Container>
    );
}

export default Checkout;
