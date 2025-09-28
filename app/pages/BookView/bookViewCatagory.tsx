import "@/app/globals.css"
import Link from "next/link"
import { UserIcon, StarIcon, } from "lucide-react"
import { useState } from "react"

type Section = "description" | "author" | "reviews";


export default function BookViewCatagory(){
    const [activeDetail, setActiveDetail ] = useState<Section>("description")
    console.log(activeDetail)
    return (
        <div className="px-3 md:px-20">
            <div className="flex gap-2 xs:gap-5 py-10 border-b border-gray-600 mb-10 max-w-[600px]">
                   <div >
                        <button onClick={() => setActiveDetail("description")} className={`py-1 px-3 rounded  bg-black border ${activeDetail=='description' ? "fancyBorder": "border-gray-500 "}`} >Description</button>
                   </div>
                    <div >
                        <button onClick={() => setActiveDetail("reviews")} className={`py-1 px-3 rounded  bg-black border ${activeDetail=='reviews' ? "fancyBorder": "border-gray-500 "}`} >Reviews</button>
                   </div>
                </div>
                
            <div className={`flex-col gap-5 ${activeDetail=="reviews" ? "flex" :"hidden"}`}>
                    <h1 className="text-[20px] ">Comminuty Review</h1>
                    <p className="text-gray-600">Displaying 1&#8211;10 of 150 reviews</p>
                    <div className="flex flex-col gap-5  rounded-lg ">
                                <div className="flex flex-col gap-5 border-[0.5] rounded-lg md:max-w-[1000px]">
                                   <div className="flex p-3 gap-2  w-full xs:gap-6 ">
                                        <UserIcon className="w-[40px] h-[40px] bg-blue-500/15 text-[#0AA0A1]" />
                                        <div className="flex justify-between items-center min-h-full w-full">
                                            <div className="flex flex-col justify-start">
                                                <h1 className="text-[14px]">Jane Eyre</h1>
                                                <span className="flex">{
                                                    [...Array(5)].map((_, i) =>(
                                                        <StarIcon key={i} className="w-[20px] h-[20px]" />
                                                    ))} 
                                                </span>
                                            </div>
                                            <p className="text-[10px] ">February 4, 2025</p>
                                        </div>
                                    </div>
                                            <div className="p-3"><p className="text-[14px]">
                                                    &ldquo;&lsquo;Jane, be still; don&#39;t struggle so like a wild, frantic bird, that is rending its own plumage in its desperation.<br /><br />
                                                    I am no bird; and no net ensnares me; I am a free human being, with an independent will; which I now exert to leave you.<br /><br />
                                                    &rdquo;I am glad that in 1847 Charlotte Bront&euml; made the decision to publish her novel under a male pseudonym. Currer Bell had a much better chance of being published than Charlotte Bront&euml;, and, with reviewers and readers assuming that she was in fact a male writer, allowed the novel a chance to be weighed properly without prejudice. <em>Jane Eyre</em> became a bestseller.
                                                    </p>
                                            </div>
                            </div>
                            <div className="flex flex-col gap-5 border-[0.5] rounded-lg md:max-w-[1000px]">
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
                                                <p className="text-[14px]">
                                                    &ldquo;&lsquo;Jane, be still; don&#39;t struggle so like a wild, frantic bird, that is rending its own plumage in its desperation.<br /><br />
                                                    I am no bird; and no net ensnares me; I am a free human being, with an independent will; which I now exert to leave you.<br /><br />
                                                    &rdquo;I am glad that in 1847 Charlotte Bront&euml; made the decision to publish her novel under a male pseudonym. Currer Bell had a much better chance of being published than Charlotte Bront&euml;, and, with reviewers and readers assuming that she was in fact a male writer, allowed the novel a chance to be weighed properly without prejudice. <em>Jane Eyre</em> became a bestseller.
                                                </p>
                                </div>
                                
                            </div>
                            <div className="flex flex-col gap-5 border-[0.5] rounded-lg md:max-w-[1000px]">
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
                                                <p className="text-[14px]">
                                                    &ldquo;&lsquo;Jane, be still; don&#39;t struggle so like a wild, frantic bird, that is rending its own plumage in its desperation.<br /><br />
                                                    I am no bird; and no net ensnares me; I am a free human being, with an independent will; which I now exert to leave you.<br /><br />
                                                    &rdquo;I am glad that in 1847 Charlotte Bront&euml; made the decision to publish her novel under a male pseudonym. Currer Bell had a much better chance of being published than Charlotte Bront&euml;, and, with reviewers and readers assuming that she was in fact a male writer, allowed the novel a chance to be weighed properly without prejudice. <em>Jane Eyre</em> became a bestseller.
                                                </p>
                                </div>
                                
                            </div>
                    <div className="text-center font-gabarito">
                        <Link href="/" className="text-[14px] text-cyan-400">
                                More reviews & rating
                        </Link>
                    </div>
                    <div className="flex flex-col gap-5 ">
                    <h1 className="font-bold text-3xl text-[#0AA0A1]">Rating & Reviews</h1>
                    <form action="post" className='flex flex-col gap-4'>
                         <h1 className="">My Review</h1>
                         <textarea name="" id="" className='max-w-[300px] h-[110px] outline-[0.25] focus:outline-cyan-500 rounded-lg p-2' placeholder='your review'></textarea>
                         <button type='submit' className="fancyBorder w-fit px-6">Add review</button>
                    </form>
                </div>

                    </div>
                </div>
                <div  className={`flex-col gap-5 ${activeDetail=="description" ? "flex" :"hidden"}`}>
                   <div className="">
                     <p className="text-[16px] max-w-[800px] text-gray-500">
                        In a world teetering between memory and myth, Echoes of the Forgotten invites readers into a hauntingly beautiful landscape where time folds in on itself and truth is a fragile thread. The story follows Lira, a solitary archivist in a crumbling city where history is rewritten daily and the past is traded like currency. When she stumbles upon a forbidden manuscript that contradicts everything she’s ever known, Lira is thrust into a dangerous unraveling — one that pits her against the ruling Council and forces her to question the very nature of reality. As she journeys through hidden libraries, dreamlike ruins, and the minds of those who remember too much, the novel explores themes of identity, rebellion, and the cost of forgetting. With lyrical prose and a slow-burning intensity, the book paints a vivid portrait of a society obsessed with control and a woman determined to break free. The characters are deeply flawed yet achingly human, their relationships marked by longing, betrayal, and moments of unexpected tenderness. At its core, Echoes of the Forgotten is a meditation on memory — how it shapes us, how it can be weaponized, and how reclaiming it might be the most radical act of all. Perfect for fans of speculative fiction with emotional depth, this novel lingers long after the final page, whispering questions about who we are when our stories are no longer our own.
                     </p>
                   </div>
                   <div className="">
                     <h1 className="text-2xl text-gray-400">Table of Content</h1>
                     <div className="px-3 flex flex-col gap-5">
                        <p className=""><span className="">1</span>. The Silence Protocol</p>
                        <p className=""><span className="">2</span>. The Forgotten Name</p>
                        <p className=""><span className="">3</span>. The Mirror Room</p>
                        <p className=""><span className="">4</span>. The Archivist Rebellion</p>
                        <p className=""><span className="">5</span>. The City Beneath</p>
                        <p className=""><span className="">6</span>. The Memory War</p>
                        <p className=""><span className="">7</span>. The Archive of Ashes</p>
                     </div>
                   </div>

                </div>
        </div>
    )
}