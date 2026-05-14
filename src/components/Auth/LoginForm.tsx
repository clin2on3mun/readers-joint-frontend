import { loginSchema } from "@/types/authSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import PasswordField from "./PasswordField"
import { Form, FormField, FormItem, FormLabel } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Loader2 } from "lucide-react"
import LoginHeader from "./LoginHeader"
import { Link } from "react-router"
import type z from "zod"


export default function LoginForm() {

   const form = useForm<z.infer<typeof loginSchema>>({
          resolver: zodResolver(loginSchema),
          defaultValues: {
              identifier: "",
              password: ""
          },
      })
    const password = form.watch("password")  
  return (
      <section className="space-y-5">
            <LoginHeader />
            <Form {...form} >
                <form className="space-y-4">
                    <FormField control={form.control}
                        name="identifier"
                        render={({ field }) => (
                            <FormItem>

                                <FormLabel className="text-gray-700">Email</FormLabel>
                                <Input
                                    type="text"
                                    {...field}
                                    placeholder="username or email"
                                    required
                                    className="mt-1 h-10 rounded-md"
                                />
                            </FormItem>

                        )} />
                    <FormField control={form.control}
                        name="password"
                        render={({ field }) => (
                          <PasswordField password={password} field={field}/>          

                        )} />

                    <Button className="w-full h-11 bg-[#4C4B16]">{
                        form.formState.isSubmitting ? <div className="flex items-center gap-2"><Loader2 className="animate-spin" /><span>loggin in.......</span></div> : ("Login")
                    }</Button>
                    <p className="text-sm"> Not registered yet? <Link to="/signup" className="text-third">Create an account</Link></p>
                </form>
            </Form>
        </section>
  )
}
