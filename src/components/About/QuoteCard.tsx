import { Info } from 'lucide-react'
import { useEffect, useState } from 'react'

 const quotes = ['Books are a uniquely portable magic.',
                  'Today a reader, tomorrow a leader.',
                  'Reading is to the mind what exercise is to the body.',
                  'Once you learn to read, you will be forever free.',
                  'Books are mirrors: you only see in them what you already have inside you.',
                  'Reading gives us someplace to go when we have to stay where we are.',
                  'There is no friend as loyal as a book.',
                  'The more that you read, the more things you will know.',
                  'Books open windows to the world and broaden our minds.'
                ]
                
export default function QuoteCard() {
  let  [index, setIndex]  = useState<number>(0)


  useEffect(()=>{ 
     const timer = setTimeout(() => {
    setIndex((prev) => (prev + 1) % quotes.length)
  }, 2000)

  return () => clearTimeout(timer)
  },[index])


  return (
    <div className="bg-fourth h-50 xl:col-4 xl:row-2  grid p-4  rounded-lg">
           <p className="flex items-center text-white self-start gap-2"><Info className='animate-pulse' /> <span>Quotes</span></p>
            <p
        key={index}
        className="
          italic
          text-white
          text-lg

          animate-in
          fade-in
          slide-in-from-bottom-2

          duration-500
        "
      >
        "{quotes[index]}"
      </p>
        </div>
  )
}
