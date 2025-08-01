import { UserIcon } from "@heroicons/react/24/outline" 

export default function Profile(){
    return (
        <div className="">
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-cyan-500">My Profile</h1>
                <div className="flex flex-col ">
                    <div className="profil flex">
                        <UserIcon className="" />
                        <div className="flex flex.col">
                            <h1 className="font-bold text-cyan-600">Natali Fredrick</h1>
                            <p className="">joined in july 2025</p>
                            <p className="">0 rating, 0 reviews</p>
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <div className="flex">
                            <h1 className="font-bold text-cyan-500 ">Personal information</h1>
                            <button className="fancyBorder">Edit</button>
                        </div>
                        <div className="flex flex-col"></div>
                    </div>
                    <div className="links"></div>
                </div>
            </div>
        </div>
    )
}