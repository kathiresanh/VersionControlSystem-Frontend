import react from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


export default function Topbar(){
  const [user, setuser] = useState(window.localStorage.getItem("name"))
  const navigate = useNavigate();

  let calllogout = ()=>{
    localStorage.clear()
    navigate("/")
  }

  let menu = [ {
    title:"Home",
    link:"/home",
    element:<Topbar></Topbar>
  }]
    return(
    
  <nav className="navbar fixed-top  navbar-expand-lg  navbar-dark bg-dark text-white " id="topbar">
  <div className="container-fluid">

    <a className="navbar-brand  mb-0 h1" href="#">
    <img src="./images/vcs.png" alt="" width="40" height="35" className="d-inline-block align-text-top"/>
      &nbsp;Version Control</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        
        <li className="nav-item">
        <Link to="/createrepo">   <button className="btn btn-bg-dark text-white" > Create Repositaries
        </button> </Link>
        
        </li>
        <li className="nav-item">
       <Link to="/viewrepo"><div className="btn btn-bg-dark text-white">View Repositaries</div></Link> 
        
        </li>
        </ul>
       <div className="col-lg-8 d-flex flex-row-reverse ">
        <button className="btn btn-danger p-1" onClick={()=>{calllogout()}} >Logout</button>&nbsp;&nbsp;
        <h4>{user}</h4>
       </div>

    </div>
  </div>

</nav>
         
    )
}