import LoginForm from "@/components/Auth/LoginForm";
import SignLogin from "@/components/Auth/SignLogin";



export default function LoginLayout() {
  return (
    <section className="min-h-screen flex items-center px-4">
            <SignLogin>
                <LoginForm/>
            </SignLogin>
        </section>
  )
}
