import { Box, Button, Image, Input, useDisclosure } from "@chakra-ui/react";
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
        <Box
            __css={{
                width: "100vw",
                height: "13vh",
                boxShadow: "-1px 20px 50px -14px",
                display: "flex",
                alignContent: "center",
            }}>
            <div className="container d-flex justify-content-between">
                <Image src="logo.png"></Image>
                <div className="d-flex w-75">
                    <Input placeholder="Search" />
                    <Button className="ms-2" colorScheme="green">
                        Search
                    </Button>
                    <Button
                        className="ms-2"
                        ref={btnRef}
                        colorScheme="teal"
                        onClick={onOpen}>
                        Pay
                    </Button>
                    <Drawer
                        isOpen={isOpen}
                        placement="right"
                        onClose={onClose}
                        finalFocusRef={btnRef}>
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader>Review your purchaces</DrawerHeader>

                            <DrawerBody></DrawerBody>

                            <DrawerFooter>
                                <Button
                                    variant="outline"
                                    mr={3}
                                    onClick={onClose}>
                                    Cancel
                                </Button>
                                <Button colorScheme="teal">Pay</Button>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
        </Box>
    );
};

export { Navbar };
