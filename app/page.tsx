import Image from "next/image";
import IntroText from "@/app/ui/introText";
import Search from "@/app/ui/search";
import Link from "next/dist/client/link";
import RecentlyPublishedBooks from "./ui/recentlypub-books";
import Header from '@/app/ui/header'
import BookoftheMonth from "./ui/BOTM";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center border-2 bg-black/80">
      <Header/>
      <IntroText />
      <Search placeholder="Search..." />
      <RecentlyPublishedBooks />
      <BookoftheMonth />
      <footer className="mt-18 bg-black flex flex-col sm:flex-row sm:justify-around justify-center gap-8 py-10 px-5 w-full">
        <div className="flex justify-start sm:order-2">
          <img src="../favicon.ico" alt="Logo" className="w-20 h-20"/>
        </div>
        <div className="flex flex-col sm:order-1">
           <h1 className="font-bold mb-5">Follow Us</h1>
           <h1 className="">facebook</h1>
           <h1 className="">instagram</h1>
           <h1 className="">twitter</h1>
        </div>
        <div className="flex flex-col justify-center sm:order-3">
          <h1 className="font-bold mb-5">Contact Us</h1>
          <h1 className="">bookfinder@gmail.com</h1>
          <h1 className="">Adiss Abeba, 4kilo</h1>
          <h1 className="">bookfinder | 2025.copyright</h1>
        </div>
      </footer>
    </div>
  );
}
