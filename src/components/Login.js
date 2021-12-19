import React, { Component } from 'react';
import Navbarpage from '../components/Navbarpage'
 class Login extends Component {
 	constructor(){
 		super();
 		this.state = {
 			email:null,
 			password:null
 		}
 	}

 	login(){
 		console.log(this.state)
 		fetch('http://localhost:3000/login?q'+this.state.email).then((result)=>{
 			result.json().then((resp)=>{
 				console.warn('resp',resp);
 			})
 		})
 	}
	render() {
		return (
			<div>
				<Navbarpage/>
				<input type='text' placeholder="Enter Username" name="user" onChange={(event)=>this.setState({email:event.target.value})}></input><br/><br/>
      			<input type='password' placeholder="Enter Password" name="user" onChange={(event)=>this.setState({password:event.target.value})}></input><br/><br/>
      			<button onClick={()=>{this.login()}}>Login</button>
			</div>
		);
	}
}
export default Login;