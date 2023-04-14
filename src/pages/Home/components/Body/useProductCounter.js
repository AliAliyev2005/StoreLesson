import { Button, ButtonGroup } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import React, { useState } from "react";
import { useBasketContext } from "../../../../context/BasketContext";

function useProductCounter(product) {
    const { basket, setBasket } = useBasketContext();
    const [count, setCount] = useState(basket.find((i) => i.id == product.id)?.quantity || product.quantity || 0);

    function decrement() {
        setCount(count - 1);

        let pIndex = basket.findIndex((p) => p.id == product.id);
        let tempBasket = [...basket];

        if (pIndex != -1) {
            tempBasket[pIndex].quantity -= 1;

            if (tempBasket[pIndex].quantity == 0) {
                let newBasket = tempBasket.filter((p) => p.id != product.id);
                setBasket(newBasket);
            } else {
                setBasket(tempBasket);
            }
        }
    }
    function increment() {
        setCount(count + 1);

        let pIndex = basket.findIndex((p) => p.id == product.id);
        let tempBasket = [...basket];

        if (pIndex != -1) {
            tempBasket[pIndex].quantity += 1;
        } else {
            tempBasket.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1,
            });
        }

        setBasket(tempBasket);
    }

    const Counter = (
        <Flex display={count >= 1 ? "flex" : "none"}>
            <ButtonGroup size="sm" isAttached>
                <Button colorScheme={"teal"} size={"sm"} onClick={decrement}>
                    -
                </Button>
                <Input
                    textAlign={"center"}
                    size={"sm"}
                    w={"55px"}
                    type="number"
                    placeholder="Basic usage"
                    value={count}
                    readOnly
                />
                <Button colorScheme={"teal"} size={"sm"} onClick={increment}>
                    +
                </Button>
            </ButtonGroup>
        </Flex>
    );

    return { Counter, count, increment };
}

export default useProductCounter;
