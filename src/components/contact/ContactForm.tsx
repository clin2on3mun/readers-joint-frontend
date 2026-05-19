import { Loader2, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Form, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import type z from "zod";

import { ContactFormSchema } from "@/types/contactFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "../ui/textarea";



export default function ContactForm() {

  const form = useForm<z.infer<typeof ContactFormSchema>>({
     resolver: zodResolver(ContactFormSchema),
     defaultValues:{
      fullname:"",
      email:"",
      message:"",
     }

  })



  return (
    <div className="space-y-3">
        <div className="space-y-2">
            <h2 className="text-4xl font-bold text-[#4C4B16]">Contact us</h2>
            <p className="text-sm">We’d love to hear from you. Reach out for support, ideas, feedback, or anything related to your ReadersJoint experience.</p>
        </div>
         <Form {...form} >
                <form className="space-y-4">
                    <FormField control={form.control}
                            name="fullname"
                            render={({ field }) => (
                                <FormItem>

                                    <FormLabel className="text-gray-700">Full Name</FormLabel>
                                    <Input
                                        id="fullname"
                                        {...field}
                                        placeholder="John"
                                        required
                                        className="mt-1 h-10 rounded-md"

                                    />
                                </FormItem>

                            )} />

                    <FormField control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>

                                <FormLabel className="text-gray-700">Email</FormLabel>
                                <Input
                                    type="email"
                                    {...field}
                                    placeholder="example@test.com"
                                    required
                                    className="mt-1 h-10 rounded-md"
                                />
                            </FormItem>

                        )} />

                         <FormField control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>

                                <FormLabel className="text-gray-700">Message</FormLabel>
                                <Textarea placeholder="write a message" className=" h-60 md:h-65 xl:h-71" {...field}/>
                            </FormItem>

                        )} />

                    <Button className="w-full h-11 bg-[#4C4B16]">{
                        form.formState.isSubmitting ? <div className="flex items-center gap-2"><Loader2 className="animate-spin" /><span>sending.......</span></div> : <>send message <Send/></>
                    }</Button>
                </form>
            </Form>
    </div>
  )
}
