import { MotionConfig } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";

export default function Viewhistory(props){

    let callhistory =(obj)=>{
      alert(props.projects.reponame)
    }
    let versions = (props.projects.version)
    return(
        <>
          <div className="col-lg-8">
              <h3 className="text-center">History</h3>
              <div className="card mt-1">
                  <div className="card-body">
                     <h4 style={{color:"blue"}}> {props.projects.reponame}</h4>
                      {
                          versions.map((obj)=>{
                              return (<motion.div whileHover={{
                                scale: 1.2,
                                transition: { duration: 0.1 },
                              }}>
                                  <div className="card mb-4 p-2" id="viewhistory" >
                                  <h6>Created/Edited by : <span style={{color:"blue"}}>{obj.email}</span></h6>
                                  <h6>comments : <span style={{color:"green"}}>{obj.comment}</span></h6>
                                  <h6>Last Modified on : <span style={{color:"gray"}}>{obj.time}</span></h6>
                                   
                                  </div>
                              </motion.div>
                              )
                          })
                      }
                  </div>
              </div>
          </div>
        </>
    )
}