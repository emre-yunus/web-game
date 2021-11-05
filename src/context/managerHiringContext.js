import React, {createContext, useContext, useMemo, useState} from "react";

const ManagerHiringContext = createContext();

export function ManagerHiringProvider(props) {
    const [productionManagerHiring, setProductionManagerHiring] = useState(false);
    const [salesManagerHiring, setSalesManagerHiring] = useState(false);

    const api = useMemo(() => ({
        productionManagerHiring, setProductionManagerHiring, salesManagerHiring, setSalesManagerHiring
    }), [
        productionManagerHiring, setProductionManagerHiring, salesManagerHiring, setSalesManagerHiring
    ]);

    return <ManagerHiringContext.Provider value={api}>
        {props.children}
    </ManagerHiringContext.Provider>
}

export const useManagerHiringContext = () => useContext(ManagerHiringContext);
