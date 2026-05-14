
import { Button } from "@/components/ui/button";
import hero from '@/assets/hero.jpg'
import Header from "@/components/Header";

export default function Herosection() {
  return (
      <header className="hero min-h-[90vh]">
        <Header/>
        <section className="max-w-299.5 mx-auto px-4">
         
        <section className="mt-20 grid lg:grid-cols-2 gap-4">
            <section className="flex gap-5 rounded-2xl px-8 py-10 lg:py-0 bg-fourth flex-col justify-center">
               <section className="text-3xl lg:text-5xl text-white  font-semibold">
               <h1>Connect Through Books.</h1> <h1>Grow Through Reading.</h1>
            </section>
             <p className="text-background">Access a curated world of digital books, shared by a community passionate about learning and storytelling.</p>
                 <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-third text-white px-6 py-3 rounded-xl">
                    Get started
                  </Button>
                  <Button size="lg" className="border  border-background text-background px-6 bg-transparent py-3 rounded-xl">
                    Upload a Book
                  </Button>
        </div>
            </section>
        <div className="h-160 relative overflow-hidden">
         <div className="absolute right-0 rounded-bl-xl flex items-center justify-center z-1 w-[calc()] md:w-60 h-30 bg-background">
           <div className="bg-fourth md:w-50 h-24 rounded-xl">
           </div>
          </div> 
        <img src={hero} className="inline-block absolute h-full left-0 top-0 w-full  rounded-xl mx-auto  object-cover" width={800} alt="hero image"/>

          </div>   
        </section>
        </section>
      </header>
  )
}
