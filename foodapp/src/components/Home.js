import React from 'react'
import { Grid } from '@material-ui/core';
import RestCard from './Card.js'
export default function Home(props) {
    const { restaurantArray } = props
    console.log(restaurantArray)
    return (
        <div>
            <Grid container justify="center" spacing={1}> 
            {restaurantArray.map(item => <RestCard key={item.id} name={item.name} url={item.url} menu={item.menu} />)}
            </Grid>
        </div>
    )
}
