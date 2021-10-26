import {Stack, Box, Tooltip} from "@mui/material";

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
            <Tooltip title={"produces (worker efficiency) bottles every second"} arrow>
                <Box className={"box"}>
                    <div className={"boxTitle"}>WORKERS</div>
                    <div className={"boxText"}>(number of workers)</div>
                </Box>
            </Tooltip>
            <Tooltip title={"hires (manager efficiency) workers every second"} arrow>
                <Box className={"box"}>
                    <div className={"boxTitle"}>MANAGERS</div>
                    <div className={"boxText"}>(number of managers)</div>
                </Box>
            </Tooltip>
        </Stack>

        {/*add buttons for stopping and resuming managers from hiring new workers*/}
    </>
}