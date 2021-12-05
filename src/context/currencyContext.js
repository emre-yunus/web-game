import React, {createContext, useContext, useMemo, useState} from 'react';

const CurrencyContext = createContext();

export function CurrencyProvider(props) {
    const [currencySymbol, setCurrencySymbol] = useState("");
    const [country, setCountry] = useState("United States");

    const api = useMemo(
        () => ({
            currencySymbol, setCurrencySymbol, country, setCountry
        }),
        [
            currencySymbol, setCurrencySymbol, country, setCountry
        ]
    );

    return <CurrencyContext.Provider value={api}>
        {props.children}
    </CurrencyContext.Provider>
}

export const useCurrencyContext = () => useContext(CurrencyContext);