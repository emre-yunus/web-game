import React, {createContext, useContext, useEffect, useMemo, useState} from "react";

const SalesPersonContext = createContext();

export function SalesPersonProvider(props) {
    const [salesPersonAmount, setSalesPersonAmount] = useState(() => {
        const savedSalesPersonAmount = JSON.parse(localStorage.getItem("salesPersonAmount"));
        return savedSalesPersonAmount || 0;
    });
    const [salesPersonEfficiency, setSalesPersonEfficiency] = useState(() => {
        const savedSalesPersonEfficiency = JSON.parse(localStorage.getItem("salesPersonEfficiency"));
        return savedSalesPersonEfficiency || 1;
    });
    const [salesPersonActive, setSalesPersonActive] = useState(() => {
        return JSON.parse(localStorage.getItem("salesPersonActive")) || false;
    });

    useEffect(() => localStorage.setItem("salesPersonAmount", JSON.stringify(salesPersonAmount)), [salesPersonAmount]);
    useEffect(() => localStorage.setItem("salesPersonEfficiency", JSON.stringify(salesPersonEfficiency)), [salesPersonEfficiency]);
    useEffect(() => localStorage.setItem("salesPersonActive", JSON.stringify(salesPersonActive)), [salesPersonActive]);

    const api = useMemo(() => ({
        salesPersonAmount, setSalesPersonAmount, salesPersonEfficiency, setSalesPersonEfficiency, salesPersonActive, setSalesPersonActive
    }), [
        salesPersonAmount, setSalesPersonAmount, salesPersonEfficiency, setSalesPersonEfficiency, salesPersonActive, setSalesPersonActive
    ]);

    return <SalesPersonContext.Provider value={api}>
        {props.children}
    </SalesPersonContext.Provider>
}

export const useSalesPersonContext = () => useContext(SalesPersonContext);