"use client"
import '@/app/globals.css'
import { useState } from 'react';
import { DocumentTextIcon , ChatBubbleBottomCenterTextIcon, BookOpenIcon, HomeIcon, UserIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'


export default function SettingLayout(){
    const [filterVisible, setFilterVisible] = useState(false);
    const [selected, setSelected] = useState('Book of the month');
    function handleSelect(option: string) {
        setSelected(option);
    }
    function handleFilter(){
        setFilterVisible(prev=>!prev);
    }
    return (
    <div className="h-fit relative  text-white flex flex-col ">
        <div className="flex justify-between items-center p-2">
        <div className="">
            <h1 className="font-semibold text-2xl text-[#0AA0A1]">Website/Setting</h1>
        </div>
        <div className="flex gap-4 items-center ">

        <UserIcon className='h-[25px] w-[25px] text-[#0AA0A1]'/>
        </div>
        </div>
        <div className="flex justify-between px-2 py-5">
        <div className="flex gap-4">
            <Link href={'/admin/websiteSetting'} className={`flex px-3 py-1 gap-2 items-center border-[0.25px] bg-black border-gray-700 rounded hover:bg-gray-800 ${selected === 'Book of the month' ? 'bg-gray-800' : ''}`} onClick={() => handleSelect('Book of the month')}>
                <BookOpenIcon className={`w-5 h-5 text-blue-400 hover:text-green-700 ${selected === 'Book of the month' ? 'text-green-700' : ''}`} />
                <p className="text-sm">General site info</p>
            </Link>
            <Link href={'/admin/websiteSetting/HomePageSetting'} className={`flex px-3 py-1 gap-2 items-center border-[0.25px] bg-black border-gray-700 rounded hover:bg-gray-800 ${selected === 'Contact Us' ? 'bg-gray-800' : ''}`} onClick={() => handleSelect('Contact Us')}>
                <HomeIcon className={`w-5 h-5 text-blue-400 hover:text-green-700 ${selected === 'Contact Us' ? 'text-green-700' : ''}`} />
                <p className="text-sm">Home page setting</p>
            </Link>
        </div>
        </div>
    </div>

    )
}