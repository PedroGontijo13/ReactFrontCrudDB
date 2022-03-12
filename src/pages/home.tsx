import { Col, Container, Row } from "react-bootstrap";
import { Title, SubTitle, Center } from "../Styles/styles";

export default function Home() {

    return(
        <Container fluid="xl">
            <Container fluid="xs">
                <Center>
                    <Row>
                        <Col>
                            <Title>CRUD</Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <SubTitle>Create</SubTitle>
                            <SubTitle>Read</SubTitle>
                            <SubTitle>Update</SubTitle>
                            <SubTitle>Delete</SubTitle>
                        </Col>
                    </Row>
                </Center>
            </Container>
        </Container>
    )
}