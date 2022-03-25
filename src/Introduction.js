import { MotionConfig } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";

export default function Introduction() {
    return (
        <div className='container text-center' id="introduction">
           <motion.div   whileHover={{
    scale: 1.2,
    transition: { duration: 0.1 },
  }}
  whileTap={{ scale: 0.9 }}> <h2 style={{ color: "red" }} className="display-4">Version Control System</h2></motion.div>
            <p class="lead">
                "As you work with your files that are under version control, each change is tracked automatically. This can include modifying a file, deleting a directory, adding a new file, moving files or just about anything else that might alter the state of the file. Instead of recording each change individually, the version control system will wait for you to submit your changes as a single collection of actions. In version control, this collection of actions is known as a commit."
            </p>
        </div>
    )
}