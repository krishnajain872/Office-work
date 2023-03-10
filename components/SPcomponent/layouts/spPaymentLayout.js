import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Transition from "../../transitions";

const steps = [
  { link: '/screen-protection-form/form', name: "form" },
  { link: "/book-a-repair/address", name: "Address Details" },
  { link: "/book-a-repair/review", name: "Review Details" }
]

export default function formLayout({ children }) {
  // const router = useRouter()
  const activeIndex = steps.indexOf
  return (
    <Transition>
      <div className="sp_bg">
        <div className="container">
          <div className="grid grid-cols-12 gap-4 w-full py-12">
            <a href="#" className="col-span-12">
              <img src="/logo_full_land.png" alt="brand_logo " className='block md:hidden w-60 mx-auto mb-6' />
            </a>
            <div className="col-span-12 xl:col-span-3 lg:col-span-4 white-glass-repair pt-6 pb-6 lg:pb-2 lg:py-16 px-6 rounded-xl flex lg:flex-col  items-center justify-between">
              <Link href="/" className="hidden  lg:block"><img src="/logo_full_land.png" alt="" className="w-52 cursor-pointer hidden md:block" /></Link>

              <div className="flex items-center lg:mb-4">
                <div className="step Complete"><p>1</p></div>
                <p className="hidden lg:block">Device Details</p>
              </div>
              <div className="flex items-center lg:mb-4">
                <div className="step Complete"><p>2</p></div>
                <p className="hidden lg:block">See plans</p>
              </div>
              <div className="flex items-center lg:mb-4">
                <div className="step"><p>3</p></div>
                <p className="hidden lg:block">Payment</p>
              </div>
            </div>
            <div className="col-span-12 xl:col-span-9 lg:col-span-8 white-glass-repair py-6 md:py-20 px-6 rounded-xl stop_at_point">
              <div>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}
