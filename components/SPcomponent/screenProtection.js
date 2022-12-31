import React, { useState } from "react";
import { Router, useRouter } from "next/router";
import Link from "next/link";

const steps = [
  { link: "/screen-protection/form", name: "Form" },
  { link: "/screen-protection/Plan", name: "Plan" },
  { link: "/screen-protection/Payment", name: "Payment" },
  { link: "/screen-protection/Reciept", name: "Reciept" },
];

export default function ScreenProtectioncomp() {
  return (
    <>
      <div className="flex flex-row flex-wrap gap-x-3 items-center justify-evenly content-center m-10 ">
        <div className="xl:ml-48 xl:mr-28  2xl:ml-auto 2xl:mr-28    mx-10 ">
          <img
            src="/ScreenProtection/sp.png"
            alt="image"
            width="630px"
            height="100px"
          />
        </div>
        <div className=" text-slate-600 mb-6 my-10 mx-6 xl:mr-auto   xl:ml-34">
          <div className="mb-4  static xl:relative    xl:right-28 ">
            <h2 className="slider_title m-0 ">
              WHY <span className="animate-pulse animation-delay-3000 ">DEVICECURE</span>
            </h2>
            <div className="flex flex-1 font-light">
              <div className="flex flex-row flex-wrap">
                <div className="flex flex-row flex-wrap m-2 ">
                  <img
                    className="m-2  "
                    width="60px"
                    height="60px"
                    src="/ScreenProtection/image 9.svg"
                    alt="image"
                  />
                  <div className="flex flex-col ">
                    <h3 className="m-2 mb-0 text-lg font-medium">
                      DOORSTEP SERVICES 
                    </h3>
                    <p className="m-2 mt-0 text-sm w-48">
                      Pick Up & Delivery Right At Your Doostep
                    </p>
                  </div>
                </div>
                <div className="flex flex-row flex-wrap">
                  <img
                    className="m-2 mb-3"
                    src="/ScreenProtection/image8.svg"
                    width="60px"
                    height="60px"
                    alt="image"
                  />
                  <div className="flex flex-col ">
                    <h3 className="m-2 mb-0 ml-2 text-lg font-medium">
                      SCREEN REPLACEMENT
                    </h3>
                    <p className="m-2 mt-0 text-sm w-48">
                      Cover Against Cracked Mobile Screen
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 ">
            <div className="slider_title inline ">
              WHAT'S NOT <span className="animate-pulse animation-delay-1000">COVERED</span>
            </div>
            <div className="flex flex-1 font-light ">
              <div className="flex flex-row flex-wrap">
                <div className="flex flex-row flex-wrap">
                  <img
                    className="m-2"
                    width="70px"
                    height="70px"
                    src="/ScreenProtection/image 9-1.svg"
                    alt="image"
                  />
                  <div className="flex flex-col">
                    <h3 className="m-2 mb-0 text-lg font-medium">
                      THEFT OR LOSS{" "}
                    </h3>
                    <p className="m-2 mt-0 text-sm w-48">
                      If Your Mobile Stolen,You Are Not Coverd
                    </p>
                  </div>
                </div>
                <div className="flex flex-row">
                  <img
                    className="m-2"
                    width="70px"
                    height="70px"
                    src="/ScreenProtection/image8.svg"
                    alt="image"
                  />
                  <div className="flex flex-col">
                    <h3 className="m-2 mb-0 text-lg font-medium">
                      UNAUTHORIZED REPAIR
                    </h3>
                    <p className="m-2 mt-0 text-sm w-48 ">
                      When You Decide To Repair Your Mobile Yourself,But Why
                      Would You Do That?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row-end-3 xl:relative -left-32" >
              <Link  href="/screen-protection/Form">
                <button className="brand-btn m-14 ml-0 animate-bounce ">
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
      </div>
    </>
  );
}
