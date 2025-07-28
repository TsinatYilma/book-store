import Image from "next/image";
import IntroText from "@/app/ui/introText";
import Search from "@/app/ui/search";
import Link from "next/dist/client/link";
import RecentlyPublishedBooks from "./ui/recentlypub-books";
import Header from '@/app/ui/header'


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center border-2">
      <Header/>
      <IntroText />
      <Search placeholder="Search..." />
      <RecentlyPublishedBooks />
      <footer className="">
        
      </footer>
    </div>
  );
}
