import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    useDisclosure,
    Box,
    Button,
    Card,
    CardBody,
    Heading,
    Image,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { createContext, useContext, useState } from "react";
import useProductCounter from "../pages/Home/components/Body/useProductCounter";
import round from "../utils/round";
import { useNavigate } from "react-router-dom";

const BasketContext = createContext();

const BasketProvider = ({ children }) => {
    const [basket, setBasket] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const total = basket.reduce((a, b) => +a + +b.price * +b.quantity, 0);
    const navigate = useNavigate();

    function handleCheckout() {
        navigate("/checkout");
        onClose();
    }

    const BasketItem = ({ data, setBasket }) => {
        const { Counter, count, increment } = useProductCounter(data);

        function handleRemove() {
            setBasket(basket.filter((item) => item.id != data.id));
        }

        return (
            <Card mb={5} height={"85px"} direction={{ base: "column", sm: "row" }} overflow="hidden" variant="outline">
                <Image objectFit="cover" maxW={{ sm: "85px" }} src="https://source.unsplash.com/random/480x270?item" />
                <CardBody p={3} display={"flex"} flexDir={"column"} justifyContent={"center"}>
                    <Box>
                        <Heading size={"md"}>{data?.name}</Heading>
                        <Box>
                            {data.quantity} əd x ${data.price} ={" "}
                            <Box as="span" fontWeight={"bold"}>
                                ${round(data.quantity * data.price)}
                            </Box>
                        </Box>
                    </Box>
                    {/* {Counter} */}
                </CardBody>
                <Button onClick={handleRemove} css={{ borderRadius: "0 5px 5px 0" }} h={"100%"} colorScheme="red">
                    <DeleteIcon />
                </Button>
            </Card>
        );
    };

    const BasketDrawer = (
        <Drawer size={"md"} isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Review your purchaces</DrawerHeader>

                <DrawerBody>
                    {basket.map((item, index) => (
                        <BasketItem key={index} data={item} setBasket={setBasket} />
                    ))}
                </DrawerBody>

                <DrawerFooter>
                    <Button variant="outline" mr={3} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button isDisabled={!total} colorScheme="teal" onClick={handleCheckout}>
                        ${round(total)} Checkout
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );

    return <BasketContext.Provider value={{ BasketDrawer, basket, setBasket, onOpen, total }}>{children}</BasketContext.Provider>;
};

const useBasketContext = () => useContext(BasketContext);

export { BasketProvider, useBasketContext };
