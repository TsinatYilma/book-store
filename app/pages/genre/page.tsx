import {Book} from '../../lib/definition';
import '../../globals.css';
import { fetchBooks } from '@/app/lib/fetching-data';
import {handlee, gabarito} from "@/app/ui/fonts";
import Link from "next/link";
import {books, topRatedbooks} from "@/app/lib/fetching-data"
import Search from '../../ui/searchForPages';
const bookGenres = ['Fantasy', 'Science ', 'Romance', 'Mystery', 'Thriller', 'Horror', 'Historical', 'Adventure', 'Literary Fiction', 'Young Adult', 'Children\'s Books', 'Contemporary Fiction', 'Graphic Novels', 'Dystopian', 'Paranormal', 'Biography & Memoir', 'Self-Help', 'Health & Wellness', 'True Crime', 'History', 'Business & Finance', 'Psychology', 'Philosophy', 'Religion & Spirituality', 'Politics', 'Travel', 'Cookbooks', 'Essays & Journalism'];

export default function Genre(){
    return (
        <div className="w-fit mx-auto mt-5">
            <h2 className="text-2xl font-bold mt-8 mx-6 text-[#238E8E] ">Genres</h2>
            <div className="flex flex-col lg:flex-row lg:justify-around lg:gap-8 w-full p-4 sm:w-fit">
            <div className={gabarito.className +"flex flex-col w-full lg:w-fit"}>
                <Search placeholder="Search..." />
                <Category category='Fiction'/>
                <Category category='History'/>
                <Category category='Family'/>
           </div>
           <div className="w-fit mt-8 lg:mt-0">
             <h1 className="font-bold border-b-2 border-gray-600 pb-4 mb-4 lg:mb-1">Browse</h1>
             <div className="grid gap-2 grid-cols-2 lg:grid-cols-3 lg:mt-4 h-fit w-fit mr-auto px-4 mt-8">
               {bookGenres.map((book: string) => (
                     <Link key={book} href={book}><p className="text-cyan-400 text-[12px]">{book}</p></Link>
               ))}
             </div>
           </div>
        </div>
        </div>
        
    )
}

function Category({category}:{category:string}){
    return (
        <div className="flex flex-col ">
                    <h1 className="font-bold my-5 mt-6">{category}</h1>
                    <div className="flex flex-wrap justify-start items-center gap-4 max-h-[566px] max-w-[600px] overflow-hidden overflow-y-auto no-scrollbar md:overflow-y-hidden  md:flex-nowrap md:overflow-x-auto  md:mx-5">
                {
                    books.map((book: Book, index: number) => (
                        index <= 7 && <div key={book.name} className=" shadow-md shrink-0 w-[120px] h-[200px] ">
                            <div key={book.name} className="relative group shadow-md fancyorHover"  >
                                <img
                                    src={book.cover}
                                    alt={book.name}
                                    className="w-full h-[184px] object-cover"
                                />
                            <div  className="absolute inset-0 bg-black/60 flex  items-center justify-center flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="w-full flex sm:flex-col gap-3 justify-center items-center mb-6 sm:mb-10 ">
                                    <img src="../../../favorite.png" alt="" className='w-7 h-7 sm:w-10 sm:h-10' />
                                    <span className="text-[12px] text-md pt-1 sm:pt-0 sm:text-md font-bold">{book.rating} / 5</span>
                                </span>
                                <p className="text-[14px] sm:text-lg font-bold mb-3">{book.category}</p>
                                <Link href='./' className='rounded-lg'><button className='fancyrounded-lg bg-black text-[12px] text-md py-0.5 px-2 sm:py-2 sm:px-10 '>View Detail</button></Link>
                            </div>
                         </div>
                         
                            
                        </div>
                    ))
                }
                    </div>
            <div className=''>
              <Link href={`./category/${category}`} className=''><p className="ml-auto w-fit text-cyan-600">More...</p></Link>
            </div>
        </div>
    )
}