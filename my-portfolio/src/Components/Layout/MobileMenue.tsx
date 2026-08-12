import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../Ui/sheet";
import {
  ArrowDownToLine,
  Briefcase,
  Home,
  Mail,
  Menu,
  User,
} from "lucide-react";
import { Button } from "@base-ui/react";
import myCv from "../../../public/Ahmed_Abdelmonim_CV.pdf";
export default function MobileMenue() {
  return (
    <Sheet>
      <SheetTrigger render={<Menu className=" lg:hidden w-7 h-7" />} />

      <SheetContent
        side="left"
        className="bg-white/80 w-[300px] sm:w-[350px] flex flex-col justify-between p-6"
      >
        <div>
          <div className="border-b border-border/60 pb-5 mb-6">
            <h2 className="text-xl font-bold tracking-tight">Ahmed Attia</h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              Frontend Developer
            </p>
          </div>

          {/* اللينكات */}
          <nav>
            <ul className="space-y-3 w-full ">
              <li className=" flex flex-row">
                <SheetClose >
                  <a
                    href="#home"
                    className=" flex w-full gap-3  text-1x  items-center rounded-xl px-4 py-3 text-base font-medium 
                    transition-all duration-300 hover:bg-primary/10 hover:text-primary"
                  >
                    <Home /> Home
                  </a>
                </SheetClose>
              </li>

              <li>
                <SheetClose >
                  <a
                    href="#about"
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium
                     transition-all duration-300 hover:bg-primary/10 hover:text-primary"
                  >
                    <User />
                    About
                  </a>
                </SheetClose>
              </li>

              <li>
                <SheetClose >
                  <a
                    href="#projects"
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium 
                    transition-all duration-300 hover:bg-primary/10 hover:text-primary"
                  >
                    <Briefcase />
                    Projects
                  </a>
                </SheetClose>
              </li>

              <li>
                <SheetClose >
                  <a
                    href="#contact"
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium
                     transition-all duration-300 hover:bg-primary/10 hover:text-primary"
                  >
                    <Mail />
                    Contact
                  </a>
                </SheetClose>
              </li>
            </ul>
          </nav>
        </div>

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
        </div>
      </SheetContent>
    </Sheet>
  );
}
