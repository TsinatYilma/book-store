import '@/app/globals.css'
import { useState } from 'react';
import { ChevronDownIcon, MagnifyingGlassIcon, CalendarDateRangeIcon } from '@heroicons/react/24/outline'

export default function GenresFilter({ filterVisible }: { filterVisible: boolean }) {
    const [BooksCountDropdown, setBooksCountDropdown] = useState(false);
    const [CreationDateDropdown, setCreationDateDropdown] = useState(false);
    function handleDropdown(type:string){
        switch(type){
            case 'role':
                setBooksCountDropdown(!BooksCountDropdown);
                console.log("its not me");
                break;
            case 'status':
                setCreationDateDropdown(!CreationDateDropdown);
                break;
        }
    }
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
                        <div className="flex justify-between relative w-full p-1">
                            <h1 className="text-gray-200 text-sm">Book Count</h1>
                            <ChevronDownIcon  className={`absolute right-3 top-1/2 z-20  h-[18px] w-[18px] -translate-y-1/2 text-gray-500 ${BooksCountDropdown ? 'rotate-180' : ''}`} onClick={() => handleDropdown('status')} />
                        </div>
                        <div className={`StatusDropdown  top-[120%] left-0 right-0 peer-focus:flex flex-col bg-black z-10 p-3 gap-2 rounded shadow-lg ${BooksCountDropdown ? 'flex' : 'hidden'}`}>
                                   
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'0books'} className="w-3 h-3 relative  cursor-pointer">
                                          <input type="radio" id='0books'  name="bookcount"  className="hidden peer" />
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "   />
                                        </label>
                                        <p className="text-sm">Genre with 0 books</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'>10'} className="w-3 h-3 relative  cursor-pointer">
                                          <input type="radio" id='>10'  name="bookcount"  className="hidden peer" />
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "   />
                                        </label>
                                        <p className="text-sm">Genre with `{`>`}` 10 books</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'to be published'} className="w-3 h-3 relative  cursor-pointer">
                                          <input type="radio" id='to be published'  name="bookcount"  className="hidden peer" />
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "   />
                                        </label>
                                        <p className="text-sm">Genre with `{`>`}` 10 books</p>
                                    </div>
                                </div>
                    </div>
                    <div className="relative flex flex-col justify-between  border-[0.25] border-gray-400 rounded">
                        <div className="flex justify-between relative w-full">
                            <h1 className="text-gray-200 text-sm p-1">Creation Date</h1>
                            <ChevronDownIcon  className={`absolute right-3 top-1/2 z-20  h-[18px] w-[18px] -translate-y-1/2 text-gray-500 ${CreationDateDropdown ? 'rotate-180' : ''}`} onClick={() => handleDropdown('role')} />
                        </div>
                        <div className={`GenreDropdown  top-[120%] left-0 right-0 peer-focus:flex flex-col bg-black py-3 px-1 z-10 gap-2 rounded shadow-lg ${CreationDateDropdown ? 'flex' : 'hidden'}`}>
                                    
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