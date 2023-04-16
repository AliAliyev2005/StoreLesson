import { Box, Button, Divider, Flex, HStack, Input, Text, VStack } from "@chakra-ui/react";
import React from "react";
import CartInfoItem from "./CartInfoItem";
import { useBasketContext } from "../../../../context/BasketContext";

function CartInfo() {
    const { basket, total } = useBasketContext();

    console.log(basket);

    return (
        <Box p={5}>
            <VStack spacing={5}>
                {basket.map((item) => (
                    <CartInfoItem data={item} />
                ))}
            </VStack>
            <Divider my={5} />
            <HStack spacing={3}>
                <Input bg={"white"} placeContent={"Gift card or discount code"}></Input>
                <Button colorScheme={"teal"}>Apply</Button>
            </HStack>
            <Divider my={5} />
            <Flex justifyContent={"space-between"}>
                <Text colorScheme={"gray"} fontSize={"0.8em"} fontWeight={600}>
                    Subtotal
                </Text>
                <Text fontSize={"0.8em"} fontWeight={600}>
                    ${total}
                </Text>
            </Flex>
            <Flex justifyContent={"space-between"}>
                <Text colorScheme={"gray"} fontSize={"0.8em"} fontWeight={600}>
                    Shipping
                </Text>
                <Text fontSize={"0.8em"} fontWeight={600}>
                    Calculated at next step
                </Text>
            </Flex>
            <Divider my={5} />
        </Box>
    );
}

export default CartInfo;
