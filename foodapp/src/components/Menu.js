import React from 'react'
import MenuList from './MenuList.js'
import { Grid } from '@material-ui/core';

const menu = [
    {
        item: "Chicken Biryani",
        price: 300,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcReWi_qjBzQ1tCvlrAbRKdc262GoewHbruxbCkyyrkh4uzDeRTj&usqp=CAU",
        category: "Non-veg",
        id:1
    },
    {
        item: "Paneer Butter Masala.",
        price: 300,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrWqumd1XFsdrdfLjdGxZ6TgldH6cu1-rbI2YE9baiSMk5yt1T&usqp=CAU",
        "category": "Veg",
        id:2
    },
    {
        item: "Fresh Corn Soup",
        price: 300,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqqZbBhUqwSAn0fkkIm3XKoonEIWDai8ZvgHybEbPcKmCz5Oi2&usqp=CAU",
        category: "Veg",
        id:3
    },
    {
        item: "Dal Makhani",
        price: 300,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRA98nHKUbWJLHCgOv24Jbi85bZ3t_lK6zKEC7VfaEfY0ZlYLwH&usqp=CAU",
        category: "Non-veg",
        id:4
    }
]

export default function Menu() {
    console.log('hi')
    return (
        <Grid container justify="center" spacing={1}>
                   {menu.map(item => <MenuList key={item.id} name={item.item} url={item.img}/>)}
        </Grid>
    )
}
