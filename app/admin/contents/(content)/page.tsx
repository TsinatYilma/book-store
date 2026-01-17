import "@/app/globals.css";
import { gabarito, gantari } from "@/app/ui/fonts";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col mt-8">
      <div className="flex justify-between items-center p-2">
        <h1 className="font-bold text-2xl text-[#0AA0A1]">Books Information</h1>
        <div className="fancyBorder flex justify-center items-center gap-2 px-2">
          <PencilSquareIcon className="w-[16px] h-[16px]" />
          <span className="">Edit</span>
        </div>
      </div>
      <div className="mt-12 flex flex-col p-2 md:flex-row me:w-full  px-5  gap-10 ">
        <div className="w-full me:w-fit flex justify-center md:justify-start ">
          <Image
            src="/BOTM.jpg"
            alt="BOTM"
            width={160}
            height={230}
            className="object-cover w-[160px] h-[230px] me:w-[160px] me:h-[230px]"
            priority
          />
        </div>
        <div className="flex flex-col justify-center md:justify-start items-center md:items-start gap-3 max-w-[460px] me:max-w-[550px] text-[22px] font-gantari">
          <div className="flex flex-col gap-3">
            <p className="text-gray-500 text-sm">Books Name</p>
            <p className="text-left w-full font-bold">Saint Paul</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-gray-500 text-sm">Authors Name</p>
            <p className="text-left w-full font-bold">By Abel Kassahun</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-gray-500 text-sm">Short Description</p>
            <p className="text-left w-full font-bold">
              A brief overview of the book's content and themes.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-gray-500 text-sm">About</p>
            <p
              className={`${gantari.className} text-[12px] me:text-[16px] text-left w-full `}
            >
              A book by diakon and preacher Abel kassahun about the Great saint
              Paul. Its based on the story of the saint and its contribution to
              the church.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
