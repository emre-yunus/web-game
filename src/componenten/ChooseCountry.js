import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useCurrencyContext} from "../context/currencyContext";

export function ChooseCountry(props) {
    const {country, setCountry, allCountries} = useCurrencyContext();

    console.log("all countries.......")
    console.log(allCountries)
    console.log("current country.....")
    console.log(country)

    const handleChange = (event) => {
        console.log(event.target.value);
        setCountry(event.target.value);
    };

    const landen = ["United States", "Belgium", "Japan"];

    if(allCountries.length == 0) {return null;}
    return <>
        <FormControl fullWidth>
            <InputLabel>Country</InputLabel>
            <Select
                value={country}
                label="Country"
                onChange={handleChange}
            >
                {allCountries.countries.map((country) => <MenuItem value={country}>{country}</MenuItem>)}
            </Select>
        </FormControl>
    </>
}