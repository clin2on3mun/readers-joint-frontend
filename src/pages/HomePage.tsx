import BacktoTop from "@/components/BacktoTop";
import AboutSection from "@/layout/home/About";
import Contact from "@/layout/home/Contact";
import Herosection from "@/layout/home/Herosection";


export default function HomePage() {
  return (
    <>
     <Herosection/>
     <AboutSection/>
     <Contact/>
     <BacktoTop/>
    </>
  )
}
