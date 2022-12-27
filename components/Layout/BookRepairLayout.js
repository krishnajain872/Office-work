import Link from "next/link";
import { useRouter } from "next/router";
import React, {useEffect} from "react";
import Transition from "../transitions";
import Lottie from "lottie-react";
import lottieAnimation from "/public/under-construction.json"
import lottieError from "/public/error-message.json"

const steps = [
  { link: '/book-a-repair', name: "Detail section" },
  { link: "/book-a-repair/address", name: "Address Details" },
  { link: "/book-a-repair/review", name: "Review Details" }
]

export default function BookRepairLayout({ children }) {
  const router = useRouter()
  const activeIndex = steps.indexOf
  return (
    <Transition>
      {/* <div className="container py-8">
        <div className="grid grid-cols-12 gap-6 place-items-center">
          <div className="col-span-12 lg:col-span-6">
            <h1 className="brand-heading text-center lg:text-left mb-6">page under <span>construction!</span></h1>
            <p className='text-secondary text-xl mb-6 text-center lg:text-left'>For Book A Repair Download Our App</p>
            <a href="https://play.google.com/store/apps/details?id=com.app.devicecure">
              <img src="/googleplay.png" alt="" className='max-w-[300px] w-4/5 mx-auto lg:mx-0' />
            </a>
            <div className="flex justify-center lg:justify-start">
            <Link href="/">
              <button className="brand-btn mt-6">Go Back</button>
            </Link>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <Lottie animationData={lottieAnimation} loop={true}  width={"100%"}/>
          </div>
        </div>
      </div> */}
      {/* <div id="toast-danger" className="flex fixed top-[10px] right-[10px] items-center p-3 mb-4 w-10/12 max-w-xs text-gray-500 bg-[#ffffffbd] backdrop-blur-lg rounded-lg" role="alert">
        <Lottie animationData={lottieError} loop={true} width={"20px"} />
        <div className="ml-3 text-sm font-normal text-red-400">Item has been deleted.</div>
        <button type="button" className="ml-auto text-secondaryLight hover:text-gray-900 rounded-lg  p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 " data-dismiss-target="#toast-danger" aria-label="Close">
          <span className="sr-only">Close</span>
          <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
      </div> */}
      <div className="book_a_repair_bg">
        <div className="container">
          <div className="grid grid-cols-12 gap-4 w-full py-12">
            <a href="#" className="col-span-12">
              <img src="/logo_full_land.png" alt="brand_logo " className='block md:hidden w-60 mx-auto mb-6' />
            </a>
            <div className="col-span-12 xl:col-span-3 lg:col-span-4 white-glass-repair pt-6 pb-6 lg:pb-2 lg:py-16 px-6 rounded-xl flex lg:flex-col  items-center justify-between">
              <Link href="/" className="hidden  lg:block"><img src="/logo_full_land.png" alt="" className="w-52 cursor-pointer hidden md:block" /></Link>

              <div className="flex items-center lg:mb-4">
                <div className="step Complete"><p>1</p></div>
                <p className="hidden lg:block">Details Section</p>
              </div>
              <div className="flex items-center lg:mb-4">
                <div className="step active"><p>2</p></div>
                <p className="hidden lg:block">Address Details</p>
              </div>
              <div className="flex items-center lg:mb-4">
                <div className="step"><p>3</p></div>
                <p className="hidden lg:block">Review Details</p>
              </div>
            </div>
            <div className="col-span-12 xl:col-span-9 lg:col-span-8 white-glass-repair py-6 md:py-16 px-6 rounded-xl stop_at_point">
              <div>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}
