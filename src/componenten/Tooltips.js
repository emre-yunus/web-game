import {styled, Tooltip, tooltipClasses} from "@mui/material";
import React from "react";

export const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 400,
        fontSize: theme.typography.pxToRem(15),
        border: '1px solid #dadde9',
    },
}));