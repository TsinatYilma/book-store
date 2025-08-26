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
        <div className="flex border h-screen overflow-y-auto flex-col lg:flex-row">
    <table className="table-auto text-lg text-gray-300  w-full gap-10">
      <thead>
        <tr className="bg-black-100 mb-8 text-[16px] font-bold ">
          <th className=" px-4 py-2 ">Reviewer</th>
          <th className=" px-4 py-2">Book Title</th>
          <th className=" px-4 py-2">Action</th>
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
    <table className="table-auto text-lg text-gray-300  w-full gap-10">
      <thead>
        <tr className="bg-black-100 mb-8 text-[16px] font-bold font-gantari">
          <th className=" px-4 py-2 ">Reviewer</th>
          <th className=" px-4 py-2">Book Title</th>
          <th className=" px-4 py-2">Action</th>
        </tr>
      </thead>
      
      <tbody>
            {[...Array(11)].map((_, index) => (
                <>
                  <TableRowWithDescription key={`row-${index}`} />
                </>
            ))}
     </tbody>

    </table>
     
    </div>
    )
}

function TableRow() {
  const [showActions, setShowActions] = useState(false)
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement
        if (!target.closest('.action-box') && !target.closest('.toggle-button')) {
            setShowActions(false)
        }
        }
    
        document.addEventListener('mousedown', handleClick)
        return () => document.removeEventListener('mousedown', handleClick)
    }, [])

  return (
    <td className="px-4 py-2 text-center text-sm ">
      <div className="relative">
        <button className={`font-semibold  text-center toggle-button text-lg ${showActions ? '-rotate-90 toggle-button' : ''}`} onClick={() => setShowActions(prev => !prev)}>...</button>
        <div className={`absolute  border-[0.25px] border-gray-500 -top-1/2 -left-20 px-3 py-4 gap-2 bg-gray-900 ${showActions ? 'flex flex-col' : 'hidden'}`}>
          <button>Approve</button>
          <button>Reject</button>
          <button>Delete</button>
        </div>
      </div>
    </td>
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
          <ChevronRightIcon className={`h-[15px]  w-[15px] text-white ${showDescription ? 'toggle-button rotate-90' : ''}`} onClick={() => setShowDescription(prev => !prev)}/>
          <UserIcon className="h-[25px] w-[25px] text-cyan-400" />
          <p>Jenna Fischer</p>
        </td>
        <td className="px-4 py-2 text-center">The Great Gatsby</td>
        <TableRow  />

      </tr>

      {showDescription && (
        <tr>
          <td  colSpan={3} className="p-4 pt-0 shadow-md">
            <p className="text-[14px] px-3 font-gantari text-gray-400">
              Fiction is the telling of stories which are not real. More specifically, fiction is an imaginative form of narrative, one of the four basic rhetorical modes. Although the word fiction is derived from the Latin fingo, fingere, finxi, fictum, "to form, create", works of fiction need not be entirely imaginary and may include real people, places, and events. Fiction may be either written or oral. Although not all fiction is necessarily artistic, fiction is largely perceived as a form of art or entertainment. 
            </p>
          </td>
        </tr>
      )}
    </>
  )
}