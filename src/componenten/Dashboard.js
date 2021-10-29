import {Panel} from "./Panel";
import {Col, Container, Row} from "react-bootstrap";
import Icon from '@mui/material/Icon';

export function Dashboard(props) {
    return <Container fluid>
        <Row>
            <Col sm={4}>
                <Panel title={"STATISTICS"}/>
            </Col>
            <Col sm={4}>
                <Panel title={"INFO"}/>
                <Panel title={"PRODUCTION / MANAGEMENT"}/>
            </Col>
            <Col sm={4}>
                <Panel title={"UPGRADES"}/>
            </Col>
        </Row>
    </Container>
}