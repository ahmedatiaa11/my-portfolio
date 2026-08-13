// import { Button } from "@base-ui/react/button";
import { Mouse } from "lucide-react";
import { fadeUp } from "../../animations/FadeUp";
import Container from "../../Components/Common/Container";
import { Button } from "../../Components/Ui/button";
import RightContent from "./RigthContent";
import { motion } from "framer-motion";
// import heroImg from "../../../imgs/emile-perron-xrVDYZRGdw4-unsplash.jpg";
// import heroImg from "../../../imgs/fotis-fotopoulos-DuHKoV44prg-unsplash.jpg";
// import heroImg from "../../../imgs/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg";
import heroImg from "../../../imgs/james-harrison-vpOeXr5wmR4-unsplash.jpg";




export default function Hero() {
  return (
    <>
      <motion.section id="home" className="overflow-hidde relative pb-10 lg:pb-0"
      >
        {/* Image */}
        <div className=" inset-0 -z-10 absolute  ">
          <img src={heroImg} alt="" className="object-cover w-full h-full brightness-90 blur-[0.5px]" />
        </div>
        {/* OverLay */}
        <div className="absolute inset-0 -z-3 bg-black/60" />
        {/* Content */}
        <Container>
          <div className="  grid min-h-[calc(100vh-60px)] grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2">
            {/* left sideeeeeeee */}
            <div
              className="text-white space-y-6 order-2 lg:order-1
               text-center
               "
            >
              <motion.span
                className="rounded-full   inline-flex border px-4    text-sm"
                {...fadeUp(0.2)}
              >
                👋 Available for work
              </motion.span>

              <motion.h1
                className="  text-4xl sm:text-4xl lg:text-5xl  font-bold leading-tight"
                {...fadeUp(0.4)}
              >
                Hi, I'm Ahmed Attia
              </motion.h1>

              <motion.h2 className=" text-2xl" {...fadeUp(0.6)}>
                Frontend Developer
              </motion.h2>

              <motion.p
                {...fadeUp(0.8)}
                className=" text-white/80  mx-auto max-w-lg text-based sm:text-lg leading-7 sm:leading- text-lg"
              >
                I build fast, responsive, and modern web applications using
                React, TypeScript, and Tailwind CSS, with a focus on clean
                architecture and great user experience.
              </motion.p>

              <motion.div
                className="  mt-8 flex flex-col sm:justify-center sm:flex-row items-center gap-2 sm:gap-3 lg:gap-4"
                {...fadeUp(1)}
              >
                <Button variant="outline" className=" bg-white text-black p-5 text-lg rounded-full hover:scale-105 transition-all duration-300">
                  <a href="#projects">View Projects</a>
                </Button>

                <Button
                  variant="outline"
                  className="p-5 mb- text-lg rounded-full shadow-lg  
                  hover:scale-105 transition-all duration-300
                  text-black
                  "
                >
                  <a href="#contact">Contact Me</a>
                </Button>
              </motion.div>
            </div>

            {/* rigth sideeeeeeeee */}
            <div className="flex items-center justify-center order-1 lg:order-2">
              <div className="flex h-96 w-96 items-center justify-center rounded-full   ">
                <RightContent />
              </div>
            </div>

            {/* mouse  */}
            <motion.div
              className=" absolute bottom-6 left-1/2 -translate-x-1/2  hidden lg:flex  "
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              <Mouse className="h-8 w-8 text-amber-50" />
            </motion.div>
          </div>
        </Container>
      </motion.section>
    </>
  );
}
