import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Link } from 'react-router-dom'
import Jumbotron from "../components/Jumbotron2";
import Button from "../components/Button"
import Toast from 'light-toast';

export default function SignUp() {
    useEffect(() => {
    }, [])


    return (
        <Container fluid>
            <h1>SignUp Page!!</h1>
            <Row>

                <Col size="md-4">
                    <Jumbotron >
                    </Jumbotron>
                </Col>
                <Col size="md-8">
                    <Jumbotron >
                    </Jumbotron>
                </Col>

            </Row>
        </Container>
    );
}


