import {Button, Stack, Tooltip} from "@mui/material";
import {HtmlTooltip} from "./Tooltips";
import React from "react";
import {useBottleContext} from "../context/bottleContext";
import {useCapitalContext} from "../context/capitalContext";

export function ProductionPanelContent(props) {
    const {bottleAmount, setBottleAmount, productionEfficiency} = useBottleContext();
    const {capitalAmount, setCapitalAmount, salesEfficiency} = useCapitalContext();

    const changeBottleAmount = () => {
        setBottleAmount(bottleAmount + productionEfficiency);
    }

    const changeCapitalAmount = () => {
        if(bottleAmount-salesEfficiency >= 0 ) {
            setCapitalAmount(capitalAmount + salesEfficiency);
            setBottleAmount(bottleAmount - salesEfficiency);
        }
    }

    return <>
        <Stack mb={5} mt={3} p={2} spacing={12} direction={"row"} justifyContent={"center"}>
            <HtmlTooltip title={<>
                <div>PRODUCE {productionEfficiency} BOTTLES</div>
            </>} followCursor>
                <Button onClick={changeBottleAmount} variant={"contained"}>PRODUCE BOTTLE</Button>
            </HtmlTooltip>
            <HtmlTooltip title={<>
                <div>SELL {salesEfficiency} BOTTLES</div>
            </>} followCursor>
                <Button onClick={changeCapitalAmount} variant={"contained"} color={"success"}>SELL BOTTLE</Button>
            </HtmlTooltip>
        </Stack>

        <h4>EMPLOYEES</h4>

        <Stack p={2} spacing={5} direction={"row"} justifyContent={"center"}>
            <Stack spacing={3} direction={"column"} justifyContent={"center"}>
                <HtmlTooltip title={<>
                    <div>hire (hireWorkerEfficiency) workers</div>
                </>} followCursor>
                    <Button variant={"contained"}>HIRE WORKER</Button>
                </HtmlTooltip>
                <HtmlTooltip title={<>
                    <div>hire (hireWorkerManagerEfficiency) production managers</div>
                </>} followCursor>
                    <Button variant={"contained"}>HIRE PRODUCTION MANAGER</Button>
                </HtmlTooltip>
            </Stack>
            <Stack spacing={3} direction={"column"} justifyContent={"center"}>
                <HtmlTooltip title={<>
                    <div>hire (hireSalesPersonEfficiency) sales people</div>
                </>} followCursor>
                    <Button color="success" variant={"contained"}>HIRE SALESPERSON</Button>
                </HtmlTooltip>
                <HtmlTooltip title={<>
                    <div>hire (hireSalesPersonManagerEfficiency) sales managers</div>
                </>} followCursor>
                    <Button color="success" variant={"contained"}>HIRE SALES MANAGER</Button>
                </HtmlTooltip>
            </Stack>
        </Stack>
    </>
}