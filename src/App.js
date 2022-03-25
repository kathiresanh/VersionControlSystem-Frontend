
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import CreateRepo from './CreateRepo';
import Topbar from './Topbar';
import Home from './Home';
import Viewrepo from './Viewrepo';
import Editrepo from './Editrepo';
import Register from './Register';
import Forgot from './Forgot';
import { useState } from 'react';

function App() {

  
  return (
   <Router>
    <div className="container-fluid">
        
     <div className='container-fluid '>
       
     <Routes>
   <Route path="/" element={<Home></Home>}></Route>
   <Route path="/createrepo" element={<CreateRepo></CreateRepo>}></Route>
   <Route path='/viewrepo' element={<Viewrepo> </Viewrepo>}></Route>
   <Route path='/editrepo/:id' element={<Editrepo></Editrepo>}></Route>
   <Route path='/register' element={<Register></Register>}></Route>
   <Route path='/forgot' element={<Forgot></Forgot>}></Route>
   
   </Routes>
       </div>
  
      
    
     
   
  

 
       </div>
   </Router>
  );
}

export default App;
