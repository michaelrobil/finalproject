import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Button from "../components/Button"
import Toast from 'light-toast';

export default function Home() {
    const [color, setColor] = useState('white');
    const [fontColor, setFontColor] = useState('black');

    function changeColor(c) {
        Toast.info(`Painting ${c}!!`, 3000, () => {
            setColor(c)
            setFontColor('white')
        });
    }
    useEffect(() => {
    }, [])


    return (
        <Container fluid>
            <Row>
                <Col size="md-4">
                    <Jumbotron >
                        <div style={{ backgroundColor: `${color}` }}>
                            <h3 style={{ color: `${fontColor}` }}>First Box</h3>
                            <Button className="btn btn-danger" onClick={() => changeColor('red')} />
                        </div>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}


