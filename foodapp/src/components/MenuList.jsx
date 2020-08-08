import React from 'react';
import { connect } from 'react-redux'
import { addItem } from '../redux/actions.js'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    root1: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
}));
const MenuList = (props) => {
    const {addItem} = props
    const { url, name, price, id, match } = props
    const classes = useStyles();
    return (
        <Grid item xs={3}>
            <Paper className={classes.paper}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={url}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {name}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        {/* <Link to={`${match.url}/${id}`}> */}
                            <Button size="small" color="primary" id={id} onClick={() => addItem({id})}>
                                Add to cart
                            </Button>
                        {/* </Link> */}
                        <div>Price: {price}</div>
                    </CardActions>
                </Card>
            </Paper>
        </Grid>

    );
}

const mapStateToProps = state => {
    return {
        arr: state.cartItems
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addItem: payload=> dispatch(addItem(payload))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(MenuList)