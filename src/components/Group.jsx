import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie';
import axios from 'axios';

function Group() {
 const [name,setName]=useState('');
 const [group,setGroup]=useState([]);
 const [btn,setBtn]=useState(false);
 const [index,setIndex]=useState(-1);
 const cookies=new Cookies();



useEffect(()=>{
	GetGroup()
},[])

 async function GetGroup() 
 {
	 console.log(window.location.pathname);

	 const user =cookies.get('users');
	 if(user!==undefined){

			 let result = await fetch(`http://localhost:5000/group/GetGroup/${user._id}`,{
					 method:'GET',
					 headers:{'Content-Type':'application/json'},
			 })
			 
			 if (result.status===200)
				 {
					 result = await result.json();
					 console.log(result.data); 
					 setGroup(result.data);
				 }
		 else if(result.status===400){
			 result = await result.json();
			//  setError(result.error)
			 setInterval(()=>{
			//  setError('')
			 },5000)
		 }
	 }                   
   }

   function SetName(name,i){
	console.log(i);
	setIndex(i);
	setName(name);
    setBtn(true);
   }

   const UpdateGroup = async () => {
	console.log(group[index]._id);
	const response = await axios.patch(`http://localhost:5000/group/UptadeGroup/${group[index]._id}`,
	  {
		name:name,
	  }
	)
	console.log(response.status);
	if (response.status === 200){
		setName('')
	 GetGroup();
	} else if (response.status === 400) {
	  console.log(response.data.msg);
	}
	setBtn(false)
  };


   const deleteGroup= async(id)=>{
	if (window.confirm("Are you sure you want to delete this group ?")) {
		let result = await fetch(`http://localhost:5000/group/GetGroup/${id}`,{
			method:'DELETE',
			headers:{'Content-Type':'application/json'},
			})
			if (result.status===200){
			// setError(result.msg)
			// toast.success('successfully delete')
			GetGroup()
			}
	  }
}


    async function AddGroup() {
		const user =cookies.get('users');
		// let result =await axios.post("http://localhost:8000/contact/addcontact");
		let result = await fetch(`http://localhost:5000/group/AddGroup`,{
				method:'POST',
				headers:{'Content-Type':'application/json'},
				body:JSON.stringify({name:name,userId:user._id})
		 })
		 if (result.status===201)
			{
			 setName('')
			}           
		else if(result.status===400){
			result = await result.json();
			// setError(result.error)
			setInterval(()=>{
			//   setError('')
			},5000)
	   }
	   GetGroup()
	  }
  return (
    <div >
      <div><h3 className='text-center'>Add New Group</h3></div><br />
		<div className='row' style={{marginLeft:'20%'}}>
			<div className='col-sm-4'> 
				<input className=' form-control mr-sm-2' type='text' value={name} name ='name' placeholder='Enter your Name' onChange={(e)=>setName(e.target.value)}  required/><br/>
            </div>
			<div className='col-sm-2 ms-1 '>
			
			{btn===false? <button className='btn btn-primary'  onClick={AddGroup} style={{marginLeft:"30%"}}>AddGroup</button>:
			<button className='btn btn-primary' onClick={UpdateGroup} style={{marginLeft:"30%"}}>UpdateGroup</button>}
			</div>
		</div>
		<div className='row' style={{marginLeft:'20%'}}>
			<div className='col-sm-4'>
			<h6> GROUPS </h6>
            </div>
			<div className='col-sm-2 ms-1 '>
			<h6> Action </h6>
			</div>
		</div>
		{group.length===0?<h4 style={{marginLeft:'20%'}}>Group is Not Found</h4>
		:
		group.map((item,index)=>{
			return <div className='row' style={{marginLeft:'20%'}}>
						<div className='col-sm-4'>
							{item.name}
						</div>
						<div className='col-sm-2 ms-1 '>
							<a href="#" className="table-link text-success" onClick={()=>SetName(item.name,index)} >
								<span className="fa-stack">
									<i className="fa fa-square fa-stack-2x"></i>
									<i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
								</span>
							</a>
							<a href="#" className="table-link text-danger" onClick={()=>deleteGroup(item._id)}>
								<span className="fa-stack">
									<i className="fa fa-square fa-stack-2x"></i>
									<i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
								</span>
							</a>
						</div>
					</div>
		})
		}
		
    </div>
  )
}

export default Group