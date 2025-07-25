'use client'
import {useState} from 'react'
import Link from "next/dist/client/link"
import Menu from "@/app/ui/menu"

export default function Header(){
    const [menuVisible, setMenuVisiblity] = useState<boolean>(false)
    function handleMenuVisbility(){
    setMenuVisiblity((prevState)=>(!prevState))
    console.log(menuVisible)
    }

    return(
        <>
        <header className="flex p-4  w-full h-[100px] justify-between items-center mb-18  ">
            
            <div className="md:hidden ">
              <img src="./../menu.png" alt="menu" className="w-[40px] h-[40px] " onClick={handleMenuVisbility} />
              
            </div>
            
             <div className="hidden md:flex gap-6 ">
               <Link href="/">Home</Link>
               <Link href="/genres">Genres</Link>
               <Link href="/blog">Blog</Link>
             </div>
             <div className="hidden md:block">
              <h1 className="text-2xl font-bold">Book Store</h1>
             </div>
             <div className="flex gap-3 md:gap-6  items-center">
               <Link href="/login">Login</Link>
               <p className="font-bold text-3xl flex items-center">|</p>
               <Link className="text-[#238E8E]" href="/signup">Register</Link>
             </div>
             
          </header>
           {<Menu menuVisible={menuVisible} handleMenuVisbility={handleMenuVisbility}/>}    
        </>
        
    )
}