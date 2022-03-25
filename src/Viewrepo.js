import axios from "axios";
import { calcLength, MotionConfig } from "framer-motion";
import React, { useEffect, useState, version,createContext} from "react";
import { Link, Route, Routes,useNavigate } from "react-router-dom";
import Editrepo from "./Editrepo";
import Home from './Home';
import Introduction from "./Introduction";
import Topbar from "./Topbar";
import Viewhistory from "./Viewhistory";
import { motion } from "framer-motion";


export default function Viewrepo() {
    const [edit, setedit] = useState(false)
    const [project, setproject] = useState([])
    const UserContext = createContext()
    const navigate = useNavigate();

    let loaddata = async()=>{
        try {
            await axios.get("https://versioncontrolend.herokuapp.com/get-data",{
                headers:{
                    Authorization : window.localStorage.getItem("token")
                }
        }).then(function (response) {

                setdata(response.data)
            })
        } catch (error) {
            console.log(error)
            navigate("/")
            
        }
    }

    let callrepo = (obj) => {

        setproject(obj)
        setedit(true)
       
    }

    let delrepo = async (obj)=>{
       try {
           axios.delete(`https://versioncontrolend.herokuapp.com/delete-repo/${obj._id}`,{
            headers:{
                Authorization : window.localStorage.getItem("token")
            }
    }).then(function(response){
            loaddata()
           })
           
       } catch (error) {
           console.log(error)
       }
    }



    const [data, setdata] = useState([])

    useEffect(() => {
      
    loaddata()
    }, []);



    return (
        <div className="container-fluid" id="viewrepo">
              <Topbar></Topbar>
            <div className="row">
                <div className="col-lg-4 justify-content-center ">
                    <h3 className="text-center">Directory</h3>
                    {

                        data.map((obj, i) => {
                            return <motion.div   whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.1 },
                              }}
                                id="cards">
                                <div className="card mt-2" id={i}>
                                <div className="card-body p-1">
                                 
                                    <h6 style={{color:"blue"}}>{obj.reponame}</h6>
                                    <small>Created On :{obj.version[obj.version.length - 1].time}</small>
                                    <div className="d-flex flex-row-reverse bd-highlight ">
                                        <button class="btn btn-danger p-1 ml-1 "  onClick={() => { delrepo(obj) }}><small>Delete</small></button>&nbsp;
                                        <Link to={`/editrepo/${obj._id}`}><button class="btn btn-warning p-1 ml-1">edit</button></Link>&nbsp;
                                        <button   class="btn btn-primary p-1"  onClick={() => { callrepo(obj) }}>view</button>&nbsp;
                                       
                                    </div>
                                </div>
                            </div>
                            </motion.div>
                        })
                    }
                </div>
                <div className="col-lg-1">

                </div>
                <div className="col-lg-7">
                    {

                        edit ? <Viewhistory projects={project}></Viewhistory> : null

                    }

                </div>
            </div>
        </div>
    )
}