"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import '@/app/globals.css'
import { useRouter } from "next/navigation"
import { EnvelopeIcon , EyeSlashIcon, UserIcon, } from '@heroicons/react/24/outline'
import Link from "next/dist/client/link"
import {signIn, signUp} from "@/server/users"
import { z } from "zod"
import {useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {Loader2} from 'lucide-react'
import { useAuthOverlay } from '@/app/LayoutContext/OverlayContext';
import { authClient } from "@/app/lib/auth-client"

 
const formSchema = z.object({
    email: z.string().email(),
    name: z.string().min(10),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })
export default function SignUp(){
    const { isVisible, hide, mode } = useAuthOverlay();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
 
  // 2. Define a submit handler.
  async  function onSubmit(values: z.infer<typeof formSchema>) {
      setLoading(true)
      const result = await authClient.signUp.email({name: values.name, email: values.email, password: values.password})
      if (result.data) {
        router.refresh()
        router.push("/")
        hide()
      }
      
      setLoading(false)
      
    }
    return(
        <div className="flex min-h-screen flex-col justify-center items-center bg-black/2">
            <div className="relative font-gantari min-w-[280px] sm:min-w-[355px] flex flex-col items-center gap-5 bg-gradient-to-tr from-black to-[#0AA0A1]/40 px-6 sm:px-8 py-10 rounded-lg border-[0.25]">
                <button onClick={hide} className="absolute top-2 right-4 text-2xl text-white hover:text-red-600">✕</button>
                <h1 className="font-gabarito font-semibold text-[#0AA0A1] text-2xl ">Sign Up</h1>
                <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col w-full gap-5 '>

                        <div className="relative">
                        <input
                            className=" block w-full py-[6px] rounded-md border pl-10 text-sm outline-2 focus:outline-cyan-500 placeholder:text-gray-500 font-bold"
                            id="name"
                            type="name"
                            placeholder="Enter Name"
                            {...form.register("name")}
                            required
                            minLength={6}
                        />
                        <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 " />
                        </div>
                        <div className="relative">
                        <input
                            className=" block w-full py-[6px] rounded-md pl-10 text-sm outline-2 focus:outline-cyan-500 placeholder:text-gray-500 font-bold"
                            id="email"
                            type="email"
                            placeholder="Enter email"
                            {...form.register("email")}
                            required
                            minLength={6}
                        />
                        <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 " />
                        </div>
                        <div className="relative">
                        <input
                            className=" block w-full py-[6px] rounded-md pl-10 text-sm outline-2 focus:outline-cyan-500 placeholder:text-gray-500 font-bold"
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter password"
                            {...form.register("password")}
                            required
                            minLength={6}
                        />
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="h-[18px] w-[18px] text-gray-500 " />
                        </span>
                        </div>
                        <div className="relative">
                        <input
                            className={`block w-full py-[6px] rounded-md pl-10 text-sm outline-2 focus:outline-cyan-500 ${form.formState.errors.confirmPassword && ('focus:outline-red-500')} placeholder:text-gray-500 font-bold`}
                            id="confirmPassword"
                            type={showPassword ? "text" : "password"}
                            placeholder="Confirm password"
                            {...form.register("confirmPassword")}
                            required
                            />
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="h-[18px] w-[18px] text-gray-500 " />
                            </span>
                        </div>
                        {form.formState.errors.confirmPassword && (
                            <span className="text-cyan-500 text-sm">
                                {form.formState.errors.confirmPassword.message}
                            </span>
                            )}
                        <div className="flex flex-col gap-2">
                            <button type='submit' className="fancyBorder w-full py-1 mt-3 flex justify-center">{loading ? <Loader2 className="animate-spin h-5 w-5" /> : "Sign Up"}</button>
                            <p className="text-[12px] text-center text-gray-600">Already have an account?.<span className="underline hover:text-[#0AA0A1]"><Link href="/pages/login">Login</Link></span></p>
                        </div>
                </form>

            </div>
        </div>
    )
}