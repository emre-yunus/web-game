import {Panel} from "./Panel";
import {Col, Container, Row} from "react-bootstrap";
import Icon from '@mui/material/Icon';

export function Dashboard(props) {
    return <Container fluid>
        <Row>
            <Col sm={4}>
                <Panel title={"STATISTICS"}/>
            </Col>
            <Col sm={8}>
                <Row>
                    <Col>
                        <Panel title={"INFO"}/>
                    </Col>
                    <Col>
                        <Panel title={"AUTOMATION UPGRADES"}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Panel title={"PRODUCTION"}/>
                    </Col>
                    <Col>
                        <Panel title={"SPECIAL UPGRADES"}/>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
}