import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";

function ProductsList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("data/products.json").then((res) => setProducts(res.data));
    }, []);

    return (
        <div>
            <Container maxW={"1200px"}>
                <Heading my={5}>Məhsullar</Heading>
                <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(250px, 1fr))">
                    {products.map((p, index) => (
                        <Product key={index} data={p} />
                    ))}
                </SimpleGrid>
            </Container>
        </div>
    );
}

export default ProductsList;
