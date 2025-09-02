'use client'
import {useState} from 'react'
import Link from "next/dist/client/link"
import Menu from "@/app/ui/menu"
import { authClient } from '../lib/auth-client'
import { ChevronDownIcon } from 'lucide-react'
import { useUIStore } from '@/store/heading'

export default function Header({user}:{user: string}){
    const head = useUIStore((state)=>(state.isProfileOpen))
    console.log(head)
    const { data: session, error } = authClient.useSession()
    
    
    console.log(user)
    const [menuVisible, setMenuVisiblity] = useState<boolean>(false)
   
    function handleMenuVisbility(){
    setMenuVisiblity((prevState)=>(!prevState))
    }
    
    return(
        <>
        <header className="flex p-4  w-full h-[60px] justify-between items-center bg-black">
            
            <div className="md:hidden flex justify-between w-full">
              <h1 className="font-bold text-3xl">Logo</h1>
              <button onClick={handleMenuVisbility}>
                <div className={`w-6 h-1 rounded-xs  bg-white transition-all duration-300 ease-in-out ${menuVisible ? 'opacity-0' : ''}`}/>
                <div className={`w-4 h-1 mt-1 rounded-xs ml-auto bg-white transition-all duration-300 ease-in-out ${menuVisible ? 'opacity-0' : ''}`}/>
                <div className={`w-2 h-1 mt-1 rounded-xs ml-auto bg-white transition-all duration-300 ease-in-out ${menuVisible ? 'opacity-0' : ''}`}/>
              </button>
            </div>
            
             <div className="hidden md:flex gap-6 ">
               <Link href="/">Home</Link>
               <Link href="/pages/genre">Genres</Link>
               <Link href="/blog">Blog</Link>
             </div>
             <div className="hidden md:block">
              <h1 className="text-2xl font-bold">Book Store</h1>
             </div>
             <div className="hidden md:flex gap-3 md:gap-6  items-center">
               <Link href="/pages/contactUs">Contact Us</Link>
               {(user) ? <Link href={"/pages/Myshelf"}>My shelf</Link> :<Link href="/pages/login">Login</Link>}
               <p className="font-bold text-3xl flex items-center">|</p>
               {(user) ? 
               <Link className='text-cyan-400' href={"/pages/Profile"}>{user}</Link> :
               <Link className='text-cyan-400' href="/pages/signup">Register</Link>}
             </div>
             
          </header>
           {<Menu menuVisible={menuVisible} handleMenuVisbility={handleMenuVisbility}/>}    
        </>
        
    )
}