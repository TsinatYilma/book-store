import "@/app/globals.css";
import {
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/outline";
import Link from "next/dist/client/link";
import { gabarito } from "./fonts";
export default function ContactUs() {
  return (
    <div className="font-gabarito flex flex-col items-center pt-10">
      <h1 className="font-bold text-cyan-500 text-2xl sm:text-3xl text-center my-5">
        Get in touch
      </h1>
      <p className="font-gabarito text-sm sm:text-md text-center mx-4 mb-5">
        We want to hear from you. let us know how we can help
      </p>
      <div className="flex flex-wrap justify-center gap-10 my-12 ">
        <div className="min-w-[300px] min-h-[190px] sm:min-h-[250px] rounded-lg bg-gradient-to-tr from-black-800 to-cyan-900 pl-5 flex flex-col justify-center gap-6 sm:gap-14 border-[0.15] border-gray-700">
          <div className="p-2 w-fit bg-black/60">
            <ChatBubbleLeftIcon className="h-[24px] w-[24px] text-cyan-600 " />
          </div>
          <div className="">
            <h1 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-b from-cyan-200 to-white">
              Chat to support
            </h1>
            <p className="text-gray-500">We are here to help</p>
            <Link href="">
              <p className="text-gray-500">bookfinder@gmail.com</p>
            </Link>
          </div>
        </div>
        <div className="min-w-[300px] min-h-[190px] sm:min-h-[250px] rounded-lg bg-gradient-to-tr from-black-800 to-cyan-900 pl-5 flex flex-col justify-center gap-6 sm:gap-14 border-[0.15] border-gray-700">
          <div className="p-2 w-fit bg-black/60">
            <ChatBubbleLeftIcon className="h-[24px] w-[24px] text-cyan-600 " />
          </div>
          <div className="">
            <h1 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-b from-cyan-200 to-white">
              Suggest a Book
            </h1>
            <p className="text-gray-500">Your support means a lot</p>
            <Link href="">
              <p className="text-gray-500">suggest a book</p>
            </Link>
          </div>
        </div>
        <div className="min-w-[300px] min-h-[190px] sm:min-h-[250px] rounded-lg bg-gradient-to-tr from-black-800 to-cyan-900 pl-5 flex flex-col justify-center gap-6 sm:gap-14 border-[0.15] border-gray-700">
          <div className="p-2 w-fit bg-black/60">
            <ChatBubbleLeftIcon className="h-[24px] w-[24px] text-cyan-600 " />
          </div>
          <div className="">
            <h1 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-b from-cyan-200 to-white">
              Call Us
            </h1>
            <p className="text-gray-500">Mon-Fri from 8am to 5pm</p>
            <Link href="">
              <p className="text-gray-500">+251 -943232445</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[320px] h-[450px] my-16">
        <h1 className="text-cyan-500 font-bold text-2xl text-center mb-5">
          Message us
        </h1>
        <form id="contactForm" className="mx-3 flex flex-col gap-5">
          <div className="relative">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="outline-2 text-sm placeholder:text-gray-500  rounded-lg w-full pl-10 h-[32px] sm:h-[40px] focus:outline-[#0AA1A1]"
            />
            <UserIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="outline-2 rounded-lg w-full pl-10 text-sm placeholder:text-gray-500 h-[32px] sm:h-[40px] focus:outline-[#0AA1A1]"
            />
            <EnvelopeIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          <div className="relative">
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              id="phone"
              className="outline-2 rounded-lg w-full pl-10 text-sm placeholder:text-gray-500 h-[32px] sm:h-[40px] focus:outline-[#0AA1A1]"
            />
            <PhoneIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          <div className="relative">
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              className="outline-2 rounded-lg w-full pt-1 pl-10 text-sm placeholder:text-gray-500 h-[110px] focus:outline-[#0AA1A1]"
            ></textarea>
            <EnvelopeIcon className="absolute left-3 top-1/8 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          <button
            type="submit"
            className="fancyBorder rounded-lg py-2 text-lg font-bold w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
