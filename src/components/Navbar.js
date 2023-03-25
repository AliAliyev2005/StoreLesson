import { Box, Button, Image, Input, Grid, GridItem, HStack, Flex } from "@chakra-ui/react";
import useBasket from "../hooks/useBasket";
import { BsCart3 } from "react-icons/bs";
import Filter from "./Filters/Filter";

const Navbar = () => {
    const { onOpen, BasketDrawer } = useBasket();

    return (
        <>
            <Grid
                templateAreas={`"logo search"
                            "category products"`}
                gridTemplateRows={"75px 75px 1fr"}
                gridTemplateColumns={"300px 1fr"}
                h="calc(100vh)"
                gap="1"
            >
                <GridItem area={"logo"}>
                    <Image h={"75px"} fit={"cover"} src="logo.png"></Image>
                </GridItem>
                <GridItem area={"search"}>
                    <Flex h={"100%"}>
                        <HStack w={"100%"}>
                            <Input placeholder="Search" />
                            <Box>
                                <Button rightIcon={<BsCart3 />} colorScheme="teal" onClick={onOpen}>
                                    Səbət
                                </Button>
                            </Box>
                        </HStack>
                    </Flex>
                </GridItem>
                <GridItem area={"category"}>
                    <Filter />
                </GridItem>
                <GridItem area={"products"} bg="purple.300"></GridItem>
                <GridItem area={"filter"}></GridItem>
            </Grid>
            {BasketDrawer}
        </>
    );
};

export { Navbar };
