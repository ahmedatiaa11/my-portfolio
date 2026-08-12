  import { useMutation} from "@tanstack/react-query"
import { contactInf } from "../services/contactApi"
import type { contactInfo } from "../Types/generalTypes"
  
  
  export const useContact = ()=>{
    return useMutation({
        mutationFn: (data:contactInfo)=> contactInf(data) 
    })
  }