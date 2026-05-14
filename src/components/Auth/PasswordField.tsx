import { useCallback, useRef, useState } from 'react'
import { FormItem, FormLabel } from '../ui/form'
import { Input } from '../ui/input'
import { Eye, EyeOff } from 'lucide-react'

export default function PasswordField({password, field}:{password:string, field:{}}) {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

const handlesHidePassword = useCallback(() => {
        if (showPassword || !password) {
            setShowPassword(false)
        }
        inputRef.current?.focus()
    }, [showPassword, password])

     const handleShowPassword = useCallback(() => {
        if (password) {
            setShowPassword(true)
        }
        inputRef.current?.focus()
    }, [showPassword, password])

  return (
     <>
       <FormItem>

                                <FormLabel className="text-gray-700">Password</FormLabel>
                                <div ref={inputRef} className="relative h-10 rounded-lg border border-input overflow-hidden
                focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50">
                                    <Input
                                        
                                        type={showPassword ? "text" : "password"}
                                        {...field}
                                        placeholder="Min, 8 characters"
                                        required
                                        className="mt-1 -top-1 absolute h-full w-full rounded-none bg-transparent  border-0 focus-visible:border-0 focus-visible:ring-0 in-focus-within:border-0 in-focus-within:ring-0 "
                                    />
                                    {
                                        showPassword ? <EyeOff role="button" onMouseDown={(e) => e.preventDefault()} onClick={handlesHidePassword} className="absolute top-1/2 transform w-4.5 h-4.5 -translate-y-1/2 right-2" /> : <Eye role="button" onClick={handleShowPassword} onMouseDown={(e) => e.preventDefault()} className="absolute top-1/2 w-4.5 h-4.5 transform -translate-y-1/2 right-2" />
                                    }

                                </div>
                            </FormItem>
     </>
  )
}
