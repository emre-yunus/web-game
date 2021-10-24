import {Panel} from "./Panel";
import {Col, Container, Row} from "react-bootstrap";

export function Dashboard(props) {
    return <Container fluid>
        <Row>
            <Col sm={4}>
                <Panel content={"statistics"}/>
            </Col>
            <Col sm={8}>
                <Row>
                    <Col>
                        <Panel content={"news"}/>
                    </Col>
                    <Col>
                        <Panel content={"simple upgrades"}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Panel content={"buttons"}/>
                    </Col>
                    <Col>
                        <Panel content={"special upgrades"}/>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
}