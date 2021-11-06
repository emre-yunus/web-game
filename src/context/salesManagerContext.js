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
    const [salesManagerActive, setSalesManagerActive] = useState(() => {
        return JSON.parse(localStorage.getItem("salesManagerActive")) || false;
    });

    useEffect(() => localStorage.setItem("salesManagerAmount", JSON.stringify(salesManagerAmount)), [salesManagerAmount]);
    useEffect(() => localStorage.setItem("salesManagerEfficiency", JSON.stringify(salesManagerEfficiency)), [salesManagerEfficiency]);
    useEffect(() => localStorage.setItem("salesManagerActive", JSON.stringify(salesManagerActive)), [salesManagerActive]);

    const api = useMemo(() => ({
        salesManagerAmount, setSalesManagerAmount, salesManagerEfficiency, setSalesManagerEfficiency, salesManagerActive, setSalesManagerActive
    }), [
        salesManagerAmount, setSalesManagerAmount, salesManagerEfficiency, setSalesManagerEfficiency, salesManagerActive, setSalesManagerActive
    ]);

    return <SalesManagerContext.Provider value={api}>
        {props.children}
    </SalesManagerContext.Provider>
}

export const useSalesManagerContext = () => useContext(SalesManagerContext);
