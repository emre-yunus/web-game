import {useInfoContext} from "../context/infoContext";
import {Alert, Zoom} from "@mui/material";
import {useEffect, useState} from "react";
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export function InfoPanelContent(props) {
    const {errorMessages, setErrorMessages} = useInfoContext();

    return <div>
        {errorMessages.map((val, key) => <JustPrintIt key={key} message={val}/>)}
    </div>
}

function JustPrintIt(props) {
    const {message} = props;
    const [glow, setGlow] = useState(true);

    useEffect(() => {
        let timer1 = setTimeout(() => setGlow(false), 2000);
        return () => {
            clearTimeout(timer1);
        };
    }, [glow])

    if(glow) return <Alert severity="error">{message}</Alert>
    return<></>
}