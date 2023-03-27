import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Product from "./Product";

function ProductsList() {
    const data = [1, 2, 3, 4, 5, 6, 7];

    return (
        <div>
            <Container maxW={"1200px"}>
                <Heading my={5}>Məhsullar</Heading>
                <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(250px, 1fr))">
                    {data.map((p, index) => (
                        <Product index={index} />
                    ))}
                </SimpleGrid>
            </Container>
        </div>
    );
}

export default ProductsList;
