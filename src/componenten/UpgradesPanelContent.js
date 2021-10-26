import {Box, Stack} from "@mui/material";
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import WorkIcon from '@mui/icons-material/Work';

export function UpgradesPanelContent(props) {
    return <>
        <Stack p={2} spacing={2} direction={"row"} justifyContent={"center"}>
            <Box className={"upgradeBox"}>
                <AccessibilityNewIcon sx={{ fontSize: 50 }}/>
                <div>WORKERS</div>
            </Box>
            <Box className={"upgradeBox"}>
                <WorkIcon sx={{ fontSize: 50 }}/>
                <div>MANAGERS</div>
            </Box>
        </Stack>
    </>
}