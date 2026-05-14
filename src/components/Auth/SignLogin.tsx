import  { type ReactNode } from 'react';
import background from '@/assets/background2.jpg'

export default function SignLogin({children}:{children:ReactNode}) {
  return (
       
     <section className="grid grid-cols-1 flex-1 lg:grid-cols-2 gap-15 max-w-299.5 mx-auto lg:h-180 ">
       
       {children}       
      
     <div className='relative hidden lg:block overflow-hidden rounded-lg'>
        <img src={background} className='absolute inset-0 w-full h-full' width={1000} height={1000} alt=""/>
        </div>
         
      

    </section>

  )
}
