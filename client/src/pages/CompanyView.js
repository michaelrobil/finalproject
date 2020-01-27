import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Button from "../components/Button"
import Toast from 'light-toast';

export default function CompanyView() {
    useEffect(() => {
    }, [])


    return (
        <Container fluid>
            <h1>Company View Page!!</h1>
            <Row>
                <Col size="md-8">
                    <Jumbotron >
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}


