import '@/app/globals.css'
import { useState } from 'react';
import { ChevronDownIcon, MagnifyingGlassIcon, CalendarDateRangeIcon } from '@heroicons/react/24/outline'

export default function Filter({ filterVisible }: { filterVisible: boolean }) {
    const [GenreDropdown, setGenreDropdown] = useState(false);
    const [StatusDropdown, setStatusDropdown] = useState(false);
    const [RatingDropdown, setRatingDropdown] = useState(false);
    const [publicationdateDropdown, setPublicationDateDropdown] = useState(false);
    function handleDropdown(type:string){
        switch(type){
            case 'genre':
                setGenreDropdown(!GenreDropdown);
                console.log("its not me");
                break;
            case 'status':
                setStatusDropdown(!StatusDropdown);
                break;
            case 'rating':
                setRatingDropdown(!RatingDropdown);
                break;
            case 'publicationdate':
                setPublicationDateDropdown(!publicationdateDropdown);
                break;
        }
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
        <div className={` absolute top-[120%] -left-1/2  w-[200px]  flex-col bg-black border-[0.15px] border-gray-700 z-10 p-3 gap-2 rounded shadow-lg ${filterVisible ? 'flex' : 'hidden'}`}>
                    <div className="relative flex flex-col justify-between  border-[0.25] border-gray-400 rounded">
                        <div className="flex justify-between relative w-full">
                            <h1 className="text-gray-200 text-sm p-1">Genres</h1>
                            <ChevronDownIcon  className={`absolute right-3 top-1/2 z-20  h-[18px] w-[18px] -translate-y-1/2 text-gray-500 ${GenreDropdown ? 'rotate-180' : ''}`} onClick={() => handleDropdown('genre')} />
                        </div>
                        <div className={`GenreDropdown  top-[120%] left-0 right-0 peer-focus:flex flex-col bg-black z-10 p-3 gap-2 rounded shadow-lg ${GenreDropdown ? 'flex' : 'hidden'}`}>
                                    <div className="relative">
                                        <input
                                        className="block rounded-md py-[4px] sm:py-[6px] pl-8 text-sm  placeholder:text-gray-500 w-full h-full outline-[0.25px] outline-gray-300   bg-transparent"
                                        placeholder={"search genre"}
                                        //defaultValue={searchParams.get('query')?.toString()}
                                    />
                                    <MagnifyingGlassIcon className="absolute left-1  top-1/2 `h-[18px] w-[18px] -translate-y-1/2 text-white-500" />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'classics'} className="w-3 h-3 relative  cursor-pointer">
                                          <input type="radio" id='classics'  name="genre"  className="hidden peer" />
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "   />
                                        </label>
                                        <p className="text-sm">Art</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'fiction'} className="w-3 h-3 relative  cursor-pointer">
                                          <input type="radio" id='fiction'  name="genre"  className="hidden peer" />
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "   />
                                        </label>
                                        <p className="text-sm">Fiction</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'thriller'} className="w-3 h-3 relative  cursor-pointer">
                                          <input type="radio" id='thriller'  name="genre"  className="hidden peer" />
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "   />
                                        </label>
                                        <p className="text-sm">Thriller</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'history'} className="w-3 h-3 relative  cursor-pointer">
                                          <input type="radio" id='history'  name="genre"  className="hidden peer"  />
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "  />
                                        </label>
                                        <p className="text-sm">History</p>
                                    </div>
                                </div>
                    </div>
                    <div className="relative flex flex-col justify-between  border-[0.25] border-gray-400 rounded">
                        <div className="flex justify-between relative w-full">
                            <h1 className="text-gray-200 text-sm p-1">Status</h1>
                            <ChevronDownIcon  className={`absolute right-3 top-1/2 z-20  h-[18px] w-[18px] -translate-y-1/2 text-gray-500 ${StatusDropdown ? 'rotate-180' : ''}`} onClick={() => handleDropdown('status')} />
                        </div>
                        <div className={`GenreDropdown  top-[120%] left-0 right-0 peer-focus:flex flex-col bg-black z-10 p-3 gap-2 rounded shadow-lg ${StatusDropdown ? 'flex' : 'hidden'}`}>
                                    
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'published'} className="w-3 h-3 relative  cursor-pointer">
                                          <input type="radio" id='published'  name="pub"  className="hidden peer" />
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "   />
                                        </label>
                                        <p className="text-sm">published</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'to be published'} className="w-3 h-3 relative  cursor-pointer">
                                          <input type="radio" id='to be published'  name="pub"  className="hidden peer" />
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "   />
                                        </label>
                                        <p className="text-sm">to be published</p>
                                    </div>
                                </div>
                    </div>
                    <div className="relative flex flex-col justify-between  border-[0.25] border-gray-400 rounded">
                        <div className="flex justify-between relative w-full">
                            <h1 className="text-gray-200 text-sm p-1">Rating</h1>
                            <ChevronDownIcon  className={`absolute right-3 top-1/2 z-20  h-[18px] w-[18px] -translate-y-1/2 text-gray-500 ${RatingDropdown ? 'rotate-180' : ''}`} onClick={() => handleDropdown('rating')} />
                        </div>
                        <div className={`GenreDropdown  top-[120%] left-0 right-0 peer-focus:flex flex-col bg-black z-10 p-3 gap-2 rounded shadow-lg ${RatingDropdown ? 'flex' : 'hidden'}`}>
                                    
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'4 and above'} className="w-3 h-3 relative  cursor-pointer">
                                          <input type="radio" id='4 and above'  name="stars"  className="hidden peer" />
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "   />
                                        </label>
                                        <p className="text-sm">4 and above</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'3 and above'} className="w-3 h-3 relative  cursor-pointer">
                                          <input type="radio" id='3 and above'  name="stars"  className="hidden peer" />
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "   />
                                        </label>
                                        <p className="text-sm">3 and above</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'2 and above'} className="w-3 h-3 relative  cursor-pointer">
                                          <input type="radio" id='2 and above'  name="stars"  className="hidden peer" />
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "   />
                                        </label>
                                        <p className="text-sm">2 and above</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'5 stars'} className="w-3 h-3 relative  cursor-pointer">
                                          <input type="radio" id='5 stars'  name="stars"  className="hidden peer"  />
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "  />
                                        </label>
                                        <p className="text-sm">5 stars</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'4 stars'} className="w-3 h-3 relative  cursor-pointer">
                                          <input type="radio" id='4 stars'  name="stars"  className="hidden peer"  />
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "  />
                                        </label>
                                        <p className="text-sm">4 stars</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'3 stars'} className="w-3 h-3 relative  cursor-pointer">
                                          <input type="radio" id='3 stars'  name="stars"  className="hidden peer"  />
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "  />
                                        </label>
                                        <p className="text-sm">3 stars</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'2 stars'} className="w-3 h-3 relative  cursor-pointer">
                                          <input type="radio" id='2 stars'  name="stars"  className="hidden peer"  />
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "  />
                                        </label>
                                        <p className="text-sm">2 stars</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'1 stars'} className="w-3 h-3 relative  cursor-pointer">
                                          <input type="radio" id='1 stars'  name="stars"  className="hidden peer"  />
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "  />
                                        </label>
                                        <p className="text-sm">1 stars</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'0 stars'} className="w-3 h-3 relative  cursor-pointer">
                                          <input type="radio" id='0 stars'  name="stars"  className="hidden peer"  />
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "  />
                                        </label>
                                        <p className="text-sm">0 stars</p>
                                    </div>
                                </div>
                    </div>
                    <div className="relative flex flex-col justify-between  border-[0.25] border-gray-400 rounded">
                        <div className="flex justify-between relative w-full">
                            <h1 className="text-gray-200 text-sm p-1">Publication Date</h1>
                            <ChevronDownIcon  className={`absolute right-3 top-1/2 z-20  h-[18px] w-[18px] -translate-y-1/2 text-gray-500 ${StatusDropdown ? 'rotate-180' : ''}`} onClick={() => handleDropdown('status')} />
                        </div>
                        <div className={`GenreDropdown  top-[120%] left-0 right-0 peer-focus:flex flex-col bg-black py-3 px-1 z-10 gap-2 rounded shadow-lg ${StatusDropdown ? 'flex' : 'hidden'}`}>
                                    
                                    <div className="flex items-center">
                                        <div className="flex justify-between w-full">
                                            <p className="text-sm">From:</p>
                                            <div className="relative w-[120px]">
                                                <input type="text" placeholder="MM/DD/YYYY" value={date} onChange={handleChange} className={`w-[120px] h-full text-[12px] border-[0.25px] rounded pl-1 ${error? 'border-white':'border-red-500' } `}/>
                                                <CalendarDateRangeIcon  className="absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500"  />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center ">
                                         <div className="flex text-center justify-between w-full">
                                            <p className="text-sm ">To:</p>
                                            <div className="relative w-[120px] mr-0 ">
                                                <input type="text" placeholder="MM/DD/YYYY" value={date} onChange={handleChange} className={`w-full h-full text-[12px] border-[0.25px] rounded pl-1 ${error? 'border-white':'border-red-500' } `}/>
                                                <CalendarDateRangeIcon  className="absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500"  />
                                            </div>
                                        </div>
                                    </div>
                        </div>
                    </div>
                </div>
    )
}