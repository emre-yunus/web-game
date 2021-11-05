import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {LeaderBoardContent} from "./LeaderBoardContent";

export function LeaderBoardAccordion(props) {

    return <>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>Leaderboard</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <LeaderBoardContent/>
            </AccordionDetails>
        </Accordion>
    </>
}