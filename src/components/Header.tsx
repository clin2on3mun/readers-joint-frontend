import { Link } from "react-router";
// import logo from '@/assets/logo.png'
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Menu } from "lucide-react";
import { useState } from "react";

const links:{name:string, link}[] = [
  {
  name:"Home",
  link:"/"

},
{
  name:"About",
  link:"#about"

},
{
  name:"contact",
  link:"#contact"

},
{
  name:"Login",
  link:"/login"

},


]

export default function Header() {
  const [state, setState] = useState<boolean>(false)
  return (
    <>
       <nav className=" flex border-b border-fourth relative">
      <div className="flex max-w-299.5 px-4 mx-auto h-15   flex-wrap flex-1 justify-between items-center">
        <h1 className="text-xl font-semibold">ReadersJoint</h1>
        <ul className="hidden md:flex  items-center gap-10">
          {links.filter(link=> link.name!=="Login").map((link)=>(
             <li key={link.name}>
            <a href={link.link} className="text-sm"> {link.name} </a>
          </li>
          ))}
         
        </ul>
        <Link to="/login">
          <Button
  size="lg"
  className="
    hidden
    md:flex
    group
    relative
    overflow-hidden
    w-28
    rounded-full
    cursor-pointer
    border
    border-fourth
    bg-background
    text-black

    -translate-x-8

    shadow-[20px_0_0_rgba(76,76,22,1)]
    hover:shadow-none

    transition-all
    duration-300
    ease-in-out
  "
>
  {/* Animated background */}
  <span
    className="
      absolute
      inset-0
      bg-fourth
      origin-top
      scale-y-0

      transition-transform
      duration-300
      ease-in-out
      pointer-events-none
      group-hover:scale-y-100
    "
  />

  {/* Content */}
  <span className="relative z-10 flex items-center gap-1 text-black group-hover:text-white">
    Login
    <ArrowUpRight
      className="
        transition-transform
        duration-300
        group-hover:translate-x-1
      "
    />
  </span>
</Button>
        </Link>

        <Button className="bg-transparent border-fourth inline-block md:hidden" onClick={()=> setState(!state)}><Menu className="text-fourth"/></Button>
      </div>

      <div className={`${state ? 'block':'hidden'} bg-fourth min-h-140 w-full translate-y-15 md:hidden absolute`  }>
        <ul className="">
         {
          links.map((link)=>(
        
              link.name === "Login" ?  (<li key={link.name} className="w-full flex items-center  h-16 ">
           <Link to={link.name} onClick={()=>setState(false)} className="px-4 block w-full"> <Button className="w-full bg-background border border-fourth text-fourth h-10 rounded-full">{link.name} <ArrowUpRight/></Button></Link>
          </li>): (<li  className="flex items-center h-16 px-4">
            <a href={link.link} onClick={()=>setState(false)} className="text-sm text-white"> {link.name} </a>
          </li>)))}
         
        </ul>
      </div>

    </nav>
    

    </>
   

  )
}
