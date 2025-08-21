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
        <header className="flex p-4  w-full h-[60px] justify-between items-center bg-black">
            
            <div className="md:hidden flex justify-between w-full">
              <h1 className="font-bold text-3xl">Logo</h1>
              <img src="./../menu.png" alt="menu" className="w-[40px] h-[40px] " onClick={handleMenuVisbility} />
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
               <Link href="/pages/Myshelf">My Shelf</Link>
               <Link href="/pages/login">Login</Link>
               <p className="font-bold text-3xl flex items-center">|</p>
               <Link className="text-[#238E8E]" href="/pages/signup">Register</Link>
             </div>
             
          </header>
           {<Menu menuVisible={menuVisible} handleMenuVisbility={handleMenuVisbility}/>}    
        </>
        
    )
}