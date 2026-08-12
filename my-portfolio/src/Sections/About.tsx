import { motion } from "framer-motion";
import Container from "../Components/Common/Container";
import { fadeUp } from "../animations/FadeUp";
import { BriefcaseBusiness, Code2, FolderGit2, GraduationCap } from "lucide-react";
import { useState } from "react";
motion
export default function About() {
    const [activeCard, setActiveCard] = useState<number | null>(null)
  return (
    <motion.section id="about" className="py-20"> 
        <Container>
            <motion.div className=" flex flex-col items-center gap-3 mb-10" >
                <motion.h2  className="text-4xl md:text-5xl font-bold "
                {...fadeUp(0.0)}>                    About Me
                </motion.h2>
                <motion.p className=" text-xl text-muted-foreground" {...fadeUp(0.2)}>
                    Get to know me better
                </motion.p>
            </motion.div >


            <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-5  ">

                                {/* left content in about section  */}

                <motion.div className=" space-y-7 flex flex-col justify-center 
                items-center lg:items-start
                 text-center lg:text-left mb-2 md:mb-10" >
                    <motion.h3 {...fadeUp(0.2)} className="text-3xl  font-semibold" >
                        Who I Am 
                    </motion.h3>
                    <motion.p {...fadeUp(0.4)} className="   md:text-lg text-base leading-8  max-w-xl text-muted-foreground">
                        I'm a Frontend Developer and a Computer Science graduate from Benha University. 
                        I enjoy building modern, responsive,
                         and user-friendly web applications using React, TypeScript, and Tailwind CSS.
                    </motion.p>
                    <motion.p {...fadeUp(0.6)} className="text-base md:text-lg max-w-xl leading-8 text-muted-foreground">
                        I'm currently looking for internship and full-time opportunities 
                        where I can grow as a developer and contribute to real-world products. 
                        I enjoy working on different types of projects, from landing pages to full-featured 
                        e-commerce applications, and I'm always eager to learn new technologies.
                    </motion.p>
                </motion.div>
                {/* right content in about section  */}

                <motion.div  className=" cards select-none duration-300 transition-all 
                grid sm:grid-cols-2  px-6 sm:px-3 md:grid-rows-2 gap-7">
                    
                    <motion.div onMouseEnter={()=>setActiveCard(1)}  {...fadeUp(0.2)}
                     className={` relative overflow-hidden group  border rounded-3xl  shadow-lg p-6
                     flex flex-col gap-4 
                     ${activeCard === 1 ?'text-white' :'text-black' }`}>

                        <div className={` -z-1 absolute  inset-0  transition-all duration-400
                         ${activeCard === 1 ?'translate-y-0' :'translate-y-full'}    bg-cyan-800 `} >
                        </div>

                        <GraduationCap className="h-7 w-7 md:h-8 md:w-8  "/>
                        <h4 className="text-lg font-semibold"> Education </h4>
                        <p 
                        className=
                        {` ${activeCard === 1 ? 'group-hover:text-white' : 'text-muted-foreground' } 
                            leading-7 flex flex-col`}>

                             <span>Computer Science </span>
                            <span>Benha University </span>

                        </p>

                    </motion.div>

                    <motion.div onMouseEnter={()=>setActiveCard(2)} {...fadeUp(0.4)} className={` z-10   relative overflow-hidden group  border rounded-3xl  shadow-lg
                     p-6  flex flex-col gap-4 
                     ${activeCard === 2 ?'text-white' :'text-black' }`}>
                        <div className={` -z-1 absolute  w-full h-full inset-0  transition-all duration-400
                         ${activeCard === 2 ?'translate-y-0' :'translate-y-full'}    bg-cyan-800 `} >
                        </div>
                        <BriefcaseBusiness className="h-7 w-7 md:h-8 md:w-8 "/>
                        <h4 className="text-lg font-semibold"> Status </h4>
                        <p className={` ${activeCard === 2 ? 'group-hover:text-white' : 'text-muted-foreground' } leading-7 flex flex-col`}>
                             <span>Open to </span>
                            <span>Internship & Full-Time </span>

                        </p>

                    </motion.div>

                    <motion.div onMouseEnter={()=>setActiveCard(3)} {...fadeUp(0.6)} 
                    className={` z-10   relative overflow-hidden group  border rounded-3xl  shadow-lg
                     p-6  flex flex-col gap-4 
                     ${activeCard === 3 ?'text-white' :'text-black' }`}>
                        
                        <div className={` -z-1 absolute  w-full h-full inset-0  transition-all duration-400
                         ${activeCard === 3 ?'translate-y-0' :'translate-y-full'}    bg-cyan-800 `} >
                        </div>
                        <Code2 className="h-7 w-7 md:h-8 md:w-8 "/>
                        <h4 className="text-lg font-semibold"> Specialization </h4>
                        <p className={` ${activeCard === 3 ? 'group-hover:text-white' : 'text-muted-foreground' } leading-7 flex flex-col`}>
                             <span>Frontend Development </span>
                            <span>React • TypeScript</span>

                        </p>

                    </motion.div>

                    <motion.div onMouseEnter={()=>setActiveCard(4)} {...fadeUp(0.8)} 
                    className={` z-10 relative  overflow-hidden group   border rounded-3xl  shadow-lg
                     p-6  flex flex-col gap-4 
                     ${activeCard === 4 ?'text-white' :'text-black' }`}>
                        <div className={` -z-1 absolute  w-full h-full inset-0  transition-all duration-400
                         ${activeCard === 4 ?'translate-y-0' :'translate-y-full'}    bg-cyan-800 `} >
                        </div>
                        <FolderGit2 className="h-7 w-7 md:h-8 md:w-8 "/>
                        <h4 className="text-lg font-semibold"> Projects </h4>
                        <p className={` ${activeCard === 4 ? 'group-hover:text-white' : 'text-muted-foreground' } leading-7 flex flex-col`}>
                             <span>Landing Pages </span>
                            <span>E-Commerce Apps</span>
                        </p>
                    </motion.div>


                </motion.div>
                
            </motion.div>

        </Container>

    </motion.section>
  )
}
