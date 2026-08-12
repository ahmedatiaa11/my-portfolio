import {Controller, useForm} from "react-hook-form"
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldLabel } from "../../Components/Ui/field"
import { Input } from "../../Components/Ui/input";
import { Textarea } from "../../Components/Ui/textarea";
import { Button } from "../../Components/Ui/button";
import { useContact } from "../../Hooks/useContact";
// type formInputes ={
//   name : string ,
//   email :string ,
//   message : string 
// }

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});



export default function ContactForm() {

  type ContactFormValues = z.infer<typeof contactSchema>;

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema) ,
    defaultValues:{
      name:"" ,
      email:"" ,
      message:""
    }
  }) 
  const {mutate} = useContact()



  const onSubmit =(data:ContactFormValues) =>{
    mutate( data  , {
      onSuccess :()=>{
        alert(" message sent ")
        
      } , 
      onError:()=>{
       alert("failed to send message")
      }
        
    })
  }
  return (
    <form onSubmit={form.handleSubmit(onSubmit)} 
    className=" bg-primary/5 space-y-6 h- p-10 mt-5  rounded-2xl border shadow-2xl flex flex-col items-cente gap-10">
      {/* <h3> Submit message </h3> */}
      <Controller
        name="name"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field>
            <FieldLabel className="text-lg text-muted-foreground "> Name</FieldLabel>
            <Input {...field} placeholder="Your Name" className="py-5 focus-visible:ring-2
    focus-visible:ring-primary/30 " />
            {fieldState.error && <span className="text-red-600 text-lg">{fieldState.error.message}</span>}
          </Field>
        )}
      />

      <Controller
        name="email"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field>
            <FieldLabel className="text-lg text-muted-foreground">Email</FieldLabel>
            <Input {...field} type="email" placeholder="your@email.com"  className="py-7" />
            {fieldState.error && <span className="text-red-600 text-lg">{fieldState.error.message}</span>}
          </Field>
        )}
      />

      <Controller
        name="message"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field>
            <FieldLabel className="text-lg text-muted-foreground">Message</FieldLabel>
            <Textarea {...field} placeholder="Your message" className="min-h-30" />
            {fieldState.error && <span className="text-red-600 text-lg">{fieldState.error.message}</span>}
          </Field>
        )}
      />
        <Button type="submit" className="w-full py-6 text-lg font-semibold
        
        ">
          Send Message
        </Button>
    </form>
  )
}
