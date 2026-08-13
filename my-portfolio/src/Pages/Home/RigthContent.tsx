import { motion } from "framer-motion";
// import { Atom, FileCode2, Wind, Boxes, GitBranch } from "lucide-react";
import { scaleIn } from "../../animations/scaleIn ";
// import { fadeUp } from "../../animations/FadeUp";

import myImg from "../../../imgs/myPhoto.jpeg";
  
export default function RightContent() {
  return (
    <motion.div className="relative flex 
     
    h-100
    w-full
       items-center justify-center sm:overflow-hidden md:overflow-visible">
      {/* Image */}

      <motion.img
        src={myImg}
        alt="Ahmed Attia"
        className=" transition-all
          duration-500
          select-none
          
          md:hover:scale-110
           h-74 w-74 sm:h-80 sm:w-80 lg:h-96 lg:w-96
            rounded-full object-cover border-2 border-primary shadow-2xl"
        {...scaleIn(0.2)}
      />
      
      
    </motion.div>
  );
}
