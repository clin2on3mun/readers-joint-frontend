import { signupSchema } from "@/types/authSchema"
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod"
import { useForm } from 'react-hook-form'
import { Form, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import SignUpHeader from "./SignUpHeader";
import { getCountries, getCountryCallingCode, type CountryCode } from 'libphonenumber-js';
import { useMemo, useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import { Link } from "react-router";
import PasswordField from "./PasswordField";
import { Loader2 } from "lucide-react";


export const SignUpForm = () => {
    const [countries] = useState<CountryCode[]>(getCountries())
    const [selectCountryCode, setSelectCountryCode] = useState<string>(`${countries[227]} +${getCountryCallingCode(countries[227])}`);
    const form = useForm<z.infer<typeof signupSchema>>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            password: ""
        },
    })


    let countryCodes = useMemo(() => (
        countries.map((item: CountryCode) => {
            return { countryCode: item, dialCode: `+${getCountryCallingCode(item)}` }
        })
    ), [countries])

    const password = form.watch("password")

    
    return (
        <section className="space-y-5 mb-4">
            <SignUpHeader />
            <Form {...form} >
                <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField control={form.control}
                            name="firstname"
                            render={({ field }) => (
                                <FormItem>

                                    <FormLabel className="text-gray-700">First Name</FormLabel>
                                    <Input
                                        id="firstname"
                                        {...field}
                                        placeholder="John"
                                        required
                                        className="mt-1 h-10 rounded-md"

                                    />
                                </FormItem>

                            )} />
                        <FormField control={form.control}
                            name="lastname"
                            render={({ field }) => (
                                <FormItem>

                                    <FormLabel className="text-gray-700">Last Name</FormLabel>
                                    <Input
                                        type="text"
                                        {...field}
                                        placeholder="Doe"
                                        required
                                        className="mt-1 h-10 rounded-md"
                                    />
                                </FormItem>

                            )} />
                    </div>
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
                        name="password"
                        render={({ field }) => (
                          <PasswordField password={password} field={field}/>          

                        )} />
                    <FormField control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>

                                <FormLabel className="text-gray-700">Phone</FormLabel>
                                <div className="flex">
                                    <Select onValueChange={(value) => setSelectCountryCode(value)}>
                                        <SelectTrigger size="default" className="data-[size=default]:h-10 py-0 border-r mt-1 rounded-r-none self-center">
                                            <SelectValue placeholder={selectCountryCode} />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup className="h-60">

                                                {
                                                    countryCodes.map((item) => (
                                                        <SelectItem value={`${item.countryCode} ${item.dialCode}`}

                                                        >{item.countryCode}  ({item.dialCode})</SelectItem>
                                                    ))
                                                }
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <Input
                                        name="phone"
                                        type="text"
                                        {...field}
                                        placeholder="123 456 789"
                                        required
                                        className="mt-1 border-l-0 h-10 rounded-md rounded-l-none"
                                    />
                                </div>
                            </FormItem>

                        )} />

                    <Button className="w-full h-11 bg-[#4C4B16]">{
                        form.formState.isSubmitting ? <div className="flex items-center gap-2"><Loader2 className="animate-spin" /><span>creating account.......</span></div> : ("Create Account")
                    }</Button>
                    <p className="text-sm"> Already have an account? <Link to="/login" className="text-third">Login now</Link></p>
                </form>
            </Form>
        </section>
    )
}