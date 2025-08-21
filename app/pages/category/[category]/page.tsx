
import {Book} from '@/app/lib/definition';
import '@/app/globals.css';
import {topRatedbooks} from "@/app/lib/fetching-data"
import {books, TopRatedbooks} from "@/app/lib/placeholder-data"
import {handlee, gabarito} from "@/app/ui/fonts";
import Link from "next/link";
//to make it reusable for all catagories 
const bookGenres = ['Fantasy', 'Science ', 'Romance', 'Mystery', 'Thriller', 'Horror', 'Historical', 'Adventure', 'Literary Fiction', 'Young Adult', 'Children\'s Books', 'Contemporary Fiction', 'Graphic Novels', 'Dystopian', 'Paranormal', 'Biography & Memoir', 'Self-Help', 'Health & Wellness', 'True Crime', 'History', 'Business & Finance', 'Psychology', 'Philosophy', 'Religion & Spirituality', 'Politics', 'Travel', 'Cookbooks', 'Essays & Journalism'];
interface Props {
  params: { category: string };
}

export default function BookCategory({ params }: Props) {
    const { category } = params;
    console.log("Category:", category);
    return (
        <div className="w-fit mx-auto mt-5">
            <h2 className="text-2xl font-bold mt-8 mx-6 text-[#238E8E] ">Genres</h2>
            <div className="flex flex-col lg:flex-row lg:justify-around lg:gap-8 w-full p-4 sm:w-fit">
            <div className={gabarito.className +"flex flex-col w-full lg:w-fit"}>
                <h1 className="font-bold">{category}</h1>
                <p className="text-[12px] max-w-[600px]">Fiction is imaginative writing that creates characters, places, and events that aren’t real but feel meaningful. It gives authors the freedom to explore emotions, ideas, and experiences in creative ways. Through stories, fiction helps readers escape into new worlds, reflect on real-life issues, and see different perspectives—even when everything in the plot is made up. It’s not just entertainment; it’s a way to understand ourselves and others more deeply</p>
                <p className="text-[12px] font-bold my-3 ">Released tagged `${category}`</p>
                <Catagory category={category ?? "category"}/>
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

function Catagory({category}:{category:string}){
    console.log("Category:", category);
    return (
        <div className="flex flex-wrap justify-start items-center gap-4 max-h-[566px] max-w-[600px] overflow-hidden overflow-y-auto no-scrollbar md:overflow-y-hidden  md:flex-nowrap md:overflow-x-auto  md:mx-5">
                {
                    TopRatedbooks.filter((book: Book) => book.category === category).map((book: Book) => (
                        <div key={book.id} className=" shadow-md shrink-0 w-[120px] h-[200px] ">
                            <div className="relative group shadow-md hover:fancyBorder"  >
                                    <img
                                        src={book.cover}
                                        alt={book.name}
                                        className="w-full h-[184px] object-cover"
                                    />
                                <div  className="absolute inset-0 bg-black/60 flex  items-center justify-center flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="w-full flex flex-col gap-3 justify-center items-center mb-6  ">
                                        <img src="../../../../../favorite.png" alt="" className='w-7 h-7 ' />
                                        <span className="text-[12px] text-md pt-1 font-bold">{book.rating} / 5</span>
                                    </span>
                                    <p className="text-[14px]  font-bold mb-3">{book.category}</p>
                                    <Link href={`../BookView/${book.id}`} className='rounded-lg'><button className='fancyBorder rounded-lg bg-black text-[12px] text-md py-0.5 px-2 '>View Detail</button></Link>
                                </div>
                            </div>
                         
                            
                        </div>
                    ))
                }
        </div>
    )
}