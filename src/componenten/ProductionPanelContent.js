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
import {useInfoContext} from "../context/infoContext";

export function ProductionPanelContent(props) {
    //states belonging to this component
    const [updater, setUpdater] = useState(false);

    //states from context components
    const {bottleAmount, setBottleAmount, productionEfficiency} = useBottleContext();
    const {capitalAmount, setCapitalAmount, salesEfficiency, setSpentCapitalAmount} = useCapitalContext();
    const {workerAmount, setWorkerAmount, workerEfficiency, workerActive} = useWorkerContext();
    const {salesPersonAmount, setSalesPersonAmount, salesPersonEfficiency, salesPersonActive} = useSalesPersonContext();
    const {productionManagerAmount, setProductionManagerAmount, productionManagerEfficiency, productionManagerUpgradeBought} = useProductionManagerContext();
    const {salesManagerAmount, setSalesManagerAmount, salesManagerEfficiency, salesManagerUpgradeBought} = useSalesManagerContext();
    const {productionManagerHiring, setProductionManagerHiring} = useManagerHiringContext();
    const {salesManagerHiring, setSalesManagerHiring} = useManagerHiringContext();
    const {errorMessages, setErrorMessages} = useInfoContext();

    const WORKER_COST = 10;
    const SALES_PERSON_COST = 10;
    const PRODUCTION_MANAGER_COST = 30;
    const SALES_MANAGER_COST = 30;

    /**
     * UseEffect contains setInterval --> this loops every 1000 milliseconds
     */
    useEffect(() => {
        const id = setInterval(() => {
            console.log("Updating...")
            setBottleAmount(prevBottleAmount => prevBottleAmount + workerAmount);
            if(bottleAmount-(salesPersonEfficiency*salesPersonAmount) >= 0 ) {
                setBottleAmount(prevBottleAmount => prevBottleAmount - (salesPersonEfficiency * salesPersonAmount));
                setCapitalAmount(prevCapitalAmount => prevCapitalAmount + (salesPersonEfficiency * salesPersonAmount));
            }

            //Managers automatically hiring
            if(productionManagerHiring) {
                if(capitalAmount >= WORKER_COST && productionManagerAmount > 0) {
                    setWorkerAmount(prevWorkerAmount => prevWorkerAmount + (productionManagerAmount * productionManagerEfficiency));
                    setCapitalAmount(prevAmount => prevAmount - WORKER_COST);
                    setSpentCapitalAmount(prevAmount => prevAmount + WORKER_COST);
                } else {
                    setErrorMessages(currentArray => currentArray.concat(
                        (productionManagerAmount>0) ? "Production manager can't hire workers - Insufficient CAPITAL!" : "You must hire production managers first!"));
                    setProductionManagerHiring(false);
                }
            }
            if(salesManagerHiring) {
                if(capitalAmount >= SALES_PERSON_COST && salesManagerAmount > 0) {
                    setSalesPersonAmount(prevSalesPersonAmount => prevSalesPersonAmount + (salesManagerAmount * salesManagerEfficiency));
                    setCapitalAmount(prevAmount => prevAmount - SALES_PERSON_COST);
                    setSpentCapitalAmount(prevAmount => prevAmount + SALES_PERSON_COST);
                } else {
                    setErrorMessages(currentArray => currentArray.concat(
                        (salesManagerAmount > 0) ? "Sales manager can't hire salespeople - Insufficient CAPITAL!" : "You must hire sales managers first!"));
                    setSalesManagerHiring(false);
                }
            }

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
        } else {
            setErrorMessages(currentArray => currentArray.concat("Not enough BOTTLES!"));
        }
    }

    // EMPLOYEES SECTION
    //manually increase workerAmount with "hire worker" button
    const changeWorkerAmount = () => {
        if(workerActive) {
            if(capitalAmount >= WORKER_COST) {
                setWorkerAmount(prevWorkerAmount => prevWorkerAmount + 1)
                setCapitalAmount(prevAmount => prevAmount - WORKER_COST);
                setSpentCapitalAmount(prevAmount => prevAmount + WORKER_COST);
            } else {
                setErrorMessages(currentArray => currentArray.concat("Insufficient CAPITAL!"));
            }
        } else {
            setErrorMessages(currentArray => currentArray.concat("workers unavailable, buy WORKER upgrade first!"));
        }
    }

    //manually increase salesPersonAmount with "hire salesperson" button
    const changeSalesPersonAmount = () => {
        if(salesPersonActive) {
            if(capitalAmount >= SALES_PERSON_COST) {
                setSalesPersonAmount(prevSalesPersonAmount => prevSalesPersonAmount + 1);
                setCapitalAmount(prevAmount => prevAmount - SALES_PERSON_COST);
                setSpentCapitalAmount(prevAmount => prevAmount + SALES_PERSON_COST);
            } else {
                setErrorMessages(currentArray => currentArray.concat("Insufficient CAPITAL!"));
            }
        } else {
            setErrorMessages(currentArray => currentArray.concat("salespeople unavailable, buy SALESPERSON upgrade first!"));
        }
    }

    //manually increase productionManagerAmount
    const changeProductionManagerAmount = () => {
        if(productionManagerUpgradeBought) {
            if(capitalAmount >= PRODUCTION_MANAGER_COST) {
                setProductionManagerAmount(prevProductionManagerAmount => prevProductionManagerAmount + 1)
                setCapitalAmount(prevAmount => prevAmount - PRODUCTION_MANAGER_COST);
                setSpentCapitalAmount(prevAmount => prevAmount + PRODUCTION_MANAGER_COST);
            } else {
                setErrorMessages(currentArray => currentArray.concat("Insufficient CAPITAL!"));
            }
        } else {
            setErrorMessages(currentArray => currentArray.concat("You haven't bought the PRODUCTION MANAGER upgrade yet!"));
        }
    }

    //manually increase salesManagerAmount
    const changeSalesManagerAmount = () => {
        if(salesManagerUpgradeBought) {
            if(capitalAmount >= SALES_MANAGER_COST) {
                setSalesManagerAmount(prevSalesManagerAmount => prevSalesManagerAmount + 1)
                setCapitalAmount(prevAmount => prevAmount - SALES_MANAGER_COST);
                setSpentCapitalAmount(prevAmount => prevAmount + SALES_MANAGER_COST);
            } else {
                setErrorMessages(currentArray => currentArray.concat("Insufficient CAPITAL!"));
            }
        } else {
            setErrorMessages(currentArray => currentArray.concat("You haven't bought the SALES MANAGER upgrade yet!"))
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
                    <h5>COST: ${WORKER_COST}</h5>
                    <div>hire a worker</div>
                </>} followCursor>
                    <Button onClick={changeWorkerAmount} variant={"contained"}>HIRE WORKER</Button>
                </HtmlTooltip>
                <HtmlTooltip title={<>
                    <h5>COST: ${PRODUCTION_MANAGER_COST}</h5>
                    <div>hire a production manager</div>
                </>} followCursor>
                    <Button onClick={changeProductionManagerAmount} variant={"contained"}>HIRE PRODUCTION MANAGER</Button>
                </HtmlTooltip>
            </Stack>
            <Stack spacing={3} direction={"column"} justifyContent={"center"}>
                <HtmlTooltip title={<>
                    <h5>COST: ${SALES_PERSON_COST}</h5>
                    <div>hire a salesperson</div>
                </>} followCursor>
                    <Button onClick={changeSalesPersonAmount} color="success" variant={"contained"}>HIRE SALESPERSON</Button>
                </HtmlTooltip>
                <HtmlTooltip title={<>
                    <h5>COST: ${SALES_MANAGER_COST}</h5>
                    <div>hire a sales manager</div>
                </>} followCursor>
                    <Button onClick={changeSalesManagerAmount} color="success" variant={"contained"}>HIRE SALES MANAGER</Button>
                </HtmlTooltip>
            </Stack>
        </Stack>
    </>
}