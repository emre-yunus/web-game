import {Stack, Box, Tooltip} from "@mui/material";
import React from "react";
import {HtmlTooltip} from "./Tooltips";

export function StatisticsPanelContent(props) {
    return <>
        <Stack p={2} spacing={2} direction={"row"} justifyContent={"center"}>
            <Box>
                <div className={"statTitle"}>WATER BOTTLES</div>
                <div className={"statText"}>(number of bottles)</div>
            </Box>
            <Box>
                <div className={"statTitle"}>CAPITAL</div>
                <div className={"statText"}>(amount of money)</div>
            </Box>
        </Stack>

        <Stack p={2} spacing={2} direction={"row"} justifyContent={"center"}>
            <HtmlTooltip title={<>
                <div>produces (worker efficiency) bottles every second</div>
            </>
            } followCursor>
                <Box className={"box"}>
                    <div className={"boxTitle"}>WORKERS</div>
                    <div className={"boxText"}>(number of workers)</div>
                </Box>
            </HtmlTooltip>

            <HtmlTooltip title={<>
                <div>hires (production manager efficiency) workers every second</div>
            </>
            } followCursor>
                <Box className={"box"}>
                    <div className={"boxTitle"}>PRODUCTION MANAGERS</div>
                    <div className={"boxText"}>(number of production managers)</div>
                </Box>
            </HtmlTooltip>
        </Stack>

        <Stack p={2} spacing={2} direction={"row"} justifyContent={"center"}>
            <HtmlTooltip title={<>
                <div>sells (saleperson efficiency) bottles every second</div>
            </>
            } followCursor>
                <Box className={"box"}>
                    <div className={"boxTitle"}>SALESPEOPLE</div>
                    <div className={"boxText"}>(number of salespeople)</div>
                </Box>
            </HtmlTooltip>

            <HtmlTooltip title={<>
                <div>hires (sales manager efficiency) salespeople every second</div>
            </>
            } followCursor>
                <Box className={"box"}>
                    <div className={"boxTitle"}>SALES MANAGERS</div>
                    <div className={"boxText"}>(number of sales managers)</div>
                </Box>
            </HtmlTooltip>
        </Stack>

        {/*add buttons for stopping and resuming managers from hiring new workers*/}
    </>
}