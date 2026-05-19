
import { Link } from "react-router"
import QuoteCard from "./QuoteCard"
import StatsCard from "./StatsCard"
import { Button } from "../ui/button"
import { ArrowRight, HeartPulse } from "lucide-react"
import ToolKit from "./ToolKit"
import SellingPoint from "./SellingPoint"


export default function AboutGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-2 gap-4">
        <SellingPoint/>
        <div className=" md:col-start-2 xl:col-end-4 bg-amber-50 h-50  p-4 space-y-4 rounded-lg">
          <p className="flex items-center gap-1.5"><HeartPulse size={32} className="animate-pulse" fill={"red"} stroke={"white"} /> <span className="font-medium">Philosphy</span></p>
          <p className="text-sm text-gray-600">
            As technology transforms the way we live, reading must evolve with it. Readers Joint brings literature into the digital age by creating an accessible platform where people can read, learn, and build meaningful connections through books.
          </p>
        </div>
        <StatsCard/>
        <QuoteCard/>
        <ToolKit/>
        <div className="rounded-lg p-4 h-50 xl:col-3 xl:row-2 flex flex-col gap-3  justify-center text-white bg-third items-center">

            <h3 className="text-lg font-semibold">Get Started</h3>
            <p className="text-center text-sm">Join the community and begin your reading journey today.</p>
            <Link to="/dashboard">
              <Button className="w-11 cursor-pointer rounded-full h-11">
                 <ArrowRight size={24} className=""/>
            </Button>

            </Link>
            
        </div>
    </div>
  )
}
