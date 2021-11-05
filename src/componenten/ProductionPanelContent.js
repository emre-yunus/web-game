import {Button, Stack, Tooltip} from "@mui/material";
import {HtmlTooltip} from "./Tooltips";
import React, {useEffect, useState} from "react";
import {useBottleContext} from "../context/bottleContext";
import {useCapitalContext} from "../context/capitalContext";
import {useWorkerContext} from "../context/workerContext";
import {useSalesPersonContext} from "../context/salesPersonContext";
import {useProductionManagerContext} from "../context/productionManagerContext";
import {useSalesManagerContext} from "../context/salesManagerContext";
import {useManagerHiringContext} from "../context/managerHiringContext";

export function ProductionPanelContent(props) {
    //states belonging to this component
    const [updater, setUpdater] = useState(false);

    //states from context components
    const {bottleAmount, setBottleAmount, productionEfficiency} = useBottleContext();
    const {capitalAmount, setCapitalAmount, salesEfficiency} = useCapitalContext();
    const {workerAmount, setWorkerAmount, workerEfficiency} = useWorkerContext();
    const {salesPersonAmount, setSalesPersonAmount, salesPersonEfficiency} = useSalesPersonContext();
    const {productionManagerAmount, setProductionManagerAmount, productionManagerEfficiency} = useProductionManagerContext();
    const {salesManagerAmount, setSalesManagerAmount, salesManagerEfficiency} = useSalesManagerContext();
    const {productionManagerHiring, setProductionManagerHiring} = useManagerHiringContext();
    const {salesManagerHiring, setSalesManagerHiring} = useManagerHiringContext();

    /**
     * UseEffect contains setInterval --> this loops every 1000 milliseconds
     */
    useEffect(() => {
        const id = setInterval(() => {
            console.log("useEffect of ProductionPanelContent.js just ran")
            setBottleAmount(prevBottleAmount => prevBottleAmount + workerAmount);
            if(bottleAmount-(salesPersonEfficiency*salesPersonAmount) >= 0 ) {
                setBottleAmount(prevBottleAmount => prevBottleAmount - (salesPersonEfficiency * salesPersonAmount));
                setCapitalAmount(prevCapitalAmount => prevCapitalAmount + (salesPersonEfficiency * salesPersonAmount));
            }
            if(productionManagerHiring) setWorkerAmount(prevWorkerAmount => prevWorkerAmount + (productionManagerAmount * productionManagerEfficiency));
            if(salesManagerHiring) setSalesPersonAmount(prevSalesPersonAmount => prevSalesPersonAmount + (salesManagerAmount * salesManagerEfficiency));

            /**
             * This basically updates the useEffect, because state update is the only dependency.
             * By using setUpdater the useEffect is independent from any other state. Without this
             * we would have the following problem: when clicking on "hire worker" the useEffect would restart.
             * With setUpdater we can keep clicking any other button while the states used in the useEffect are
             * updated in real-time and the useEffect is not interrupted.
             */
            setUpdater(prevUpdater => !prevUpdater);

            /*setTimeout(() => {
                console.log("timeout 1")
                setBottleAmount(prevBottleAmount => prevBottleAmount + workerAmount);
                setUpdater(prevUpdater => !prevUpdater);
            }, 500)*/
            /*setTimeout(() => {
                console.log("timeout 2")
                setUpdater(prevUpdater => !prevUpdater);
            }, 500)*/

        }, 1000);
        return () => window.clearInterval(id);
    }, [updater]);


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

    //manually increase salesPersonAmount with "hire salesperson" button
    const changeSalesPersonAmount = () => {
        setSalesPersonAmount(prevSalesPersonAmount => prevSalesPersonAmount + 1);
    }

    const changeProductionManagerAmount = () => {
        setProductionManagerAmount(prevProductionManagerAmount => prevProductionManagerAmount + 1)
    }

    const changeSalesManagerAmount = () => {
        setSalesManagerAmount(prevSalesManagerAmount => prevSalesManagerAmount + 1)
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
                    <div>hire a worker</div>
                </>} followCursor>
                    <Button onClick={changeWorkerAmount} variant={"contained"}>HIRE WORKER</Button>
                </HtmlTooltip>
                <HtmlTooltip title={<>
                    <div>hire a production manager</div>
                </>} followCursor>
                    <Button onClick={changeProductionManagerAmount} variant={"contained"}>HIRE PRODUCTION MANAGER</Button>
                </HtmlTooltip>
            </Stack>
            <Stack spacing={3} direction={"column"} justifyContent={"center"}>
                <HtmlTooltip title={<>
                    <div>hire a salesperson</div>
                </>} followCursor>
                    <Button onClick={changeSalesPersonAmount} color="success" variant={"contained"}>HIRE SALESPERSON</Button>
                </HtmlTooltip>
                <HtmlTooltip title={<>
                    <div>hire a sales manager</div>
                </>} followCursor>
                    <Button onClick={changeSalesManagerAmount} color="success" variant={"contained"}>HIRE SALES MANAGER</Button>
                </HtmlTooltip>
            </Stack>
        </Stack>
    </>
}