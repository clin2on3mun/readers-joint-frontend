
import { Button } from '../ui/button';
import { Link} from 'react-router';
import {MoveLeft} from 'lucide-react'
import GoogleSign from './GoogleSign';

export default function SignUpHeader() {
  return (
    <div className="space-y-4">
       <Link to="/" className='inline-block mt-4'><Button  className="h-9 cursor-pointer text-third bg-background transition-all hover:bg-secondary hover:text-white"><MoveLeft />Back to home</Button></Link>
       <h1>ReadersJoint</h1>
       <div className='space-y-2'>
        <h1 className='text-xl font-semibold'>Sign Up</h1>
       <p className="text-sm text-gray-500">Enter details to create your account</p>
       </div>
       <div className='space-y-5'>
          <GoogleSign up="up"/>
          <div className="flex gap-2">
             <span className='border flex-1 border-gray-300 self-center'></span>
             <span className=' self-center text-sm'>Or</span>
             <span className='flex-1 border border-gray-300 self-center'></span>
          </div>
       </div>
       
    </div>
  )
}
