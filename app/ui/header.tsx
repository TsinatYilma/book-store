

import Link from "next/dist/client/link"
import Menu from "@/app/ui/menu"
import { ChevronDownIcon } from 'lucide-react'
import { authClient } from "@/app/lib/auth-client"
import HeaderSession from './headerSession'
import HeaderTransite from './headerTransit'

export default async function Header(){
  const { data: session } = await authClient.getSession()
  const user = session?.user
  console.log("header data: ", user)
    return(
       <HeaderTransite user={user} />
    )
}