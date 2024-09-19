import React, { useEffect, useState } from 'react'
import './Allcontact.css'
import Cookies from 'universal-cookie';
import { MdMarkEmailRead } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


function Allcontact() {
    const [data,setData]=useState([]);
    // const [error,setError]=useState();
    const cookies = new Cookies();


	const [search,setSearch]= useState('')
  const [filteredData,setFilteredData]=useState([]);
   useEffect(()=>{
    Show();
   },[])

   async function Delete(id) {

	   if(window.confirm("Are you sure want to delete it")){
		console.log(id);
	let result = await fetch(`http://127.0.0.1:5000/api/GetContact/${id}`,{
		method:'DELETE',
		headers:{'Content-Type':'application/json'},
     })
				if (result.status === 200){
					console.log("deleted");
					toast.success("delete Successfull")
				}
      }
     Show()
	
   }
   const navigate = useNavigate();
//    function Update ()
//    {
//     // e.preventDefault();
//     navigate('/Update')

//    }
   const user =cookies.get('users');
    async function Show() {
		let result = await fetch(`http://127.0.0.1:5000/api/GetContact/${user._id}`,{
				method:'GET',
				headers:{'Content-Type':'application/json'},
		 })
		
		 if (result.status===200)
			{
				result = await result.json();
				console.log(result.data); 
                setData(result.data);
		    }
	  //  else if(result.status===400){
		// result = await result.json();
		// setError(result.error)
		// setInterval(()=>{
		//   setError('')
		// },5000)
	  //  }
	
	  }
	  
 useEffect(() => {
  const filteredData = data.filter((item) => {
    return ( 
      
      item.name.toLowerCase().includes(search.trim().toLowerCase()) ||
      item.email.toLowerCase().includes(search.trim().toLowerCase()) ||
      item.number.toString().includes(search.trim()) ||
      item.address.toLowerCase().includes(search.trim().toLowerCase())||
	  item.group.toLowerCase().includes(search.trim().toLowerCase())
    );
  });
  setFilteredData(filteredData);
}, [search, data]);

  return (
    <div>
      <div style={{marginTop:'10px'}}><h1><b>{cookies.get('users')!==undefined && `Welcome ${user.name}`}</b></h1></div>
    <div className="container">
<div className="row">
	<div className="col-lg-12">
		<div className="main-box clearfix">
			<div className="table-responsive" style={{marginTop:'1'}}>
					<div className='search'>	
					<input className="form-control mr-sm-2" style={{marginLeft:'10px'}}type="search" placeholder="Search" onChange={(e)=> setSearch(e.target.value)} aria-label="Search"></input>
					</div>
				<table className="table user-list">
					<thead>
						<tr>
							<th><span><FaUsers /> Name</span></th>
							<th><span><MdMarkEmailRead /> Email</span></th>
							<th className="text-center"><span><FaPhoneVolume /> Number</span></th>
							<th><span> <FaAddressBook /> Address</span></th>
							  <th> <span> Group </span></th>
                              <th><span><GrTransaction /> Action </span></th>
						</tr>
					</thead>
					<tbody>
						{
							 filteredData.length===0?(
								<tr>
									 <td colSpan="6" className="text-center">No Data Found</td>
								</tr>
								 ):(
								 filteredData.map((item,index)=>{
                              {  return(
                                <tr key={index}>
							<td>
								<h3>{item.name}</h3>      
							</td>       
							<td>
                            <a href="#  ">{item.email}</a>
							</td>
							<td className="text-center">
								<span className="label label-success">{item.number}</span>
							</td>
							<td>
								{item.address}
							</td>
							
							<td>	
								{item.group}
							</td>
							<td style={{width: "20%"}}>
								{/* <a href="#" className="table-link">
									<span className="fa-stack">
										<i className="fa fa-square fa-stack-2x"></i>
										<i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
									</span>
								</a> */}
								<Link to={'/Update/'+item._id}className="table-link">
									<span className="fa-stack">
										<i className="fa fa-square fa-stack-2x"></i>
										<i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
									</span>
								</Link>
								<a href="#" className="table-link danger" onClick={()=>Delete(item._id)}>
									<span className="fa-stack">
										<i className="fa fa-square fa-stack-2x"></i>
										<i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
									</span>
								</a>
								<Toaster/>
							</td>
							
						</tr>)
						}
                            })
                       ) }
					 
	
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
</div>
										
    </div>
  )
}

export default Allcontact