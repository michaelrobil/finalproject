import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Button from "../components/Button"
import SignUp from "../components/compform/form"

export default function CompanyForm() {
    useEffect(() => {
    }, [])


    return (
        <Container fluid>
       <Row>
                <Col size="md-8">
                    <SignUp/>   
                </Col>
            </Row>
        </Container>
    );
}
