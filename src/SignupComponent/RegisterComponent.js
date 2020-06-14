import React from 'react';
import './register.css'
import config from '../config'
import axios from 'axios'
import {FormFeedback,Input,FormGroup,Form} from 'reactstrap'

import messages from './Constants/messages'
import { NavLink } from 'react-router-dom';

class Register extends React.Component{
    
    constructor(props){
        super(props)
        console.log(this.props)
        this.state={
            full_name:'',
            username:'',
            usernameValid:{},
            usernameValidMessaege:'',
            usernameInvalidMessage: '',
            confirm_password:'',
            password:'',
            passwordValid:{},
            passwordInvalidMessage:'',
            passwordValidMessage:'',
            email:'',
            emailValid:{},
            emailValidMessage:'',
            emailInvalidMessage:'',
        }
    }
    
    removeFeedback = (name)=>{
        if(name==='username')
            this.setState({
                usernameValid:{},
                usernameInvalidMessage:'',
                usernameValidMessage:''
            })
        
        else if(name==='email')
            this.setState({
                emailValid:{},
                emailValidMessage:'',
                emailInvalidMessage:''
            })

        else if(name==='confirm_password'){
            this.setState({
                passwordValid:{},
                passwordValidMessage:'',
                emailInvalidMessage:''
            })
        }
        
    }

    onChange = (event)=>{
        var name = event.target.name
        var value = event.target.value
        
        this.setState({
            [name]:value
        })

        this.removeFeedback(event.target.name)
    }

    onSubmit = (event)=>{
        event.preventDefault()
        if(this.state.emailValid.valid&&this.state.usernameValid.valid&&(this.state.password===this.state.confirm_password)){
            axios.post(config.backendUrl+config.registerRoute,this.state)
            .then((res)=>{
                console.log(this.props)
                this.props.registration_Success()
            })
            .catch(err=>{
                console.log("Err: "+ err)
            })
        }
        
    }

    isEmail = (emailId)=>{
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(emailId)
    }
    
    checkIfAvailableOnDatabase(payload,callback){
        
        axios.post(`${config.backendUrl}/verify`,payload)
        .then(res=> {
                //Not Available
                console.log(res.data)
                if(res.data.available===false) callback(false)
                //Available
                else callback(true)
        })
        .catch(err=>console.log(err))
    }

    handleAvailabilityOfEmail = ()=>{
        var emailId = this.state.email
        if(!this.isEmail(emailId)) return this.setState({emailValid:{invalid:true},emailInvalidMessage:messages.INVALID_EMAIL_ID})
        
        this.checkIfAvailableOnDatabase({email:emailId},available=>{
            if(available)
            return this.setState({emailValid:{valid:true},emailValidMessage:messages.EMAIL_ID_AVAILABLE})
            else 
            return this.setState({emailValid:{invalid:true},emailInvalidMessage:messages.EMAIL_ID_NOT_AVAILABLE})
        })
    }


    handleAvailabilityOfUsername = ()=>{
        var username = this.state.username
        if(username.length===0) 
        return this.setState({usernameValid:{invalid:true},usernameInvalidMessage:messages.USERNAME_EMPTY})
        this.checkIfAvailableOnDatabase({username:username},available=>{
            if(available)
            this.setState({usernameValid:{valid:true},usernameValidMessage:messages.USERNAME_AVAILABLE})
            else 
            this.setState({usernameValid:{invalid:true},usernameInvalidMessage:messages.USERNAME_NOT_AVAILABLE})
        })

    }

    handlePassword = ()=>{
        if(this.state.password!==this.state.confirm_password)
        this.setState({passwordValid:{invalid:true},passwordInvalid:messages.PASSWORD_NOT_MATCHES})
        else if(this.state.password.length<8)
        this.setState({passwordValid:{invalid:true},passwordInvalid:messages.PASSWORD_SHORT})
        else      
        this.setState({passwordValid:{valid:true},passwordValidMessage:messages.PASSWORD_SUCCESS})
    }

    onBlur = (event)=>{        
        //Checking if username is empty or not, if not check verify if username available on database
        if(event.target.name==='username')
        this.handleAvailabilityOfUsername()

        //Checking if email is empty or not, if not check verify if email is valid and then verify if available on database
        if(event.target.name==='email')
        this.handleAvailabilityOfEmail()

        //Checking if confirm password matches with password
        if(event.target.name==='confirm_password'||event.target.name==='password')
        this.handlePassword()
    }

    render(){
        const formController = {
            onBlur: this.onBlur,
            onChange: this.onChange
        }
      

        return(
        <div class="signup-form">
        <Form autocomplete="off" onSubmit={this.onSubmit}>

            <h2>Register</h2>
            <p class="hint-text">Create your account. It's free and only takes a minute.</p>
            <div class="form-group">
             <input onChange={this.onChange} type="text" class="form-control" name="full_name" placeholder="Full Name" required/>       	
            </div>
            
            <FormGroup>
            <Input {...formController} {...this.state.usernameValid} type="text" class="form-control" name="username" placeholder="Username" required/>
            <FormFeedback valid>{this.state.usernameValidMessage}</FormFeedback>
            <FormFeedback invalid>{this.state.usernameInvalidMessage}</FormFeedback>
            </FormGroup>

            <FormGroup>
            <Input {...formController} {...this.state.emailValid} type="email" class="form-control" name="email" placeholder="Email" required/>
           <FormFeedback valid>{this.state.emailValidMessage}</FormFeedback>
           <FormFeedback invalid>{this.state.emailInvalidMessage}</FormFeedback>
            </FormGroup>

            <FormGroup>
            <Input {...this.state.passwordValid} {...formController} type="password" class="form-control" name="password" placeholder="Password" minLength="8" required/>
            </FormGroup>
            <FormGroup>
            <Input {...this.state.passwordValid} {...formController} type="password" class="form-control" name="confirm_password" placeholder="Confirm Password" minLength="8" required/>
                <FormFeedback valid>{this.state.passwordValidMessage}</FormFeedback>
                <FormFeedback invalid>{this.state.passwordInvalid}</FormFeedback>
            </FormGroup>
                
            {/* <div class="form-group">
                <label class="checkbox-inline"><input {...formController} type="checkbox" required="required" name="accepted" /> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
            </div> */}
            <div class="form-group">
                <button type="submit" class="btn btn-success btn-lg btn-block">Register Now</button>
            </div>
        </Form>
	<div class="text-center" >Already have an account? <NavLink to="/login" class="sign-in-button">Sign in</NavLink></div>
    </div>
      
     )    
    

}
}
export default Register