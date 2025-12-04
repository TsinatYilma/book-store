import '@/app/globals.css';
import { gabarito, gantari } from '@/app/ui/fonts'
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Page(){
    return (
                    <div className="flex flex-col mt-8">
                                <div className="flex justify-between items-center p-2">
                                    <h1 className="font-bold text-2xl text-[#0AA0A1]">Contact Information</h1>
                                    <div className="fancyBorder flex justify-center items-center gap-2 px-2">
                                                    <PencilSquareIcon className="w-[16px] h-[16px]" />
                                                    <span className="">Edit</span>
                                    </div>
                                </div>
                            <div className="flex  justify-start gap-40  items-center  mt-8 border-t-[0.25px] p-2 mx-2 py-8 border-gray-600  text-[16px] font-gantari">
                                        <div className="flex flex-col gap-3">
                                            <p className="text-gray-500 text-sm">Contact Email</p>
                                            <p className="text-left w-full ">bookfinder1289@gamail.com</p>
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <p className="text-gray-500 text-sm">Contact Number</p>
                                            <p className="text-left w-full ">0983229823</p>
                                        </div>
                             </div>
            
                    </div>
    )
}