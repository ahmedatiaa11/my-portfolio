// import { Container } from "lucide-react"
import { motion } from "framer-motion";
import Container from "../../Components/Common/Container";
import { LocationEdit, Mail } from "lucide-react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import ContactForm from "../Contact/ContactForm";
import { useState } from "react";

export default function Contact() {
  const [activeCard, setactiveCard] = useState<number>();
  return (
    <motion.section id="contact" className="py-10">
      <Container>
        <motion.div className="flex flex-col items-center gap-2 ">
          <motion.h2 className="text-5xl font-bold"> Contact</motion.h2>
          <motion.p className="text-lg text-muted-foreground ">
            {" "}
            Let's build something together{" "}
          </motion.p>
        </motion.div>

        <motion.div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20  ">
          <motion.div className="c-info my-10  p- text-center flex flex-col gap-5 ">
            <motion.div>
              <h3 className="text-2xl text-muted-foreground">Get In Touch</h3>
              {/* <p> I'm currently looking for internship and full-time opportunities.
Whether you have a project, a job opportunity, or just want to connect,
I'd be happy to hear from you. </p> */}
            </motion.div>
            <motion.div className="cards flex flex-col gap-5">

              <motion.a
                href="https://mail.google.com/mail/?view=cm&to=ahmedattia1520@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`card1 relative group overflow-hidden border rounded-3xl  shadow-xl  flex flex-col items-center   gap-4 p-5
                ${activeCard == 1 ? "text-white" : "text-black"} `}
                onMouseEnter={() => setactiveCard(1)}>
                <div className={`absolute  -z-10 bg-cyan-800 inset-0 transition-all duration-500
               ${activeCard == 1 ? "translate-y-0" : "translate-y-full"} `}></div>
                <Mail className=" h-8 w-8  " />
                <h4 className=" text-2xl font-semibold">Send Email</h4>
                <p className="text-lg ">ahmedattia1520@gmail.com</p>
              </motion.a>

              <motion.div
                className={`card1 relative group overflow-hidden border rounded-3xl  shadow-xl  flex flex-col items-center   gap-4 p-5
                ${activeCard == 2 ? "text-white" : "text-black"}`}
                onMouseEnter={() => setactiveCard(2)}
                 >
                <div
                className={`absolute group -z-10 bg-cyan-800 inset-0 transition-all duration-500
                ${activeCard == 2 ? "translate-y-0" : "translate-y-full"} `}>
                </div>
                <LocationEdit className=" text-red-500 h-8 w-8" />
                <h4 className="text-2xl font-semibold">Loction</h4>
                <p className="text-lg"> Cairo , Egypt</p>
              </motion.div>
              <motion.a
                href="https://www.linkedin.com/in/ahmed-3ttia-/"
                target="_blank"
                rel="noopener noreferrer"
                className={`card1 relative group overflow-hidden border rounded-3xl  shadow-xl  flex flex-col items-center   gap-4 p-5
                ${activeCard == 3 ? "text-white" : "text-black"}`}
                onMouseEnter={() => setactiveCard(3)} >
                <div
                className={`absolute group -z-10 bg-cyan-800 inset-0 transition-all duration-500
                ${activeCard == 3 ? "translate-y-0" : "translate-y-full"} `}>    
                </div>
                <FaLinkedin className=" text-blue-500 h-8 w-8" />
                <h4 className="text-2xl font-semibold">LinkedIn</h4>
                <p className="text-lg"> www.linkedin.com/in/ahmed-3ttia-</p>
              </motion.a>
              <motion.a
                href="https://wa.me/201024365443"
                target="_blank"
                rel="noopener noreferrer"
                className={`card1 relative group overflow-hidden border rounded-3xl  shadow-xl  flex flex-col items-center   gap-4 p-5
              ${activeCard == 4 ? "text-white" : "text-black"}
              `}
                onMouseEnter={() => setactiveCard(4)}
              >
                <div
                  className={`absolute group -z-10 bg-cyan-800 inset-0 transition-all duration-500
               ${activeCard == 4 ? "translate-y-0" : "translate-y-full"} 
                `}
                ></div>{" "}
                <FaWhatsapp className=" text-green-500 h-8 w-8" />
                <h4 className="text-2xl font-semibold">Watsapp</h4>
                <p className="text-lg"> 01024365443</p>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div className="c-form h-full">
            <h3 className="text-center text-2xl font- text-muted-foreground lg:pt-10">
              Drop us a message below 
               </h3>
            <ContactForm />
          </motion.div>
        </motion.div>
      </Container>
    </motion.section>
  );
}
