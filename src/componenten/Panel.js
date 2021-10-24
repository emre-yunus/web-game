import {ButtonPanelContent} from "./ButtonPanelContent";
import {StatisticsPanelContent} from "./StatisticsPanelContent";
import {InfoPanelContent} from "./InfoPanelContent";
import {AutomationUpgradesPanelContent} from "./AutomationUpgradesPanelContent";
import {SpecialUpgradesPanelContent} from "./SpecialUpgradesPanelContent";

export function Panel(props) {
    const {title} = props;
    return <div className={"Panel"}>
        <h5>{title}</h5>
        <PanelContent title={title}/>
    </div>
}

function PanelContent(props) {
    const {title} = props;
    if (title==="STATISTICS") return <StatisticsPanelContent/>
    if (title==="INFO") return <InfoPanelContent/>
    if (title==="AUTOMATION UPGRADES") return <AutomationUpgradesPanelContent/>
    if (title==="SPECIAL UPGRADES") return <SpecialUpgradesPanelContent/>
    if (title==="PRODUCTION") return <ButtonPanelContent/>
    return <></>
}