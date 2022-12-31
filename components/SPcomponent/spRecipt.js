import { useRouter } from "next/router";
import React, { useState } from "react";
import mobile from "../../app/utils/brands.json";
import Creatable from "react-select/creatable";
import Select from "react-select";
import { useRef } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setPhoneDetail } from "../../app/store/screenProtectionSlice";
import DatePicker from "react-datepicker";
import { Input } from "postcss";

export default function Reciept() {
  return (
    <>
      <div className="col-span-12 xl:col-span-9 lg:col-span-8 bg-white py-6 md:py-10  rounded-xl stop_at_point px-auto ">
        <div className=" flex flex-col items-center pl-8 ">
          <img
            class="w-48 h-24 md:rounded-full animate-pulse animation-delay-3000   "
            //
            src="/ScreenProtection/payment.png"
            alt=""
            width="384"
            height="512"
          />
          <p className="m-2 ml-8 mb-0 text-stone-500 font-light text-large ">
            Your Screen Protection Plan Buy Successfully{" "}
          </p>
          <p className="m-2 ml-8 mb-0 text-stone-500 font-light text-large ">
            <span className="text-stone-800 text-xl font-medium">AMC Id:</span>
            AMC1050
          </p>

          <p className="m-2 ml-8 mb-0 text-stone-500 font-light text-sm">
            10:20AM 26 Apr 2022
          </p>
          <p className="m-2 ml-8 mb-0 text-stone-500 font-light">
            <span className="text-stone-600 text-xl font-medium animate-pulse">
              Mobile Protection For Asus Zenfine 5
            </span>
          </p>
          <p className="m-2 ml-8 mb-0 text-stone-500 font-light text-sm">
            10:20AM 26 Apr 2022
          </p>
          <p className="m-2 ml-8 mb-0 text-stone-500 font-light text-large">
            <span className="text-stone-800 text-xl font-medium ">Amount:</span>
            `$799
          </p>
          <p className="m-2 ml-8 mb-0 text-stone-500 font-light text-large">
            <span className="text-stone-700 text-xl font-medium">Order Id:</span>
            12ed13e13e1d3ee c3
          </p>
          <p className="m-2 ml-8 mb-0 text-stone-500 font-light text-large">
            <span className="text-stone-800 text-xl font-medium">Payment Id:</span>
            aCScsaxsacasxweqxas
          </p>
        </div>
        <div className="grid grid-cols-2 grid-flow-col  items-center p-0 m-6 ">
          <div className="m-4 pt-4 hover:wiggle">
            <a href="/"  style={{ color: "#561E9D" }} >
              Ok
            </a>
          </div>
          <div className="ml-10">
          <Link href="/screen-protection/Plan">
          <button className="brand-btn  h-12 animate-bounce animation-delay-1000">
                  See Details
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 inline"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                  </button>
          </Link>
          </div>
        </div>
      </div>
    </>
  );
}

 