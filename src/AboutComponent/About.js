import React from 'react'
import './about.css'
import axios from 'axios'
import config from '../config'

class About extends React.Component{
    state = {
        full_name:'',
        email:'',
        username:''
    }

    componentDidMount(){
        axios.get(config.backendUrl+config.aboutRoute,{
            headers:{
                Authorization:'Bearer '+localStorage.getItem('token')
            }
        })
        .then(res=>{
            console.log(res)
            this.setState({...res.data.result})
        })
        .catch(err=>{
            console.log(err.response)
            this.props.history.push('/login')
            localStorage.clear()
        })
    }

    render(){
        return (
            <div class="about-form">
            <form>
                <h2>About</h2>
                <p class="hint-text">Shows Information About You saved on our Database except Password</p>
                <div class="form-group">
                <label for="full_name">Full Name</label>
                <input type="text" name="full_name" class="form-control" placeholder="Full Name" value={this.state.full_name} disabled/>
                </div>
                <label for="usrname">Username</label>
                <div class="form-group">
                <input type="text" name="username" class="form-control" placeholder="Username" value={this.state.username} disabled/>
                </div>
                <div class="form-group">
                <label for="email">Email</label>
                <input type="text" name="email" class="form-control" name="Email" placeholder="Email" value={this.state.email} disabled/>
                </div>
            </form>
            </div>
        )
    }
}

export default About