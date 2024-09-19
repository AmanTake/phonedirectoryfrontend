import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Cookies from 'universal-cookie';


function Addcontact() {
  const [name,setName ]= useState('');
  const [email,setEmail] = useState('');
  const [number,setNumber] = useState('');
  const [address,setAddress] = useState('');
  const [group,setGroup] = useState([]);
  // const [userId,setUserId] = useState('');
 const [grp,setGrp] = useState()  
  const cookies = new Cookies()      

  const navigate = useNavigate();

  
  async function add(e)
  {
  e.preventDefault();
   const user = cookies.get('users')

    console.log(name,email,number,address,grp)
    console.log("group=>",grp);
    let result = await fetch('http://127.0.0.1:5000/api/AddContact',{
       method:'POST',
       headers:{'Content-Type':'application/json'},
       body:JSON.stringify({name:name,email:email,number:number,group:grp,address:address,userId:user._id})
      })
      if(result.status===201){
        console.log(result);
        navigate('/Show')
      }
  }
  useEffect(()=>{
    GetGroup();
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
					 console.log("data=>",result); 
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

   console.log("group=>",group);
  return (
    <div>
     <div className='Signup'>
  <div className="main-w3layouts wrapper">
    <h1><b>Add Contact</b></h1>
    <div className="main-agileinfo">
      <div className="agileits-top">
        <form onSubmit={add}>
          <input className="text" type="text" name="name" placeholder="Please Enter name" onChange={(e)=>{setName(e.target.value)}} required /><br></br>
          <input className="text" type="text" name="email"placeholder="Please Enter Email" onChange={(e)=>{setEmail(e.target.value)}} required /><br></br>
          <input className="text" type="text" name="number" placeholder="Please enter contact number " onChange={(e)=>{setNumber(e.target.value)}} required /><br></br>
          <input className="text" type="text" name="address"placeholder="Please Enter Address" onChange={(e)=>{setAddress(e.target.value)}} required /><br></br>
          
          <select className="form-select" onChange={(e)=>setGrp(e.target.value)} 
            style={{ background: "transparent",height: "45px",width: "94%",borderRadius: "16px",color: "white"}}>
            <option>Select Group </option>
            {
              group.map((item)=>{
                return(
                  <option style={{backgroundColor:"#76b852"}} value={item.name}>{item.name}</option>
                )
              })
            }
                  </select>    
          {/* <input className="text" type="text" name="userId"placeholder="Please Enter UserId" onChange={(e)=>{setUserId(e.target.value)}} /><br></br> */}
          <div className="wthree-text">
            
            <div className="clear"> </div>
          </div>
          <input type="Submit" defaultValue="Register" />
        </form>
    
      </div>
    </div>
    {/* copyright */}
    
    
  </div>
 
</div>
 
    </div>
  )
}

export default Addcontact
