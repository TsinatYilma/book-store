"use client"
import Image from 'next/image'
import { MagnifyingGlassIcon, UserIcon, PlusCircleIcon, FunnelIcon } from '@heroicons/react/24/outline';


export default function Page({ placeholder }: { placeholder: string }) {
  return (
  <div className="">
    <table className="table-auto text-lg text-gray-300  w-full gap-10">
      <thead>
        <tr className="bg-black-100 mb-8 ">
          <th className=" px-4 py-2 ">Photos</th>
          <th className=" px-4 py-2">Full Name</th>
          <th className=" px-4 py-2">Phone Numbers</th>
          <th className=" px-4 py-2">Email</th>
          <th className=" px-4 py-10">Status</th>
        </tr>
      </thead>
      
      <tbody className='pt-8'>
        {
          [...Array(9)].map((index)=>(
            
            <tr key={index} className='text-sm text-gray-400'>
              <td className=" px-4 py-2  flex justify-center">
                <UserIcon className='h-[25px] w-[25px] text-cyan-400'/>
              </td>
              <td className=" px-4 py-2 text-center">
                <p className="">Jenna Fischer</p>
              </td>
              <td className=" px-4 py-2 text-center ">
                <p className="">jennaFischer@gmail.com</p>
              </td>
              <td className=" px-4 py-2 text-center">
                <p className="|">0938293829</p>
              </td>
              <td className=" px-4 py-2 flex gap-2 justify-center ">
                <Image src={'/online.png'} alt=' ' width={25} height={2}/>
                <p className="">Online</p>
              </td>
           </tr>
          ))
        }
      </tbody>
    </table>
    </div>
)}