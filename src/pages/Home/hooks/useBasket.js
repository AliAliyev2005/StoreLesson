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
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Image,
    Stack,
    Heading,
    Text,
} from "@chakra-ui/react";

function useBasket() {
    let basket = JSON.parse(localStorage.getItem("basket")) ?? [];

    const { isOpen, onOpen, onClose } = useDisclosure();

    const BasketDrawer = (
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Review your purchaces</DrawerHeader>

                <DrawerBody>
                    {basket.map((card) => {
                        return (
                            <Card
                                margin={"30px 0px"}
                                height={"110px"}
                                direction={{ base: "column", sm: "row" }}
                                overflow="hidden"
                                variant="outline">
                                <Image
                                    objectFit="cover"
                                    maxW={{ base: "25%", sm: "90px" }}
                                    src="https://source.unsplash.com/random/480x270?item"
                                />

                                <Stack>
                                    <CardBody paddingTop={"10px"}>
                                        <Heading
                                            margin={"0px 0px 5px 0px"}
                                            size="sm">
                                            {card.name}
                                        </Heading>
                                    </CardBody>
                                </Stack>
                            </Card>
                        );
                    })}
                </DrawerBody>

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
