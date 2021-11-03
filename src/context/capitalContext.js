import {createContext, useContext, useMemo, useState} from "react";

const CapitalContext = createContext();

export function CapitalProvider(props) {
    const [capitalAmount, setCapitalAmount] = useState(0);
    const [salesEfficiency, setSalesEfficiency] = useState(1);

    const api = useMemo(() => ({
        capitalAmount, setCapitalAmount,salesEfficiency, setSalesEfficiency
    }), [
        capitalAmount, setCapitalAmount, salesEfficiency,setSalesEfficiency
    ]);

    return <CapitalContext.Provider value={api}>
        {props.children}
    </CapitalContext.Provider>
}

export const useCapitalContext = () => useContext(CapitalContext);