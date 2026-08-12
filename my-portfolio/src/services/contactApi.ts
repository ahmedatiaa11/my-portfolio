import axios from "axios"
import type { contactInfo } from "../Types/generalTypes"


 export const contactInf = async (data: contactInfo) =>{
    const response = await axios.post("https://formspree.io/f/xgawkdbj" ,data)
    return response.data
 }


