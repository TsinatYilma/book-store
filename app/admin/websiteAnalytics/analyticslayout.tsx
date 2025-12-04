"use client"
import '@/app/globals.css'
import { useState } from 'react';
import { DocumentTextIcon , ChatBubbleBottomCenterTextIcon, BookOpenIcon, HomeIcon, UserIcon, ChevronDownIcon, DocumentDuplicateIcon, UserGroupIcon, Squares2X2Icon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'


export default function AnalyticsLayout(){
    const [filterVisible, setFilterVisible] = useState(false);
    const [selected, setSelected] = useState('Overview');
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
            <h1 className="font-semibold text-2xl text-[#0AA0A1]">Setting/Analytics</h1>
        </div>
        <div className="flex gap-4 items-center ">

        <UserIcon className='h-[25px] w-[25px] text-[#0AA0A1]'/>
        </div>
        </div>
        <div className="flex justify-between px-2 py-5">
        <div className="flex gap-4">
            <Link href={'/admin/websiteSetting'} className={`flex px-3 py-1 gap-2 items-center border-[0.25px] bg-black border-gray-700 rounded hover:bg-gray-800 ${selected === 'Overview' ? 'bg-gray-800' : ''}`} onClick={() => handleSelect('Book of the month')}>
                <DocumentDuplicateIcon className={`w-5 h-5 text-blue-400 hover:text-green-700 ${selected === 'Overview' ? 'text-green-700' : ''}`} />
                <p className="text-sm">Overview</p>
            </Link>
            <Link href={'/admin/websiteSetting'} className={`flex px-3 py-1 gap-2 items-center border-[0.25px] bg-black border-gray-700 rounded hover:bg-gray-800 ${selected === 'Book Performance' ? 'bg-gray-800' : ''}`} onClick={() => handleSelect('Book of the month')}>
                <BookOpenIcon className={`w-5 h-5 text-blue-400 hover:text-green-700 ${selected === 'Book Performance' ? 'text-green-700' : ''}`} />
                <p className="text-sm">Book Performance</p>
            </Link>
            <Link href={'/admin/websiteSetting'} className={`flex px-3 py-1 gap-2 items-center border-[0.25px] bg-black border-gray-700 rounded hover:bg-gray-800 ${selected === 'Genre Trends' ? 'bg-gray-800' : ''}`} onClick={() => handleSelect('Book of the month')}>
                <Squares2X2Icon className={`w-5 h-5 text-blue-400 hover:text-green-700 ${selected === 'Genre Trends' ? 'text-green-700' : ''}`} />
                <p className="text-sm">Genre Trends</p>
            </Link>
            <Link href={'/admin/websiteSetting/HomePageSetting'} className={`flex px-3 py-1 gap-2 items-center border-[0.25px] bg-black border-gray-700 rounded hover:bg-gray-800 ${selected === 'User Engagement' ? 'bg-gray-800' : ''}`} onClick={() => handleSelect('User Engagement')}>
                <UserGroupIcon className={`w-5 h-5 text-blue-400 hover:text-green-700 ${selected === 'User Engagement' ? 'text-green-700' : ''}`} />
                <p className="text-sm">User Engagement</p>
            </Link>
        </div>
        </div>
    </div>

    )
}