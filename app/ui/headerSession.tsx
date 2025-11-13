import { authClient } from "../lib/auth-client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuthOverlay } from '@/app/LayoutContext/OverlayContext';
import {getServerSession} from '@/app/lib/auth-client'


export default function HeaderSession(){
   const { showLogin, showSignup } = useAuthOverlay();
   const [session, setSession] = useState<null | {
    user: any;
    session: any;
  }>(null);

   // Fetch session once on mount
   useEffect(() => {
    getServerSession().then((res) => {
       setSession(res.data);
     });
   }, []);
 
   const user = session?.user;
    

    return(
           <div className="">
            {
               user ? (
                    <div className="hidden md:flex gap-3 md:gap-6  items-center font-gantari text-lg">
                      <Link href="/pages/Myshelf">My shelf</Link>
                      <p className="font-bold text-3xl flex items-center">|</p>
                      <Link className="text-cyan-400" href="/pages/Profile">
                        {user.name}
                      </Link>
                    </div>
                  ) : (
                    <div className="hidden md:flex gap-3 md:gap-6  items-center font-gantari text-lg">
                      <button onClick={showLogin}>Login</button>
                      <p className="font-bold text-3xl flex items-center">|</p>
                      <button className="text-cyan-400" onClick={showSignup}>
                        Register
                      </button>
                    </div>
                  )
                  }
           </div>
    )
}