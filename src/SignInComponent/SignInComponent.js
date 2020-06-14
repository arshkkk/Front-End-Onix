import React from 'react'
import LoginComponent from './LoginComponent'
import Verify_Email_Modal from './Modals/Verify_Email_Modal'
import Wrong_Password_Or_Username from './Modals/Wrong_Password_Or_Email_Modal'

class Signup extends React.Component{
    state = {
        email_verified_modal:false,
        wrong_password_or_username_modal:false
    }
    
    
    render(){
        var toRender = [];
        toRender.push(<LoginComponent loggedIn={()=>{this.props.history.push('/about')}} wrong_password_or_username_modal={()=>this.setState({wrong_password_or_username_modal:true})} email_verified_modal={()=>this.setState({email_verified_modal:true})}/>)
        if(this.state.email_verified_modal===true){
            toRender.push(<Verify_Email_Modal/>)
        }
        else if(this.state.wrong_password_or_username_modal===true)
        toRender.push(<Wrong_Password_Or_Username onClick={()=>this.setState({wrong_password_or_username_modal:false})} />)
    

        return (
            <React.Fragment>
                {toRender}
            </React.Fragment>
        )
    }
        
      
    
}

export default Signup