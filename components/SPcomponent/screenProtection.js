
import React, { useState } from "react";
import { Router, useRouter } from "next/router";



const steps = [
    { link: '/screen-protection/form', name: "Detail section" },
    
  ]
  

export default function ScreenProtection() {
  return (
    <>
      <div className="grid grid-cols-2 m-14 justify-items-center ">
        <img 
          src="/ScreenProtection/sp.png"
          alt="image"
          width="700px"
          height="630px"
        />
        <div className="mt-12">
          <div className="">
            <h2 className="slider_title inline">
              Why <span>DEVICECURE</span>
            </h2>
            <div className="flex flex-1 w-64 ...">
              <div className="flex flex-row ">
                <div className="flex flex-row ">
                  <img src="/ScreenProtection/image8.svg" alt="image" />
                  <div className="flex flex-col">
                    <h3>DoorStep Service </h3>
                    <p>loremdbbsdba</p>
                  </div>
                </div>
                <div className="flex flex-row mx-32">
                  <img src="/ScreenProtection/image8.svg" alt="image" />
                  <div className="flex flex-col">
                    <h3>DoorStep Service </h3>
                    <p>loremdbbsdba</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-14 mr-24" >
            <div className="slider_title inline ">
              Why <span>DEVICECURE</span>
            </div>
            <div className="flex flex-1 w-64 ...">
              <div className="flex flex-row">
                <div className="flex flex-row">
                  <img src="/ScreenProtection/image8.svg" alt="image" />
                  <div className="flex flex-col">
                    <h3>DoorStep Service </h3>
                    <p>loremdbbsdba</p>
                  </div>
                </div>
                <div className="flex flex-row mx-32">
                  <img src="/ScreenProtection/image8.svg" alt="image" />
                  <div className="flex flex-col">
                    <h3>DoorStep Service </h3>
                    <p>loremdbbsdba</p>
                  </div>
                </div>
              </div>
            </div>
            <button className="brand-btn mt-14 relative right-10 " onClick={() => router.push('/screen-protection/form')}>
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
          </div>
        </div>
      </div>
     
    </>
  );
}
