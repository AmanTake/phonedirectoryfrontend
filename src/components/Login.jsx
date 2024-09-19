import { Toast } from 'bootstrap';
import React from 'react'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';


function Login() {
  const [email,setName ]= useState('');
  const [password,setPassword] = useState('');
  const [error,setError]  = useState('');
  const cookies = new Cookies();
  const navigate = useNavigate();


  async function login(e)
  {
  e.preventDefault();
    console.log(email,password)
    let result = await fetch('http://127.0.0.1:5000/users/Login',{
       method:'POST',
       headers:{'Content-Type':'application/json'},
       body:JSON.stringify({email:email,password:password})
      })
      if(result.status===200){
        result = await result.json();
        cookies.set("users",JSON.stringify(result.data))
        toast.success("Successfull login")
        window.location.href='/Show'
        navigate('/Show')
      }
      else if
          (result.status===400){
              result=await result.json();
              setError(result.MSG)
              setInterval(() => {
              }, 5000)
          }
      
      
         console.log(result);
  }

  // const login=(e)=>{
  //   console.log(name,password);
  //   }

  return (
    <div>
  <div className='Signup'>
    
  <title>Creative Colorlib Login Form</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
  {/* Custom Theme files */}
  <link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
  {/* //Custom Theme files */}
  {/* web font */}
  <link href="//fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,700,700i" rel="stylesheet" />
  {/* //web font */}
  {/* main */}
  <div className="main-w3layouts wrapper">
    <h1> <b>Login Page</b></h1>
    
    <div className="main-agileinfo">
      <div className="agileits-top">
        <form onSubmit={login}>
          <input className="text" type="text" name="Username" placeholder="Enter Username or email" onChange={(e)=>{setName(e.target.value)}} required />
          <br></br>
          <input className="text" type="password" name="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} required />
          <br></br>
          <div className="wthree-text">
            <label className="anim">
              <input type="checkbox" className="checkbox" required />
              <span>I Agree To The Terms &amp; Conditions</span>
            </label>
            <div className="clear"> </div>
          </div>
          <input type="Submit" defaultValue="Login" />
            <Toaster/>
        </form>
        
        <p>Do not have an account?<Link to='/Singup'> Signup now!</Link></p>        
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

export default Login
