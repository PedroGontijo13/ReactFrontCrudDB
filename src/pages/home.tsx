import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SubTitle, Center, Link } from "../Styles/styles";

export default function Home() {
  return (
    <Container fluid="xl">
      <Container fluid="xs">
        <Center>
          <Row>
            <Col>
              <Link href="http://localhost:3000/create">
                <SubTitle>Create</SubTitle>
              </Link>
              <Link href="http://localhost:3000/read">
                <SubTitle>Read</SubTitle>
              </Link>
              <Link href="http://localhost:3000/update">
                <SubTitle>Update</SubTitle>
              </Link>
              <Link href="http://localhost:3000/delete">
                <SubTitle>Delete</SubTitle>
              </Link>
            </Col>
          </Row>
        </Center>
      </Container>
    </Container>
  );
}
