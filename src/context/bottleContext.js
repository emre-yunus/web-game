import {createContext, useContext, useEffect, useMemo, useState} from "react";

const BottleContext = createContext();

export function BottleProvider(props) {
    const [bottleAmount, setBottleAmount] = useState(() => {
        const savedBottleAmount = JSON.parse(localStorage.getItem("bottleAmount"));
        return savedBottleAmount || 0;
    });
    const [productionEfficiency, setProductionEfficiency] = useState(() => {
        const savedProductionEfficiency = JSON.parse(localStorage.getItem("productionEfficiency"));
        return savedProductionEfficiency || 1;
    });

    useEffect(() => localStorage.setItem("bottleAmount", JSON.stringify(bottleAmount)), [bottleAmount]);
    useEffect(() => localStorage.setItem("productionEfficiency", JSON.stringify(productionEfficiency)), [productionEfficiency]);

    const api = useMemo(() => ({
        bottleAmount, setBottleAmount, productionEfficiency, setProductionEfficiency
    }), [
        bottleAmount, setBottleAmount, productionEfficiency, setProductionEfficiency
    ]);

    return <BottleContext.Provider value={api}>
        {props.children}
    </BottleContext.Provider>
}

export const useBottleContext = () => useContext(BottleContext);