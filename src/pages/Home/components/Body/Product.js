import { Box, Image, Flex, Badge, Text, Button } from "@chakra-ui/react";
import { MdStar } from "react-icons/md";

function Product(props) {
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
            <Text mt={2}>Modern, Chic Penthouse with Mountain, City & Sea Views</Text>
            <Flex mt={2} alignItems={"center"} justifyContent={"space-between"}>
                <Text fontSize="2xl" lineHeight="short" fontWeight="semibold">
                    $119
                </Text>
                {/* <ProductCounter id={props.productId} /> */}
                <Button colorScheme={"teal"} size={"sm"}>
                    Səbətə əlavə et
                </Button>
            </Flex>
        </Box>
    );
}

export default Product;
