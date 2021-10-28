import {Box, Button, IconButton, Stack, Tooltip, tooltipClasses, styled} from "@mui/material";
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import WorkIcon from '@mui/icons-material/Work';
import React from "react";

const UpgradeTooltip = styled(({ className, ...props }) => (
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


export function UpgradesPanelContent(props) {
    return <>
        <Stack p={2} spacing={2} direction={"row"} justifyContent={"center"}>
            <UpgradeTooltip title={<>
                <h5>COST: €800</h5>
                <div>Workers produce (workerEfficiency) bottles per second</div>
            </>
            } followCursor>
                <Button variant={"contained"} startIcon={<AccessibilityNewIcon sx={{fontSize: 50}}/>}>
                    WORKER
                </Button>
            </UpgradeTooltip>

            <UpgradeTooltip title={<>
                <h5>COST: €100.000</h5>
                <div>Production managers hire (productionManagerEfficiency) workers per second</div>
            </>
            } followCursor>
                <Button variant={"contained"} startIcon={<WorkIcon sx={{fontSize: 50}}/>}>
                    PRODUCTION MANAGER
                </Button>
            </UpgradeTooltip>
        </Stack>

        <Stack p={2} spacing={2} direction={"row"} justifyContent={"center"}>
            <UpgradeTooltip title={<>
                <h5>COST: €800</h5>
                <div>Sales people sell (salesEfficiency) bottles per second</div>
            </>
            } followCursor>
                <Button color="success" variant={"contained"} startIcon={<AccessibilityNewIcon sx={{fontSize: 50}}/>}>
                    SALESPERSON
                </Button>
            </UpgradeTooltip>

            <UpgradeTooltip title={<>
                <h5>COST: €100.000</h5>
                <div>Sales managers hire (SalesManagerEfficiency) sales people per second</div>
            </>
            } followCursor>
                <Button color="success" variant={"contained"} startIcon={<WorkIcon sx={{fontSize: 50}}/>}>
                    SALES MANAGER
                </Button>
            </UpgradeTooltip>
        </Stack>
    </>
}