import { Col, Row } from "react-bootstrap"
import { Link, Title } from "../Styles/styles"

export default function NavButton() {
    return (
        <Row>
            <Col>
                <Link href="/"><Title>CRUD</Title></Link>
            </Col>
        </Row>
    )
}