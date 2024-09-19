import './App.css';
import '../src/Signup.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/home';
import Login from './components/Login';
import Singup from './components/Singup';
import Dasboard from './components/Dasboard';
import Addcontact from './components/Addcontact'
import Allcontact from './components/Allcontact'
import Updatecontact from './components/Updatecontact';
import Group from './components/Group';



function App() {
  return (
  <div className='App'>
       <BrowserRouter>
           <Navbar/>
             <Routes>
                  
                 <Route path='/' element={<Home/>}></Route>
                 <Route path='/About' element={<About/>}></Route>
                 <Route path='/Contact' element={<Contact/>}></Route>
                 <Route path='/home' element={<Home/>}></Route>
                 <Route path='/Login' element={<Login/>}></Route>
                 <Route path='/Singup' element={<Singup/>}></Route>
                 <Route path='/Dasboard' element={<Dasboard/>}></Route>
                 <Route path='/Add' element={<Addcontact/>}></Route>
                 <Route path='/Show' element={<Allcontact/>}></Route>
                 <Route path='/Logout' element={<Home/>}></Route>
                 <Route path='/Update/:id' element={<Updatecontact/>}></Route>
                 <Route path='/Group' element={<Group/>}></Route>
             </Routes>
       </BrowserRouter>
  </div>
  );
}

export default App;
  