import Image from "next/image";
import IntroText from "@/app/ui/introText";
import Search from "@/app/ui/search";
import Link from "next/dist/client/link";
import RecentlyPublishedBooks from "./ui/recentlypub-books";
import Header from '@/app/ui/header'
import BookoftheMonth from "./ui/BOTM";
import MyShelf from "./pages/Myshelf/page";
import BookView from "./pages/BookView/[id]/page";
import Profile from "./pages/Profile/page";
import Login from '@/app/ui/login'
import SignUp from '@/app/ui/signUp'
import "@/app/globals.css"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-center items-center bg-black/20 pt-30 ">

      <IntroText />
      <Search placeholder="Search..." />
      <RecentlyPublishedBooks />
      <BookoftheMonth />

    </div>
  );
}
