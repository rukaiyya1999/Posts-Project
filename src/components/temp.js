{/*import React, {useState} from 'react'
import Navbarpage from '../components/Navbarpage'
const Login =()=>{

	const [email, setemail] = useState(null)
	const [password, setpassword] = useState(null)

	const login=()=>{
		console.log({email, password})
		fetch('http://localhost:3000/login').then((data)=>{
			data.json().then((result)=>{
			
			if(result.length>0){
				console.log("result", result)
			}else {
				alert('please check username')
			}
			})
		})
	}
	return(
			<div>
			<Navbarpage/>
		<div className="loginpage"><br/>
      	<input type='text' placeholder="Enter Username" onChange = {(event)=>{setemail(event.target.value)}}></input><br/><br/>
      	<input type='password' placeholder="Enter Password" onChange = {(event)=> {setpassword(event.target.value)}}></input><br/><br/>
      	<button onClick={login}>Login</button>
      </div>
		</div>
		)
}

export default Login;*/}