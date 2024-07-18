import React from "react";
import NavbarImplementation from "../components/navbar/Navbar";
import { Container, Row, Col } from "react-bootstrap";

function Home(){
    return(
        <>
            <NavbarImplementation/>
            <Container className="mt-5">
                <Row>
                    <Col>
                        <h1>Home Page</h1>
                        <p>Welcome to the Home Page</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;