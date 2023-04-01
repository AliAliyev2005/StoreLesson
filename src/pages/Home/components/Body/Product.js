import { Box, Image, Flex, Badge, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import { MdStar } from "react-icons/md";

function Product(index) {
    let id = index;

    const [displayBtn, setDisplayBtn] = useState(true);

    const [count, setCount] = useState(0);

    return (
        <Box p="5" maxW="320px" borderWidth="1px" borderRadius={10}>
            <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />
            <Flex align="baseline" justifyContent={"space-between"} mt={2}>
                <Badge colorScheme="pink">Plus</Badge>
                <Flex mt={2} align="center">
                    <Box as={MdStar} color="orange.400" />
                    <Text ml={1} fontSize="sm">
                        <b>4.84</b> (190)
                    </Text>
                </Flex>
            </Flex>
            <Text mt={2}>
                Modern, Chic Penthouse with Mountain, City & Sea Views
            </Text>
            <Flex mt={2} alignItems={"center"} justifyContent={"space-between"}>
                <Text fontSize="2xl" lineHeight="short" fontWeight="semibold">
                    $119
                </Text>
                {/* <ProductCounter id={props.productId} /> */}
                <Flex>
                    <Button
                        __css={{
                            display: displayBtn ? "block" : "none",
                            fontFamily: "inherit",
                            background: "var(--chakra-colors-teal-500)",
                            textColor: "#fff",
                            borderRadius: "var(--chakra-radii-md)",
                            fontWeight: "var(--chakra-fontWeights-semibold)",
                            transitionProperty:
                                "var(--chakra-transition-property-common)",
                            transitionDuration:
                                "var(--chakra-transition-duration-normal)",
                            height: "var(--chakra-sizes-8)",
                            minWidth: "var(--chakra-sizes-8)",
                            fontSize: "var(--chakra-fontSizes-sm)",
                            paddingInlineStart: "var(--chakra-space-3)",
                            paddingInlineEnd: "var(--chakra-space-3)",
                            transitionProperty:
                                "var(--chakra-transition-property-common)",
                            transitionDuration:
                                "var(--chakra-transition-duration-normal)",
                        }}
                        _hover={{ background: "var(--chakra-colors-teal-600)" }}
                        colorScheme={"teal"}
                        size={"sm"}
                        onClick={() => {
                            setDisplayBtn(false);
                        }}>
                        Səbətə əlavə et
                    </Button>
                    <Button
                        __css={{
                            display: displayBtn ? "none" : "block",
                            marginEnd: "13px",
                            fontFamily: "inherit",
                            background: "var(--chakra-colors-teal-500)",
                            textColor: "#fff",
                            borderRadius: "var(--chakra-radii-md)",
                            fontWeight: "var(--chakra-fontWeights-semibold)",
                            transitionProperty:
                                "var(--chakra-transition-property-common)",
                            transitionDuration:
                                "var(--chakra-transition-duration-normal)",
                            height: "var(--chakra-sizes-8)",
                            minWidth: "var(--chakra-sizes-8)",
                            fontSize: "var(--chakra-fontSizes-sm)",
                            paddingInlineStart: "var(--chakra-space-3)",
                            paddingInlineEnd: "var(--chakra-space-3)",
                            transitionProperty:
                                "var(--chakra-transition-property-common)",
                            transitionDuration:
                                "var(--chakra-transition-duration-normal)",
                        }}
                        _hover={{ background: "var(--chakra-colors-teal-600)" }}
                        colorScheme={"teal"}
                        size={"sm"}
                        onClick={() => {
                            setCount(() => {
                                count++;
                            });
                        }}>
                        +
                    </Button>
                    <Button
                        __css={{
                            display: displayBtn ? "none" : "block",
                            marginStart: "13px",
                            fontFamily: "inherit",
                            background: "var(--chakra-colors-teal-500)",
                            textColor: "#fff",
                            borderRadius: "var(--chakra-radii-md)",
                            fontWeight: "var(--chakra-fontWeights-semibold)",
                            transitionProperty:
                                "var(--chakra-transition-property-common)",
                            transitionDuration:
                                "var(--chakra-transition-duration-normal)",
                            height: "var(--chakra-sizes-8)",
                            minWidth: "var(--chakra-sizes-8)",
                            fontSize: "var(--chakra-fontSizes-sm)",
                            paddingInlineStart: "var(--chakra-space-3)",
                            paddingInlineEnd: "var(--chakra-space-3)",
                            transitionProperty:
                                "var(--chakra-transition-property-common)",
                            transitionDuration:
                                "var(--chakra-transition-duration-normal)",
                        }}
                        _hover={{ background: "var(--chakra-colors-teal-600)" }}
                        colorScheme={"teal"}
                        size={"sm"}
                        onClick={() => {
                            setCount(() => {
                                count--;
                            });
                        }}>
                        -
                    </Button>
                </Flex>
            </Flex>
        </Box>
    );
}

export default Product;
