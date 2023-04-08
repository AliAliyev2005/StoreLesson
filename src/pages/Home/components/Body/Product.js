import { Box, Image, Flex, Badge, Text, Button } from "@chakra-ui/react";
import { MdStar } from "react-icons/md";
import useProductCounter from "./useProductCounter";

function Product({ data }) {
    const { Counter, count, increment } = useProductCounter(data);

    return (
        <Box
            maxW="320px"
            borderWidth="1px"
            display={"flex"}
            flexDir={"column"}
            position={"relative"}
            h={"280px"}
            borderRadius={10}
            _hover={{
                boxShadow: "0 4px 8px 0 rgba(177,181,199,0.48)",
                cursor: "pointer",
            }}>
            <Image
                borderRadius="md"
                style={{ borderRadius: "10px 10px 0px 0px" }}
                src={`https://source.unsplash.com/random/480x270?item`}
            />
            <Box
                p={5}
                pt={0}
                h={"100%"}
                display={"flex"}
                flexDir={"column"}
                justifyContent={"space-between"}>
                <Flex
                    w={"100%"}
                    position={"absolute"}
                    top={0}
                    left={0}
                    px={3}
                    align="baseline"
                    justifyContent={"space-between"}>
                    {data.is_vip ? (
                        <Badge colorScheme="yellow">VIP</Badge>
                    ) : (
                        <span></span>
                    )}
                    <Flex
                        bg={"white"}
                        borderRadius={4}
                        mt={2}
                        px={1}
                        align="center">
                        <Box as={MdStar} color="orange.400" />
                        <Text ml={1} fontSize="sm">
                            <b>{data.rating}</b>
                        </Text>
                    </Flex>
                </Flex>
                <Text mt={2} fontSize={"xl"}>
                    {data.name}
                </Text>
                <Flex
                    mt={2}
                    alignItems={"center"}
                    justifyContent={"space-between"}>
                    <Text
                        fontSize="2xl"
                        lineHeight="short"
                        fontWeight="semibold">
                        {data.price}
                    </Text>
                    <Flex>
                        <Button
                            display={count < 1 ? "block" : "none"}
                            colorScheme={"teal"}
                            size={"sm"}
                            onClick={increment}>
                            Səbətə əlavə et
                        </Button>
                        {Counter}
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
}

export default Product;
