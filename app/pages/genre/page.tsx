import {Book} from '../../lib/definition';
import '../../globals.css';
import { fetchBooks } from '@/app/lib/fetching-data';
import {handlee, gabarito} from "@/app/ui/fonts";
import Link from "next/link";
import {topRatedbooks} from "@/app/lib/fetching-data"
import {books, TopRatedbooks} from "@/app/lib/placeholder-data"
import Search from '../../ui/searchForPages';
import Image from 'next/image'
import Genre from './genre';
const bookGenres = ['Fantasy', 'Science ', 'Romance', 'Mystery', 'Thriller', 'Horror', 'Historical', 'Adventure', 'Literary Fiction', 'Young Adult', 'Children\'s Books', 'Contemporary Fiction', 'Graphic Novels', 'Dystopian', 'Paranormal', 'Biography & Memoir', 'Self-Help', 'Health & Wellness', 'True Crime', 'History', 'Business & Finance', 'Psychology', 'Philosophy', 'Religion & Spirituality', 'Politics', 'Travel', 'Cookbooks', 'Essays & Journalism'];

export default function Page(){
    return <Genre books={books}/>
}

