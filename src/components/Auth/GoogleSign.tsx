import google from '@/assets/google.svg';
import { Button } from '../ui/button'

export default function GoogleSign(
  {up}:{up:string}
) {
  return (
    <Button className='w-full border border-[#898121] h-11 bg-transparent cursor-pointer transition-all ease-linear hover:bg-background hover:border-0'>
            <img src={google} width={20} height={20} alt="google"/>
            <span className='text-third'>Sign {up} with Google</span>
          </Button>
  )
}
