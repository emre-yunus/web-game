import {Stack, Box, Tooltip, Button} from "@mui/material";
import React from "react";
import {HtmlTooltip} from "./Tooltips";
import {useWorkerContext} from "../context/workerContext";
import {useBottleContext} from "../context/bottleContext";
import {useCapitalContext} from "../context/capitalContext";

export function StatisticsPanelContent(props) {
    const {bottleAmount} = useBottleContext();
    const {capitalAmount} = useCapitalContext();
    const {workerAmount} = useWorkerContext();

    return <>
        <Stack mb={5} p={2} spacing={2} direction={"row"} justifyContent={"center"}>
            <Box>
                <div className={"statTitle"}>WATER BOTTLES</div>
                <div className={"statText"}>{bottleAmount}</div>
            </Box>
            <Box>
                <div className={"statTitle"}>CAPITAL</div>
                <div className={"statText"}>$ {capitalAmount}</div>
            </Box>
        </Stack>

        <h4>EMPLOYEES</h4>

        <Stack p={2} spacing={2} direction={"row"} justifyContent={"center"}>
            <HtmlTooltip title={<>
                <div>produces (worker efficiency) bottles every second</div>
            </>
            } followCursor>
                <Box className={"box"}>
                    <div className={"boxTitle"}>WORKERS</div>
                    <div className={"boxText"}>{workerAmount}</div>
                </Box>
            </HtmlTooltip>

            <HtmlTooltip title={<>
                <div>sells (saleperson efficiency) bottles every second</div>
            </>
            } followCursor>
                <Box className={"box"}>
                    <div className={"boxTitle"}>SALESPEOPLE</div>
                    <div className={"boxText"}>(number of salespeople)</div>
                </Box>
            </HtmlTooltip>
        </Stack>

        <Stack p={2} spacing={2} direction={"row"} justifyContent={"center"}>
            <HtmlTooltip title={<>
                <div>hires (production manager efficiency) workers every second</div>
            </>
            } followCursor>
                <Box className={"box"}>
                    <div className={"boxTitle"}>PRODUCTION MANAGERS</div>
                    <div className={"boxText"}>(number of production managers)</div>
                    <Button variant="contained" size="small">STOP HIRING</Button>
                </Box>
            </HtmlTooltip>

            <HtmlTooltip title={<>
                <div>hires (sales manager efficiency) salespeople every second</div>
            </>
            } followCursor>
                <Box className={"box"}>
                    <div className={"boxTitle"}>SALES MANAGERS</div>
                    <div className={"boxText"}>(number of sales managers)</div>
                    <Button color="success" variant="contained" size="small">STOP HIRING</Button>
                </Box>
            </HtmlTooltip>
        </Stack>

        {/*add buttons for stopping and resuming managers from hiring new workers*/}
    </>
}