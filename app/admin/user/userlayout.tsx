"use client"
import '@/app/globals.css'
import { useState } from 'react';
import { FunnelIcon, MagnifyingGlassIcon, PlusCircleIcon, UserIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import UserFilter from './userFilter'

export default function UserTable(){
    const [filterVisible, setFilterVisible] = useState(false);
    function handleFilter(){
        setFilterVisible(prev=>!prev);
    }
    return (
    <div className="h-fit mb-10  relative  text-white flex flex-col ">
        <div className="flex justify-between items-center p-2">
        <div className="">
            <h1 className="font-semibold text-2xl text-cyan-500">Users</h1>
        </div>
        <div className="flex gap-4 items-center ">
            <div className="relative flex gap-4" >
                <div className="flex p-1 border-[0.15px] border-gray-700 gap-1  bg-black items-center" onClick={handleFilter}>
                    <FunnelIcon className={`w-5 h-5 text-gray-400 ${filterVisible ? 'rotate-180 text-green-500'  : ''}`} />
                    <p className="">Filter</p>
                </div>
                <UserFilter filterVisible={filterVisible}/>
            </div>
            <div className=" relative ">
            <label htmlFor="search" className="sr-only">
            Search
        </label>
        <input
            className="block rounded-md py-[4px] sm:py-[6px] pl-8 text-sm  placeholder:text-gray-500 w-[392px] sm:h-[30px] sm:max-w-[350px]  md:w-[350px] outline-2 outline-gray-300   bg-transparent"
            placeholder={"search user"}
            onChange={(e)=>{
            //handleSearch(e.target.value)
            }}
            //defaultValue={searchParams.get('query')?.toString()}
        />
        <MagnifyingGlassIcon className="absolute left-1  top-1/2 `h-[18px] w-[18px] -translate-y-1/2 text-white-500" />
        </div>
        <UserIcon className='h-[25px] w-[25px] text-cyan-400'/>
        </div>
        </div>
        <div className="flex justify-between px-2 py-5">
        <div className="flex gap-2">
            <Link href={'/admin/user'} className="flex items-center px-2 gap-2 border-[0.25px] bg-black border-gray-700 rounded">
                <Image src={"/allusers.png"} alt='' width={20} height={1}/>
                <p className="">All Users</p>
            </Link>
            <Link href="/admin/user/roles" className="flex items-center px-2 gap-2 border-[0.25px] bg-black border-gray-700 rounded cursor-pointer">
                <Image src="/roles.png" alt="Roles icon" width={20} height={20} />
                <p className="text-white">Roles</p>
            </Link>
        </div>
        <div className="flex gap-2">
            <div className="flex px-2 py-1 gap-1 items-center border-[0.25px] bg-black border-gray-700 rounded">
            <p className="text-sm">New</p>
            <PlusCircleIcon className='w-5 h-5 text-gray-500 '/>
            </div>
            <div className="flex px-2 py-1 gap-1 items-center border-[0.25px] bg-black border-gray-700 rounded">
            <p className="text-sm">New</p>
            <PlusCircleIcon className='w-5 h-5 text-gray-500 '/>
            </div>
            <div className="flex px-2 py-1 gap-1 items-center border-[0.25px] bg-black border-gray-700 rounded">
            <p className="text-sm">New</p>
            <PlusCircleIcon className='w-5 h-5 text-gray-500 '/>
            </div>
        </div>
        </div>
    </div>

    )
}