import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import Topbar from "./Topbar";
const axios = require('axios');


export default function CreateRepo(){
   const[user,setuser] = useState(window.localStorage.getItem("name"))
   const[email,setemail]=useState(window.localStorage.getItem("email"))
   const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
          reponame:"",
          content: '',
          comment:"My first commit",
          username:user,
          email:email,
        },
        onSubmit:async values => {
          console.log(values)
          try {
            await axios.post("https://versioncontrolend.herokuapp.com/add-data",values).then(function(response){
              console.log(response)
            })
            navigate("/viewrepo")
          } catch (error) {
             console.log(error)
          }
        },
      });

      
    return(
        <>
        <div className="container-fluid">
          <Topbar></Topbar>
          <div className="row">
       
       <div className="col-lg-12">
   
       <div className="card mt-5">
         <div className="card-body">
         <form onSubmit={formik.handleSubmit}>
          <div className="row">
          <div className="col-lg-4">
        <label htmlFor="reponame">Enter your Repositary Name</label><br></br>
         <input
         className="form-control"
        id="reponame"
        name="reponame"
        type="text"
        placeholder="Enter your Repositary name"
        onChange={formik.handleChange}
        value={formik.values.reponame}
        required={true}
      /><br></br>
           </div>
           <div className="col-lg-4">
           <label htmlFor="comment">Enter the comments</label><br></br>
         <input
         className="form-control"
        id="comment"
        name="comment"
        type="text"
        placeholder="Enter comments"
        onChange={formik.handleChange}
        value={formik.values.comment}
        required={true}
      /><br></br>
           </div>
          </div>
    
       <div >
       <textarea
       className="form-control"
        id="content"
        name="content"
        type="string"
        rows="17" cols="170"
        placeholder="enter your code here"
        onChange={formik.handleChange}
        value={formik.values.content}
        style={{color:"yellow",backgroundColor:"black"}}
        required={true}
      /><br></br>
       </div>
       <div className="d-flex flex-row-reverse bd-highlight"> <button className="btn btn-success p-2 bd-highlight" type="submit">Create</button><br></br></div>
     
    </form>

           </div>
         </div>
         </div>
           </div>     
          </div> 
        </>
    )
}