import Image from "next/image";
import IntroText from "@/app/ui/introText";
import Search from "@/app/ui/search";
import Link from "next/dist/client/link";
import RecentlyPublishedBooks from "./ui/recentlypub-books"; 

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <header className="flex p-4 pl-8 pr-8 w-full justify-between items-center mb-18">
         <div className="flex gap-6">
           <Link href="/">Home</Link>
           <Link href="/genres">Genres</Link>
           <Link href="/blog">Blog</Link>
         </div>
         <div className="">
          <h1 className="text-2xl font-bold">Book Store</h1>
         </div>
         <div className="flex gap-6  items-center">
           <Link href="/login">Login</Link>
           <p className="font-bold text-2xl flex items-center">|</p>
           <Link className="text-[#238E8E]" href="/signup">Register</Link>
         </div>
      </header>
      <IntroText />
      <Search placeholder="Search..." />
      <RecentlyPublishedBooks />
      <footer className="">
        
      </footer>
    </div>
  );
}
