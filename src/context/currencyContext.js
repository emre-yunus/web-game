import React, {createContext, useContext, useMemo, useState} from 'react';
import {fetchCurrencyByCountry} from "../utilities/fetchCurrencyByCountry";

const CurrencyContext = createContext();

export function CurrencyProvider(props) {
    const [currencySymbol, setCurrencySymbol] = useState("");
    const [country, setCountry] = useState("United States");

    useMemo(async () => {
        const symbol = await fetchCurrencyByCountry(country);
        await setCurrencySymbol(String(symbol.symbol));
        console.log(symbol);
    }, [country]);

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