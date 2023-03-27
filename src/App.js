import Announcement from "./layouts/Announcement";
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";

function App() {
    return (
        <div className="app">
            <Announcement />
            <Navbar />
            <Home />
        </div>
    );
}

export default App;
