"use client"
import '@/app/globals.css'
import { StarIcon, UserIcon } from '@heroicons/react/24/outline'
import {Book} from '@/app/lib/definition'
import Link from "next/dist/client/link"
import BookCard from './bookCard'
import Myshelf  from '../Myshelf/page'
import { useShelfStore } from '@/store/shelfStore'
import StarRating from './starRating'
import Image from 'next/image'
import BookViewCatagory from './bookViewCatagory'

export default function BookView({book}: {book: Book}){
    const addToShelf = useShelfStore((state) => state.addToShelf);
    return (
         <div className="flex flex-col gap-10">
             <div className="flex  flex-col md:flex-row mt-10  xs:max-w-[500px] xs:mx-auto sm:max-w-[650px] md:max-w-full  md:mx-5  ">
                <div className="flex p-3 gap-2 w-full xs:gap-6 md:flex-col md:max-w-[500px]  md:items-center md:left-10  ">
                    <img src={book.cover} alt="" width={120} height={200} className="w-[120px] h-[200px] md:w-[220px] md:h-[320px] " />
                    <div className="flex flex-col gap-2 min-h-full md:items-center">
                        <span className="flex order-2">
                            <StarRating />
                        </span>
                        <p className="text-[12px] order-3 typeWritterEffect  ">Rate the Book</p>
                        <div className="gap-4 w-fit order-1">
                            <button className="fancyBorder w-full mb-4 py-1" onClick={() =>{ console.log('Adding book:', book); addToShelf(book) }}>Add to shelf</button>
                            <button className="fancyBorder w-full py-1">Mark as read</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col font-gantari p-3 gap-8  md:max-w-[800px]">
                    <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-3 ">
                                <h1 className="font-semibold text-3xl text-cyan-700 ">{book.name}</h1>
                                <p className="text-lg">{book.author}</p>
                                <span className="flex gap-3">
                                        <span className="flex">
                                        { [...Array(5)].map((_, i) =>(
                                                <StarIcon key={i} className="w-[24px] h-[24px]"/>
                                            ))}
                                        </span> <span className="font-bold">{book.rating}</span>
                                    <span className="flex sm:flex-col w-fit text-[7px] lg:text-[12px]">
                                        <p className="text-gray-500">200 ratings</p>
                                        <p className="text-gray-500">120 reviews</p>
                                    </span>
                                </span>
                            </div>
                            <div className="flex flex-col gap-8">
                                <div className=""><p className="text-[16px] text-gray-400">
                                    A gothic masterpiece of tempestuous passions and dark secrets, Charlotte Bronte&apos;s <em>Jane Eyre</em> is edited with an introduction and notes by Stevie Davis in Penguin Classics.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <p className="text-[16px] flex gap-3"><span className="text-gray-600">First Published</span><span className="font-bold">{book.published}</span></p>
                                    <p className="text-[16px] flex gap-3"><span className="text-gray-600">Publisher</span><span className="font-bold">Penguin Classics</span></p>
                                    <p className="text-[16px] flex gap-3"><span className="text-gray-600">Genre</span><span className="font-bold ">{book.category}</span></p>
             
                                </div>
                            </div>
                    </div>
             
                </div>
             </div>
             <BookViewCatagory/>
         </div>
    )
}
