import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Button from "../components/Button"
import Toast from 'light-toast';

export default function Home() {
    const [color, setColor] = useState('white');
    const [fontColor, setFontColor] = useState('black');

    function encodeImageFileAsURL(element) {
        var file = element.files[0];
        var reader = new FileReader();
        reader.onloadend = function() {
          console.log('RESULT', reader.result)
        }
        reader.readAsDataURL(file);
      }

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
                <Col size="md-8">
                    <Jumbotron >
                        <div style={{ backgroundColor: `${color}` }}>
                            <h3 style={{ color: `${fontColor}` }}>Second Box</h3>
                            <Button className="btn btn-success" onClick={() => changeColor('green')} />
                            <input type="file" onChange={encodeImageFileAsURL(this)} />
                        </div>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}


