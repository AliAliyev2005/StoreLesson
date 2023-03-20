import { Container } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar.js";

function App() {
    return (
        <div className="app">
            <Container maxW="1200px">
                <Navbar />
            </Container>
        </div>
    );
}

export default App;
