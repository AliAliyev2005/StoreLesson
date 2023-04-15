import { Avatar, AvatarBadge, Flex, Text } from "@chakra-ui/react";
import React from "react";

function CartInfoItem({ data }) {
    return (
        <Flex w={"100%"} alignItem={"center"}>
            <Avatar borderRadius={5} h={"60px"} w={"60px"}>
                <AvatarBadge top={"-15px"} right={"-5px"} fontSize={"14px"} border={"none"} bg="gray" boxSize="1.5em">
                    {data.quantity}
                </AvatarBadge>
            </Avatar>
            <Flex ms={5} w={"100%"} justifyContent={"space-between"} alignItems={"center"}>
                <Text fontWeight={600}>{data.name}</Text>
                <Text fontWeight={600}>${data.price}</Text>
            </Flex>
        </Flex>
    );
}

export default CartInfoItem;
