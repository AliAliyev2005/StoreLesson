import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Product from "./Product";

function ProductsList() {
    const data = [
        { id: 1, value: 1 },
        { id: 2, value: 3 },
        { id: 3, value: 3 },
        { id: 4, value: 4 },
        { id: 5, value: 5 },
        { id: 6, value: 6 },
        { id: 7, value: 7 },
    ];

    return (
        <div>
            <Container maxW={"1200px"}>
                <Heading my={5}>Məhsullar</Heading>
                <SimpleGrid
                    spacing={4}
                    templateColumns="repeat(auto-fill, minmax(250px, 1fr))">
                    {data.map((p, index) => (
                        <Product index={index} />
                    ))}
                </SimpleGrid>
            </Container>
        </div>
    );
}

export default ProductsList;
