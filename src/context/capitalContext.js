import {createContext, useContext, useEffect, useMemo, useState} from "react";

const CapitalContext = createContext();

export function CapitalProvider(props) {
    const [capitalAmount, setCapitalAmount] = useState(() => {
        const savedCapitalAmount = JSON.parse(localStorage.getItem("capitalAmount"));
        return savedCapitalAmount || 0;
    });
    const [salesEfficiency, setSalesEfficiency] = useState(() => {
        const savedSalesEfficiency = JSON.parse(localStorage.getItem("salesEfficiency"));
        return savedSalesEfficiency || 1;
    });
    const [spentCapitalAmount, setSpentCapitalAmount] = useState(() => {
        return JSON.parse(localStorage.getItem("spentCapitalAmount")) || 0;
    })

    useEffect(() => localStorage.setItem("capitalAmount", JSON.stringify(capitalAmount)), [capitalAmount]);
    useEffect(() => localStorage.setItem("salesEfficiency", JSON.stringify(salesEfficiency)), [salesEfficiency]);
    useEffect(() => localStorage.setItem("spentCapitalAmount", JSON.stringify(spentCapitalAmount)), [spentCapitalAmount]);

    const api = useMemo(() => ({
        capitalAmount, setCapitalAmount,salesEfficiency, setSalesEfficiency, spentCapitalAmount, setSpentCapitalAmount
    }), [
        capitalAmount, setCapitalAmount, salesEfficiency,setSalesEfficiency, spentCapitalAmount, setSpentCapitalAmount
    ]);

    return <CapitalContext.Provider value={api}>
        {props.children}
    </CapitalContext.Provider>
}

export const useCapitalContext = () => useContext(CapitalContext);