import {createContext, useContext, useMemo, useState} from "react";

const BottleContext = createContext();

export function BottleProvider(props) {
    const [bottleAmount, setBottleAmount] = useState(0);
    const [productionEfficiency, setProductionEfficiency] = useState(1);

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