import React from 'react'
import { Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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


export function Navbar({restaurantArray}) {
    const classes = useStyles();
    console.log(restaurantArray)
    return (

       
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
       
    )
}





