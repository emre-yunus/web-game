import React, {createContext, useContext, useMemo, useState} from "react";

const ProductionManagerContext = createContext();

export function ProductionManagerProvider(props) {
    const [productionManagerAmount, setProductionManagerAmount] = useState(0);
    const [productionManagerEfficiency, setProductionManagerEfficiency] = useState(1);

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
