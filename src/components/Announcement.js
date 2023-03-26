import { Button, Container, Flex, Link, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";

function Announcement() {
    return (
        <Container maxW={"1200px"}>
            <div>
                <Flex justifyContent={"space-between"}>
                    <Link color={"gray.500"}>+994 55 698 74 52</Link>
                    <Menu>
                        <MenuButton>Profil</MenuButton>
                        <MenuList>
                            <MenuItem>Download</MenuItem>
                            <MenuItem>Create a Copy</MenuItem>
                            <MenuItem>Mark as Draft</MenuItem>
                            <MenuItem>Delete</MenuItem>
                            <MenuItem>Attend a Workshop</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </div>
        </Container>
    );
}

export default Announcement;
