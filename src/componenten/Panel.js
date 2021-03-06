import {ProductionPanelContent} from "./ProductionPanelContent";
import {StatisticsPanelContent} from "./StatisticsPanelContent";
import {InfoPanelContent} from "./InfoPanelContent";
import {UpgradesPanelContent} from "./UpgradesPanelContent";
import {Card, CardHeader, Tooltip} from "@mui/material";
import {useState} from "react";

export function Panel(props) {
    const {title} = props;

    if(title==="INFO") {
        return <Card sx={{height: 200}} className={"Panel"}>
            <CardHeader
                title={title}
                sx={{
                    backgroundColor: "rgba(75,75,212,0.85)"
                }}
            />
            <PanelContent title={title}/>
        </Card>
    }
    return <Card className={"Panel"}>
        <CardHeader
            title={title}
            sx={{
                backgroundColor: "rgba(75,75,212,0.85)"
            }}
        />
        <PanelContent title={title}/>
    </Card>
}

function PanelContent(props) {
    const {title} = props;

    if (title==="STATISTICS") return <StatisticsPanelContent />
    if (title==="INFO") return <InfoPanelContent/>
    if (title==="UPGRADES") return <UpgradesPanelContent/>
    if (title==="PRODUCTION / MANAGEMENT") return <ProductionPanelContent />
    return <></>
}