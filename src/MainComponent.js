import React from 'react'
import {Switch, Route,Redirect} from 'react-router-dom'
import SignupComponent from './SignupComponent/signupComponent'
import Login from './SignInComponent/SignInComponent'
import Verify from './SignInComponent/Modals/Wrong_Password_Or_Email_Modal'
import About from './AboutComponent/About'

const mainComponent = (props)=>{
    return (
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={SignupComponent}/>
            <Route path="/about" component={About}/>
            <Route path="/modal" component={Verify}/>
            {/* <Route path="/about" component={About}/> */}
            <Redirect to="/about"/>
        </Switch>
    )
}

export default mainComponent