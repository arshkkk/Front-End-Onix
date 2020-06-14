import React from 'react'
import RegisterComponent from './RegisterComponent'
import Registration_Success_Modal from './Modals/Registration_Success_Modal'
import './register.css'


class Signup extends React.Component{
    state = {
        registration_successful:false
    }
    
    
    render(){
        var toRender;
        if(this.state.registration_successful===false){
            toRender = <RegisterComponent registration_Success={()=>this.setState({registration_successful:true})}/>

        }
        else 
        toRender = <Registration_Success_Modal/>
        
        return (
            <React.Fragment>
                {toRender}
            </React.Fragment>
        )
    }
        
      
    
}

export default Signup