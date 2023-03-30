import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from "@chakra-ui/react";
import {
    Box,
    Button,
    Image,
    Input,
    useDisclosure,
    Grid,
    GridItem,
    Container,
    HStack,
} from "@chakra-ui/react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from "@chakra-ui/react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const [value, setValue] = React.useState("1");

    return (
        <>
            <Grid
                templateAreas={`"logo search"
                            "category filter"
                            "category products"`}
                gridTemplateRows={"75px 75px 1fr"}
                gridTemplateColumns={"300px 1fr"}
                h="calc(100vh)"
                gap="1">
                <GridItem area={"logo"}>
                    <Image h={"75px"} fit={"cover"} src="logo.png"></Image>
                </GridItem>
                <GridItem area={"search"}>
                    <HStack>
                        <Input placeholder="Search" />
                        <Button className="ms-2" colorScheme="green">
                            Search
                        </Button>
                        <Box>
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
                                    <DrawerHeader>
                                        Review your purchaces
                                    </DrawerHeader>

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
                        </Box>
                    </HStack>
                </GridItem>
                <GridItem area={"category"}>
                    <Box __css={{ width: "100%", height: "100%" }}>
                        <Box>
                            <h3></h3>
                        </Box>
                    </Box>
                </GridItem>
                <GridItem area={"products"} bg="purple.300"></GridItem>
                <GridItem area={"filter"}>
                    <Box
                        __css={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                        }}>
                        <RadioGroup onChange={setValue} value={value}>
                            <Box direction="column">
                                <Radio __css={{}} value="1">
                                    First
                                </Radio>
                                <Radio __css={{}} value="2">
                                    Second
                                </Radio>
                                <Radio __css={{}} value="3">
                                    Third
                                </Radio>
                            </Box>
                        </RadioGroup>
                        <Box __css={{ display: "flex" }}>
                            <h3>Min:</h3>
                            <NumberInput size="sm" defaultValue={15}>
                                <NumberInputField focusBorderColor="red.200" />
                                <NumberInputStepper>
                                    <NumberIncrementStepper
                                        bg="green.200"
                                        _active={{ bg: "green.300" }}
                                        children="+"
                                    />
                                    <NumberDecrementStepper
                                        bg="pink.200"
                                        _active={{ bg: "pink.300" }}
                                        children="-"
                                    />
                                </NumberInputStepper>
                            </NumberInput>
                        </Box>
                        <Box __css={{ display: "flex" }}>
                            <h3>Max:</h3>
                            <NumberInput size="sm" defaultValue={15}>
                                <NumberInputField focusBorderColor="red.200" />
                                <NumberInputStepper>
                                    <NumberIncrementStepper
                                        bg="green.200"
                                        _active={{ bg: "green.300" }}
                                        children="+"
                                    />
                                    <NumberDecrementStepper
                                        bg="pink.200"
                                        _active={{ bg: "pink.300" }}
                                        children="-"
                                    />
                                </NumberInputStepper>
                            </NumberInput>
                        </Box>
                    </Box>
                </GridItem>
            </Grid>
        </>
    );
};

export { Navbar };
