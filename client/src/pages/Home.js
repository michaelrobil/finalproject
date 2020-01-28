import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import styled from 'styled-components';
import { palette, spacing } from '@material-ui/system';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDateTimePicker } from '@material-ui/pickers';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Toast from 'light-toast';

export default function Search() {
    const NewBox = styled.div`
  ${palette}
  ${spacing}`;
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = date => {
        setSelectedDate(date);
        console.log(date)
    };
    useEffect(() => {
    }, [])


    return (
        <Container fluid>
            <h1>Search Page!</h1>
            <Row>
                <Col size="md-0.5">
                </Col>

                <Col size="md-4">
                    <Box display={{ xs: 'block', xl: 'block' }} color="white" bgcolor="palevioletred" p={7}>
                        <Button variant="contained" color="primary">
                            Hello World
                        </Button>
                    </Box>
                </Col>
                <Col size="md-8">
                    <NewBox display={{ xs: 'none', xl: 'block' }} color="white" bgcolor="palevioletred" p={9}>
                        Styled components
                </NewBox>
                    <Box display={{ xs: 'block', md: 'none' }} color="white" bgcolor="blue">
                        Another Content
                    </Box>
                    <Box display={{ xs: 'none', md: 'block' }} color="white" bgcolor="red">
                        Content
                    </Box>
                </Col>

                <Col size="md-0.5">
                </Col>
            </Row>
            <Row>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                        <KeyboardDateTimePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Date picker inline"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                        <KeyboardDateTimePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Date picker dialog"
                            format="MM/dd/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
            </Row>
        </Container>
    );
}


