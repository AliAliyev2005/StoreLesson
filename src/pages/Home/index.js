import { useGlobalContext } from "../../context/GlobalContext";
import ProductsList from "./components/Body/ProductsList";

function Home() {
    const { Filter } = useGlobalContext();

    return (
        <div>
            {Filter}
            <ProductsList />
        </div>
    );
}

export default Home;
