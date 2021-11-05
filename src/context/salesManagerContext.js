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

    useEffect(() => localStorage.setItem("salesManagerAmount", JSON.stringify(salesManagerAmount)), [salesManagerAmount]);
    useEffect(() => localStorage.setItem("salesManagerEfficiency", JSON.stringify(salesManagerEfficiency)), [salesManagerEfficiency]);

    const api = useMemo(() => ({
        salesManagerAmount, setSalesManagerAmount, salesManagerEfficiency, setSalesManagerEfficiency
    }), [
        salesManagerAmount, setSalesManagerAmount, salesManagerEfficiency, setSalesManagerEfficiency
    ]);

    return <SalesManagerContext.Provider value={api}>
        {props.children}
    </SalesManagerContext.Provider>
}

export const useSalesManagerContext = () => useContext(SalesManagerContext);
