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

export default function Navbar() {
  const isScroll = useNavbarScroll(30);
  return (
    <header
      className={`w-full  sticky top-0 z-50 transition-all duration-300 ${
        isScroll ? "bg-background/60 backdrop-blur-sm shadow-md border-b  " : ""
      } `}
    >
      <Container>
        <nav className="   flex  justify-between items-center h-15">

          <motion.h1
            {...FadeLeft(0.3)}
            className="text-2xl font-bold tracking-tight hover:scale-105 duration-300 transition-all"
          >
            Ahmed Portfolio
          </motion.h1>

          {/* Ullllllllllllllllllllllll */}
          <motion.ul
            {...fadeUp(0.3)}
            className=" items-center md:text-lg lg:text-xl
          gap-4  lg:gap-7 
          hidden lg:flex 
          "
          >
            <li className=" hover:bg-gray-300 duration-300 transition-all hover: rounded-2xl px-2 block">
              <a
                href="#home"
                className="   transition-colors hover:text-primary"
              >
                Home
              </a>
            </li>
            <li className=" hover:bg-gray-300 duration-300 transition-all hover: rounded-2xl px-2 block">
              <a href="#about" className="transition-colors hover:text-primary">
                About
              </a>
            </li>
            <li className=" hover:bg-gray-300 duration-300 transition-all hover: rounded-2xl px-2 block">
              <a
                href="#skills"
                className="transition-colors hover:text-primary"
              >
                Skills
              </a>
            </li>
             <li className=" hover:bg-gray-300 duration-300 transition-all hover: rounded-2xl px-2 block">
              <a
                href="#projects"
                className="transition-colors hover:text-primary"
              >
                Projects
              </a>
            </li>
            <li className=" hover:bg-gray-300 duration-300 transition-all hover: rounded-2xl px-2 block">
              <a
                href="#contact"
                className="transition-colors hover:text-primary"
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
                <ArrowDownToLine className="h-5 w-5 group-hover:rotate-360 transition-all duration-500" /> <span>Download CV</span>
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
