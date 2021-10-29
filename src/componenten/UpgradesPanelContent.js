import {Box, Button, IconButton, Stack, Tooltip, tooltipClasses, styled} from "@mui/material";
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import WorkIcon from '@mui/icons-material/Work';
import {HtmlTooltip} from "./Tooltips";
import React from "react";

export function UpgradesPanelContent(props) {
    return <>
        <Stack p={2} spacing={2} direction={"row"} justifyContent={"center"}>
            <HtmlTooltip title={<>
                <h5>COST: €800</h5>
                <div>Workers produce (workerEfficiency) bottles per second</div>
            </>
            } followCursor>
                <Button variant={"contained"} startIcon={<AccessibilityNewIcon sx={{fontSize: 50}}/>}>
                    WORKER
                </Button>
            </HtmlTooltip>

            <HtmlTooltip title={<>
                <h5>COST: €100.000</h5>
                <div>Production managers hire (productionManagerEfficiency) workers per second</div>
            </>
            } followCursor>
                <Button variant={"contained"} startIcon={<WorkIcon sx={{fontSize: 50}}/>}>
                    PRODUCTION MANAGER
                </Button>
            </HtmlTooltip>
        </Stack>

        <Stack p={2} spacing={2} direction={"row"} justifyContent={"center"}>
            <HtmlTooltip title={<>
                <h5>COST: €800</h5>
                <div>Sales people sell (salesEfficiency) bottles per second</div>
            </>
            } followCursor>
                <Button color="success" variant={"contained"} startIcon={<AccessibilityNewIcon sx={{fontSize: 50}}/>}>
                    SALESPERSON
                </Button>
            </HtmlTooltip>

            <HtmlTooltip title={<>
                <h5>COST: €100.000</h5>
                <div>Sales managers hire (SalesManagerEfficiency) sales people per second</div>
            </>
            } followCursor>
                <Button color="success" variant={"contained"} startIcon={<WorkIcon sx={{fontSize: 50}}/>}>
                    SALES MANAGER
                </Button>
            </HtmlTooltip>
        </Stack>
    </>
}