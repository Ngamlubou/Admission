import { createContext, useContext, useState } from "react";

const LayoutContext = createContext();

export function LayoutProvider({ children }) {
    const [focusSearch, setFocusSearch] = useState(null);

    return (
        <LayoutContext.Provider value={{ focusSearch, setFocusSearch }}>
            {children}
        </LayoutContext.Provider>
    );
}

export function useLayout() {
    return useContext(LayoutContext);
}
