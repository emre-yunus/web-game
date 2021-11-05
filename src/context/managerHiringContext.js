import React, {createContext, useContext, useEffect, useMemo, useState} from "react";

const ManagerHiringContext = createContext();

export function ManagerHiringProvider(props) {
    const [productionManagerHiring, setProductionManagerHiring] = useState(() => {
        const savedProductionManagerHiring = JSON.parse(localStorage.getItem("productionManagerHiring"));
        return savedProductionManagerHiring || false;
    });
    const [salesManagerHiring, setSalesManagerHiring] = useState(() => {
        const savedSalesManagerHiring = JSON.parse(localStorage.getItem("salesManagerHiring"));
        return savedSalesManagerHiring || false;
    });

    useEffect(() => localStorage.setItem("productionManagerHiring", JSON.stringify(productionManagerHiring)), [productionManagerHiring]);
    useEffect(() => localStorage.setItem("salesManagerHiring", JSON.stringify(salesManagerHiring)), [salesManagerHiring]);

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
