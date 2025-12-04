"use client"
import '@/app/globals.css'
import { useState } from 'react';
import { DocumentTextIcon , ChatBubbleBottomCenterTextIcon, BookOpenIcon, EnvelopeIcon, UserIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'


export default function ContentLayout(){
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
            <h1 className="font-semibold text-2xl text-[#0AA0A1]">Contents</h1>
        </div>
        <div className="flex gap-4 items-center ">

        <UserIcon className='h-[25px] w-[25px] text-[#0AA0A1]'/>
        </div>
        </div>
        <div className="flex justify-between px-2 py-5">
        <div className="flex gap-4">
            <Link href={'/admin/contents'} className={`flex px-3 py-1 gap-2 items-center border-[0.25px] bg-black border-gray-700 rounded hover:bg-gray-800 ${selected === 'Book of the month' ? 'bg-gray-800' : ''}`} onClick={() => handleSelect('Book of the month')}>
                <BookOpenIcon className={`w-5 h-5 text-blue-400 hover:text-green-700 ${selected === 'Book of the month' ? 'text-green-700' : ''}`} />
                <p className="text-sm">Book of the month</p>
            </Link>
            <Link href={'/admin/contents/contactUs'} className={`flex px-3 py-1 gap-2 items-center border-[0.25px] bg-black border-gray-700 rounded hover:bg-gray-800 ${selected === 'Contact Us' ? 'bg-gray-800' : ''}`} onClick={() => handleSelect('Contact Us')}>
            <EnvelopeIcon className={`w-5 h-5 text-blue-400 hover:text-green-700 ${selected === 'Contact Us' ? 'text-green-700' : ''}`} />
            <p className="text-sm">Contact Us</p>
            </Link>
            <Link href="/admin/contents/comments" className={`flex px-3 py-1 gap-2 items-center border-[0.25px] bg-black border-gray-700 rounded hover:bg-gray-800 ${selected === 'Comment' ? 'bg-gray-800' : ''}`} onClick={() => handleSelect('Comment')}>
                <ChatBubbleBottomCenterTextIcon className={`w-5 h-5 text-blue-400 hover:text-green-700 ${selected === 'Comment' ? 'text-green-700' : ''}`} />
                <p className="text-white text-sm">Comment</p>
            </Link>

            <Link href={'/admin/contents/BlogPost'} className={`flex px-3 py-1 gap-2 items-center border-[0.25px] bg-black border-gray-700 rounded hover:bg-gray-800 ${selected === 'Blog Post' ? 'bg-gray-800' : ''}`} onClick={() => handleSelect('Blog Post')}>
            <DocumentTextIcon className={`w-5 h-5 text-blue-400 hover:text-green-700 ${selected === 'Blog Post' ? 'text-green-700' : ''}`} />
            <p className="text-sm">Blog Post</p>
            </Link>
        </div>
        </div>
    </div>

    )
}