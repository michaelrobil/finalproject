import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Col, Row, Container } from "../components/Grid";
import styled from 'styled-components';
import { palette, spacing } from '@material-ui/system';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Main from '../components/cloudinary/cloudtwo';
import Greentrees from '../components/images/greentrees.jpg'

const image = [
    {
        url: 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=webp&v=1530129081',
        title: 'Breakfast',
    },
]

const tileData = [
    {
        img: Greentrees,
        title: 'Image',
        author: 'author',
    },
    {
        title: 'Image',
        author: 'author',
        img: Greentrees
    },
    {
        title: 'Image',
        author: 'author',
        img: Greentrees
    },
    {
        img: Greentrees,
        title: 'Image',
        author: 'author',
    },
    {
        title: 'Image',
        author: 'author',
        img: Greentrees
    },
    {
        title: 'Image',
        author: 'author',
        img:Greentrees
    },
    {
        img: Greentrees,
        title: 'Image',
        author: 'author',
    },
    {
        title: 'Image',
        author: 'author',
        img: Greentrees
    },
    {
        title: 'Image',
        author: 'author',
        img: Greentrees
    },
    {
        img: Greentrees,
        title: 'Image',
        author: 'author',
    },
    {
        title: 'Image',
        author: 'author',
        img: Greentrees
    },
    {
        title: 'Image',
        author: 'author',
        img: Greentrees
    }
];


const useStyles = makeStyles(theme => ({
    root: {
        // width: '100%',
        // maxWidth: 360,
        // backgroundColor: theme.palette.background.paper,
        // display: 'flex',
        // flexWrap: 'wrap',
        // justifyContent: 'space-around',
        // overflow: 'hidden',
        // marginTop: 10

    },
    input: {
        display: 'none',
    },
    card: {
        // display: 'flex',
    },
    details: {
        // display: 'flex',
        // flexDirection: 'column',
    },
    content: {
        // flex: '1 0 auto',
    },
    cover: {
        width: "60%",
        // height: 250,
        margin: '0% 20%',
        // borderRadius: 400,
        // overflow: "hidden"
    },
    coverImage: {
        width: "60%",
        borderRadius: "360px",
        margin: '10% 20%',
    },
    controls: {
        // display: 'flex',
        // alignItems: 'center',
        // paddingLeft: theme.spacing(1),
        // paddingBottom: theme.spacing(1),
    },
    gridList: {
        margin:'5vh auto',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    img: {
        // width: '100%',
        // height: 250,
    },
    btn: {
        // width: '100%',
        // maxWidth: 360,
        // backgroundColor: theme.palette.background.paper,
    },
    nested: {
        // paddingLeft: theme.spacing(4),

    },
    table: {
        // minWidth: 650,
        overflowY: 'scroll',
        marginTop: '5vh',
        marginBottom: '5vh',
        // maxHeight: '5vh',
    },
    TOTtable: {
        marginBottom: '5vh',
    },
    companyINFO: {
        marginBottom: '2vh',
    },
    description: {
        overflowY: 'scroll',
        height: '20vh',
        marginBottom: '5vh',
    },
    // image: {
    //     position: 'relative',
    //     height: 200,
    //     [theme.breakpoints.down('xs')]: {
    //         width: '100% !important', // Overrides inline-style
    //         height: 'auto',
    //     },
    //     '&:hover, &$focusVisible': {
    //         zIndex: 1,
    //         '& $imageBackdrop': {
    //             opacity: 0.15,
    //         },
    //         '& $imageMarked': {
    //             opacity: 0,
    //         },
    //         '& $imageTitle': {
    //             border: '4px solid currentColor',
    //         },
    //     },
    // },
    // focusVisible: {},
    // imageButton: {
    //     position: 'absolute',
    //     left: 0,
    //     right: 0,
    //     top: 0,
    //     bottom: 0,
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     color: theme.palette.common.white,
    // },
    // imageSrc: {
    //     position: 'absolute',
    //     left: 0,
    //     right: 0,
    //     top: 0,
    //     bottom: 0,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center 40%',
    // },
    // imageBackdrop: {
    //     position: 'absolute',
    //     left: 0,
    //     right: 0,
    //     top: 0,
    //     bottom: 0,
    //     backgroundColor: theme.palette.common.black,
    //     opacity: 0.4,
    //     transition: theme.transitions.create('opacity'),
    // },
    // imageTitle: {
    //     position: 'relative',
    //     padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    // },
    // imageMarked: {
    //     height: 3,
    //     width: 18,
    //     backgroundColor: theme.palette.common.white,
    //     position: 'absolute',
    //     bottom: -2,
    //     left: 'calc(50% - 9px)',
    //     transition: theme.transitions.create('opacity'),
    // },

}));

function createData(name, day, date, time) {
    return { name, day, date, time };
}

const rows = [
    createData('Eric', 'Sat', '1/28/2020', '1:17 PM'),
    createData('Mario', 'Fri', '1/28/2020', '1:17 PM'),
    createData('Trent', 'Tus', '1/28/2020', '1:17 PM'),
    createData('Alek', 'Fri', '1/28/2020', '1:17 PM'),
    createData('Mike', 'Sat', '1/28/2020', '1:17 PM'),

];

export default function Search() {
    const classes = useStyles();
    const [appointments, setAppointments] = useState([])
    // const user = JSON.parse(localStorage.getItem('user'))
    // const userID = user.data.user._id


    function getAppointments() {
        API.getAppts()
            .then(res => {

                console.log(res.data)

                setAppointments(res.data)

            }).catch(err => console.log(err));
    }

    useEffect(() => {
        getAppointments();
    }, [])

    function renderRows() {
        return appointments.map(o => (
            <TableRow key={o._id}>
                <TableCell component="th" scope="row">
                    {o.fullName}
                </TableCell>
                <TableCell align="right">{o.day}</TableCell>
                <TableCell align="right">{o.date}</TableCell>
                <TableCell align="right">{o.time}</TableCell>
            </TableRow>
        ));
    }

    console.log(appointments)
    return (
        <Container>
            {/* <h1>Company Page!</h1> */}
            <Grid>
                <Row >

                    <Col size='xs-12 sm-12 md-12 lg-12'>
                        <div className={classes.cover}>
                            <img
                                className={classes.coverImage}
                                src="https://cdn.archpaper.com/wp-content/uploads/2018/09/portland_building_reconstruction-preview.jpg"
                                title="Live from space album cover"
                                
                            /> 
                            
                            <Main/>                       
                        </div>
                    </Col>
                </Row>

            </Grid>
                    <Grid>
                        <Row>
                            <Col size='xs-12 xs-12 md-6 lg-6'>
                                <Typography component="h3" variant="h3">Long Name Incorporated</Typography>
                                <Typography variant="subtitle1" color="textSecondary" className={classes.companyINFO}>Category: Animals</Typography>
                                <Typography variant="subtitle1" color="textSecondary" className={classes.companyINFO}>Location: Nashville, TN </Typography>
                            </Col>

                            <Col size='xs-12 xs-12 md-6 lg-6'>
                                <Typography variant="subtitle1" color="textSecondary" className={classes.description}>
                                    Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique in turpis sit amet congue. Nam rhoncus, dolor vel faucibus facilisis, turpis leo maximus mi, vitae tristique dui est vel dui. Duis ligula tellus, venenatis a suscipit in, venenatis eu lectus. Donec eget ultrices tellus.</Typography>
                            </Col>
                        </Row>
                    </Grid>
                    <Grid>
                        <Row>
                            <Col size='md-12'>
                                <TableContainer component={Paper} className={classes.TOTtable}>
                                    <Table className={classes.table} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Name</TableCell>
                                                <TableCell align="right">Day</TableCell>
                                                <TableCell align="right">Date</TableCell>
                                                <TableCell align="right">Time</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {renderRows()}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Col>
                        </Row>
                    </Grid>
                    <Grid>
                        <Row>
                            <Col size="md-12">
                                <div className={classes.gridList}>
                                    <GridList cellHeight={160} cols={2} style={{ width: '100%'}}>
                                        <GridListTile key={image[0].title} style={{ width: 300 }}>
                                            <img className={classes.img} src={image[0].url} alt={image[0].title} />
                                            <GridListTileBar
                                                title={image[0].title}
                                                subtitle={<span>Upload </span>}
                                                actionIcon={
                                                    <IconButton aria-label={`info about ${image[0].title}`} className={classes.icon}>
                                                        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                                                        <label htmlFor="icon-button-file">
                                                            <IconButton color="primary" aria-label="upload picture" component="span">
                                                                <PhotoCamera />
                                                            </IconButton>
                                                        </label>
                                                    </IconButton>
                                                }
                                            />

                                        </GridListTile>
                                        {tileData.map(tile => (
                                            <GridListTile key={tile.img} style={{ width: 300 }}>
                                                <img className={classes.img} src={tile.img} alt={tile.title} />
                                                <GridListTileBar
                                                    title={tile.title}
                                                    subtitle={<span>by: {tile.author}</span>}
                                                    actionIcon={
                                                        <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                                                            <InfoIcon />
                                                        </IconButton>
                                                }/>
                                            </GridListTile>
                                        ))}
                                    </GridList>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
        </Container>

                )};
            
