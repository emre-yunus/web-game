import React, {createContext, useContext, useEffect, useMemo, useState} from "react";

const SalesPersonContext = createContext();

export function SalesPersonProvider(props) {
    const [salesPersonAmount, setSalesPersonAmount] = useState(() => {
        const savedSalesPersonAmount = JSON.parse(localStorage.getItem("salesPersonAmount"));
        return savedSalesPersonAmount || 0;
    });
    const [salesPersonEfficiency, setSalesPersonEfficiency] = useState(() => {
        const savedSalesPersonEfficiency = JSON.parse(localStorage.getItem("salesPersonEfficiency"));
        return savedSalesPersonEfficiency ||1;
    });

    useEffect(() => localStorage.setItem("salesPersonAmount", JSON.stringify(salesPersonAmount)), [salesPersonAmount]);
    useEffect(() => localStorage.setItem("salesPersonEfficiency", JSON.stringify(salesPersonEfficiency)), [salesPersonEfficiency]);

    const api = useMemo(() => ({
        salesPersonAmount, setSalesPersonAmount, salesPersonEfficiency, setSalesPersonEfficiency
    }), [
        salesPersonAmount, setSalesPersonAmount, salesPersonEfficiency, setSalesPersonEfficiency
    ]);

    return <SalesPersonContext.Provider value={api}>
        {props.children}
    </SalesPersonContext.Provider>
}

export const useSalesPersonContext = () => useContext(SalesPersonContext);