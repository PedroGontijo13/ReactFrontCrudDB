import { Col, Container, Row } from "react-bootstrap";
import { Title, SubTitle, Center, Link } from "../Styles/styles";

export default function Home() {

    return(
        <Container fluid="xl">
            <Container fluid="xs">
                <Center>
                    <Row>
                        <Col>
                            <Link href="/"><Title>CRUD</Title></Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Link href="http://localhost:3000/create"><SubTitle>Create</SubTitle></Link>
                            <Link href="http://localhost:3000/read"><SubTitle>Read</SubTitle></Link>
                            <Link><SubTitle>Update</SubTitle></Link>
                            <Link href="#"><SubTitle>Delete</SubTitle></Link>
                        </Col>
                    </Row>
                </Center>
            </Container>
        </Container>
    )
}