import SignLogin from "@/components/Auth/SignLogin";
import { SignUpForm } from "@/components/Auth/SignUpForm";


export default function SignUpLayout() {
  return (
    <section className="min-h-screen flex items-center px-4">
        <SignLogin>
         <SignUpForm/>
        </SignLogin>
    </section>
  )
}
