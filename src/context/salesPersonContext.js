import React, {createContext, useContext, useMemo, useState} from "react";

const SalesPersonContext = createContext();

export function SalesPersonProvider(props) {
    const [salesPersonAmount, setSalesPersonAmount] = useState(0);
    const [salesPersonEfficiency, setSalesPersonEfficiency] = useState(1);

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