import React from "react";
import Introduction from "./Introduction";
import Login from "./Login";
import { motion } from "framer-motion"

export default function Home(){
    return(
     <div className="container-fluid" id="homepage">
     <div className="row">
     <div className="col-lg-6">
            
            <motion.div><Introduction></Introduction></motion.div>
        </div>
        <div className="col-lg-1">
            
        </div>
        <div className="col-lg-4" id="loginarea">
       <motion.div> <Login></Login></motion.div>
        </div>
     </div>
     </div>
    )
}
