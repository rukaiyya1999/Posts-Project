import React, {useState} from 'react'
const Search=()=>{
	const [search, setsearch] = useState(null)
	const [nodata, setnodata] = useState(false)

	const searchapi=(key)=>{
		
		fetch('http://localhost:3000/posts?q='+ key).then((data)=>{
			data.json().then((resp)=>{
				console.log('resp', resp)
				if(resp.length>0){
					setsearch(resp)
					setnodata(false)
				}else {
					setnodata(true) 
					setsearch(false)
				}
			})
		})
	}
	return(
			
     <div>
	<input className='seachstyle' style = {{'margin-top': 25}} placeholder="Search Here" onChange={(event)=>{searchapi(event.target.value)}}/>
		<div>
		{search ? (
			<div>
				{search.filter((val)=>{
					return val
				}).map((item)=>(
					<div>{item.userId}
						{item.title}
						{item.body}
					</div>
					))
				}
			</div>
			):(
				' '
			)}

			{nodata ?(
				<h3>No data found</h3>
				):(
					null
				)
			}
		</div>
	</div>
	)
}

export default Search;