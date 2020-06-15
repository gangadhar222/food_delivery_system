import React from 'react'
import MenuList from './MenuList.jsx'
import {connect} from 'react-redux'
import { Grid } from '@material-ui/core';



function Menu(props) {
  const {match,restaurantArray} = props
  const item = restaurantArray.find(item =>item.id==match.params.id)
    return (
        <Grid container justify="center" spacing={1}>
                {item.Menu.map(item => <MenuList key={item.id} name={item.item} url={item.img} price={item.price} id={item.id} match={match}/>)}
        </Grid>
    )
}

const mapStateToProps = state =>({
    restaurantArray:state.restaurantArray
})

export default connect(mapStateToProps)(Menu)