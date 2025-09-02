import { authClient } from "../lib/auth-client";
import { GetSession } from "../lib/get-session";
import Header from "./header"

export default async  function HeaderSession(){
     const session = await GetSession()
     const user = session?.user
     
     return (
         <Header user={user?.name ?? ''} />
     )

}