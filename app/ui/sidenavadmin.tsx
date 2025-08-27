import '@/app/globals.css';
import Image from 'next/image'
import Link from 'next/link';

export default function AdminSideNav(){
    return(
        <div className="flex flex-col pl-3 ">
            <h1 className="text-4xl font-semibold">Logo</h1>
            <div className="grid grid-cols-2 gap-3 my-8 font-gantari">
                <Link href={'/admin'} className="flex flex-col justify-center items-center rounded-[10px] gap-2  border-[0.15] border-gray-700 bg-black hover:bg-white/10 w-[120px] min-h-[90px]">
                    <Image src="/dashboard.png" width={16} height={16} alt="" className="" />
                    <h1 className="font-handlee">Dashboard</h1>
                </Link>
                <Link href={'/admin/user'} className="flex flex-col justify-center items-center rounded-[10px] gap-2  border-[0.15] border-gray-700 bg-black hover:bg-white/10 w-[120px] min-h-[90px]">
                    <Image src="/user.png" width={16} height={16} alt="" className="" />
                    <h1 className="font-handlee">Users</h1>
                </Link>
                <Link href={'/admin/Books'} className="flex flex-col justify-center items-center rounded-[10px] gap-2  border-[0.15] border-gray-700 bg-black hover:bg-white/10 w-[120px] min-h-[90px]">
                    <Image src="/books.png" width={16} height={16} alt="" className="" />
                    <h1 className="font-handlee">Books</h1>
                </Link>
                <Link href={'/admin/Genres'} className="flex flex-col justify-center items-center rounded-[10px] gap-2  border-[0.15] border-gray-700 bg-black hover:bg-white/10 w-[120px] min-h-[90px]">
                    <Image src="/genres.png" width={16} height={16} alt="" className="" />
                    <h1 className="font-handlee">Genres</h1>
                </Link>
                <Link href={'/admin/Reviews'} className="flex flex-col justify-center items-center rounded-[10px] gap-2  border-[0.15] border-gray-700 bg-black hover:bg-white/10 w-[120px] min-h-[90px]">
                    <Image src="/reviews.png" width={16} height={16} alt="" className="" />
                    <h1 className="font-handlee">Reviews</h1>
                </Link>
                <Link href={'/admin/contents'} className="flex flex-col justify-center items-center rounded-[10px] gap-2  border-[0.15] border-gray-700 bg-black hover:bg-white/10 w-[120px] min-h-[90px]">
                    <Image src="/content.png" width={16} height={16} alt="" className="" />
                    <h1 className="font-handlee">Contets</h1>
                </Link>
            </div>
            <div className="">
                <div className="gap-4 flex">
                    <Image src="/down.png" width={14} height={14} alt="" className="" />
                    <h1 className="text-lg font-gabarito font-bold">Settings & Reports</h1>
                </div>
                <div className='p-3 ml-2 border-l-[0.5] border-gray-600'>
                    <Link href={'/admin/websiteSetting'} className="border-[0.15] border-gray-700 h-[30px] px-3 gap-3 text-sm font-light rounded mb-3 flex items-center">
                        <Image src="/settings.png" width={14} height={14}  alt="where is it" className="" />
                        <h1 className="">Website Setting</h1>
                    </Link>
                    <Link href={'/admin/ActivityLogs'} className="border-[0.15] border-gray-700 h-[30px] px-3 gap-3 text-sm font-light rounded mb-3 flex items-center">
                        <Image src="/activity.png" width={14} height={14} alt="" className="" />
                        <h1 className="">Activity Logs</h1>
                    </Link>
                    <Link href={'/admin/websiteAnalytics'} className="border-[0.15] border-gray-700 h-[30px] px-3 gap-3 text-sm font-light rounded mb-3 flex items-center">
                        <Image src="/analytics.png" width={14} height={14} alt="" className="" />
                        <h1 className="">Analytics</h1>
                    </Link>
                </div>
            </div>
            <div className="">
                <div className="flex  gap-4">
                    <Image src="/down.png" width={15} height={0} alt="" className="" />
                    <h1 className="text-lg font-gabarito font-bold">Actions</h1>
                </div>
                <div className="p-3 ml-2 border-l-[0.5] border-gray-600">
                    <Link href={'/admin/adminProfile'} className="border-[0.15] border-gray-700 h-[30px] px-3 gap-3 text-sm font-light rounded mb-3 flex items-center">
                        <Image src="/password.png" width={14} height={14} alt="" className="" />
                        <h1 className="">Profile</h1>
                    </Link>
                    <Link href={'/admin/Logout'} className="border-[0.15] border-gray-700 h-[30px] px-3 gap-3 text-sm font-light rounded mb-3 flex items-center ">
                        <Image src="/logout.png" width={14} height={14} alt="" className="" />
                        <h1 className="">LogOut</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}