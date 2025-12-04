import '@/app/globals.css'
import { useState } from 'react';
import { ChevronDownIcon, MagnifyingGlassIcon, CalendarDateRangeIcon } from '@heroicons/react/24/outline'

export default function UserFilter({ filterVisible }: { filterVisible: boolean }) {
    const [RoleDropdown, setRoleDropdown] = useState(false);
    const [StatusDropdown, setStatusDropdown] = useState(false);
    function handleDropdown(type:string){
        switch(type){
            case 'role':
                setRoleDropdown(!RoleDropdown);
                console.log("its not me");
                break;
            case 'status':
                setStatusDropdown(!StatusDropdown);
                break;
        }
    }
    return(
        <div className={` absolute top-[120%] -left-1/2  w-[200px]  flex-col bg-black border-[0.15px] border-gray-700 z-10 p-3 gap-2 rounded shadow-lg ${filterVisible ? 'flex' : 'hidden'}`}>
                    <div className="relative flex flex-col justify-between  border-[0.25] border-gray-400 rounded">
                        <div className="flex justify-between relative w-full p-1">
                            <h1 className="text-gray-200 text-sm">Status</h1>
                            <ChevronDownIcon  className={`absolute right-3 top-1/2 z-20  h-[18px] w-[18px] -translate-y-1/2 text-gray-500 ${StatusDropdown ? 'rotate-180' : ''}`} onClick={() => handleDropdown('status')} />
                        </div>
                        <div className={`StatusDropdown  top-[120%] left-0 right-0 peer-focus:flex flex-col bg-black z-10 p-3 gap-2 rounded shadow-lg ${StatusDropdown ? 'flex' : 'hidden'}`}>
                                   
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'published'} className="w-3 h-3 relative  cursor-pointer">
                                          <input type="radio" id='published'  name="status"  className="hidden peer" />
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "   />
                                        </label>
                                        <p className="text-sm">published</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'to be published'} className="w-3 h-3 relative  cursor-pointer">
                                          <input type="radio" id='to be published'  name="status"  className="hidden peer" />
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "   />
                                        </label>
                                        <p className="text-sm">to be published</p>
                                    </div>
                                </div>
                    </div>
                    <div className="relative flex flex-col justify-between  border-[0.25] border-gray-400 rounded">
                        <div className="flex justify-between relative w-full">
                            <h1 className="text-gray-200 text-sm p-1">Roles</h1>
                            <ChevronDownIcon  className={`absolute right-3 top-1/2 z-20  h-[18px] w-[18px] -translate-y-1/2 text-gray-500 ${RoleDropdown ? 'rotate-180' : ''}`} onClick={() => handleDropdown('role')} />
                        </div>
                        <div className={`GenreDropdown  top-[120%] left-0 right-0 peer-focus:flex flex-col bg-black z-10 p-3 gap-2 rounded shadow-lg ${RoleDropdown ? 'flex' : 'hidden'}`}>

                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'user'} className="w-3 h-3 relative  cursor-pointer">
                                          <input type="radio" id='user'  name="role"  className="hidden peer" />
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "   />
                                        </label>
                                        <p className="text-sm">User</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'author'} className="w-3 h-3 relative  cursor-pointer">
                                          <input type="radio" id='author'  name="role"  className="hidden peer" />
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "   />
                                        </label>
                                        <p className="text-sm">Author</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label htmlFor={'admin'} className="w-3 h-3 relative  cursor-pointer">
                                          <input type="radio" id='admin'  name="role"  className="hidden peer" />
                                          <span className="absolute top-1/2 -translate-y-1/2  w-full h-full  border-[0.15px] border-white peer-checked:bg-cyan-500 "   />
                                        </label>
                                        <p className="text-sm">Admin</p>
                                    </div>
                                </div>
                    </div>
                </div>
    )
}