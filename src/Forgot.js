import React from "react";
import { Formik } from 'formik';
import { useFormik } from 'formik';
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";



export default function Forgot(){
    
    const navigate = useNavigate();
    const [reply,setReply] = useState("")
    const formik = useFormik({
        initialValues: {
          email: "",
          password:"",
        },
        onSubmit: async values => {
         setReply(" ")
          
          try {
            await axios.put("https://versioncontrolend.herokuapp.com/forgot-password",values).then(function(response){
             
              setReply(response.data)            
        }) 
     
        } catch (error) {
            if(error){
              setReply("User not exists")
            }
        }
        },
      });
    return(
     <div className="row">
         <div className="col-lg-4">

         </div>
         <div className="col-lg-4">
          <div class="card shadow bg-white rounded" id="logincard">
        <div class="card-body">
          
          <div className="col-sm-12">
      <h2> Password Reset</h2>
     
      <form onSubmit={formik.handleSubmit}>
        <div class="form-group">
          <label for="email">Email address</label>
          <input class="form-control" id="email"
               name="email"
               type="email"
               onChange={formik.handleChange}
               value={formik.values.email} required  placeholder="Enter email"/><br></br>
       
        </div>
        <div class="form-group">
          <label for="password">New Password</label><br></br>
          <input type="password" class="form-control" id="password"
               name="password"
              
               onChange={formik.handleChange}
               value={formik.values.password} required placeholder="Password"/>
         
        </div>
        <p style={{color:"red"}}><i>{reply}</i></p>
       <br></br>
        <button type="submit" class="btn btn-primary">Reset</button>&nbsp;
        <div className=" d-flex flex-row-reverse"><Link to="/"><small>Go Home</small></Link></div>
      
      </form>
      </div>
           
        </div>
      </div>
      </div>
            
     </div>
      
      
    )
}