import {Box, Button, IconButton, Stack, Tooltip, tooltipClasses, styled} from "@mui/material";
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import WorkIcon from '@mui/icons-material/Work';
import {HtmlTooltip} from "./Tooltips";
import React, {forwardRef} from "react";
import {useWorkerContext} from "../context/workerContext";
import {useSalesPersonContext} from "../context/salesPersonContext";
import {useProductionManagerContext} from "../context/productionManagerContext";
import {useSalesManagerContext} from "../context/salesManagerContext";
import {useCapitalContext} from "../context/capitalContext";
import {useInfoContext} from "../context/infoContext";

export function UpgradesPanelContent(props) {
    const {capitalAmount, setCapitalAmount, salesEfficiency, spentCapitalAmount, setSpentCapitalAmount} = useCapitalContext();
    const {workerEfficiency, workerActive, setWorkerActive} = useWorkerContext();
    const {salesPersonEfficiency, salesPersonActive, setSalesPersonActive} = useSalesPersonContext();
    const {productionManagerEfficiency, productionManagerActive, setProductionManagerActive} = useProductionManagerContext();
    const {salesManagerEfficiency, salesManagerActive, setSalesManagerActive} = useSalesManagerContext();
    const {errorMessages, setErrorMessages} = useInfoContext();

    const WORKER_UPGRADE_COST = 20;
    const SALESPERSON_UPGRADE_COST = 20;
    const PRODUCTION_MANAGER_UPGRADE_COST = 50;
    const SALES_MANAGER_UPGRADE_COST = 50;

    const buyWorkerUpgrade = () => {
        if(capitalAmount >= WORKER_UPGRADE_COST) {
            setWorkerActive(true);
            setCapitalAmount(prevAmount => prevAmount - WORKER_UPGRADE_COST);
            setSpentCapitalAmount(prevAmount => prevAmount + WORKER_UPGRADE_COST);
        } else {
            setErrorMessages(currentArray => currentArray.concat("Insufficient CAPITAL!"));
        }
    }
    const buySalesPersonUpgrade = () => {
        if(capitalAmount >= SALESPERSON_UPGRADE_COST) {
            setSalesPersonActive(true);
            setCapitalAmount(prevAmount => prevAmount - SALESPERSON_UPGRADE_COST);
            setSpentCapitalAmount(prevAmount => prevAmount + SALESPERSON_UPGRADE_COST);
        } else {
            setErrorMessages(currentArray => currentArray.concat("Insufficient CAPITAL!"));
        }

    }
    const buyProductionManagerUpgrade = () => {
        if(capitalAmount >= PRODUCTION_MANAGER_UPGRADE_COST) {
            setProductionManagerActive(true);
            setCapitalAmount(prevAmount => prevAmount - PRODUCTION_MANAGER_UPGRADE_COST);
            setSpentCapitalAmount(prevAmount => prevAmount + PRODUCTION_MANAGER_UPGRADE_COST);
        } else {
            setErrorMessages(currentArray => currentArray.concat("Insufficient CAPITAL!"));
        }

    }
    const buySalesManagerUpgrade = () => {
        if(capitalAmount >= SALES_MANAGER_UPGRADE_COST) {
            setSalesManagerActive(true);
            setCapitalAmount(prevAmount => prevAmount - SALES_MANAGER_UPGRADE_COST);
            setSpentCapitalAmount(prevAmount => prevAmount + SALES_MANAGER_UPGRADE_COST);
        } else {
            setErrorMessages(currentArray => currentArray.concat("Insufficient CAPITAL!"));
        }
    }

    const WorkerUpgradeButton = forwardRef((props,ref) => {
        if(!workerActive) {
            return <HtmlTooltip title={<>
                <h5>COST: ${WORKER_UPGRADE_COST}</h5>
                <div>Workers produce {workerEfficiency} bottle(s) per second</div>
            </>
            } followCursor>
                <Button onClick={buyWorkerUpgrade} variant={"contained"} startIcon={<AccessibilityNewIcon sx={{fontSize: 50}}/>}>
                    WORKER
                </Button>
            </HtmlTooltip>
        }
        return <HtmlTooltip title={<>
            <h5>COST: ${WORKER_UPGRADE_COST}</h5>
            <div>Workers produce {workerEfficiency} bottle(s) per second</div>
        </>
        } followCursor>
            <Button onClick={buyWorkerUpgrade} variant={"contained"} startIcon={<AccessibilityNewIcon sx={{fontSize: 50}}/>} disabled>
                WORKER
            </Button>
        </HtmlTooltip>
    })

    const SalesPersonUpgradeButton = forwardRef((props, ref) => {
        if(!salesPersonActive) {
            return <HtmlTooltip title={<>
                <h5>COST: ${SALESPERSON_UPGRADE_COST}</h5>
                <div>Sales people sell {salesEfficiency} bottle(s) per second</div>
            </>
            } followCursor>
                <Button onClick={buySalesPersonUpgrade} color="success" variant={"contained"} startIcon={<AccessibilityNewIcon sx={{fontSize: 50}}/>}>
                    SALESPERSON
                </Button>
            </HtmlTooltip>
        }
        return <HtmlTooltip title={<>
            <h5>COST: ${SALESPERSON_UPGRADE_COST}</h5>
            <div>Sales people sell {salesEfficiency} bottle(s) per second</div>
        </>
        } followCursor>
            <Button onClick={buySalesPersonUpgrade} color="success" variant={"contained"} startIcon={<AccessibilityNewIcon sx={{fontSize: 50}}/>} disabled>
                SALESPERSON
            </Button>
        </HtmlTooltip>
    })

    const ProductionManagerUpgradeButton = forwardRef((props, ref) => {
        if(!productionManagerActive) {
            return <HtmlTooltip title={<>
                <h5>COST: ${PRODUCTION_MANAGER_UPGRADE_COST}</h5>
                <div>A production manager hires {productionManagerEfficiency} worker(s) per second</div>
            </>
            } followCursor>
                <Button onClick={buyProductionManagerUpgrade} variant={"contained"} startIcon={<WorkIcon sx={{fontSize: 50}}/>}>
                    PRODUCTION MANAGER
                </Button>
            </HtmlTooltip>
        }
        return <HtmlTooltip title={<>
            <h5>COST: ${PRODUCTION_MANAGER_UPGRADE_COST}</h5>
            <div>A production manager hires {productionManagerEfficiency} worker(s) per second</div>
        </>
        } followCursor>
            <Button onClick={buyProductionManagerUpgrade} variant={"contained"} startIcon={<WorkIcon sx={{fontSize: 50}}/>} disabled>
                PRODUCTION MANAGER
            </Button>
        </HtmlTooltip>
    })

    const SalesManagerUpgradeButton = forwardRef((props, ref) => {
        if(!salesManagerActive) {
            return <HtmlTooltip title={<>
                <h5>COST: ${SALES_MANAGER_UPGRADE_COST}</h5>
                <div>A sales managers hires {salesManagerEfficiency} salespeople/salesperson per second</div>
            </>
            } followCursor>
                <Button onClick={buySalesManagerUpgrade} color="success" variant={"contained"} startIcon={<WorkIcon sx={{fontSize: 50}}/>}>
                    SALES MANAGER
                </Button>
            </HtmlTooltip>
        }
        return <HtmlTooltip title={<>
            <h5>COST: ${SALES_MANAGER_UPGRADE_COST}</h5>
            <div>A sales managers hires {salesManagerEfficiency} salespeople/salesperson per second</div>
        </>
        } followCursor>
            <Button onClick={buySalesManagerUpgrade} color="success" variant={"contained"} startIcon={<WorkIcon sx={{fontSize: 50}}/>} disabled>
                SALES MANAGER
            </Button>
        </HtmlTooltip>
    })

    return <>
        <Stack p={2} spacing={2} direction={"row"} justifyContent={"center"}>
            <WorkerUpgradeButton/>
            <ProductionManagerUpgradeButton/>
        </Stack>

        <Stack p={2} spacing={2} direction={"row"} justifyContent={"center"}>
            <SalesPersonUpgradeButton/>

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