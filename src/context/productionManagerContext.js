import React, {createContext, useContext, useEffect, useMemo, useState} from "react";

const ProductionManagerContext = createContext();

export function ProductionManagerProvider(props) {
    const [productionManagerAmount, setProductionManagerAmount] = useState(() => {
        const savedProductionManagerAmount = JSON.parse(localStorage.getItem("productionManagerAmount"));
        return savedProductionManagerAmount || 0;
    });
    const [productionManagerEfficiency, setProductionManagerEfficiency] = useState(() => {
        const savedProductionManagerEfficiency = JSON.parse(localStorage.getItem("productionManagerEfficiency"));
        return savedProductionManagerEfficiency || 1;
    });
    const [productionManagerActive, setProductionManagerActive] = useState(() => {
        return JSON.parse(localStorage.getItem("productionManagerActive")) || false;
    });

    useEffect(() => localStorage.setItem("productionManagerAmount", JSON.stringify(productionManagerAmount)), [productionManagerAmount]);
    useEffect(() => localStorage.setItem("productionManagerEfficiency", JSON.stringify(productionManagerEfficiency)), [productionManagerEfficiency]);
    useEffect(() => localStorage.setItem("productionManagerActive", JSON.stringify(productionManagerActive)), [productionManagerActive]);

    const api = useMemo(() => ({
        productionManagerAmount, setProductionManagerAmount, productionManagerEfficiency, setProductionManagerEfficiency, productionManagerActive, setProductionManagerActive
    }), [
        productionManagerAmount, setProductionManagerAmount, productionManagerEfficiency, setProductionManagerEfficiency, productionManagerActive, setProductionManagerActive
    ]);

    return <ProductionManagerContext.Provider value={api}>
        {props.children}
    </ProductionManagerContext.Provider>
}

export const useProductionManagerContext = () => useContext(ProductionManagerContext);
