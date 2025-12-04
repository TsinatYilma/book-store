"use client"
import {useState, useEffect, useRef} from 'react'
import "@/app/globals.css"
import Image from 'next/image'
import { MagnifyingGlassIcon, ChevronRightIcon, UserIcon, PlusCircleIcon, FunnelIcon } from '@heroicons/react/24/outline';



export default function Page(){
    const [action, setAction] = useState(false);
    function toggleAction() {
        setAction(!action);
    }
    return (
        <div className="flex mt-10 h-screen overflow-y-auto flex-col lg:flex-row">
    <table className="table-auto text-lg text-gray-300  w-full gap-10">
      <thead>
        <tr className="bg-black-100 mb-8 text-[16px] font-bold ">
          <th className=" px-4 py-2 ">Full Name</th>
          <th className=" px-4 py-2">Phone Number</th>
          <th className=" px-4 py-2">Email</th>
          <th className=" px-4 py-2">Comment</th>
        </tr>
      </thead>
      
      <tbody className='pt-8'>
        {
          [...Array(11)].map((index)=>(
            
            <>
                  <TableRowWithDescription key={`row-${index}`} />
            </>
          ))
        }
      </tbody>
    </table>
     
    </div>
    )
}

function TableRowWithDescription() {
  const [showDescription, setShowDescription] = useState(false)
  
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('.description-box') && !target.closest('.toggle-button')) {
        setShowDescription(false)
      }
    }

    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <>
      <tr className="text-sm ">
        <td className="px-4 py-2 flex items-center gap-2">
          
          <UserIcon className="h-[25px] w-[25px] text-cyan-400" />
          <p>Jenna Fischer</p>
        </td>
        <td className="px-4 py-2 text-center">The Great Gatsby</td>
        <td className="px-4 py-2 text-center">jennafischer@example.com</td>
        <td className="px-4 py-2 text-center text-sm relative">
            <div className={`flex flex-col bg-black z-10 border-[0.25px] rounded-[8px] border-gray-500  ${showDescription ? 'absolute' : ''}`}>
                    <div className={`relative px-4 py-1 flex items-center gap-2  justify-between   `}>
                        <button className={`  text-center toggle-button ${showDescription ? 'text-green-400 toggle-button' : ''}`} >comment</button>
                        <ChevronRightIcon className={`h-[15px]  w-[15px] text-white ${showDescription ? 'toggle-button rotate-90' : ''}`} onClick={() => setShowDescription(prev => !prev)}/>
                    </div>
                            {showDescription && (
                        <div className=' py-4 shadow-md  w-full'>
                            <p className="text-sm text-left px-3 font-gantari text-gray-400">
                            Detail: We can keep track of all the books we’ve read, see the one we are currently reading, post meet up info and there are discussion questions in the app! Love it! 
                            </p>
                        </div>
                    )}
             </div>
    </td>
      </tr>

      
    </>
  )
}