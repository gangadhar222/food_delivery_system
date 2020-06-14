import React from 'react'
import { connect} from 'react-redux'
import { Grid } from '@material-ui/core';
import RestCard from './Card.jsx'
 const Home = (props)=> {
    let {restaurantArray} = props
    let {match} = props
    return (
        <div>
            <Grid container justify="center" spacing={1}>
                {restaurantArray.map(item => <RestCard key={item.id} name={item.name} url={item.url} menu={item.menu} match={match} id={item.id}/>)}
            </Grid>
        </div>
    )   
}

const mapStateToProps = state =>({
    restaurantArray:state.restaurantArray
})

export default connect(mapStateToProps)(Home)