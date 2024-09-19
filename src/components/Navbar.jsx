import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Cookies from 'universal-cookie';
import { useEffect,useState} from 'react';
// import { FaPhone } from "react-icons/fa6";


  function Navbar() {
    // const [isLogin,setIsLogin] = useState(false);
    const navigate = useNavigate();
    const cookies = new Cookies();
    // const users = cookies.get('users');
    useEffect(()=>{
      if(cookies.get('users')=== undefined)
       navigate ('/home')
      else{
        navigate('/Dasboard')
      }
      
     },[])
    return (

      
     <div>
      {
        cookies.get('users')===undefined ?
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link to ='home'className="navbar-brand"><h2>Phone-Book</h2></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          
          <Link to ='home'className="nav-link"><b>Home</b></Link>
        </li>
        <li className="nav-item"> 
          <Link to='About' className="nav-link"><b>About</b></Link>
        </li>
        <li className="nav-item">
          <Link to='Contact' className="nav-link"><b>Contact</b></Link>
        </li>
        <li className="nav-item">
          <Link to='Login' className="nav-link"><b>Login</b></Link>
        </li>
        <li className="nav-item">
          <Link to='Singup' className="nav-link"><b>Singup</b></Link>
        </li>
      </ul>
          
    </div>
  </nav>
  :
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link to ='Dasboard'className="navbar-brand"><h2>Dasboard </h2></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    
      
      <ul className="navbar-nav">
        <li className="nav-item active">
          
          <Link to ='Add'className="nav-link"><b>Add Contact</b></Link>
        </li>
        <li className="nav-item"> 
          <Link to='Show' className="nav-link"><b>All Contact</b></Link>
        </li>
        <li className='nav-item'>
          <Link to='Group' className='nav-link'><b>AddGroups</b></Link>
        </li>
        <li className="nav-item">
          <Link to='/home' className="nav-link" onClick={()=>{
            cookies.remove("users")
            // window.location.href = '/home'
          }}><b>Logout</b></Link>
        </li>
    </ul>
    </div>
  </nav>
    }
</div>

    )
  }
  
  export default Navbar
  