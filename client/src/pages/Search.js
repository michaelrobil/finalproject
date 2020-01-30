import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Col, Row, Container } from "../components/Grid";
import styled from 'styled-components';
import { palette, spacing } from '@material-ui/system';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDateTimePicker } from '@material-ui/pickers';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import SendIcon from '@material-ui/icons/Send';
// IMGs
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Greentrees from '../components/images/greentrees.jpg'

import ListItemIcon from '@material-ui/core/ListItemIcon';
import { AutoInit } from "materialize-css";


// @MEDIA 
import useMediaQuery from '@material-ui/core/useMediaQuery';

import TextField from '@material-ui/core/TextField';
import { set } from "date-fns";

const categories = [
    "barbershop", "salon", "beauty", "tattoo", "nails", "piercings", "photography"
  ];
  


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
    card: {
        // display: 'flex',
        maxHeight: '80vh',
        overflowY: 'scroll',
    },
    details: {
        // display: 'flex',
        // flexDirection: 'column',
    },
    content: {
        // flex: '1 0 auto',
    },
    cover: {
        width: "100%",
        height: '100%',
        // margin: '5vh',
        // borderRadius: 400,
        // overflow: "hidden",
    },
    coverImage: {
        width: "90%",
        borderRadius: "360px",
        margin: '5% 5%',
    },
    controls: {

    },
    gridList: {
        margin: '5vh auto',
        
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    img: {

    },
    btn: {
        maxHeight: '80vh',
        backgroundColor: theme.palette.background.paper,

    },
    nested: {
        // paddingLeft: theme.spacing(4),
    },
    description: {
        overflowY: 'scroll',
        height: '20vh',
        // marginBottom: '5vh',
    },
    companyName: {
        marginBottom: '2vh',
    },
    companyINFO: {
        marginBottom: '2vh',
    },
    senders: {
        color: '#4fa19a',
    },
    dater: {
        marginBottom: '5vh',
    },


}));

export default function Search() {

    const NewBox = styled.div`
  ${palette}
  ${spacing}`;
    const [accounts, setAccounts] = useState([])
    const [sideBar, setSideBar] = useState()
    const [selectedDate, setSelectedDate] = useState(new Date());
    const classes = useStyles();
    const [backBtn, setBackBtn] = useState('none');
    const [servInfo, setServInfo] = useState();

    function one(){
        setBackBtn('none');
        let categoryList = accounts.map(o=> o.companyCategory)
        let newArray = categoryList.filter(function(item, pos, self) {
            return self.indexOf(item) == pos;
        })
        setSideBar(newArray);
    }


    function handleListItemClick(value) {
        console.log(value)
          if(value === 'back') {
            setBackBtn('none');
            let categoryList = accounts.map(o=>{ return o.companyCategory})
            let newArray = categoryList.filter(function(item, pos, self) {
                return self.indexOf(item) == pos;
            })
            setSideBar(newArray)
        } else if(categories.includes(value)) {
            setBackBtn('block');
            let selectedCategory = accounts.filter(o=> o.companyCategory === value)
            let companyList = selectedCategory.map(o=>{ return o.companyName })
            setSideBar(companyList)
        } else {
            let selectedCompany = accounts.filter(o => o.companyName === value)
            setServInfo(selectedCompany); 
        }
    };

    const handleDateChange = date => {
        setSelectedDate(date);
        const enteredName = prompt('Please enter your name')
        let dateString = date.toString()
        let day = dateString.substring(0, 3);
        let dateOnly = dateString.substring(4, 15);
        let time = dateString.substring(16, 21);
        API.addAppt({
            fullName: enteredName,
            day: day,
            date: dateOnly,
            time: time,
        })
    };
    function getposts() {
        API.getPosts()
        // .then(res=> console.log(res.data))
        // .catch(err => console.log(err));
    }
    function getAccounts() {
        API.getAccounts()
        .then(res=> {
         setAccounts(res.data)
         let categorysList = res.data.map(o => o.companyCategory)
            let newArray = categorysList.filter(function(item, pos, self) {
                return self.indexOf(item) == pos;
            })
            setSideBar(newArray)
        })
        .catch(err => console.log(err));
    } 
 
    useEffect(() => {
        getAccounts()
        getposts();

    }, [])
console.log(servInfo)

    return (
        <Container fluid>
            {/* <h1>Search Page!</h1> */}
            <Row>
                {/* left col  */}
                <Col size="xs-12 sm-4 md-4 lg-2">
                    {sideBar?
                    <div className={classes.btn}>
                        <List component="nav" aria-label="main mailbox folders">
                        <ListItem style={{display:backBtn}}
                                key={1}

                                button
                                onClick={()=>handleListItemClick('back')}
                            >
                                <ListItemText primary={'Categories'} />

                                <ListItemIcon>
                                    <SendIcon />
                                </ListItemIcon>
                            </ListItem>

                            {sideBar.map(o=>
                            <ListItem
                                key={o}
                                button
                                onClick={()=>handleListItemClick(o)}
                            >
                                <ListItemText primary={o} />
                                <ListItemIcon>
                                    <SendIcon />
                                </ListItemIcon>
                            </ListItem>

                            )}



                        </List>
                    </div> 
                    :<div>Not</div>}
                </Col>
                {/* right col */}

                <Col size="xs-12 sm-8 md-8 lg-10">
                    <Card className={classes.card}>
                        <Row>
                            {/* Company img */}
                            <Col size='xs-12 sm-12 md-12 lg-4 xl-4'>
                                <div className={classes.cover}>
                                    <img
                                        className={classes.coverImage}
                                        src="https://cdn.archpaper.com/wp-content/uploads/2018/09/portland_building_reconstruction-preview.jpg"
                                        title="Live from space album cover"
                                    />
                                </div>
                            </Col>
                            <Col size='xs-12 sm-12 md-12 lg-8'>
                                <div className={classes.details}>
                                    <CardContent className={classes.content}>

                                        <Row>
                                            <Col size='xs-6 md-6'>
                                                <Typography component="h3" variant="h3" className={classes.companyName}>
                                                    Long Name Incorporated
                                                </Typography>
                                                <Typography variant="subtitle1" color="textSecondary" className={classes.companyINFO}>Category: Animals</Typography>
                                                <Typography variant="subtitle1" color="textSecondary" className={classes.companyINFO}>Location: Nashville, TN </Typography>

                                            </Col>
                                            <Col size='xs-6 md-6'>
                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                    <Grid container justify="space-around" className={classes.dater}>
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

                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col size='md-12'>
                                                <Typography variant="subtitle1" color="textSecondary" className={classes.description}>Description: Lorem ipsum dolor sit amet,
                                             consectetur adipiscing elit. Nulla tristique in turpis sit amet congue. Nam rhoncus,
                                              dolor vel faucibus facilisis, turpis leo maximus mi, vitae tristique dui est vel dui.
                                  Duis ligula tellus, venenatis a suscipit in, venenatis eu lectus. Donec eget ultrices tellus. Lorem ipsum dolor sit amet,
                                             consectetur adipiscing elit. Nulla tristique in turpis sit amet congue. Nam rhoncus,
                                              dolor vel faucibus facilisis, turpis leo maximus mi, vitae tristique dui est vel dui.
                                  Duis ligula tellus, venenatis a suscipit in, venenatis eu lectus. Donec eget ultrices tellus. Lorem ipsum dolor sit amet,
                                             consectetur adipiscing elit. Nulla tristique in turpis sit amet congue. Nam rhoncus,
                                              dolor vel faucibus facilisis, turpis leo maximus mi, vitae tristique dui est vel dui.
                                  Duis ligula tellus, venenatis a suscipit in, venenatis eu lectus. Donec eget ultrices tellus.Lorem ipsum dolor sit amet,
                                             consectetur adipiscing elit. Nulla tristique in turpis sit amet congue. Nam rhoncus,
                                              dolor vel faucibus facilisis, turpis leo maximus mi, vitae tristique dui est vel dui.
                                  Duis ligula tellus, venenatis a suscipit in, venenatis eu lectus. Donec eget ultrices tellus.Lorem ipsum dolor sit amet,
                                             consectetur adipiscing elit. Nulla tristique in turpis sit amet congue. Nam rhoncus,
                                              dolor vel faucibus facilisis, turpis leo maximus mi, vitae tristique dui est vel dui.
                                  Duis ligula tellus, venenatis a suscipit in, venenatis eu lectus. Donec eget ultrices tellus.Lorem ipsum dolor sit amet,
                                             consectetur adipiscing elit. Nulla tristique in turpis sit amet congue. Nam rhoncus,
                                              dolor vel faucibus facilisis, turpis leo maximus mi, vitae tristique dui est vel dui.
                                  Duis ligula tellus, venenatis a suscipit in, venenatis eu lectus. Donec eget ultrices tellus.</Typography>

                                            </Col>

                                        </Row>
                                    </CardContent>

                                </div>
                            </Col>

                            </Row>
                        {/* <Container> */}
                            <Row>
                                <Col size="md-12">
                                    <div className={classes.gridList}>
                                        <GridList cellHeight={160} cols={2} style={{ width: '100%' }}>
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
                                                        }
                                                    />
                                                </GridListTile>
                                            ))}
                                        </GridList>
                                    </div>
                                </Col>
                            
                        {/* </Container> */}

                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}


