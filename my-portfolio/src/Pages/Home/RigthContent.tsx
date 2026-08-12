import { motion } from "framer-motion";
// import { Atom, FileCode2, Wind, Boxes, GitBranch } from "lucide-react";
import { scaleIn } from "../../animations/scaleIn ";
// import { fadeUp } from "../../animations/FadeUp";

import myImg from "../../../imgs/myPhoto.jpeg";
  
export default function RightContent() {
  return (
    <motion.div className="relative flex 
     
    h-[400px]
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
      {/* React */}
      {/* <motion.div
        className="hover:-translate-y-1 
          hover:shadow-xl
          cursor-default
          select-none
         hover:scale-105 shadow-lg transition-all duration-300 
        absolute top-2 left-0  md:flex items-center gap-2 rounded-full border hidden
          bg-background px-4 py-2 "
        {...fadeUp(0.2)}
        // {...floating(0.2)}
      >
        <Atom className="h-5 w-5  text-sky-500" />
        <span>React</span>
      </motion.div>  */}
      {/* TypeScript */}
      {/* <motion.div
        {...fadeUp(0.4)}
        className=" hover:-translate-y-1
          hover:shadow-xl
          select-none
          cursor-default backdrop-blur hover:scale-105 shadow-lg transition-all duration-300 absolute top-50 right-11/12 flex items-center gap-2 rounded-full border bg-background px-4 py-2 "
      >
        <FileCode2 className="h-5 w-5 text-blue-500" />
        <span>TypeScript</span>
      </motion.div> */}
      {/* Tailwind */}
      {/* <motion.div
        {...fadeUp(0.6)}
        className=" hover:-translate-y-1
          hover:shadow-xl
          select-none
          cursor-default absolute right-6 bottom-15 flex items-center gap-2 rounded-full border bg-background px-4 py-2 backdrop-blur hover:scale-105 shadow-lg transition-all duration-300"
      >
        <Wind className="h-5 w-5 text-cyan-500" />
        <span>Tailwind CSS</span>
      </motion.div> */}
      {/* Redux */}
      {/* <motion.div
        {...fadeUp(0.8)}
        className="hover:-translate-y-1
          hover:shadow-xl
          select-none
          cursor-default absolute  bottom-16 left-0 flex items-center gap-2 rounded-full border bg-background px-4 py-2 backdrop-blur hover:scale-105 shadow-lg transition-all duration-300"
      >
        <Boxes className="h-5 w-5 text-violet-500" />
        <span>Redux Toolkit</span>
      </motion.div> */}
      {/* Git */}
      {/* <motion.div
        {...fadeUp(1)}
        className="hover:-translate-y-1
          hover:shadow-xl
          select-none
          cursor-default absolute top-50 -right-13 flex  items-center gap-2 rounded-full border bg-background px-4 py-2 backdrop-blur hover:scale-105 shadow-lg transition-all duration-300"
      >
        <GitBranch className="h-5 w-5 text-orange-500" />
        <span>Git</span>
      </motion.div> */}
      
    </motion.div>
  );
}
