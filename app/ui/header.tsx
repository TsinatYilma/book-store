'use client'
import {useState, useEffect} from 'react'
import Link from "next/dist/client/link"
import Menu from "@/app/ui/menu"
import { authClient } from '../lib/auth-client'
import { ChevronDownIcon } from 'lucide-react'

import HeaderSession from './headerSession'

export default function Header(){
    const [menuVisible, setMenuVisiblity] = useState<boolean>(false)
   
    function handleMenuVisbility(){
      console.log("onClick")
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
            
             <div className="hidden md:flex gap-6 font-gantari">
             <Link href="/">
              <span onClick={handleMenuVisbility}>Home</span>
            </Link>
               <Link href="/pages/genre" onClick={handleMenuVisbility}>Genres</Link>
               <Link href="/blog" onClick={handleMenuVisbility}>Blog</Link>
             </div>
             <div className="hidden md:block">
              <h1 className="text-2xl font-bold">Book Store</h1>
             </div>
             <HeaderSession />
             
          </header>
           {<Menu menuVisible={menuVisible} handleMenuVisbility={handleMenuVisbility}/>}    
        </>
        
    )
}