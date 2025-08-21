import '../globals.css'
import { gabarito, gantari } from './fonts'
import Image from 'next/image'

export default function BookoftheMonth(){
    return(
        <div className="mt-12 flex flex-col p-2 md:p-0 md:flex-row me:w-full  me:justify-center  gap-5 me:gap-32 ">
            <div className="w-full me:w-fit flex justify-center md:justify-start ">
               <Image src="/BOTM.jpg" alt="BOTM" width={260} height={400} className="object-cover w-[260px] h-[400px] me:w-[350px] me:h-[480px]" priority />

            </div>
            <div className="flex flex-col justify-center md:justify-start items-center md:items-start gap-3 max-w-[460px] me:max-w-[550px]">
                <h1 className="text-center  text-gray-600 text-[18px]">Book of the month</h1>
                <h1 className={gabarito.className + "text-left w-full text-2xl me:text-3xl Cyan"}>Saint Paul: The Sanit's life</h1>
                <p className="text-left w-full font-bold">By Abel Kassahun</p>
                <p className={gantari.className + "text-[12px] me:text-[16px] text-left w-full "}>A book by diakon and preacher Abel kassahun about the Great saint Paul. Its based on the story of the saint and its contribution to the church.</p>
                <button className="fancyBorder rounded-full py-2 px-8 me:py-1 me:px-10 mt-5 me:mt-8">Add to shelf</button>
            </div>
        </div>
    )
}