import '@/app/globals.css'
import { StarIcon, UserIcon } from '@heroicons/react/24/outline'
import {Myshelf} from '@/app/lib/shelf' 
import Image from 'next/image'

export default function BookView(){
    return (
        <div className="flex border-8 flex-col min-h-screen md:flex-row mt-10  xs:max-w-[500px] xs:mx-auto sm:max-w-[650px] md:max-w-full md:mx-5 ">
            <div className="flex p-3 gap-2  w-full xs:gap-6 md:flex-col  md:items-center ">
                <Image src={Myshelf[1].cover} alt="" width={120} height={200} className="w-[120px] h-[200px] md:w-[220px] md:h-[320px] " />
                <div className="flex flex-col gap-2 min-h-full md:items-center">
                    <span className="flex order-2">{
                            [...Array(Math.round(5))].map((_, i) =>(
                                <StarIcon key={i} className="w-[24px] h-[24px]" />
                            ))} 
                    </span>
                    <p className="text-[12px] order-3">Rated.Write Review</p>
                    <div className="gap-4 w-fit order-1">
                        <button className="fancyBorder w-full mb-4 py-1">Add to shelf</button>
                        <button className="fancyBorder w-full py-1">Mark as read</button>
                    </div>

                </div>
            </div>
            <div className="flex flex-col font-gantari p-3 gap-8 ">
                <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-3 ">
                            <h1 className="font-semibold text-3xl text-cyan-700 ">Jane Eyre</h1>
                            <p className="text-lg">Charlotte Bronte</p>
                            <span className="flex gap-3">
                                    <span className="flex">
                                    { [...Array(Math.round(5))].map((_, i) =>(
                                            <StarIcon key={i} className="w-[24px] h-[24px]"/>
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
                                <p className="text-[16px] flex gap-3"><span className="text-gray-600">Genre</span><span className="font-bold ">Fiction classic Gothic</span></p>
                                
                            </div>
                        </div>
                </div>
                <div className="flex flex-col gap-5 ">
                    <h1 className="font-bold text-3xl text-[#0AA0A1]">Rating & Reviews</h1>
                    <form action="post" className='flex flex-col gap-4'>
                         <h1 className="">My Review</h1>
                         <textarea name="" id="" className='max-w-[300px] h-[110px] outline-[0.25] focus:outline-cyan-500 rounded-lg p-2' placeholder='your review'></textarea>
                         <button type='submit' className="fancyBorder w-fit px-6">Add review</button>
                    </form>
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="text-[20px] ">Comminuty Review</h1>
                    <p className="text-gray-600">Displaying 1-10 of 150 reviews</p>
                    <div className="flex flex-col gap-5  rounded-lg">
                                <div className="flex flex-col gap-5 border-[0.5] rounded-lg">
                                   <div className="flex p-3 gap-2  w-full xs:gap-6 ">
                                        <UserIcon className="w-[40px] h-[40px] bg-blue-500/15 text-[#0AA0A1]" />
                                        <div className="flex justify-between items-center min-h-full w-full">
                                            <div className="flex flex-col justify-start">
                                                <h1 className="text-[14px]">Jane Eyre</h1>
                                                <span className="flex">{
                                                    [...Array(Math.round(5))].map((_, i) =>(
                                                        <StarIcon key={i} className="w-[20px] h-[20px]" />
                                                    ))} 
                                                </span>
                                            </div>
                                            <p className="text-[10px] ">February 4, 2025</p>
                                        </div>
                                    </div>
                                
                            
                                            <div className="p-3">
                                                <p className="text-[14px] ">“‘Jane, be still; don't struggle so like a wild, frantic bird, that is rending its own plumage in its desperation. <br /><br />I am no bird; and no net ensnares me; I am a free human being, with an independent will; which I now exert to leave you. <br /> <br />”I am glad that in 1847 Charlotte Bronte made the decision to publish her novel under a male pseudonym. Currer Bell had a much better chance of being published than Charlotte Bronte and, with reviewers and readers assuming that she was in fact a male writer, allowed the novel a chance to be weighed properly without prejudice. Jane Eyre became a bestseller.</p>
                                            </div>
                            </div>
                            <div className="flex flex-col gap-5 border-[0.5] rounded-lg">
                                <div className="flex p-3 gap-2  w-full xs:gap-6 ">
                                        <UserIcon className="w-[40px] h-[40px] bg-blue-500/15 text-[#0AA0A1]" />
                                        <div className="flex justify-between items-center min-h-full w-full">
                                            <div className="flex flex-col justify-start">
                                                <h1 className="text-[14px]">Jane Eyre</h1>
                                                <span className="flex">{
                                                    [...Array(Math.round(5))].map((_, i) =>(
                                                        <StarIcon key={i} className="w-[20px] h-[20px]" />
                                                    ))} 
                                                </span>
                                            </div>
                                            <p className="text-[10px] ">February 4, 2025</p>
                                        </div>
                                    </div>
                                
                            
                                            <div className="p-3">
                                                <p className="text-[14px] ">“‘Jane, be still; don't struggle so like a wild, frantic bird, that is rending its own plumage in its desperation. <br /><br />I am no bird; and no net ensnares me; I am a free human being, with an independent will; which I now exert to leave you. <br /> <br />”I am glad that in 1847 Charlotte Bronte made the decision to publish her novel under a male pseudonym. Currer Bell had a much better chance of being published than Charlotte Bronte and, with reviewers and readers assuming that she was in fact a male writer, allowed the novel a chance to be weighed properly without prejudice. Jane Eyre became a bestseller.</p>
                                            </div>
                    </div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}