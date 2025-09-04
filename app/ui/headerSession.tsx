import { authClient } from "../lib/auth-client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function HeaderSession(){
    const { data: session, isPending, error } = authClient.useSession();
    const user = session?.user
    console.log(user)
    

    return(
        <div className="">
               {isPending ? 
                 <div className="hidden md:flex gap-3 md:gap-6  items-center">
                  <div className="animate-pulse bg-gray-300 rounded border w-full blur-sm" >My shelf</div>
                    <p className="font-bold text-3xl flex items-center">|</p>
                  <div className="animate-pulse bg-gray-300 rounded border w-full blur-sm" >My shelf</div>
                 </div>
                    :
               user ? (
                    <div className="hidden md:flex gap-3 md:gap-6  items-center">
                      <Link href="/pages/Myshelf">My shelf</Link>
                      <p className="font-bold text-3xl flex items-center">|</p>
                      <Link className="text-cyan-400" href="/pages/Profile">
                        {user.name}
                      </Link>
                    </div>
                  ) : (
                    <div className="hidden md:flex gap-3 md:gap-6  items-center">
                      <Link href="/pages/login">Login</Link>
                      <p className="font-bold text-3xl flex items-center">|</p>
                      <Link className="text-cyan-400" href="/pages/signup">
                        Register
                      </Link>
                    </div>
                  )
                  }
             </div>
    )
}