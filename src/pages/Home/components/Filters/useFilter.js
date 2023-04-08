import { Search2Icon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Collapse,
    Container,
    FormControl,
    FormLabel,
    Heading,
    Select,
    SelectField,
    SimpleGrid,
    useDisclosure,
    VStack,
} from "@chakra-ui/react";
import React from "react";
import useCategory from "./useCategory";
import usePrice from "./usePrice";
import useRating from "./useRating";

function useFilter() {
    const { isOpen, onToggle } = useDisclosure();
    const { Category } = useCategory();
    const { PriceRange } = usePrice();
    const { RatingRange } = useRating();

    const Filter = (
        <Collapse in={isOpen} animateOpacity>
            <Container maxW={"1200px"}>
                <FormControl>
                    <SimpleGrid
                        border={"1px solid teal"}
                        borderRadius={4}
                        p={7}
                        mt={5}
                        bg={"whiteSmoke"}
                        columns={4}
                        spacing={10}
                    >
                        <Box>
                            <FormLabel>Kateqoriya</FormLabel>
                            {Category}
                        </Box>
                        <Box>
                            <FormLabel>Qiymət</FormLabel>
                            {PriceRange}
                        </Box>
                        <Box>
                            <FormLabel>Puan</FormLabel>
                            {RatingRange}
                        </Box>
                        <Box>
                            <FormLabel>VIP</FormLabel>
                            <Select bg={"white"} placeholder="VIP elan" onChange={(e) => console.log(e)}>
                                <option value={true}>Bəli</option>
                                <option value={false}>Xeyr</option>
                            </Select>
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
