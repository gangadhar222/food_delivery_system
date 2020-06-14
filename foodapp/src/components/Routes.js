import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from './Home.js'
import {Login} from './Login.js'
import {Signup} from './Signup.js'
 function Routes() {
    return (
      <Switch>
          <Route exact path="/" render={() =><Home/>}/>
          <Route path="/login" render={() =><Login/>}/>
          <Route path="/signup" render={() =><Signup/>}/>
      </Switch>
    )
}

export default Routes;