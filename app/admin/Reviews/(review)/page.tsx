"use client"
<<<<<<< HEAD
import { useState, useEffect, useRef } from 'react'
=======
import { useState, useEffect, useRef } from 'react'
>>>>>>> 528e1d9 (yeserashen yestesh)
import { useState, useEffect, useRef } from 'react'
import "@/app/globals.css"
import Image from 'next/image'
import { MagnifyingGlassIcon, ChevronRightIcon, UserIcon, PlusCircleIcon, FunnelIcon } from '@heroicons/react/24/outline';
import { useQuery } from '@tanstack/react-query';
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ReviewAndRating } from '@/app/lib/definition';
<<<<<<< HEAD
import { fetchAllReviews } from '@/app/lib/fetching-data';
import { fetchAllReviews } from '@/app/lib/API_Calls/fetching-data';

export default function Page() {
  const [action, setAction] = useState(false);
  function toggleAction() {
    setAction(!action);
  }
  const { data: reviews, isLoading, error } = useQuery<ReviewAndRating[], Error>({
    queryKey: ["reviews"],
    queryFn: fetchAllReviews,
  });
  const mid = Math.ceil((reviews?.length ?? 0) / 2);
  const review1 = reviews?.slice(0, mid) ?? [];
  const review2 = reviews?.slice(mid) ?? [];
  return (
    <div className="flex mt-10 h-fit overflow-y-auto flex-col lg:flex-row lg:gap-10  " >
      <table className="table-auto text-lg text-gray-300  w-full gap-10">
        <thead>
          <tr className="bg-black-100 mb-8 text-[16px] font-bold ">
            <th className=" px-4 py-2  text-start">Reviewer</th>
            <th className=" px-4 py-2">Book Title</th>
            <th className=" px-4 py-2">Action</th>
          </tr>
        </thead>

        <tbody className=''>
          {
            review1?.map((review, index) => (

              <>
                <TableRowWithDescription key={`row-${index}`} review={review} />
              </>
            ))
          }
        </tbody>
      </table>
      <table className="table-auto text-lg text-gray-300  w-full gap-10">
        <thead>
          <tr className="bg-black-100 mb-8 text-[16px] font-bold font-gantari ">
            <th className=" px-4 py-2  text-start ">Reviewer</th>
            <th className=" px-4 py-2">Book Title</th>
            <th className=" px-4 py-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {review2?.map((review, index) => (
            <>
              <TableRowWithDescription key={`row-${index}`} review={review} />
            </>
          ))}
        </tbody>

      </table>

    </div>
  )
=======
import { fetchAllReviews } from '@/app/lib/API_Calls/fetching-data';

export default function Page() {
  const [action, setAction] = useState(false);
  function toggleAction() {
    setAction(!action);
  }
  const { data: reviews, isLoading, error } = useQuery<ReviewAndRating[], Error>({
    queryKey: ["reviews"],
    queryFn: fetchAllReviews,
  });
  const mid = Math.ceil((reviews?.length ?? 0) / 2);
  const review1 = reviews?.slice(0, mid) ?? [];
  const review2 = reviews?.slice(mid) ?? [];
  return (
    <div className="flex mt-10 h-fit overflow-y-auto flex-col lg:flex-row lg:gap-10  " >
      <table className="table-auto text-lg text-gray-300  w-full gap-10">
        <thead>
          <tr className="bg-black-100 mb-8 text-[16px] font-bold ">
            <th className=" px-4 py-2  text-start">Reviewer</th>
            <th className=" px-4 py-2">Book Title</th>
            <th className=" px-4 py-2">Action</th>
          </tr>
        </thead>

        <tbody className=''>
          {
            review1?.map((review, index) => (

              <>
                <TableRowWithDescription key={`row-${index}`} review={review} />
              </>
            ))
          }
        </tbody>
      </table>
      <table className="table-auto text-lg text-gray-300  w-full gap-10">
        <thead>
          <tr className="bg-black-100 mb-8 text-[16px] font-bold font-gantari ">
            <th className=" px-4 py-2  text-start ">Reviewer</th>
            <th className=" px-4 py-2">Book Title</th>
            <th className=" px-4 py-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {review2?.map((review, index) => (
            <>
              <TableRowWithDescription key={`row-${index}`} review={review} />
            </>
          ))}
        </tbody>

      </table>

    </div>
  )
>>>>>>> 528e1d9 (yeserashen yestesh)
  )
}

function TableRow() {
  const [showActions, setShowActions] = useState(false)
<<<<<<< HEAD
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
=======
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
>>>>>>> 528e1d9 (yeserashen yestesh)
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
    <td className="px-4 py-2  text-center text-sm ">
      <div className="relative">
        <button className={`font-semibold  text-center toggle-button text-lg ${showActions ? '-rotate-90 toggle-button' : ''}`} onClick={() => setShowActions(prev => !prev)}>...</button>
        <div className={`absolute  -[0.25px] -gray-500 -top-1/2 -left-20 px-3 py-4 gap-2 bg-gray-900 ${showActions ? 'flex flex-col' : 'hidden'}`}>
          <button>Approve</button>
          <button>Reject</button>
          <button>Delete</button>
        </div>
      </div>
    </td>
  )
}
<<<<<<< HEAD
function TableRowWithDescription({ review }: { review: ReviewAndRating }) {
  function TableRowWithDescription({ review }: { review: ReviewAndRating }) {
    const [showDescription, setShowDescription] = useState(false)

=======
function TableRowWithDescription({ review }: { review: ReviewAndRating }) {
  const [showDescription, setShowDescription] = useState(false)

>>>>>>> 528e1d9 (yeserashen yestesh)

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
        <tr className="text-sm   ">
          <td className="px-4 py-2 flex items-center gap-2  ">
<<<<<<< HEAD
          <ChevronRightIcon className={`h-[15px]  w-[15px] text-white ${showDescription ? 'toggle-button rotate-90' : ''}`} onClick={() => setShowDescription(prev => !prev)}/>
=======
          <ChevronRightIcon className={`h-[15px]  w-[15px] text-white ${showDescription ? 'toggle-button rotate-90' : ''}`} onClick={() => setShowDescription(prev => !prev)} />
>>>>>>> 528e1d9 (yeserashen yestesh)
          <ChevronRightIcon className={`h-[15px]  w-[15px] text-white ${showDescription ? 'toggle-button rotate-90' : ''}`} onClick={() => setShowDescription(prev => !prev)} />
          <UserIcon className="h-[25px] w-[25px] text-cyan-400" />
          <p>{review.userName}</p>
        </td >
        <td className="px-4 py-2  text-center ">{review.bookName}</td>
<<<<<<< HEAD
        <TableRow  />
=======
        <TableRow />
>>>>>>> 528e1d9 (yeserashen yestesh)
        <TableRow />
      </tr >

      { showDescription && (
        <tr>
<<<<<<< HEAD
    <td colSpan={3} className="p-4 pt-0 shadow-md">
      <td colSpan={3} className="p-4 pt-0 shadow-md">
        <p className="text-[14px] px-3 font-gantari text-gray-400">
          {review.reviewText}
=======
          <td colSpan={3} className="p-4 pt-0 shadow-md">
            <p className="text-[14px] px-3 font-gantari text-gray-400">
              {review.reviewText}
>>>>>>> 528e1d9 (yeserashen yestesh)
              {review.reviewText}
            </p>
          </td>
        </tr>
      )}
      </>
      )
}