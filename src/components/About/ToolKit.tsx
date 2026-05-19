import { Blocks, BookOpen, Users } from "lucide-react"


 const toolKits = [{
    icon:<BookOpen className="w-4.5 h-4.5"/>,
    name: "Discover & Read Books"
 },
 {
   icon: <Blocks  className="w-4.5 h-4.5"/>,
   name: "Build Your Digital Shelf",
 },
{
  icon: <Users className="w-4.5 h-4.5"/>,
  name:"Community Book Sharing"
},]


export default function ToolKit() {
  return (
    <div className="p-4 rounded-lg h-50  bg-amber-50 space-y-5">
            <h3 className="text-lg font-semibold">
                The Toolkit
            </h3>
            <div className="grid gap-3">
                {
                    toolKits.map((toolkit)=>(
                      <p className="flex items-center gap-2"><span className="rounded-full flex items-center justify-center bg-amber-100 p-1.5">{toolkit.icon}</span><span className="text-sm font-medium">{toolkit.name} </span></p>
                    ))
                }
            </div>
        </div>
  )
}
