"use client"
import { Myshelf } from "@/app/lib/shelf";
import { Book } from "@/app/lib/definition";
import { StarIcon } from "@heroicons/react/24/outline";
import  {useShelfStore}  from "@/store/shelfStore";
import { useState, useEffect } from "react";
import Link from "next/dist/client/link";


export default function MyShelf(){
    const shelf = useShelfStore((state) => state.shelf);
    const removeFromShelf = useShelfStore((state) => state.removeFromShelf);

    useEffect(() => {
  }, [shelf]);
  
    return(
        <div className="w-full  flex flex-col justify-center mx-auto ">
            <h1 className="font-bold text-2xl my-14 ml-2 sm:ml-10 text-cyan-600">My Shelf</h1>
            <div className="flex flex-col md:flex-row md:flex-wrap  gap-10 justify-center items-center w-full">

                {shelf.map((book) =>(
                    <div key={book.name} className="flex flex-col md:flex-row gap-8 max-w-[280px] px-5 py-3  md:min-w-[480px] bg-black/100 border-[0.15] border-gray-700">
                        <div className="">
                            <img src={book.cover} alt="" className="w-[90px] h-[135px] "/>
                        </div>
                        <div className="flex flex-col flex-grow-0 gap-1 w-fit">
                            <p className=""><span className="text-gray-500 mr-3">title: </span>{book.name}</p>
                            <p className=""><span className="text-gray-500 mr-3">author: </span>{book.author}</p>
                            <p className=""><span className="text-gray-500 mr-3">published: </span>{book.published}</p>
                            <span className="flex"><span className="text-gray-500 mr-3">rating: </span>{
                            [...Array(Math.round(book.rating))].map((_, i) =>(
                                <StarIcon key={i} className="w-[24px] h-[24px]" />
                            ))}</span>
                            <button className="fancyBorder rounded-lg flex-grow-0 sm:px-6 mt-3" onClick={() => removeFromShelf(book)}>Mark as read</button>
                        </div>
                    </div>
                ) )}
            </div>
        </div>
    )
}