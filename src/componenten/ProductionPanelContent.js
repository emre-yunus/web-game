import {Button, Stack, Tooltip} from "@mui/material";
import {HtmlTooltip} from "./Tooltips";
import React, {useEffect} from "react";
import {useBottleContext} from "../context/bottleContext";
import {useCapitalContext} from "../context/capitalContext";
import {useWorkerContext} from "../context/workerContext";
import {useSalesPersonContext} from "../context/salesPersonContext";

export function ProductionPanelContent(props) {
    const {bottleAmount, setBottleAmount, productionEfficiency} = useBottleContext();
    const {capitalAmount, setCapitalAmount, salesEfficiency} = useCapitalContext();
    const {workerAmount, setWorkerAmount, workerEfficiency} = useWorkerContext();
    const {salesPersonAmount, setSalesPersonAmount, salesPersonEfficiency} = useSalesPersonContext();

    useEffect(() => {
        console.log("smth");
        setInterval(() => {
            console.log("it just works")
            setBottleAmount(bottleAmount + workerAmount);
        }, 1000);
    });

    /*const ticker = () => setInterval(() => {
        //here come all functions that update the bottleAmount and capitalAmount

        //setBottleAmount(prevBottleAmount => prevBottleAmount + workerAmount)
        setBottleAmount(bottleAmount + workerAmount);
    }, 5000);
    clearInterval(ticker())*/


    //manually increase bottleAmount with "produce bottle" button
    const changeBottleAmount = () => {
        setBottleAmount(prevBottleAmount => prevBottleAmount + productionEfficiency);
    }

    //manually increase capitalAmount and decrease bottleAmount with "sell bottle" button
    const changeCapitalAmount = () => {
        if(bottleAmount-salesEfficiency >= 0 ) {
            setBottleAmount(prevBottleAmount => prevBottleAmount - salesEfficiency);
            setCapitalAmount(prevCapitalAmount => prevCapitalAmount + salesEfficiency);
        }
    }

    //manually increase workerAmount with "hire worker" button
    const changeWorkerAmount = () => {
        setWorkerAmount(prevWorkerAmount => prevWorkerAmount + 1);
    }


    /*
    const changeWorkerAmount = () => {
        setWorkerAmount(workerAmount + 1);
        setInterval(() => {
            setBottleAmount(prevBottleAmount => prevBottleAmount + 1);
        }, 5000);
    }

    const changeSalesPersonAmount = () => {
        setSalesPersonAmount(salesPersonAmount + 1);
        setInterval(() => {
            setBottleAmount(prevBottleAmount => prevBottleAmount - 1);
            setCapitalAmount(prevCapitalAmount => prevCapitalAmount + 1);
        }, 5000);
    }*/

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
                    <Button onClick={changeWorkerAmount} variant={"contained"}>HIRE WORKER</Button>
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
                    <Button  color="success" variant={"contained"}>HIRE SALESPERSON</Button>
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