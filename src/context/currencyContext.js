import React, {createContext, useContext, useMemo, useState} from 'react';

const CurrencyContext = createContext();

export function CurrencyProvider(props) {
    const [currencySymbol, setCurrencySymbol] = useState("");

    const api = useMemo(
        () => ({
            currencySymbol, setCurrencySymbol
        }),
        [
            currencySymbol, setCurrencySymbol
        ]
    );

    return <CurrencyContext.Provider value={api}>
        {props.children}
    </CurrencyContext.Provider>
}

export const useCurrencyContext = () => useContext(CurrencyContext);