import '@/app/globals.css'
import { StarIcon } from '@heroicons/react/24/outline'
import {Myshelf} from '@/app/lib/shelf' 

export default function BookView(){
    return (
        <div className="flex flex-col mt-10">
            <div className="flex p-3 gap-2  w-full xs:gap-6">
                <img src={Myshelf[1].cover} alt="" className="w-[120px] h-[200px] " />
                <div className="flex flex-col gap-2 min-h-full ">
                    <span className="flex">{
                            [...Array(Math.round(5))].map((_, i) =>(
                                <StarIcon key={i} className="w-[24px] h-[24px]" />
                            ))} 
                    </span>
                    <p className="text-[12px] ">Rated.Write Review</p>
                    <div className="gap-4">
                        <button className="fancyBorder w-full mb-4 py-1">Add to shelf</button>
                        <button className="fancyBorder w-full py-1">Mark as read</button>
                    </div>

                </div>
            </div>
            <div className="flex flex-col font-gantari p-3 gap-8">
                <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-3">
                            <h1 className="font-semibold text-3xl text-cyan-700 ">Jane Eyre</h1>
                            <p className="text-lg">Charlotte Bronte</p>
                            <span className="flex gap-3">
                                    <span className="flex">
                                    { [...Array(Math.round(Myshelf[1].rating))].map((_, i) =>(
                                            <StarIcon key={i} className="w-[24px] h-[24px]" />
                                        ))}
                                    </span> <span className="font-bold">{Myshelf[1].rating}</span>
                                <span className="flex sm:flex-col w-fit text-[7px]">
                                    <p className="text-gray-500">200 ratings</p>
                                    <p className="text-gray-500">120 reviews</p>
                                </span>
                            </span>
                        </div>
                        <div className="flex flex-col gap-8">
                            <div className="">
                                <p className="text-[16px] text-gray-400">A gothic masterpiece of tempestuous passions and dark secrets, Charlotte Brontë's Jane Eyre is edited with an introduction and notes by Stevie Davis in Penguin Classics.</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="text-[16px] flex gap-3"><span className="text-gray-600">First Published</span><span className="font-bold">October 18</span></p>
                                <p className="text-[16px] flex gap-3"><span className="text-gray-600">Publisher</span><span className="font-bold">Penguin Classics</span></p>
                                <p className="text-[16px] flex gap-3"><span className="text-gray-600">Genre</span><span className="font-bold">Fiction classic Gothic</span></p>
                                
                            </div>
                        </div>
                </div>
                <div className="flex flex-col gap-5 ">
                    <h1 className="font-bold text-3xl text-[#0AA0A1]">Rating & Reviews</h1>
                    <form action="post" className='flex flex-col gap-4'>
                         <h1 className="">My Review</h1>
                         <textarea name="" id="" className='max-w-[300px] h-[110px] border-[0.25] rounded-lg p-2' placeholder='your review'></textarea>
                         <button type='submit' className="fancyBorder w-fit px-6">Add review</button>
                    </form>
                </div>
                <div className=""></div>
            </div>
        </div>
    )
}