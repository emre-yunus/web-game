import React, {createContext, useContext, useEffect, useMemo, useState} from "react";

const SalesManagerContext = createContext();

export function SalesManagerProvider(props) {
    const [salesManagerAmount, setSalesManagerAmount] = useState(() => {
        const savedSalesManagerAmount = JSON.parse(localStorage.getItem("salesManagerAmount"));
        return savedSalesManagerAmount || 0;
    });
    const [salesManagerEfficiency, setSalesManagerEfficiency] = useState(() => {
        const savedSalesManagerEfficiency = JSON.parse(localStorage.getItem("salesManagerEfficiency"));
        return savedSalesManagerEfficiency || 1;
    });
    const [salesManagerUpgradeBought, setSalesManagerUpgradeBought] = useState(() => {
        return JSON.parse(localStorage.getItem("salesManagerUpgradeBought")) || false;
    });

    useEffect(() => localStorage.setItem("salesManagerAmount", JSON.stringify(salesManagerAmount)), [salesManagerAmount]);
    useEffect(() => localStorage.setItem("salesManagerEfficiency", JSON.stringify(salesManagerEfficiency)), [salesManagerEfficiency]);
    useEffect(() => localStorage.setItem("salesManagerUpgradeBought", JSON.stringify(salesManagerUpgradeBought)), [salesManagerUpgradeBought]);

    const api = useMemo(() => ({
        salesManagerAmount, setSalesManagerAmount, salesManagerEfficiency, setSalesManagerEfficiency, salesManagerUpgradeBought, setSalesManagerUpgradeBought
    }), [
        salesManagerAmount, setSalesManagerAmount, salesManagerEfficiency, setSalesManagerEfficiency, salesManagerUpgradeBought, setSalesManagerUpgradeBought
    ]);

    return <SalesManagerContext.Provider value={api}>
        {props.children}
    </SalesManagerContext.Provider>
}

export const useSalesManagerContext = () => useContext(SalesManagerContext);
