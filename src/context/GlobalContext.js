import { createContext, useContext } from "react";
import useFilter from "../pages/Home/components/Filters/useFilter";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const { onToggle: onToggleFilter, Filter } = useFilter();

    return (
        <GlobalContext.Provider value={{ onToggleFilter, Filter }}>
            {children}
        </GlobalContext.Provider>
    );
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
