import {Box, Button, IconButton, Stack, Tooltip, tooltipClasses, styled} from "@mui/material";
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import WorkIcon from '@mui/icons-material/Work';
import {HtmlTooltip} from "./Tooltips";
import React, {forwardRef} from "react";
import {useWorkerContext} from "../context/workerContext";
import {useSalesPersonContext} from "../context/salesPersonContext";
import {useProductionManagerContext} from "../context/productionManagerContext";
import {useSalesManagerContext} from "../context/salesManagerContext";

export function UpgradesPanelContent(props) {
    const {workerActive, setWorkerActive} = useWorkerContext();
    const {salesPersonActive, setSalesPersonActive} = useSalesPersonContext();
    const {productionManagerActive, setProductionManagerActive} = useProductionManagerContext();
    const {salesManagerActive, setSalesManagerActive} = useSalesManagerContext();

    const buyWorkerUpgrade = () => {
        setWorkerActive(true);
    }
    const buySalesPersonUpgrade = () => {
        setSalesPersonActive(true);
    }
    const buyProductionManagerUpgrade = () => {
        setProductionManagerActive(true);
    }
    const buySalesManagerUpgrade = () => {
        setSalesManagerActive(true);
    }

    const WorkerUpgradeButton = forwardRef((props,ref) => {
        if(!workerActive) {
            return <Button onClick={buyWorkerUpgrade} variant={"contained"} startIcon={<AccessibilityNewIcon sx={{fontSize: 50}}/>}>
                WORKER
            </Button>
        }
        return <Button onClick={buyWorkerUpgrade} variant={"contained"} startIcon={<AccessibilityNewIcon sx={{fontSize: 50}}/>} disabled>
            WORKER
        </Button>
    })

    const SalesPersonUpgradeButton = forwardRef((props, ref) => {
        if(!salesPersonActive) {
            return <Button onClick={buySalesPersonUpgrade} color="success" variant={"contained"} startIcon={<AccessibilityNewIcon sx={{fontSize: 50}}/>}>
                SALESPERSON
            </Button>
        }
        return <Button onClick={buySalesPersonUpgrade} color="success" variant={"contained"} startIcon={<AccessibilityNewIcon sx={{fontSize: 50}}/>} disabled>
            SALESPERSON
        </Button>
    })

    const ProductionManagerUpgradeButton = forwardRef((props, ref) => {
        if(!productionManagerActive) {
            return <Button onClick={buyProductionManagerUpgrade} variant={"contained"} startIcon={<WorkIcon sx={{fontSize: 50}}/>}>
                PRODUCTION MANAGER
            </Button>
        }
        return <Button onClick={buyProductionManagerUpgrade} variant={"contained"} startIcon={<WorkIcon sx={{fontSize: 50}}/>} disabled>
            PRODUCTION MANAGER
        </Button>
    })

    const SalesManagerUpgradeButton = forwardRef((props, ref) => {
        if(!salesManagerActive) {
            return <Button onClick={buySalesManagerUpgrade} color="success" variant={"contained"} startIcon={<WorkIcon sx={{fontSize: 50}}/>}>
                SALES MANAGER
            </Button>
        }
        return <Button onClick={buySalesManagerUpgrade} color="success" variant={"contained"} startIcon={<WorkIcon sx={{fontSize: 50}}/>} disabled>
            SALES MANAGER
        </Button>
    })

    return <>
        <Stack p={2} spacing={2} direction={"row"} justifyContent={"center"}>
            <HtmlTooltip title={<>
                <h5>COST: €800</h5>
                <div>Workers produce (workerEfficiency) bottles per second</div>
            </>
            } followCursor>
                <WorkerUpgradeButton/>
            </HtmlTooltip>

            <HtmlTooltip title={<>
                <h5>COST: €100.000</h5>
                <div>Production managers hire (productionManagerEfficiency) workers per second</div>
            </>
            } followCursor>
                <ProductionManagerUpgradeButton/>
            </HtmlTooltip>
        </Stack>

        <Stack p={2} spacing={2} direction={"row"} justifyContent={"center"}>
            <HtmlTooltip title={<>
                <h5>COST: €800</h5>
                <div>Sales people sell (salesEfficiency) bottles per second</div>
            </>
            } followCursor>
                <SalesPersonUpgradeButton/>
            </HtmlTooltip>

            <HtmlTooltip title={<>
                <h5>COST: €100.000</h5>
                <div>Sales managers hire (SalesManagerEfficiency) sales people per second</div>
            </>
            } followCursor>
                <SalesManagerUpgradeButton/>
            </HtmlTooltip>
        </Stack>
    </>
}