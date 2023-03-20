import { Box, Button, Image, Input, useDisclosure, Grid, GridItem, Container, HStack } from "@chakra-ui/react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
        <Grid
            templateAreas={`"logo search"
                            "category filter"
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
                <HStack>
                    <Input placeholder="Search" />
                    <Button className="ms-2" colorScheme="green">
                        Search
                    </Button>
                </HStack>
            </GridItem>
            <GridItem area={"category"} bg="green.300"></GridItem>
            <GridItem area={"products"} bg="purple.300"></GridItem>
            <GridItem area={"filter"} bg="blue.300"></GridItem>
        </Grid>
        // <Box>
        //
        //
        //
        //     <Button className="ms-2" ref={btnRef} colorScheme="teal" onClick={onOpen}>
        //         Pay
        //     </Button>
        //     <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
        //         <DrawerOverlay />
        //         <DrawerContent>
        //             <DrawerCloseButton />
        //             <DrawerHeader>Review your purchaces</DrawerHeader>

        //             <DrawerBody></DrawerBody>

        //             <DrawerFooter>
        //                 <Button variant="outline" mr={3} onClick={onClose}>
        //                     Cancel
        //                 </Button>
        //                 <Button colorScheme="teal">Pay</Button>
        //             </DrawerFooter>
        //         </DrawerContent>
        //     </Drawer>
        // </Box>
    );
};

export { Navbar };
