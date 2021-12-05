import React, {createContext, useContext, useEffect, useMemo, useState} from 'react';
import {fetchCurrencyByCountry} from "../utilities/fetchCurrencyByCountry";
import {fetchAllCountries} from "../utilities/fetchAllCountries";

const CurrencyContext = createContext();

export function CurrencyProvider(props) {
    const [currencySymbol, setCurrencySymbol] = useState("");
    const [allCountries, setAllCountries] = useState([]);
    const [country, setCountry] = useState("United States");
    const [value, setValue] = useState();

    useMemo(async () => {
        const symbol = await fetchCurrencyByCountry(country);
        await setCurrencySymbol(String(symbol.symbol));
        console.log(symbol);
    }, [country]);

    useEffect(async () => {
        const allCountries = await fetchAllCountries();
        setAllCountries((prevState) => {
            return {...prevState, ...allCountries}
        });
        console.log(`All countries`, allCountries.countries);
    }, [value]);

    const api = useMemo(
        () => ({
            currencySymbol, setCurrencySymbol, country, setCountry, allCountries, setAllCountries
        }),
        [
            currencySymbol, setCurrencySymbol, country, setCountry, allCountries, setAllCountries
        ]
    );

    return <CurrencyContext.Provider value={api}>
        {props.children}
    </CurrencyContext.Provider>
}

export const useCurrencyContext = () => useContext(CurrencyContext);