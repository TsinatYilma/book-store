import { UserIcon, PencilSquareIcon, PlusCircleIcon } from "@heroicons/react/24/outline" 

export default function Profile(){
    return (
        <div className="min-w-full xs:px-5">
            <div className="flex flex-col gap-5  max-w-[1000px] mx-auto">
                <h1 className="font-semibold text-[#0AA0A1]/80 text-[32px] mt-5 px-4 xs:px-0">My Profile</h1>
                <div className="flex flex-col bg-black gap-8 p-4  rounded-lg">
                    <div className="profil flex gap-5">
                        <UserIcon className="w-[80px] h-[80px] text-[#0AA0A1]/90 bg-blue-500/5 " />
                        <div className="flex flex-col gap-3">
                            <h1 className="font-semibold text-[20px] text-[#0AA0A1]/70">Natali Fredrick</h1>
                            <p className="text-[10px]">joined in july 2025</p>
                            <p className="text-[10px]">0 rating, 0 reviews</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex justify-between border-b-2 border-gray-700 pb-5">
                            <h1 className="font-bold text-[#0AA0A1]/90 text-[18px]">Personal information</h1>
                            <div className="fancyBorder flex justify-center items-center gap-2 px-2">
                                <PencilSquareIcon className="w-[16px] h-[16px]" />
                                <span className="">Edit</span>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-5 ">
                            <div className="flex flex-col min-w-[280px] max-w-[320px] h-[54px] sm:h-[64px] justify-between ">
                                <p className="text-gray-600 text-[14px]">First Name</p>
                                <p className="text-[16px]">Medan</p>
                            </div>
                            <div className="flex flex-col min-w-[280px] max-w-[320px] h-[54px] sm:h-[64px]  justify-between ">
                                <p className="text-gray-600 text-[14px]">Last Name</p>
                                <p className="text-[16px]">Welde selasie</p>
                            </div>
                            <div className="flex flex-col min-w-[280px] max-w-[320px] h-[54px] sm:h-[64px]  justify-between ">
                                <p className="text-gray-600 text-[14px]">Email Address</p>
                                <p className="text-[16px]">medan@example.com</p>
                            </div>
                            <div className="flex flex-col min-w-[280px] max-w-[320px] h-[54px] sm:h-[64px]  justify-between ">
                                <p className="text-gray-600 text-[14px]">Phone Number</p>
                                <p className="text-[16px]">+251-92390402</p>
                            </div>
                            <div className="flex flex-col min-w-[280px] max-w-[320px] h-[54px] sm:h-[64px]  justify-between ">
                                <p className="text-gray-600 text-[14px]">Date of Birth</p>
                                <p className="text-[16px]">January 1, 2000</p>
                            </div>
                            <div className="flex flex-col min-w-[280px] max-w-[320px] h-[54px] sm:h-[64px]  justify-between ">
                                <p className="text-gray-600 text-[14px]">User Role</p>
                                <p className="text-[16px]">Member</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-8">
                            <div className="flex justify-between border-b-2 border-gray-700 pb-5">
                                <h1 className="font-bold text-cyan-500 text-[18px] ">Address</h1>
                                <div className="fancyBorder flex justify-center items-center gap-2 px-2 ">
                                    <PencilSquareIcon className="w-[16px] h-[16px]" />
                                    <span className="">Edit</span>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
                                <div className="flex flex-col min-w-[280px] max-w-[320px] h-[54px] sm:h-[64px]  justify-between ">
                                    <p className="text-gray-600 text-[14px]">Country</p>
                                    <p className="text-[16px]">Ethiopia</p>
                                </div>
                                <div className="flex flex-col min-w-[280px] max-w-[320px] h-[54px] sm:h-[64px]  justify-between ">
                                    <p className="text-gray-600 text-[14px]">City</p>
                                    <p className="text-[16px]">Addis Ababa</p>
                                </div>
                                <div className="flex flex-col min-w-[280px] max-w-[320px] h-[54px] sm:h-[64px]  justify-between ">
                                    <p className="text-gray-600 text-[14px]">Postal code</p>
                                    <p className="text-[16px]">000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-5 ">
                    <div className="flex flex-col bg-black px-4 py-7 min-w-[320px] max-w-[485px] h-[210px] rounded-lg ">
                        <div className="flex justify-between border-b-2 border-gray-700 pb-5">
                                <h1 className="font-bold text-cyan-500 text-[18px] ">Favorite Genres</h1>
                                <div className="fancyBorder flex justify-center items-center gap-2 px-2 ">
                                    <PlusCircleIcon className="w-[16px] h-[16px]" />
                                    <span className="">Edit</span>
                                </div>
                        </div>
                        <div className="flex flex-wrap py-6 gap-2 text-lg text-[#cbe1e1]">
                            <p className="underline">Fiction</p>
                            <p className="underline">Non-Fiction</p>
                            <p className="underline">Science Fiction</p>
                            <p className="underline">Fantasy</p>
                            <p className="underline">Mystery</p>
                            <p className="underline">Biography</p>
                            <p className="underline">Self-Help</p>
                            <p className="underline">History</p>
                        </div>
                    </div>
                    <div className="flex flex-col bg-black px-4 py-7 flex-grow min-w-[320px] max-w-[485px] h-[210px] rounded-lg ">
                        <div className="flex justify-between border-b-2 border-gray-700 pb-5">
                                <h1 className="font-bold text-cyan-500 text-[18px] ">Activities</h1>
                        </div>
                        <div className="flex flex-col px-4 py-6 gap-2 text-lg">
                            <h1 className="text-cyan-600">Logout</h1>
                            <h1 className="text-cyan-600">Change password</h1>
                            <h1 className="text-[#CD2C39]">Delete Account</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}