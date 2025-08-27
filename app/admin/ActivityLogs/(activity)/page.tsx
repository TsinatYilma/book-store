"use client"
import Image from 'next/image'


export default function Page({ placeholder }: { placeholder: string }) {
  return (
  <div className=" h-full">
    <table className="table-auto text-[16px] text-gray-300  w-full">
      <thead>
        <tr className="bg-black-100 ">
          <th className=" px-4 py-2 ">Timestamp</th>
          <th className=" px-4 py-2">User </th>
          <th className=" px-4 py-2">Action</th>
          <th className=" px-4 py-2">Resource</th>
          <th className=" px-4 py-2">Ip Address</th>
        </tr>
      </thead>
      
      <tbody >
        {
          [...Array(13)].map((index)=>(
            
            <tr key={index} className='text-sm text-gray-400'>
              <td className="px-4 py-2 text-center">
                <p className="">August 27, 2025</p>
              </td>
              <td className=" px-4 py-2 text-center ">
                <p className="">Medan</p>
              </td>
              <td className=" px-4 py-2 text-center">
                <p className="|">Added a Book</p>
              </td>
              <td className=" px-4 py-2 text-center">
                <p className="|">User: john smith</p>
              </td>
              <td className="px-4 py-2 ">
                <div className="flex whitespace-nowrap gap-2 justify-center ">
                    <p className="text-[16px]">198.112.23.23</p>
                </div>
              </td>
              
           </tr>
          ))
        }
      </tbody>
    </table>
    </div>
)}