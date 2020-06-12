import React, { Component } from 'react'
import { Link, Switch, Route, BrowserRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import red from '@material-ui/core/colors/red';
import Login from './Login.js'
import Signup from './Signup.js'
import Home from './Home.js'

let details = [
    {
        name: "The Only Place",
        rating: 4.3,
        Address: "13, Museum Road, Behind Post Office, Bengaluru",
        Menu: [
            {
                item: "Chicken Biryani",
                price: 300,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcReWi_qjBzQ1tCvlrAbRKdc262GoewHbruxbCkyyrkh4uzDeRTj&usqp=CAU",
                category: "Non-veg"
            },
            {
                item: "Paneer Butter Masala.",
                price: 300,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrWqumd1XFsdrdfLjdGxZ6TgldH6cu1-rbI2YE9baiSMk5yt1T&usqp=CAU",
                "category": "Veg"
            },
            {
                item: "Fresh Corn Soup",
                price: 300,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqqZbBhUqwSAn0fkkIm3XKoonEIWDai8ZvgHybEbPcKmCz5Oi2&usqp=CAU",
                category: "Veg"
            },
            {
                item: "Dal Makhani",
                price: 300,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRA98nHKUbWJLHCgOv24Jbi85bZ3t_lK6zKEC7VfaEfY0ZlYLwH&usqp=CAU",
                category: "Non-veg"
            }
        ],
        payment: "card"
    }
]


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const primary = red[500]

function Navbar() {
    const classes = useStyles();
    return (
        <BrowserRouter>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            <Link to="/" class="">
                                <img src="https://cdn4.vectorstock.com/i/thumb-large/84/83/restaurant-logo-cooking-menu-symbol-vector-27278483.jpg" style={{width:"75px",height:"75px",padding:"5px"}}></img>
                            </Link>
                        </Typography>
                        <Typography className={classes.title} variant="h3" align="justify">FoodCheff</Typography>
                        <Button>
                           <Typography variant="h6"><Link to="/login">Login</Link></Typography>
                        </Button>
                        <Button>
                        <Typography variant="h6">  <Link to="/signup">Signup</Link></Typography>
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navbar;