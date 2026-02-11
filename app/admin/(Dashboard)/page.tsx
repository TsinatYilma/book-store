"use client"
import '@/app/globals.css';
import Link from "next/dist/client/link";
import { UserIcon, BookOpenIcon, UserGroupIcon, ChatBubbleLeftIcon, IdentificationIcon, FaceSmileIcon, SparklesIcon, UserPlusIcon } from '@heroicons/react/24/outline';
import VisitorGraph from './chart';
import { useQuery } from '@tanstack/react-query';
import { fetchDashboardCounts } from "@/app/lib/fetching-data"
export default function AdminPage() {

  const { data: counts, isLoading, error } = useQuery({
    queryKey: ['counts'],
    queryFn: fetchDashboardCounts,
  });

  return (
    <div className="">
      <div className="flex justify-between items-center p-2 font-gantari">
        <div className="">
          <h1 className="font-semibold text-[20px] text-Cyan ">Dashboard</h1>
        </div>
        <div className="flex gap-4 items-center ">

          <UserIcon className='h-[25px] w-[25px] text-Cyan' />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-8 ">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold font-gabarito ">Hello, Admin</h1>
          <p className="text-sm font-gantari">its friday, August 8 2025</p>
        </div>
      </div>
      <div className="flex gap-4 mt-8">
        <div className="bg-black/20 p-4 rounded-lg flex flex-col gap-2 items-center ">
          <div className="flex gap-2 items-center">
            <BookOpenIcon className='h-5 w-5 text-gray-200' />
            <p className="text-3xl font-gantari">{counts?.count.books}</p>
          </div>
          <h1 className="text-[16px] text-gray-600">Total Books</h1>

        </div>
        <div className="bg-black/20 p-4 rounded-lg flex flex-col gap-2 items-center ">
          <div className="flex gap-2 items-center">
            <UserGroupIcon className='h-5 w-5 text-gray-200' />
            <p className="text-3xl font-gantari">{counts?.count.users}</p>
          </div>
          <h1 className="text-[16px] text-gray-600">Total Users</h1>
        </div>
        <div className="bg-black/20 p-4 rounded-lg flex flex-col gap-2 items-center">
          <div className="flex gap-2 items-center">
            <SparklesIcon className='h-5 w-5 text-gray-200' />
            <p className="text-3xl font-gantari">567</p>
          </div>
          <h1 className="text-[16px] text-gray-600">New Books</h1>
        </div>
        <div className="bg-black/20 p-4 rounded-lg flex flex-col gap-2 items-center">
          <div className="flex gap-2 items-center">
            <UserPlusIcon className='h-5 w-5 text-gray-200' />
            <p className="text-3xl font-gantari">67</p>
          </div>
          <h1 className="text-[16px] text-gray-600 ">New Users</h1>
        </div>
      </div>
      <div className="flex gap-5 md:gap-8">
        <div className="flex flex-col  max-w-[650px]">
          <div className="flex">
            <div className="flex flex-wrap justify-center gap-5 my-12 ">
              <div className="w-[183px] h-44 rounded-lg bg-linear-to-tr from-black to-cyan-900 pl-1 flex flex-col justify-start gap-6 sm:gap-14 border-[0.15] border-gray-700">
                <div className="p-2 w-fit bg-transparent">
                  <FaceSmileIcon className='h-6 w-6 text-cyan-600 ' />
                </div>
                <div className="">
                  <h1 className="font-bold text-lg text-transparent bg-clip-text bg-linear-to-b from-cyan-200 to-white">17 Reviews</h1>
                  <p className="text-gray-500 text-[11px]">17 Reviews are waiting approval</p>
                </div>
              </div>
              <div className="w-[183px] h-44 rounded-lg bg-linear-to-tr from-black to-cyan-900 pl-1 flex flex-col justify-start gap-6 sm:gap-14 border-[0.15] border-gray-700">
                <div className="p-2 w-fit bg-transparent">
                  <ChatBubbleLeftIcon className='h-6 w-6 text-cyan-600 ' />
                </div>
                <div className="">
                  <h1 className="font-bold text-lg text-transparent bg-clip-text bg-linear-to-b from-cyan-200 to-white">5 Messages</h1>
                  <p className="text-gray-500 text-[11px]">You have recieved 5 messages</p>
                </div>
              </div>
              <div className="w-[183px] h-44 rounded-lg bg-linear-to-tr from-black to-cyan-900 pl-1 flex flex-col justify-start gap-6 sm:gap-14 border-[0.15] border-gray-700">
                <div className="p-2 w-fit bg-transparent">
                  <IdentificationIcon className='h-6 w-6 text-cyan-600 ' />
                </div>
                <div className="">
                  <h1 className="font-bold text-lg text-transparent bg-clip-text bg-linear-to-b from-cyan-200 to-white">{counts?.count.author} Authors</h1>
                  <p className="text-gray-500 text-[11px]">2 Authors are waiting approval</p>
                </div>
              </div>
            </div>

          </div>
          <div className="flex flex-col gap-10 h-fit p-5 border-[0.05px] border-gray-700 max-w-full">
            <h1 className="text-[20px] ">Total Visitors</h1>
            <div className="">
              <VisitorGraph />
            </div>
            <div className="text-sm text-gray-300 font-handlee">
              <p className="">Trending up by 5.3% this month</p>
              <p className="">Showing total visitors for the past 6 month.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-[0.25px] border-gray-500 rounded-lg h-fit px-4 py-2">
          <h1 className="text-[20px]">Recent Activities</h1>
          <div className="flex flex-col gap-4 border-t-[0.5px] border-gray-600 mt-2 pt-4">
            {
              [...Array(6)].map((_, i) => (
                <div key={i} className="flex gap-5 items-center">
                  <p className="text-[10px]">42 minutes ago</p>
                  <p className="px-2 py-1 font-bold bg-cyan-300 h-fit text-black">G</p>
                  <div className="flex flex-col gap-2">
                    <h1 className="text-[15px] font-gantari text-gray-500 ">Genre Updated</h1>
                    <p className="text-[10px] text-gray-500"><span className='text-white'>Tsinat</span>updated classics genre</p>
                  </div>

                </div>
              )
              )}
          </div>
        </div>
      </div>
    </div>

  );
}