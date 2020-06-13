import React, { Component } from 'react'
import { Link, Switch, Route, BrowserRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import Login from './Login.js'
import Signup from './Signup.js'
import Home from './Home.js'

let restaurantArray = [
    {
        name: "The Only Place",
        rating: 4.3,
        Address: "13, Museum Road, Behind Post Office, Bengaluru",
        url:"https://lh3.googleusercontent.com/vkuUei0_ox4nTdd51Z6AZKiJBmIrcIQgaWj_MSOGBs6RN1ASCQ0CqmIws8eX7puNY_pmv6t2y0V-czDEISXEY30uR-M=w1000",
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
        payment: "card",
        id:1
    },
    {
        name: "The Fatty Bao",
        rating: 4.2,
        Address: "13, Museum Road, Behind Post Office, Bengaluru",
        url:"https://lh3.googleusercontent.com/Ic7F69PP8FmvR30ruKy9PdWCXrppKxgRpIuETrxljVHS6HnBxZtzmzso3NDC_aamKy1okOprkBYO-cY0qcaRNisMkRQ=w1000",
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
        payment: "card",
        id:2
    },
    {
        name: "JW Kitchen",
        rating: 4.3,
        Address: "13, Museum Road, Behind Post Office, Bengaluru",
        url:"https://lh3.googleusercontent.com/T4jvwfJCobV-TfBJVTqnuXaYJE15U9M5g7f1U91nbAtXdz0DzS-Xz25WuJHolXZTvZ4He00Cugu7GOzNFcphfzalMkU=w1000",
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
        payment: "card",
        id:3
    },
    {
        name: "Hoot",
        rating: 4.3,
        Address: "13, Museum Road, Behind Post Office, Bengaluru",
        url:"https://lh3.googleusercontent.com/mCK05A2JFmLAJk3r5XmuDhJGvQ355v7ZEo8ePY2ZDJE1Y-O-GKPF3LuPSXbu22mYoodwZNpEpIRS3qndodDFYS-nig=w1000",
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
        payment: "card",
        id:4
    }, 
     {
        name: "The Local",
        rating: 4.3,
        Address: "13, Museum Road, Behind Post Office, Bengaluru",
        url:"https://lh3.googleusercontent.com/6DGQM6mRN93NF0H6eNGvSuTPb_dnAtW7PpNE9A7QIFaBQP9zs-HlREhgelCc_TSZ7BG6fXz0tqlYyQxub20lzGfe-hI=w1000",
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
        payment: "card",
        id:5
    },
    {
        name: "Hakuna Matata",
        rating: 4.3,
        Address: "13, Museum Road, Behind Post Office, Bengaluru",
        url:"https://lh3.googleusercontent.com/DisB3OLqBSCOaDKKeGf1YK6azwNqv2rOytXfIgvoSlDPU_VjPZWZYAyVMsKMITTKfIrFf8dRuJWCYKt9R8NTFQhjnLTX=w1000",
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
        payment: "card",
        id:6
    },
    {
        name: "Bricklane",
        rating: 4.3,
        Address: "13, Museum Road, Behind Post Office, Bengaluru",
        url:"https://lh3.googleusercontent.com/LWN0iVsho7sC8JS7Y0CWYkh8jbFyAT24F4gyu0z0kfN9VYCWNdwIbd7DQ1iHmgHT-z2Nhho8sJZdNDi5lCgj6dUB9Cw=w1000",
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
        payment: "card",
        id:7
    },
    {
        name: "The Globe Grub",
        rating: 4.3,
        Address: "13, Museum Road, Behind Post Office, Bengaluru",
        url:"https://lh3.googleusercontent.com/hi3vNe1attPpFOYHnimv3uviWbw08cA4iQYfwOfctMVjyCutiE4IHNa3OAIkhnI28NJOgW4_yWdVPieABAH6DmEN3AOv=w1000",
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
        payment: "card",
        id:8
    },
    {
        name: "Onesta",
        rating: 4.3,
        Address: "13, Museum Road, Behind Post Office, Bengaluru",
        url:"https://lh3.googleusercontent.com/48NtOIDOJ7vwSwtrsxe9Pbi_L_EYt_aDhbQo8CGkq-IwPy42P7knYF9BB792aP8NkSuqWPk81SDbLeGTgMDpqHOzxHkd=w1000",
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
        payment: "card",
        id:9
    },
      {
        name: "The Black Rabbit",
        rating: 4.3,
        Address: "13, Museum Road, Behind Post Office, Bengaluru",
        url:"https://lh3.googleusercontent.com/REVfct6C9fnjnsfIriKr2fIVKfEk5NISc_gvVVCdMbZn6t8B5dcp90QjqolNgtLacegNWZGIlemczmLkF5TxxlbVCjI=w1000",
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
        payment: "card",
        id:10
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


function Navbar() {
    const classes = useStyles();
    return (
        <BrowserRouter>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            <Link to="/">
                                <img src="https://cdn4.vectorstock.com/i/thumb-large/84/83/restaurant-logo-cooking-menu-symbol-vector-27278483.jpg" style={{ width: "75px", height: "75px", padding: "5px" }}></img>
                            </Link>
                        </Typography>
                        <Typography className={classes.title} variant="h3" align="justify">FoodCheffs</Typography>
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
                <Route path="/" exact render={props => <Home restaurantArray={restaurantArray}/>} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navbar;