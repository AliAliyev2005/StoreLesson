import { Button, ButtonGroup } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import React, { useState } from "react";

function useProductCounter(product) {
    const [count, setCount] = useState(0);

    function decrement() {
        setCount(count - 1);

        let basket = JSON.parse(localStorage.getItem("basket")) ?? [];
        let pIndex = basket.findIndex((p) => p.id == product.id);

        if (pIndex != -1) {
            basket[pIndex].quantity -= 1;

            if (basket[pIndex].quantity == 0) {
                let newBasket = basket.filter((p) => p.id != product.id);
                localStorage.setItem("basket", JSON.stringify(newBasket));
            } else {
                localStorage.setItem("basket", JSON.stringify(basket));
            }
        }
    }
    function increment() {
        setCount(count + 1);

        let basket = JSON.parse(localStorage.getItem("basket")) ?? [];
        let pIndex = basket.findIndex((p) => p.id == product.id);

        if (pIndex != -1) {
            basket[pIndex].quantity += 1;
        } else {
            basket.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1,
            });
        }

        localStorage.setItem("basket", JSON.stringify(basket));
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
