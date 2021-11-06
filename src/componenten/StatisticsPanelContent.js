import {Stack, Box, Tooltip, Button} from "@mui/material";
import React, {useState} from "react";
import {HtmlTooltip} from "./Tooltips";
import {useWorkerContext} from "../context/workerContext";
import {useBottleContext} from "../context/bottleContext";
import {useCapitalContext} from "../context/capitalContext";
import {useSalesPersonContext} from "../context/salesPersonContext";
import {useProductionManagerContext} from "../context/productionManagerContext";
import {useSalesManagerContext} from "../context/salesManagerContext";
import {useManagerHiringContext} from "../context/managerHiringContext";

export function StatisticsPanelContent(props) {

    const {bottleAmount} = useBottleContext();
    const {capitalAmount} = useCapitalContext();
    const {workerAmount, workerEfficiency} = useWorkerContext();
    const {salesPersonAmount, salesPersonEfficiency} = useSalesPersonContext();
    const {productionManagerAmount, setProductionManagerAmount, productionManagerEfficiency} = useProductionManagerContext();
    const {salesManagerAmount, setSalesManagerAmount, salesManagerEfficiency} = useSalesManagerContext();
    const {productionManagerHiring, setProductionManagerHiring} = useManagerHiringContext();
    const {salesManagerHiring, setSalesManagerHiring} = useManagerHiringContext();

    const changeProductionManagerHiring = () => {
        setProductionManagerHiring(!productionManagerHiring);
    }

    const changeSalesManagerHiring = () => {
        setSalesManagerHiring(!salesManagerHiring);
    }

    return <>
        <Stack mb={5} p={2} spacing={6} direction={"row"} justifyContent={"center"}>
            <Box>
                <div className={"statTitle"}>WATER BOTTLES</div>
                <div className={"statText"}>{bottleAmount.toLocaleString("en-US")}</div>
            </Box>
            <Box>
                <div className={"statTitle"}>CAPITAL</div>
                <div className={"statText"}>$ {capitalAmount.toLocaleString("en-US")}</div>
            </Box>
        </Stack>

        <h4>EMPLOYEES</h4>

        <Stack p={2} spacing={2} direction={"row"} justifyContent={"center"}>
            <HtmlTooltip title={<>
                <div>produces {workerEfficiency} bottle(s) every second</div>
            </>
            } followCursor>
                <Box className={"box"}>
                    <div className={"boxTitle"}>WORKERS</div>
                    <div className={"boxText"}>{workerAmount}</div>
                </Box>
            </HtmlTooltip>

            <HtmlTooltip title={<>
                <div>sells {salesPersonEfficiency} bottle(s) every second</div>
            </>
            } followCursor>
                <Box className={"box"}>
                    <div className={"boxTitle"}>SALESPEOPLE</div>
                    <div className={"boxText"}>{salesPersonAmount}</div>
                </Box>
            </HtmlTooltip>
        </Stack>

        {/*MANAGERS*/}

        <Stack p={2} spacing={2} direction={"row"} justifyContent={"center"}>
            <HtmlTooltip title={<>
                <div>hires {productionManagerEfficiency} worker(s) every second</div>
            </>
            } followCursor>
                <Box className={"box"}>
                    <div className={"boxTitle"}>PRODUCTION MANAGERS</div>
                    <div className={"boxText"}>{productionManagerAmount}</div>
                    <Button onClick={changeProductionManagerHiring} variant="contained" size="small">{productionManagerHiring ? "STOP HIRING" : "START HIRING" }</Button>
                </Box>
            </HtmlTooltip>

            <HtmlTooltip title={<>
                <div>hires {salesManagerEfficiency} salesperson/salespeople every second</div>
            </>
            } followCursor>
                <Box className={"box"}>
                    <div className={"boxTitle"}>SALES MANAGERS</div>
                    <div className={"boxText"}>{salesManagerAmount}</div>
                    <Button onClick={changeSalesManagerHiring} color="success" variant="contained" size="small">{salesManagerHiring ? "STOP HIRING" : "START HIRING" }</Button>
                </Box>
            </HtmlTooltip>
        </Stack>

        {/*add buttons for stopping and resuming managers from hiring new workers*/}
    </>
}