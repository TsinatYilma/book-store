"use client"
import Image from 'next/image'
import { TrashIcon, EyeIcon, StarIcon, UserIcon, PencilIcon } from '@heroicons/react/24/outline';


export default function Page({ placeholder }: { placeholder: string }) {
  return (
  <div className=" h-full">
    <table className="table-auto text-lg text-gray-300  w-full">
      <thead>
        <tr className="bg-black-100 ">
          <th className=" px-4 py-2 ">Title</th>
          <th className=" px-4 py-2">Author</th>
          <th className=" px-4 py-2">Genre</th>
          <th className=" px-4 py-2">Status</th>
          <th className=" px-4 py-2">Rating</th>
          <th className=" px-4 py-6">Actions</th>
        </tr>
      </thead>
      
      <tbody >
        {
          [...Array(13)].map((index)=>(
            
            <tr key={index} className='text-sm text-gray-400'>
              <td className="px-4 py-2 text-center">
                <p className="">Jenna Fischer</p>
              </td>
              <td className=" px-4 py-2 text-center ">
                <p className="">Charlotte Brontë</p>
                <p className="">(Writter)</p>
              </td>
              <td className=" px-4 py-2 text-center">
                <p className="|">Fiction</p>
              </td>
              <td className=" px-4 py-2 text-center">
                <p className="|">Published</p>
              </td>
              <td className="px-4 py-2 ">
                <div className="flex whitespace-nowrap gap-2 justify-center ">
                    <StarIcon className='w-[20px] h-[20px] text-cyan-600' />
                    <p className="text-[16px]">4.3</p>
                </div>
              </td>
              <td className="px-4 py-2 ">
                <div className="flex gap-2 h-full my-auto justify-center items-center ">
                    <PencilIcon className='w-[20px] h-[20px]' />
                    <TrashIcon className='w-[20px] h-[20px]' />
                    <EyeIcon className='w-[20px] h-[20px]' />
                </div>
              </td>
              
           </tr>
          ))
        }
      </tbody>
    </table>
    </div>
)}