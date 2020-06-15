import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from './Home.jsx'
import {Login} from './Login.jsx'
import {Signup} from './Signup.jsx'
import Menu from './Menu.jsx'
import Cart from './Cart.jsx'
import AddToCart from './AddToCart.jsx'
 function Routes() {
    return (
      <Switch>
          <Route  exact path="/" render={(props) =><Home {...props}/>}></Route>
          <Route path="/login" render={(props) =><Login {...props}/>}></Route>
          <Route path="/cart" render={(props) =><Cart {...props}/>}></Route>
          <Route path="/signup" render={() =><Signup/>}></Route>
          <Route exact path="/:id" render={(props) =><Menu {...props}/>}></Route>
          <Route exact path="/:id/:id" render={(props) =><AddToCart {...props}/>}></Route>
      </Switch>
    )
}

export default Routes;