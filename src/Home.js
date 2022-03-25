import React from "react";
import Introduction from "./Introduction";
import Login from "./Login";
import { motion } from "framer-motion"

export default function Home(){
    return(
     <div className="container-fluid" id="homepage">
     <div className="row">
     <div className="col-lg-6">
            
            <motion.div
  animate={{ scale: [0, 1, 0.5, 1] }}
  transition={{ times: [0, 0.1, 0.9, 1] }}
><Introduction></Introduction></motion.div>
        </div>
        <div className="col-lg-1">
            
        </div>
        <div className="col-lg-4" id="loginarea">
       <motion.div  whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.1 },
                              }}> <Login></Login></motion.div>
        </div>
     </div>
     </div>
    )
}