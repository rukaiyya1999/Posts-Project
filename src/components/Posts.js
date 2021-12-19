import React,{useState, useEffect} from 'react'
import Navbarpage from '../components/Navbarpage'
const Posts =(props)=>{

	const [list, setlist] = useState([])
	const [loading, setloading] = useState(true)

	useEffect(()=>{
		fetch('http://localhost:3000/posts')
		.then((resp)=>{
			resp.json().then((result)=>{
				setlist(result);
			})
		})
	},[]);

	useEffect(()=>{
		if(list.length !== 0){
			setloading(false)
		}
	},[list]);
	return(
			<div className = 'tablediv'>
			 <Navbarpage/>
			{loading ? (
				<h1>Loading...</h1>
				):(

						<table className = 'tabledata'>
						<thead className = 'tablehead'>
						<tr className = 'rowdata'>
						<th>ID</th>
						<th>UserName</th>
						<th>Title</th>
						<th>Body</th>
						</tr>
						</thead>

						<tbody className = 'tablebody'>
					
						{list.map((item)=>(

						<tr>
						<td>{item.id}</td>
						<td>{item.userId}</td>
						<td>{item.title}</td>
						<td>{item.body}</td>
						</tr>

						))
						}
						</tbody>
						</table>
					
				)}
			</div>
		)
}

export default Posts;