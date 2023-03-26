import Announcement from "./components/Announcement";
import Nav from "./components/Nav";
import Home from "./pages/Home/Home";

function App() {
    return (
        <div className="app">
            <Announcement />
            <Nav />
            <Home />
        </div>
    );
}

export default App;
