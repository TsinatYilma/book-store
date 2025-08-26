import '@/app/globals.css'
import { TrashIcon, PencilIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
export default function Page() {
    return (
        <div className="flex flex-col px-3">
            <div className='flex flex-wrap gap-2 justify-center'>
                {
                    [...Array(40)].map((_, index) => (
                        <div key={index} className="border-[0.25px] border-gray-400 p-2 rounded-[8px] flex items-center justify-between w-[217px]">
                            <p className="text-[16px]">Fiction</p>
                            <div className="flex gap-1">
                            <TrashIcon className="h-4 w-4 text-gray-500" />
                            <PencilIcon className="h-4 w-4 text-gray-500" />
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="flex gap-10 mt-10 ">
                <div className="border-[0.25px] border-gray-700 flex justify-center w-[150px] gap-4 h-fit p-1 px-4 rounded-[8px]">
                    <PlusCircleIcon className="h-5 w-5 text-gray-500" />
                    <p className="text-[16px]">Add New</p>
                </div>
                <div className="flex flex-col gap-5">
                    <input type="text" placeholder='Genre Name' className="w-[400px] p-2 border-[0.25px] border-gray-400 rounded" />
                    <textarea placeholder='GenreDescription' className="w-[400px] h-[150px]  p-2 border-[0.25px] border-gray-400 rounded" />
                    <button className="fancyBorder w-[100px] ml-auto">Save</button>
                </div>
            </div>
         
        </div>
    );
}