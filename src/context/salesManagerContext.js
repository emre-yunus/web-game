import React, {createContext, useContext, useMemo, useState} from "react";

const SalesManagerContext = createContext();

export function SalesManagerProvider(props) {
    const [salesManagerAmount, setSalesManagerAmount] = useState(0);
    const [salesManagerEfficiency, setSalesManagerEfficiency] = useState(1);

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
