import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Transition from "../transitions";

export default function Plan() {
  // const router = useRouter()
  return (
    <>
      <div
        className="grid grid-col col-span-4 justify-items-end mt-0 
justify-items: end"
      >
        <div className="bg-slate-100  rounded-full h-28 w-28 flex flex-row-2 justify-around  flex-wrap items-center content-center">
          <h2 class="font-semibold text-2xl" style={{ color: "#561E9D" }}>
            $ 799
          </h2>
          For 1 Year
        </div>
      </div>
      <div className="  ">
        <div className="m-2 ml-8 mb-0 text-stone-500 font-light text-2xl">
          <h2 className="mb-3">Mobile Protection For Asus</h2>
          <h3>Zenfone 5 Mobile</h3>
        </div>
        <p className="mb-1 mt-2 ml-8 text-slate-700">
          Best Plan For Secure Your Mobile Screen
        </p>
        <div className="mb-2 font-medium text-xl" style={{ color: "#561E9D" }}>
          <p className="mb-2 sm:ml-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
            One Time Screen Replacement
          </p>
          <p className="mb-2 sm:ml-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
           <span className="">
            Mobile Screen Protection Plan Cover Any Kind Of Screen Damage
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-around pb-6 m-4 flex-wrap ">
        <div className="flex flex-col items-center m-2">
          <img
            alt="image1"
            src="/ScreenProtection/chat.png"
            height="100px"
            width="100px"
          />
          <p>24/7 Chat Support</p>
        </div>
        <div className="flex flex-col items-center m-2">
          <img
            alt="image2"
            src="/ScreenProtection/delivery.png"
            height="120px"
            width="120px"
          />
          <p>Free Pickup & Delivery</p>
        </div>
        <div className="flex flex-col items-center m-2 ">
          <img
            alt="image3"
            src="/ScreenProtection/service.png"
            height="140px"
            width="140px"
          />
          <p>Authorised Service Center</p>
        </div>
      </div>
      <div className="mb-1 m-4">
        <figure class="md:flex white-glass-repair bg-slate-100 rounded-sm p-2 md:p-0 dark:bg-slate-800  ">
          <img
            style={{ top: "-40px", left: "30px" }}
            class="w-24 h-24  inline rounded-full relative top-0 sm:left-0"
            src="/test4.webp"
            alt=""
            width="384"
            height="512"
          />
          <div class="pt-6 md:p-3 text-center space-y-4">
            <figcaption class="font-semibold md:text-base md:font-medium">
              <div
                class="text-xl flex justify-start ml-7 "
                style={{ color: "#561E9D", marginTop: "-6px" }}
              >
                NAME OF THE PERSON
              </div>
              <div class="text-slate-700 flex justify-start ml-7 dark:text-slate-500">
                Ratings
              </div>
            </figcaption>
            <blockquote>
              <p className="text-slate-700  text-start overflow-y-scroll scrollbar-hide h-24 ">
                Tailwind CSS is the only framework that I've seen scale on large
                teams. It’s easy to customize, adapts to any design, and the
                build size is tiny wqhedquihdiqwhdh qhduiqw
                uidhqiquiqwhduiwqhdquui uqwh uiqiq hduiqwh uqh qwh ueiewhqiued
                hqwui uiqw ieuhwiqu hediwuq dhw sdnajsdb uawuidb iuduibuuxbubdub
                d hud xnuuin xnuxn uinuiw nxnui xuinxuinsxsu in uux ux hu xn
              </p>
            </blockquote>
          </div>
        </figure>
      </div>
    </>
  );
}
