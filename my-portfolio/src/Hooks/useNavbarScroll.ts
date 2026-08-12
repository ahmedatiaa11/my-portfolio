import { useEffect, useState } from "react"

export const useNavbarScroll  = (pixel : number) =>{
    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {

      const handleScroll = () => {
        if(window.scrollY > pixel){
            setIsScrolled(true)
        }
        else{
            setIsScrolled(false)
        }
      }
      handleScroll();
      window.addEventListener("scroll" , handleScroll)
    
      return () => {
        window.removeEventListener("scroll" , handleScroll)
      }
    }, [pixel])


    return isScrolled
    
}