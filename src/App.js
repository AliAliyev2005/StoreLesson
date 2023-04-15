import Router from "./Router";
import Announcement from "./layouts/Announcement";
import Navbar from "./layouts/Navbar";

function App() {
    return (
        <div className="app">
            <Announcement />
            <Navbar />
            <Router />
        </div>
    );
}

export default App;
