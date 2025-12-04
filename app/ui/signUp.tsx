'use client'

import '@/app/globals.css'
import { useState, type FormEvent } from 'react'
import {EnvelopeIcon, EyeSlashIcon, UserIcon } from '@heroicons/react/24/outline'

export default function signUp() {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    const handelSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            
        } catch (error) {
            
        }

    }

    return(
        <div className="font-gantari min-w-[280px] sm:min-w-[355px] flex flex-col items-center gap-5 bg-gradient-to-tr from-black to-[#0AA0A1]/40 px-6 sm:px-8 py-10 rounded-lg border-[0.25]">
            <form action="" onSubmit={handelSubmit}  className='flex flex-col w-full gap-5 '> 
                <div className="relative">
                    <input
                        className=" block w-full py-[6px] rounded-md border pl-10 text-sm outline-2 focus:outline-cyan-500 placeholder:text-gray-500 font-bold"
                        id="name"
                        type="name"
                        value={name}
                        placeholder="Enter Name"
                        required
                        minLength={6}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 " />
                </div>
                <div className="relative">
                    <input
                        className=" block w-full py-[6px] rounded-md pl-10 text-sm outline-2 focus:outline-cyan-500 placeholder:text-gray-500 font-bold"
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Enter email"
                        required
                        minLength={6}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 " />
                </div>
                <div className="relative">
                    <input
                        className=" block w-full py-[6px] rounded-md pl-10 text-sm outline-2 focus:outline-cyan-500 placeholder:text-gray-500 font-bold"
                        id="password"
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Enter password"
                        required
                        minLength={6}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <EyeSlashIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 " />
                </div>
                <div className="relative">
                    <input
                        className=" block w-full py-[6px] rounded-md pl-10 text-sm outline-2 focus:outline-cyan-500 placeholder:text-gray-500 font-bold"
                        id="confirmPassword"
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm password"
                        // required
                    />
                    <EyeSlashIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 " />
                </div>
                <div className="flex flex-col gap-2">
                    <button type='submit' className="fancyBorder w-full py-1 mt-3">Sign Up</button>
                    <p className="text-[12px] text-center text-gray-600">Already have an account?.<span className="underline">Login</span></p>
                </div>
            </form>

        </div>
    )
}