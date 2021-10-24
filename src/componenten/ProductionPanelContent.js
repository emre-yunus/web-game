import {Button, Tooltip} from "@mui/material";

export function ProductionPanelContent(props) {
    return <>
        <Tooltip title={"PRODUCE (NUMBER) BOTTLES"} arrow>
            <Button variant={"contained"} sx={{m:2}}>PRODUCE BOTTLE</Button>
        </Tooltip>
        <Tooltip title={"SELL (NUMBER) BOTTLES"} arrow>
            <Button variant={"contained"} color={"success"}>SELL BOTTLE</Button>
        </Tooltip>
    </>
}