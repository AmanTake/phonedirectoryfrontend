import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

function Updatecontact() {
  const {id}=useParams();
   const navigate = useNavigate();
   const [name,setName ]= useState('');
  const [email,setEmail] = useState('');
  const [number,setNumber] = useState('');
  const [address,setAddress] = useState('');
  // const [contactsId,setContactsId] = useState(''); 
     
  useEffect(()=>{
    UpdateContact();
  },[])

const UpdateContact  = async()=>{
  console.log(id);
  const result = await axios.get(`http://127.0.0.1:5000/api/UpdateGetContact/${id}`)
  if (result.status===200){
    setName(result.data.data.name);
    setEmail(result.data.data.email);
    setNumber(result.data.data.number);
    setAddress(result.data.data.address);
    // setContactsId(result.data.data._id);
    console.log(result,name);
  }
}   

const Submit = async (e) =>{
  e.preventDefault();
  const response =await axios.patch(`http://127.0.0.1:5000/api/Submit/${id}`,
  {
    name:name,
    email:email,
    number:number,
    address:address
  }
) 
console.log(response.status);
if (response.status === 200){
  navigate('/show');
} else if (response.status === 400){
     console.log(response.data.msg);   
  }
};
  
    return (
        <div>
        <div className='Signup'>
      <div className="main-w3layouts wrapper">
        <h1><b>Update Contact Details </b></h1>
        <div className="main-agileinfo">
          <div className="agileits-top">
            <form onSubmit = {Submit}>
              <input className="text" type="text" value={name} name="name" placeholder="Please Enter name" onChange={(e)=>{setName(e.target.value)}}required /><br></br>
              <input className="text" type="text" value={email} name="email"placeholder="Please Enter Email" onChange={(e)=>{setEmail(e.target.value)}} required /><br></br>
              <input className="text" type="text" value={number} name="number" placeholder="Please enter contact number "onChange={(e)=>{setNumber(e.target.value)}} required /><br></br>
              <input className="text" type="text" value={address} name="address"placeholder="Please Enter Address" onChange={(e)=>{setAddress(e.target.value)}} required /><br></br>
              {/* <input className="text" type="text" name="userId"placeholder="Please Enter UserId" onChange={(e)=>{setUserId(e.target.value)}} /><br></br> */}
              <div className="wthree-text">
                
                <div className="clear"> </div>
              </div>
              <input type="Submit" defaultValue="Update" />
            </form>
        
          </div>
        </div>
        {/* copyright */}
        
        
      </div>
    
    </div>

        </div>
      )
    }

export default Updatecontact
