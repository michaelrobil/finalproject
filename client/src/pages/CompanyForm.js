import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron2";
import Button from "../components/Button"
import SignUp from "../components/compform/form"
import SignIn from "../components/signin/signin"

export default function CompanyForm() {
    useEffect(() => {
    }, [])


    return (
        <Container fluid>
       <Row>
                 <Col size="md-6">
                    <Jumbotron >
                    <SignUp/>   

                    </Jumbotron>
                </Col>
                <Col size="md-6">
                    <Jumbotron >
                        <SignIn/>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}
