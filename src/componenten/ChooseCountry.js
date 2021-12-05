import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useCurrencyContext} from "../context/currencyContext";

export function ChooseCountry(props) {
    const {country, setCountry} = useCurrencyContext();

    const handleChange = (event) => {
        setCountry(event.target.value);
    };

    return <>
        <FormControl fullWidth>
            <InputLabel>Country</InputLabel>
            <Select
                value={country}
                label="Country"
                onChange={handleChange}
            >
                <MenuItem value={"United States"}>United States</MenuItem>
                <MenuItem value={"Belgium"}>Belgium</MenuItem>
                <MenuItem value={"Japan"}>Japan</MenuItem>
                <MenuItem value={"Turkey"}>Turkey</MenuItem>
            </Select>
        </FormControl>
    </>
}