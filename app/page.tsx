"use client";
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
import Script from 'next/script';
import Providers from './queryProvider'
import { useRouter, useSearchParams } from "next/navigation";
import { useSearchBooks } from "@/app/hooks/useSearchBooks";
import SearchResults  from "./ui/searchResult"

export default function Home() {

  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";

  

  return (
    <div className="flex flex-col min-h-screen bg-black/20">
      <IntroText />
      <Search placeholder="Search..."  />

      <main className="flex-grow">
        {q ? (
          <SearchResults query={q} />
        ) : (
          <>
            <RecentlyPublishedBooks />
            <BookoftheMonth />
          </>
        )}
      </main>
    </div>
  );
}
