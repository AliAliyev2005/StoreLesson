import { Box, Image, Flex, Badge, Text, Button } from "@chakra-ui/react";
import { MdStar } from "react-icons/md";
import useProductCounter from "./useProductCounter";

function Product({ data }) {
    const { Counter, count, increment } = useProductCounter(data);

    return (
        <Box p="5" maxW="320px" borderWidth="1px" borderRadius={10}>
            <Image borderRadius="md" src={`https://source.unsplash.com/random/480x270?item`} />
            <Flex align="baseline" justifyContent={"space-between"} mt={2}>
                {data.is_vip ? <Badge colorScheme="yellow">VIP</Badge> : <span></span>}
                <Flex mt={2} align="center">
                    <Box as={MdStar} color="orange.400" />
                    <Text ml={1} fontSize="sm">
                        <b>{data.rating}</b>
                    </Text>
                </Flex>
            </Flex>
            <Text mt={2}>{data.name}</Text>
            <Flex mt={2} alignItems={"center"} justifyContent={"space-between"}>
                <Text fontSize="2xl" lineHeight="short" fontWeight="semibold">
                    ${data.price}
                </Text>
                <Flex>
                    <Button display={count < 1 ? "block" : "none"} colorScheme={"teal"} size={"sm"} onClick={increment}>
                        Səbətə əlavə et
                    </Button>
                    {Counter}
                </Flex>
            </Flex>
        </Box>
    );
}

export default Product;
