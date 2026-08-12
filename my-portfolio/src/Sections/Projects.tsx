import { motion } from "framer-motion";
import Container from "../Components/Common/Container";
import { FaGithub, FaReact } from "react-icons/fa";
import {
  SiReactquery,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Button } from "../Components/Ui/button";
import EcommerceImg from "../../imgs/Screenshot 2026-08-05 121658.png"
import { Eye } from "lucide-react";


export default function Projects() {
  return (
    <motion.section className="py-20">
      <Container>
        <motion.div className=" header flex flex-col items-center gap-2">
          <motion.h2 className="text-5xl font-bold">Projects</motion.h2>
          <motion.p className="text-lg text-muted-foreground  ">
            Some of my recent work
          </motion.p>
        </motion.div>
        <motion.div className=" projects-cards grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
         
         <motion.div
            className="card-1 cursor-pointer group space-y-3.5  flex flex-col gap- rounded-2xl border border-black/12 p-5 shadow-lg 
            overflow-hidden transition-all duration-300
                hover:shadow-2xl hover:-translate-y-1 hover:border-black/20 "
          >
            <div className=" img relative aspect-video rounded-lg overflow-hidden">
              <motion.img
                src={EcommerceImg}
                className="w-full  h-full object-cover group-hover:scale-105 transition-all duration-500  "
              ></motion.img>

              <div className=" absolute inset-0 bg-black/50 opacity-0 transition-all group-hover:opacity-100 duration-300 "></div>
              <div className=" absolute inset-0 transition-all duration-300 flex justify-center items-center 
              opacity-0 group-hover:opacity-100 text-white gap-1.5 text-xl" >
                <Eye/>
                <span> View Project</span>
              </div>
            </div>

            <h3 className=" text-lg font-semibold"> E-Commerce Platform </h3>
            <p className="text-muted-foreground  leading-7">
              Modern e-commerce application...
            </p>
            <div className=" flex gap-3 flex-wrap ">
              <span className=" flex gap-2 text-sm border rounded-full px-3 py-1.5 items-center">
                <FaReact className="text-sky-500 h-4 w-4" /> React
              </span>
              <span className=" flex gap-2 text-sm border rounded-full px-3 py-1.5 items-center">
                <SiTypescript className="text-blue-600 h-4 w-4" /> TypeScript
              </span>
              <span className=" flex gap-2 text-sm border rounded-full px-3 py-1.5 items-center">
                <SiTailwindcss className="text-cyan-400 h-4 w-4" /> Tailwind
              </span>
              <span className=" flex gap-2 text-sm border rounded-full px-3 py-1.5 items-center">
                <SiRedux className="text-violet-500 h-4 w-4" /> Redux
              </span>
              <span className=" flex gap-2 text-sm border rounded-full px-3 py-1.5 items-center">
                <SiReactquery className="text-red-500 h-4 w-4" /> TanStack Query
              </span>
            </div>

            <div className=" flex gap-5 justify-center">
              <Button variant="outline" className="  gap-2 flex-1">
                <FaGithub className="h-5 w-5" />
                GitHub
              </Button>
              <Button className="flex-1" disabled> Live Demo</Button>
            </div>
          </motion.div>

        </motion.div>
      </Container>
    </motion.section>
  );
}
