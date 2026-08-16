import { motion } from "framer-motion";
import Container from "../Common/Container";
import { FadeLeft } from "../../animations/FadeLeft";
// import { fadeRight } from "../../animations/FadeRigth";
import { fadeUp } from "../../animations/FadeUp";
import { useNavbarScroll } from "../../Hooks/useNavbarScroll";
import { ArrowDownToLine } from "lucide-react";
import MobileMenue from "./MobileMenue";
import { Button } from "@base-ui/react";
import myCv from "../../../public/Ahmed_Abdelmonim_CV.pdf";
import { fadeRight } from "../../animations/FadeRigth";
// import logo from "../../../imgs/Ahmed 3T .png"

export default function Navbar() {
  const isScroll = useNavbarScroll(30);
  return (
    <header
      className={`w-full   sticky top-0 z-50 transition-all duration-300 ${
        isScroll ? "bg-background/60 backdrop-blur-sm shadow-md border-b  " : ""
      } `}
    >
      <Container>
        <nav className="   flex  justify-between items-center h-15">
          {/* <img src={logo} alt="" className="w-50 h-20 p-1" />  */}

          <motion.h1
            {...FadeLeft(0.3)}
            className="text-2xl font-bold tracking-tight hover:scale-105 duration-300 transition-all"
          >
            <div className="text-3xl relative">
              <span className=" " >Ahmed </span>
              <span className="text-cyan-700">Attia</span>
            </div>
            {/* <span className="absolute text-muted-foreground text-sm bottom-0">Frontend Developer</span> */}

                    </motion.h1>

          {/* Ullllllllllllllllllllllll */}
          <motion.ul 
            {...fadeUp(0.3)}
            className="  items-center md:text-lg lg:text-xl z-20
          gap-4  lg:gap-7 
          hidden lg:flex 
          "
          >
            <li className=" hover:scale-103    duration-300 transition-all  rounded-2xl px-2 block">
              <a
                href="#home"
                className="    transition-all hover:text-cyan-700"
              >
                Home
              </a>
            </li>
            <li className="  hover:scale-103  duration-300 transition-all hover: rounded-2xl px-2 block">
              <a href="#about"
                className="    transition-all hover:text-cyan-700">
                  About 
              </a>
            </li>
            <li className=" hover:scale-103    duration-300 transition-all  rounded-2xl px-2 block">
              <a
                href="#skills"
                className="    transition-all hover:text-cyan-700"
              >
                Skills
              </a>
            </li>
            <li className=" hover:scale-103    duration-300 transition-all  rounded-2xl px-2 block">
              <a
                href="#projects"
                className="    transition-all hover:text-cyan-700"
              >
                Projects
              </a>
            </li>
            <li className=" hover:scale-103    duration-300 transition-all  rounded-2xl px-2 block">
              <a
                href="#contact"
                className="    transition-all hover:text-cyan-700"
              >
                Contact
              </a>
            </li>
          </motion.ul>
                           {/* CV */}
          <motion.div className="p-4 hidden lg:flex group "
          {...fadeRight(0.2)}>
            <Button className="  items-center  w-full rounded-xl py- text-lg font-medium    transition-all duration-300">
              <a
                href={myCv}
                download="AHMED-ATTIA-CV.pdf"
                className="flex   justify-center gap-2  items-center w-full "
              >
                <ArrowDownToLine className="h-5 w-5 group-hover:rotate-360 group-hover:text-cyan-600 transition-all duration-500" /> 
                <span className="text-lg">Download CV</span>
              </a>
            </Button>
          </motion.div>

          <MobileMenue />
        </nav>
      </Container>
    </header>
  );
}
/* 
<div className="p-4 border-t border-border/40">
          <Button className=" border  items-center  w-full rounded-xl py-6 text-lg font-medium  shadow-2xl hover:scale-[1.02] transition-all duration-300">
            <a
              href={myCv}
              download="AHMED-ATTIA-CV.pdf"
              className="flex   justify-center gap-2  items-center w-full"
            >
              <ArrowDownToLine className="h-5 w-5" /> <span>Download CV</span>
            </a>
          </Button>
        </div> */
