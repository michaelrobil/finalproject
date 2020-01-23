import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Link } from 'react-router-dom'
import Jumbotron from "../components/Jumbotron";
import Button from "../components/Button"
import Toast from 'light-toast';

export default function Home() {
    const [color, setColor] = useState('white');
    const [fontColor, setFontColor] = useState('black');

    function changeColor(c) {
        setColor(c)
    }
    useEffect(() => {
    }, [])


    return (
        <Container fluid>
            <h1>Sign Page!!</h1>
            <Row>

                <Col size="md-4">
                    <Jumbotron >
                        <div style={{ backgroundColor: `${color}` }}>
                            <h3 style={{ color: `${fontColor}` }}>First Box</h3>
                            <Button className="btn btn-danger" onClick={() => changeColor('red')} />
                            <Link style={{ color: "green" }} to="/red" className="nav-link">
                            Red
                        </Link>

                        </div>
                    </Jumbotron>
                </Col>
                <Col size="md-8">
                    <Jumbotron >
                        <div style={{ backgroundColor: `${color}` }}>
                            <h3 style={{ color: `${fontColor}` }}>Second Box</h3>
                            <Button className="btn btn-success" onClick={() => changeColor('blue')} />
                            <Link style={{ color: "green" }} to="/blue" className="nav-link">
                            Blue
                        </Link>

                        </div>
                    </Jumbotron>
                </Col>

            </Row>
            <Router>
                <Switch>
                </Switch>
            </Router>

        </Container>
    );
}


