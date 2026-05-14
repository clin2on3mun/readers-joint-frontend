import { Link } from 'react-router'
import { Button } from '../ui/button'
import GoogleSign from './GoogleSign'
import { MoveLeft } from 'lucide-react'

export default function LoginHeader() {
  return (
    <div className="space-y-4">
       <Link to="/" className='inline-block mt-4'><Button className="h-9 cursor-pointer text-third bg-background transition-all hover:bg-secondary hover:text-white"><MoveLeft />Back to home</Button></Link>
       <h1 className='mt-8'>ReadersJoint</h1>
       <div className='space-y-2'>
        <h1 className='text-xl font-semibold'>Login</h1>
       <p className="text-sm text-gray-500">Enter details to login your account</p>
       </div>
       <div className='space-y-5'>
          <GoogleSign up="in"/>
          <div className="grid grid-cols-3 gap-5">
             <span className='border border-gray-300 self-center'></span>
             <span className='justify-self-center self-center text-sm'>Or</span>
             <span className='border border-gray-300 self-center'></span>
          </div>
       </div>
       
    </div>
  )
}
