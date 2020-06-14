import React from 'react'
import {Link} from 'react-router-dom'
export default function FrontPage() {
    return (
        <>
               <div>This is front Page contentType</div> 
               <Link to="/home">Restaurants</Link>
        </>
    )
}
