import React from 'react';
import './login.css'
import config from '../config'
import axios from 'axios'
import { NavLink } from 'react-router-dom';

class Login extends React.Component{

    constructor(props){
        super(props)
        this.state={
            username:'',
            password:''
        }
    }
    
    onChange = (event)=>{
        var name = event.target.name
        var value = event.target.value
        this.setState({
            [name]:value
        })
    }

    onSubmit = (event)=>{
        event.preventDefault()
        axios.post(config.backendUrl+config.loginRoute,this.state)
        .then((res)=>{
            console.log(res.data.result)
            localStorage.setItem('token',res.data.result.token)
            this.props.loggedIn()
        })
        .catch(err=>{
            if(err.response.status===401)
            if(err.response.data==='Unauthorized'){
                console.log('unauthro')
                this.props.wrong_password_or_username_modal()
            }
            else if(err.response.data==='Email_Not_Verified'){
                console.log('username passsword not valid')
                this.props.email_verified_modal()
            }
            console.log(err.response)
        })
        
    }
    render(){

        return(
         <div class="signin-form">
        <form onSubmit={this.onSubmit} action={`${config.backendUrl}${config.loginRoute}`} method="post">
            <h2>Login</h2>
            <p class="hint-text">Login to your account. It will give you access to Service provided by Us</p>
            <div class="form-group">
            <input onChange={this.onChange} type="text" class="form-control" name="username" placeholder="Username" required="required"/>
            </div>
            <div class="form-group">
                <input onChange={this.onChange} type="password" class="form-control" name="password" placeholder="Password" required="required"/>
            </div>    
            <div class="form-group">
                <button onChange={this.onChange} type="submit" class="btn btn-success btn-lg btn-block">Login</button>
            </div>
        </form>
	<div class="text-center" >Don't have an account? <NavLink to="/register" class="signup-button">Register</NavLink></div>
    </div>
      
     )    
    

}
}
export default Login