import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


function Signup() {
  const [name,setName ]= useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmpassword,setconfirmpassword] = useState('');
  // const [error,setError] = useState('');
  const navigate = useNavigate();
  
  async function signup(e)
  {
  e.preventDefault();
    console.log(name,email,confirmpassword)
    let result = await fetch('http://127.0.0.1:5000/users/Signup',{
       method:'POST',
       headers:{'Content-Type':'application/json'},
       body:JSON.stringify({name:name,email:email,password:password,confirmpassword:confirmpassword})
      })
      console.log(result);
      navigate('/Login')
  }

  return (
<div>
  <div className='Signup'>
  <div className="main-w3layouts wrapper">
    <h1><b>Registration </b></h1>
    <div className="main-agileinfo">
      <div className="agileits-top">
        <form  onSubmit={signup} >
          <input className="text" type="text" name="Username" placeholder="Username" onChange={(e)=>{setName(e.target.value)}} required />
          <input className="text email" type="email" name="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} required />
          <input className="text" type="password" name="password" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}} required />
          <input className="text w3lpass" type="password" name="password" placeholder="comfirmpassword" onChange={(e)=>{setconfirmpassword(e.target.value)}} required />
          <div className="wthree-text">
            <label className="anim">
              <input type="checkbox" className="checkbox" required />
              <span>I Agree To The Terms &amp; Conditions</span>
            </label>
            <div className="clear"> </div>
          </div>
          <input type="Submit" defaultValue="SIGNUP" />
        </form>
        <p> Already have an account?<Link to='/Login'> Login Now!</Link></p>
      </div>
    </div>
    {/* copyright */}
    <div className="colorlibcopy-agile">
      {/* <p>© 2018 Colorlib Signup Form. All rights reserved | Design by <a href="https://colorlib.com/" target="_blank">Colorlib</a></p> */}
    </div>
    {/* //copyright */}
    
  </div>
  {/* //main */}
</div>
</div>
  
  )
}

export default Signup;
