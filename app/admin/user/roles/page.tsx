import '@/app/globals.css'
import { PencilIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function UserRole(){
    return(
        <div className="flex flex-col">
            <div className="flex gap-8 justify-between ">
                <p className="flex items-end text-sm">Dynamic permission</p>
                <div className="flex gap-10 px-7 py-5 border-[0.15] border-gray-700 bg-black hover:bg-white/10 rounded-[10px]">
                    <div className="flex flex-col gap-2">
                        <p className="text-sm">2 Users</p>
                        <h1 className="font-bold text-[20px]">books</h1>
                    </div>
                    <Link href={''} className='h-fit p-1 text-gray-400 border-[0.15] border-gray-700 bg-black hover:bg-white/10 rounded-[10px]'>
                       <PencilIcon className='w-3 h-3'/>
                    </Link>
                </div>
                <div className="flex gap-10 px-7 py-5 border-[0.15] border-gray-700 bg-black hover:bg-white/10 rounded-[10px]">
                    <div className="flex flex-col gap-2">
                        <p className="text-sm">20 Users</p>
                        <h1 className="font-bold text-[20px]">Authors</h1>
                    </div>
                    <Link href={''} className='h-fit p-1 text-gray-400 border-[0.15] border-gray-700 bg-black hover:bg-white/10 rounded-[10px]'>
                       <PencilIcon className='w-3 h-3'/>
                    </Link>
                </div>
                <div className="flex gap-10 px-7 py-5 border-[0.15] border-gray-700 bg-black hover:bg-white/10 rounded-[10px]">
                    <div className="flex flex-col gap-2">
                        <p className="text-sm">250 Users</p>
                        <h1 className="font-bold text-[20px]">Users</h1>
                    </div>
                    <Link href={''} className='h-fit p-1 text-gray-400 border-[0.15] border-gray-700 bg-black hover:bg-white/10 rounded-[10px]'>
                       <PencilIcon className='w-3 h-3'/>
                    </Link>
                </div>
                <Link href={''} className='flex items-center gap-2 h-fit py-1 px-3 border-[0.15] border-gray-700 bg-black hover:bg-white/10 rounded-[10px]'>
                   <PlusCircleIcon className='w-5 h-5 text-gray-500 '/>
                   <p className="">Add role</p>
                </Link>
            </div>
           <div className="flex flex-col gap-4 mt-8">
            {/* Book Management */}
            <div className="flex flex-col">
                <div className="flex gap-2">
                <p className="w-[200px] text-[16px]">Book management</p>
                <div className="flex gap-8">
                    {["book-1", "book-2", "book-3"].map((id, idx) => (
                    <span key={id} className="w-[200px] flex items-center justify-center">
                        <label htmlFor={id} className="w-3 h-3 relative rounded-full cursor-pointer">
                        <input
                            type="radio"
                            id={id}
                            name="book-check"
                            defaultChecked={idx === 0}
                            className="peer hidden"
                        />
                        <span className="absolute top-0 w-full h-full rounded-full border-[0.15px] border-red-500 peer-checked:border-cyan-500 peer-checked:bg-cyan-500" />
                        </label>
                    </span>
                    ))}
                </div>
                </div>
            </div>

            {/* Genre Management */}
            <div className="flex flex-col">
                <div className="flex gap-2">
                <p className="w-[200px] text-[16px]">Genre management</p>
                <div className="flex gap-8">
                    {["genre-1", "genre-2", "genre-3"].map((id, idx) => (
                    <span key={id} className="w-[200px] flex items-center justify-center">
                        <label htmlFor={id} className="w-3 h-3 relative rounded-full cursor-pointer">
                        <input
                            type="radio"
                            id={id}
                            name="genre-check"
                            defaultChecked={idx === 0}
                            className="peer hidden"
                        />
                        <span className="absolute top-0 w-full h-full rounded-full border-[0.15px] border-red-500 peer-checked:border-cyan-500 peer-checked:bg-cyan-500" />
                        </label>
                    </span>
                    ))}
                </div>
                </div>
            </div>

            {/* Users Management */}
            <div className="flex flex-col">
                <div className="flex gap-2">
                <p className="w-[200px] text-[16px]">Users management</p>
                <div className="flex gap-8">
                    {["users-1", "users-2", "users-3"].map((id, idx) => (
                    <span key={id} className="w-[200px] flex items-center justify-center">
                        <label htmlFor={id} className="w-3 h-3 relative rounded-full cursor-pointer">
                        <input
                            type="radio"
                            id={id}
                            name="users-check"
                            defaultChecked={idx === 0}
                            className="peer hidden"
                        />
                        <span className="absolute top-0 w-full h-full rounded-full border-[0.15px] border-red-500 peer-checked:border-cyan-500 peer-checked:bg-cyan-500" />
                        </label>
                    </span>
                    ))}
                </div>
                </div>
            </div>

            {/* Content Management */}
            <div className="flex flex-col">
                <div className="flex gap-2">
                <p className="w-[200px] text-[16px]">Content management</p>
                <div className="flex gap-8">
                    {["content-1", "content-2", "content-3"].map((id, idx) => (
                    <span key={id} className="w-[200px] flex items-center justify-center">
                        <label htmlFor={id} className="w-3 h-3 relative rounded-full cursor-pointer">
                        <input
                            type="radio"
                            id={id}
                            name="content-check"
                            defaultChecked={idx === 0}
                            className="peer hidden"
                        />
                        <span className="absolute top-0 w-full h-full rounded-full border-[0.15px] border-red-500 peer-checked:border-cyan-500 peer-checked:bg-cyan-500" />
                        </label>
                    </span>
                    ))}
                </div>
                </div>
            </div>

            {/* Website Management */}
            <div className="flex flex-col">
                <div className="flex gap-2">
                <p className="w-[200px] text-[16px]">Website management</p>
                <div className="flex gap-8">
                    {["website-1", "website-2", "website-3"].map((id, idx) => (
                    <span key={id} className="w-[200px] flex items-center justify-center">
                        <label htmlFor={id} className="w-3 h-3 relative rounded-full cursor-pointer">
                        <input
                            type="radio"
                            id={id}
                            name="website-check"
                            defaultChecked={idx === 0}
                            className="peer hidden"
                        />
                        <span className="absolute top-0 w-full h-full rounded-full border-[0.15px] border-red-500 peer-checked:border-cyan-500 peer-checked:bg-cyan-500" />
                        </label>
                    </span>
                    ))}
                </div>
                </div>
            </div>
            {/* Reports */}
            <div className="flex flex-col">
                <div className="flex gap-2">
                <p className="w-[200px] text-[16px]">Reports</p>
                <div className="flex gap-8">
                    {["report-1", "report-2", "report-3"].map((id, idx) => (
                    <span key={id} className="w-[200px]  flex items-center justify-center">
                        <label htmlFor={id} className="w-3 h-3 relative rounded-full cursor-pointer">
                        <input
                            type="radio"
                            id={id}
                            name="report-check"
                            defaultChecked={idx === 0}
                            className="peer hidden"
                        />
                        <span className="absolute top-0 w-full h-full rounded-full border-[0.15px] border-red-500 peer-checked:border-cyan-500 peer-checked:bg-cyan-500" />
                        </label>
                    </span>
                    ))}
                </div>
                </div>
            </div>
            </div>
            <div className="flex flex-col mt-8">
                <h1 className="font-semibold text-2xl text-cyan-600">Explanation</h1>
                <div className="text-sm mt-5 text-white/90 flex flex-col gap-2 px-3">
                    <p className="flex items-center gap-4"><span className="w-1 h-1 rounded-full bg-white "></span>Book Management: A person who can add, edit, and delete books.</p>
                    <p className="flex items-center gap-4"><span className="w-1 h-1 rounded-full bg-white "></span>Genre Management: A person who can add, edit, and delete genres</p>
                    <p className="flex items-center gap-4"><span className="w-1 h-1 rounded-full bg-white "></span>User Management: A person who can view all users, edit their profiles, and ban them.</p>
                    <p className="flex items-center gap-4"><span className="w-1 h-1 rounded-full bg-white "></span>Content Moderation: A person who can manage and delete users reviews</p>
                    <p className="flex items-center gap-4"><span className="w-1 h-1 rounded-full bg-white "></span>Website Settings: A person who can change site name and manage website related settings</p>
                    <p className="flex items-center gap-4"><span className="w-1 h-1 rounded-full bg-white "></span>Reports: A person who can access all analytics and activity logs.</p>
                </div>
            </div>

        </div>
    )
}