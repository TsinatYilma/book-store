import '@/app/globals.css';
import { gabarito, gantari } from '@/app/ui/fonts'
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Page(){
    return (
                    <div className="flex flex-col mt-8">
                                <div className="flex justify-between items-center p-2">
                                    <h1 className="font-bold text-2xl text-[#0AA0A1]">General Site Information</h1>
                                    <div className="fancyBorder flex justify-center items-center gap-2 px-2">
                                                    <PencilSquareIcon className="w-[16px] h-[16px]" />
                                                    <span className="">Edit</span>
                                    </div>
                                </div>
                            <div className="flex  justify-between gap-40  items-center  mt-8 border-t-[0.25px] p-2 mx-2 py-8 border-gray-600  text-[16px] font-gantari">
                                        <div className="flex flex-col gap-16">
                                            <div className="flex flex-col gap-2">
                                                <p className="text-gray-500 text-lg">Favicon</p>
                                                <p className="text-left w-full text-4xl font-semibold">Logo</p>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <p className="text-gray-500 text-lg">Favicon</p>
                                                <p className="text-left w-full text-7xl font-semibold">Logo</p>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <p className="text-gray-500 text-lg">Favicon</p>
                                                <p className="text-left w-full text-9xl font-semibold">Logo</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-16 text-[22px] font-gantari">
                                            <div className="flex flex-col gap-2">
                                                <p className="text-gray-500 text-lg">Site Name</p>
                                                <p className="text-left w-full ">Book Genre Finder</p>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <p className="text-gray-500 text-lg">Site Tagline</p>
                                                <p className="text-left w-full ">Find Your Next Favorite Book</p>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <p className="text-gray-500 text-lg">Social media Links</p>
                                                <div className="flex flex-col gap-2 text-lg">
                                                    <p className="text-left w-full ">https://www.facebook.com/bookfinder</p>
                                                    <p className="text-left w-full ">https://www.twitter.com/bookfinder</p>
                                                    <p className="text-left w-full ">https://www.instagram.com/bookfinder</p>
                                                </div>
                                            </div>
                                        </div>
                             </div>
            
                    </div>
    )
}