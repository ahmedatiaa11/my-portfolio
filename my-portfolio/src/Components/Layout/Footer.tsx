import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import Container from "../Common/Container";

export default function Footer() {
  return (
    <footer className=" bg-black/5">
      <Container>
        <div 
        className="w-full  flex flex-col lg:flex-row justify-between items-center rounded-full mt-6 p-5 gap-5 lg:gap-3">
          <div className=" relative flex flex-col text-cyan-500  ">
                    <h3 className="text-2xl">Ahmed Attia </h3>
                    <p className=" text-sm lg:block text-center   text-black/55">Frontend Developer</p>

          </div>

        <ul className=" flex lg:flex-col gap-3 lg:gap-2 text-lg ">
          <li className="hover:text-cyan-500 hover: transition-all duration-200   rounded-2xl "> <a  href="#home">Home</a></li>
          <li className="hover:text-cyan-500 hover: transition-all duration-200   rounded-2xl "> <a  href="#about">About</a></li>
          <li className="hover:text-cyan-500 hover: transition-all duration-200   rounded-2xl "> <a href="#projects">Projects</a></li>
          <li className="hover:text-cyan-500 hover: transition-all duration-200   rounded-2xl "> <a href="#contact">Contact</a></li>
        </ul>
        <div className="social links flex lg:flex-col gap-5 ">
          <a
          target="_blank" 
          rel="noopener noreferrer"
          href="https://www.instagram.com/ahmed3ttiaa">
                      <FaInstagram className="w-6 h-6 text-red-600 hover:scale-125 "/> 

          </a>
          <a
          target="_blank"
          rel="noopener noreferrer"
           href="https://www.facebook.com/ahmed.attia.88284">
                      <FaFacebook className="w-6 h-6 text-blue-800"/>
          </a>
          <a
          target="_blank" href="https://www.tiktok.com/@ahmed3tiaa"
          rel="noopener noreferrer">
          <FaTiktok className="w-6 h-6 text-black"/>
          </a>
          <a 
          target="_blank"       rel="noopener noreferrer"
          href="https://wa.me/201024365443">
          <FaWhatsapp className="w-6 h-6 text-green-500 "/>
          </a>
        </div>

        </div>
        <div className="w-full  rounded-2xl mb-2">   
            <div className=" w-fit   p- mx-auto">© 2026 Ahmed Attia. All rights reserved.</div>
        </div>

      </Container>
    </footer>
  );
}
