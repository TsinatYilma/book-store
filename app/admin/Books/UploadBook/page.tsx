"use client"
import "@/app/globals.css";
import { useState } from "react";
import Image from "next/image";
import {ChevronDownIcon, PlusCircleIcon, CalendarDateRangeIcon  } from '@heroicons/react/24/outline';
import Link from "next/link";
export default function Page() {
    const [chapter, setChapter]=useState<number>(2)
    function handleAddChapter(pok:number){
      setChapter(chapter + pok)
    }
    const [language, setLanguage]=useState<string>('')
    function handleAddLanguage(lang:string){
      console.log("am the one")
      setLanguage(lang);
    }
    const [publication, setPublication]=useState<string>('')
    function handlePublication(pub:string){
      setPublication(pub);
    }
    const [genre, setGenre]=useState<string>('')
    function handleGenre(genre:string){
      console.log("no am the one")
      setGenre(genre);
    }
    //published date
    const [date, setDate] = useState('');
    const [error, setError] = useState<boolean>(true);
    function checkdate(date: string) {
        const dateRegex = /^(0?[1-9]|1[0-2])\/(0?[1-9]|[12][0-9]|3[01])\/(20\d{2})$/;
        const match = date.match(dateRegex);
        if (!match) {
            console.log("the format")
            console.log(error)
            return false;
        }
        const today = new Date();
        const year = parseInt(match[3])
        if (year > today.getFullYear()) {
            console.log("the year")
            return false;
        } else {
            return true;
        }
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target.value;
    setDate(input);
    }

    
    return(
       <div className="flex flex-col h-full px-3 py-8">
        <div className="flex flex-col h-full ">
          <h1 className="font-semibold text-2xl text-white">Basic Information</h1>
          <div className="flex gap-10 mt-8  h-fit">
                <div className="w-[120px] h-[150] bg-white flex justify-center items-center">
                    <Image src={'/upload.png'} alt="" width={20} height={20}  />
                </div>
                <form action="Post">
                    <div className="flex text-sm  gap-10 flex-col lg:flex-row">
                        <div className="flex flex-col gap-2">
                            <input type="text" placeholder="Book name" className="w-[285px] h-[30px] border-1 border-white rounded pl-3 "/>
                            <input type="text" placeholder="Authors name(separate them with comma)" className="w-[285px] h-[30px] border-1 border-white rounded pl-3 "/>
                            <input type="text" placeholder="Translation(optional)" className="w-[285px] h-[30px] border-1 border-white rounded pl-3 "/>
                            <input type="text" placeholder="How many editions are there(optional)" className="w-[285px] h-[30px] border-1 border-white rounded pl-3 "/>
                        </div>
                        <div className="min-h-full ">
                            <textarea  placeholder="Book Description" className="w-[285px] h-full border-1 border-white rounded pl-3 " />
                        </div>
                    </div>
                </form>
            </div>
       </div>
       <div className="flex flex-col h-full my-5">
          <h1 className="font-semibold text-[20px]">Catagorization & Metadata</h1>
          <div className="flex gap-10 mt-8  h-fit">
                <form action="Post">
                        <div className="grid grid-cols-2 gap-2">
                            <input type="text" placeholder="Publicher"  className="w-[285px] h-[30px] border-1 border-white rounded pl-3 "/>
                            <input type="text" placeholder="ISBN(optional)" className="w-[285px] h-[30px] border-1 border-white rounded pl-3 "/>
                            <div className="relative">
                               <input type="text" placeholder="MM/DD/YYYY" value={date} onChange={handleChange} className={`w-[285px] h-[30px] border-[1px] rounded pl-3 ${error? 'border-white':'border-red-500' } `}/>
                               <CalendarDateRangeIcon  className="absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500"  />
                            </div>
                            <div className="relative DropGenre">
                              <input type="text" placeholder="Genres" value={genre} readOnly className="w-[285px] peer h-[30px] text-sm border-1 border-white rounded pl-3 "/>
                              <ChevronDownIcon  className="absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                              <div className="GenreDropdown absolute top-[120%] border w-[285px] hidden peer-focus:flex flex-col bg-black z-10 p-3 gap-2 rounded shadow-lg">
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'classics'} className="w-3 h-3 relative  cursor-pointer">
                                          <input type="radio" id='classics'  name="genre"  className="hidden peer" onChange={()=>handleGenre("Classics")}/>
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "   />
                                        </label>
                                        <p className="text-sm">Classics</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'fiction'} className="w-3 h-3 relative  cursor-pointer">
                                          <input type="radio" id='fiction'  name="genre"  className="hidden peer" onChange={()=>handleGenre("Fiction")}/>
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "   />
                                        </label>
                                        <p className="text-sm">Fiction</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'litrature'} className="w-3 h-3 relative  cursor-pointer">
                                          <input type="radio" id='litrature'  name="genre"  className="hidden peer" onChange={()=>handleGenre("Literature")}  />
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "  />
                                        </label>
                                        <p className="text-sm">Litrature</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'thriller'} className="w-3 h-3 relative  cursor-pointer">
                                          <input type="radio" id='thriller'  name="genre"  className="hidden peer" onChange={()=>handleGenre("Thriller")} />
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "   />
                                        </label>
                                        <p className="text-sm">Thriller</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'history'} className="w-3 h-3 relative  cursor-pointer">
                                          <input type="radio" id='history'  name="genre"  className="hidden peer" onChange={()=>handleGenre("History")} />
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "  />
                                        </label>
                                        <p className="text-sm">History</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                </form>
            </div>
       </div>
       <div className="flex flex-col h-full my-5">
          <h1 className="font-semibold text-[20px]">Additional Details</h1>
          <div className="flex gap-10 mt-8  h-fit">
                <form action="Post">
                        <div className="grid grid-cols-2 gap-2">
                            <div className="relative DropLanguage">
                                <input type="text" placeholder="Languages" value={language} readOnly className="w-[285px] h-[30px] text-sm border-1 border-white rounded pl-3 peer"/>
                                <ChevronDownIcon  className=" absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                                <div className="LanguageDropdown absolute top-[120%] border w-[285px] hidden peer-focus:flex flex-col bg-black p-3 gap-2 rounded shadow-lg">
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'amh'} className="w-3 h-3 relative  cursor-pointer">
                                          <input type="radio" id='amh'  name="Language"  className="hidden peer" onChange={()=>handleAddLanguage("Amharic")}/>
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "   />
                                        </label>
                                        <p className="text-sm">Amharic</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'eng'} className="w-3 h-3 relative  cursor-pointer">
                                          <input type="radio" id='eng'  name="Language"  className="hidden peer" onChange={()=>handleAddLanguage("English")}/>
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "   />
                                        </label>
                                        <p className="text-sm">English</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'orm'} className="w-3 h-3 relative  cursor-pointer">
                                          <input type="radio" id='orm'  name="Language"  className="hidden peer" onChange={()=>handleAddLanguage("Affan Oromo")}  />
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "  />
                                        </label>
                                        <p className="text-sm">Affan Oromo</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'tig'} className="w-3 h-3 relative  cursor-pointer">
                                          <input type="radio" id='tig'  name="Language"  className="hidden peer" onChange={()=>handleAddLanguage("Tigregna")} />
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "   />
                                        </label>
                                        <p className="text-sm">Tigregna</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'arab'} className="w-3 h-3 relative  cursor-pointer">
                                          <input type="radio" id='arab'  name="Language"  className="hidden peer" onChange={()=>handleAddLanguage("Geez")} />
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "  />
                                        </label>
                                        <p className="text-sm">Geez</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative DropStatus">
                                <input type="text" placeholder="status" value={publication} readOnly className="peer w-[285px] h-[30px] text-sm border-1 border-white rounded pl-3 "/>
                                <ChevronDownIcon  className=" absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                                <div className="StatusDropdown absolute top-[120%] border w-[285px] hidden flex-col bg-black p-3 gap-2 rounded shadow-lg peer-focus:flex">
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'pub'} className="w-3 h-3 relative  cursor-pointer">
                                          <input type="radio" id='pub'  name="publication"  className="hidden peer" onChange={()=>handlePublication("Published")}/>
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 " />
                                        </label>
                                        <p className="text-sm">Published</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'tobepub'} className="w-3 h-3 relative  cursor-pointer">
                                          <input type="radio" id='tobepub'  name="publication"  className="hidden peer" onChange={()=>handlePublication("To be published")}/>
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white  peer-checked:bg-cyan-500" />
                                        </label>
                                        <p className="text-sm ">To be published</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                    
                </form>
            </div>
       </div>
       <div className="flex flex-col h-full my-5">
          <h1 className="font-semibold text-[20px]">Table of Contents</h1>
          <div className="flex flex-col gap-10 mt-8  h-fit">
                <form action="">
                        <div className="flex flex-col gap-2">
                            {[...Array(chapter)].map((index)=>(
                                 <div key={index} className="flex items-center gap-2">
                                    <input type="text" placeholder="Chapter Number" className="w-[285px] text-sm h-[30px] border-1 border-white rounded pl-3 "/>
                                    <input type="text" placeholder="Chapter Name" className="w-[285px] text-sm h-[30px] border-1 border-white rounded pl-3 "/>
                                    <p className="text-white px-2 w-fit font-semibold  border-1 border-white rounded" onClick={()=>handleAddChapter(-1)}>_</p>
                                 </div>
                                
                            ))
                            }
                        </div>
                </form>
                    <button onClick={()=>handleAddChapter(1)} className="w-fit flex border-[0.15] border-gray-300 bg-black px-2 py-1  gap-2 mt-3 rounded">
                            <PlusCircleIcon className="w-5 h-5 text-cyan-500"/>
                            <p className="text-sm">Add Chapter</p>
                        </button>
            </div>
       </div>
              <button type="submit" className="mt-6 fancyBorder max-w-full flex-grow mx-30">Submit</button>
       </div>
    )
}