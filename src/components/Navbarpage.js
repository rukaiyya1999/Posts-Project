import React, {useState} from 'react'
import Search from '../components/Search'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
const Navbarpage = () => {


	return(
			<div className = 'Navbar'>
      		<h1 className = 'heading'>Posts</h1>
			<ul className = 'ulist'>
            <li><Link className = 'linkclass' to = '/posts'>Posts</Link></li>
             <li><Link className = 'linkclass' to = '/login'>Login</Link></li>
          
      		</ul>
      			<Search/>
        	   
          </div>
		)
}
export default Navbarpage;