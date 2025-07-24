import {Book} from '../lib/definition';
import '../globals.css';
import { fetchBooks } from '@/app/lib/fetching-data';
import {handlee, gabarito} from "@/app/ui/fonts";
import Link from "next/link";

export default async function RecentlyPublishedBooks() {
    const books = await fetchBooks()
    return (
        <div className={gabarito.className +"flex flex-col  mt-14 m-5"}>
            <h2 className="text-2xl font-bold mb-4 text-[#238E8E]">Recently Published</h2>
            <div className="flex  overflow-hidden overflow-x-auto element gap-3">
                {
                    books.map((book: Book) => (
                        <div key={book.name} className=" shadow-md shrink-0 ">
                            <div key={book.name} className="relative group shadow-md"  >
                                <img
                                    src={book.cover}
                                    alt={book.name}
                                    style={{
                                        
                                    }}
                                    className="border-2 border-transparent fancyBorder w-full h-[350px] object-cover mb-2"
                                />
                            <div  className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center flex-col gap-5 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="flex flex-col gap-2 items-center mb-10">
                                    <img src="../../favorite.png" alt="" className='w-10 h-10' />
                                    <span className="text-md font-bold">{book.rating} / 5</span>
                                </span>
                                <p className="font-bold">{book.category}</p>
                                <Link href='./' className='rounded-lg'><button style={{
                                     borderWidth: '2px',
                                     borderStyle: 'solid',
                                     borderColor: 'transparent',
                                     borderImage: 'linear-gradient(to right, #238E8E 0%, #FFFFFF 30%, #FFFFFF 70%, #238E8E 100%)',
                                     borderImageSlice: '1',
                                     borderRadius: '8px',
                                }} className='rounded-lg bg-black pl-10 pr-8 p-2'>View Detail</button></Link>
                            </div>
                        </div>
                            
                            <h3 className="text-md font-bold">{book.name}</h3>
                            <p className="text-[13px] text-grey-300">by <span className={handlee.className + 'text-[#238E8E] '}>{book.author}</span> </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )}