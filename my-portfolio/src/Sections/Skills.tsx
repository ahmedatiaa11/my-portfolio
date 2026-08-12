import { motion } from "framer-motion"
import Container from "../Components/Common/Container"
import {  ShieldCheck } from "lucide-react"
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { SiReacthookform } from "react-icons/si";
import { SiFramer } from "react-icons/si";
import { Component } from "lucide-react";
import { FaGitAlt } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { staggerContainer } from "../animations/variants";
import { fadeUp, fadeUpVariant } from "../animations/FadeUp";

export default function Skills() {
   
  return (
    <motion.section className="py-10" id="skills">
        <Container>
            <motion.div {...fadeUp(0.2)} className=" md:my-10 flex flex-col items-center gap-3 mb-10">
                <motion.h2 className="text-5xl  font-bold "> Skills</motion.h2>
                <motion.p className=" text-lg text-muted-foreground  text-center   ">Technologies and tools I use to bring ideas to life</motion.p>
            </motion.div>   
            {/* skills container */}
            <motion.div variants={staggerContainer} 
            initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }}
            className="skills-container flex flex-wrap gap-4 justify-center ">

                <motion.div variants={fadeUpVariant} className="flex gap-2 items-center rounded-full border px-5 py-2 shadow-md ">
                    <FaReact className="h-6 w-6 text-sky-500" />
                    <span> React </span>
                </motion.div>

                <motion.div variants={fadeUpVariant} className="flex gap-2 items-center rounded-full border px-5 py-2 shadow-md ">
                    <SiTypescript className="h-6 w-6 text-blue-600" />
                    <span> TypeScript </span>
                </motion.div>
                
                <motion.div variants={fadeUpVariant}  className="flex gap-2 items-center rounded-full border px-5 py-2 shadow-md ">
                    <SiJavascript className="h-6 w-6 text-yellow-400" />
                    <span> JavaScript </span>
                </motion.div>

                <motion.div variants={fadeUpVariant} className="flex gap-2 items-center rounded-full border px-5 py-2 shadow-md ">
                    <SiTailwindcss className="h-6 w-6 text-cyan-400" />
                    <span> Tailwind CSS </span>
                </motion.div>
                <motion.div variants={fadeUpVariant} className="flex gap-2 items-center rounded-full border px-5 py-2 shadow-md ">
                    <SiRedux className="h-6 w-6 text-violet-500" />
                    <span> Redux Toolkit </span>
                </motion.div>
                 
                 <motion.div variants={fadeUpVariant} className="flex gap-2 items-center rounded-full border px-5 py-2 shadow-md ">
                    <SiReactquery className="h-6 w-6 text-red-500" />
                    <span> React Query </span>
                </motion.div>
                
                <motion.div variants={fadeUpVariant} className="flex gap-2 items-center rounded-full border px-5 py-2 shadow-md ">
                    <SiReacthookform className="h-6 w-6 text-pink-500" />
                    <span> React Hook Form </span>
                </motion.div>
                <motion.div variants={fadeUpVariant} className="flex gap-2 items-center rounded-full border px-5 py-2 shadow-md ">
                    <ShieldCheck  className="w-6 h-6"/>
                    <span> Yup</span>
                </motion.div>
                 
                 <motion.div variants={fadeUpVariant} className="flex gap-2 items-center rounded-full border px-5 py-2 shadow-md ">
                    <SiFramer className="h-6 w-6 text-pink-500" />
                    <span> Framer Motion</span>
                </motion.div>
                 
                 <motion.div variants={fadeUpVariant} className="flex gap-2 items-center rounded-full border px-5 py-2 shadow-md ">
                    <Component  className="w-6 h-6"/>
                    <span> Shadcn UI</span>
                </motion.div> 

                <motion.div variants={fadeUpVariant} className="flex gap-2 items-center rounded-full border px-5 py-2 shadow-md ">
                    <FaGitAlt  className="w-6 h-6 text-orange-600"/>
                    <span> Git & GitHub</span>
                </motion.div> 

                <motion.div variants={fadeUpVariant} className="flex gap-2 items-center rounded-full border px-5 py-2 shadow-md ">
                    <SiVite  className="w-6 h-6 text-violet-500"/>
                    <span>  Vite</span>
                </motion.div> 



            </motion.div>
            
                
        </Container>
    </motion.section>
    
  )
}
