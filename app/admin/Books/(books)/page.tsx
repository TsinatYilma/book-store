"use client"
import Image from 'next/image'
import { TrashIcon, EyeIcon, StarIcon, UserIcon, PencilIcon } from '@heroicons/react/24/outline';
import { useQuery } from '@tanstack/react-query';
import {fetchBooks} from "@/app/lib/fetching-data"
import { bookDetailSchema } from '@/app/lib/definition';

export default function Page({ placeholder }: { placeholder: string }) {

  const { data: books, isLoading, error } = useQuery<bookDetailSchema[], Error>({
      queryKey: ["books"],
      queryFn: fetchBooks,
    });

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
          books?.map((book)=>(
            
            <tr key={book.id} className='text-sm text-gray-400'>
              <td className="px-4 py-2 text-center">
                <p className="">{book.name}</p>
              </td>
              <td className=" px-4 py-2 text-center ">
                <p className="flex flex-wrap justify-center gap-1">{book.authors.map((a, i)=><p key={i}>{a.name}{i < book.authors.length  - 1 ? ",": ""}</p>)}</p>
              </td>
              <td className="px-4 py-2  text-center">
                <p className="flex flex-wrap justify-center gap-1">{book.genres.map((g, i)=><p key={i} className='' >{g.name}{i < book.genres.length - 1 ? "," : ""}</p>)}</p>
              </td>
              <td className=" px-4 py-2 text-center">
                <p className="|">{book.status.map(s=>s.name)}</p>
              </td>
              <td className="px-4 py-2 ">
                <div className="flex whitespace-nowrap gap-2 justify-center ">
                    <StarIcon className='w-[20px] h-[20px] text-cyan-600' />
                    <p className="text-[16px]">{book.averageRating}</p>
                </div>
              </td>
              <td className="px-4 py-2 ">
                <div className="flex gap-2 h-full my-auto justify-center items-center">
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