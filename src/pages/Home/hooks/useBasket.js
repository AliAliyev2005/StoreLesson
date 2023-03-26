import { Button, useDisclosure } from "@chakra-ui/react";
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

function useBasket() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const BasketDrawer = (
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Review your purchaces</DrawerHeader>

                <DrawerBody></DrawerBody>

                <DrawerFooter>
                    <Button variant="outline" mr={3} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button colorScheme="teal">Pay</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );

    return { onOpen, BasketDrawer };
}

export default useBasket;
