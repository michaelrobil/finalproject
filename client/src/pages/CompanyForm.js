import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Button from "../components/Button"
import Toast from 'light-toast';

export default function CompanyForm() {
    useEffect(() => {
    }, [])


    return (
        <Container fluid>
            <h1>Company Form Page!!</h1>
            <Row>
                <Col size="md-8">
                    <Jumbotron >
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}
