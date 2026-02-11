<<<<<<< HEAD
import {Book} from '../../lib/definition';
import '../../globals.css';
import { fetchBooks } from '@/app/lib/fetching-data';
import {handlee, gabarito} from "@/app/ui/fonts";
import Link from "next/link";
import {topRatedbooks} from "@/app/lib/fetching-data"
import {books, TopRatedbooks} from "@/app/lib/placeholder-data"
=======
import { Book } from '../../lib/definition';
import '../../globals.css';
import { fetchBooks } from '@/app/lib/API_Calls/fetching-data';
import { handlee, gabarito } from "@/app/ui/fonts";
import Link from "next/link";
import { topRatedbooks } from "@/app/lib/API_Calls/fetching-data"
import { books, TopRatedbooks } from "@/app/lib/placeholder-data"
>>>>>>> 528e1d9 (yeserashen yestesh)
import Search from '../../ui/searchForPages';
import Image from 'next/image'
import Genre from './genre';
const bookGenres = ['Fantasy', 'Science ', 'Romance', 'Mystery', 'Thriller', 'Horror', 'Historical', 'Adventure', 'Literary Fiction', 'Young Adult', 'Children\'s Books', 'Contemporary Fiction', 'Graphic Novels', 'Dystopian', 'Paranormal', 'Biography & Memoir', 'Self-Help', 'Health & Wellness', 'True Crime', 'History', 'Business & Finance', 'Psychology', 'Philosophy', 'Religion & Spirituality', 'Politics', 'Travel', 'Cookbooks', 'Essays & Journalism'];

<<<<<<< HEAD
export default function Page(){
    return <Genre books={books}/>
=======
export default function Page() {
    return <Genre books={books} />
>>>>>>> 528e1d9 (yeserashen yestesh)
}

