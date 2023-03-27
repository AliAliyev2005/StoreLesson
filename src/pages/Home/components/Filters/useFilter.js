import { Search2Icon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Collapse,
    Container,
    FormControl,
    FormLabel,
    Heading,
    SimpleGrid,
    useDisclosure,
    VStack,
} from "@chakra-ui/react";
import React from "react";
import useCategory from "./useCategory";
import usePrice from "./usePrice";

function useFilter() {
    const { isOpen, onToggle } = useDisclosure();
    const { Category } = useCategory();
    const { PriceRange } = usePrice();

    const Filter = (
        <Collapse in={isOpen} animateOpacity>
            <Container maxW={"1200px"}>
                <FormControl>
                    <SimpleGrid border={"1px solid teal"} borderRadius={4} p={7} mt={5} bg={"whiteSmoke"} columns={4} spacing={10}>
                        <Box>
                            <FormLabel>Kateqoriya</FormLabel>
                            {Category}
                        </Box>
                        <Box>
                            <FormLabel>Qiymət</FormLabel>
                            {PriceRange}
                        </Box>
                        <Button colorScheme={"teal"} leftIcon={<Search2Icon />}>
                            Axtar
                        </Button>
                    </SimpleGrid>
                </FormControl>
            </Container>
        </Collapse>
    );

    return { onToggle, Filter };
}

export default useFilter;
