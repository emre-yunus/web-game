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

    useEffect(() => localStorage.setItem("productionManagerAmount", JSON.stringify(productionManagerAmount)), [productionManagerAmount]);
    useEffect(() => localStorage.setItem("productionManagerEfficiency", JSON.stringify(productionManagerEfficiency)), [productionManagerEfficiency]);

    const api = useMemo(() => ({
        productionManagerAmount, setProductionManagerAmount, productionManagerEfficiency, setProductionManagerEfficiency
    }), [
        productionManagerAmount, setProductionManagerAmount, productionManagerEfficiency, setProductionManagerEfficiency
    ]);

    return <ProductionManagerContext.Provider value={api}>
        {props.children}
    </ProductionManagerContext.Provider>
}

export const useProductionManagerContext = () => useContext(ProductionManagerContext);
