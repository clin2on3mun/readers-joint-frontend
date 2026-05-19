import useIndexUpdate from "@/hooks/useIndexUpdate"
import tablet from '@/assets/changed.png'

const verbs = ["Upload", "Share", "Read"]



export default function SellingPoint() {
    const index = useIndexUpdate({initial:0, data:verbs});
  return (
   <div className="flex lg:flex-col xl:row-start-1 xl:row-end-3 xl:h-full  p-4 h-50 justify-between bg-secondary rounded-lg">
     <h1 aria-live="polite" className="font-alfa-slab-one  self-center" aria-atomic="true">
       <p key={index}
        className="
          text-white
          text-lg
          sm:text-2xl

          animate-in
          fade-in
          slide-in-from-bottom-2

          duration-500
        "
      >
        {verbs[index]}!
      </p>
     </h1>
     <img src={tablet} className="self-center   w-35 sm:h-35 " alt="tablet"/>
   </div>
  )
}
