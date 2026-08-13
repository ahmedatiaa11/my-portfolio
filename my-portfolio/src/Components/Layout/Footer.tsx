import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import Container from "../Common/Container";

export default function Footer() {
  return (
    <footer className="">
      <Container>
        <div 
        className="w-full  flex flex-col lg:flex-row justify-between items-center rounded-full mt-6 p-5 gap-3">
          <div className=" relative flex flex-col gap">
                    <h3 className="text-2xl">Ahmed Attia </h3>
                    <p className=" hidden lg:block absolute w-40 -bottom-3  text-black/55">Frontend Developer</p>

          </div>

        <ul className=" flex gap-5 text-lg ">
          <li className="hover:bg-cyan-700 hover:text-white transition-all duration-200 px-3 py- rounded-2xl "> <a  href="#home">Home</a></li>
          <li> <a  href="#about">About</a></li>
          <li> <a href="#projects">Projects</a></li>
          <li> <a href="#contact">Contact</a></li>
        </ul>
        <div className="social links flex gap-5 ">
          <a
          target="_blank" 
          href="https://www.instagram.com/ahmed3ttiaa">
                      <FaInstagram className="w-6 h-6 text-red-600 hover:scale-125 "/> 

          </a>
          <a
          target="_blank"
           href="https://www.facebook.com/ahmed.attia.88284">
                      <FaFacebook className="w-6 h-6 text-blue-800"/>
          </a>
          <a
          target="_blank" href="https://www.tiktok.com/@ahmed3tiaa">
          <FaTiktok className="w-6 h-6 text-black"/>
          </a>
          <a 
          target="_blank"
          href="https://wa.me/201024365443">
          <FaWhatsapp className="w-6 h-6 text-green-500 "/>
          </a>
        </div>

        </div>
        <div className="w-full  rounded-2xl mb-2">   
            <div className=" w-fit   p- mx-auto"> © 2026 Ahmed Attia</div>
        </div>

      </Container>
    </footer>
  );
}
