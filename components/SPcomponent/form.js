import Link from "next/link";
import { useRouter } from "next/router";
import React, {useEffect} from "react";
import Transition from "../transitions";
import Creatable from 'react-select/creatable';import Select from 'react-select';

const steps = [
  { link: '/screen-protection', name: "Detail section" },
  { link: "/screen-protection/form", name: "form" },
  { link: "/book-a-repair/review", name: "Review Details" }
]
const handleContinue = (e) => {
    e.preventDefault()
    const brand = brandRef.current?.getValue()[0]?.value
    const model = modelRef.current?.getValue()[0]?.value
    const invoice_amount = colorRef.current?.getValue()[0]?.value
    const purchase = issuesRef.current?.getValue()
    const deviceIMEI  = timeSlotRef.current?.getValue()[0]?.value
}

const children = (<> 

      <h2 className="font-extrabold text-4xl text-[#39393999] mb-8">Protection Plan</h2>
      <div className="form_group">

        <form onSubmit={handleContinue}>
          <div className="grid grid-cols-12 gap-4 mb-8 traplace">
            <div className="col-span-12 md:col-span-6 multiseletform">
              <Creatable
                ref=""  
                options="{mobiles.map(({ name }) => ({ value: name, label: name }))}"
                // onChange={({ value }) => { (setBrandModel(mobiles.find((m) => m.name == value)?.models?.map((name) => ({ value: name, label: name })))) }}
                placeholder="Select Brand"
                className="book-form-container"
                classNamePrefix="book-form"
              />
            </div>
            <div className="col-span-12 md:col-span-6 multiseletform">
              <Creatable
                ref=''
                options=''
                placeholder="Select Model"
                className="book-form-container"
                classNamePrefix="book-form"
              />
            </div>
            <div className="col-span-12 multiseletform">
              <Select
                ref=''
                options=''
                placeholder="Select Color"
                className="book-form-container"
                classNamePrefix="book-form"
              />
            </div>
            <div className="col-span-12 md:col-span-12 multiseletform">
              <Creatable
                ref=''
                options= ''
                isMulti
                placeholder="Issue with Device"
                className="book-form-container"
                classNamePrefix="book-form"
              />
            </div>
            <div className="col-span-12 md:col-span-6 multiseletform relative">
              {/* <input type="date" name="" className="w-full black-glass-repair" id="" /> */}
              {/* <DatePicker selected='' placeholderText="Enter Date" className="w-full black-glass-repair" onChange={(date = new Date()) => setStartDate(date)} minDate={minDate} maxDate={maxDate} excludeDates={[new Date("Dec 26, 2022")]}  dateFormat="MMMM d, yyyy"  /> */}
            </div>
            <div className="col-span-12 md:col-span-6 multiseletform">
              <Select
                ref=""
                // options={timeSlots.map(({ slot, _id }) => ({ value: _id, label: slot }))}
                placeholder="Select Time"
                className="book-form-container"
                classNamePrefix="book-form"
              />
            </div>
          </div>
          <button
            className="brand-btn"
            onClick={handleContinue}
            type="submit"
          >
            Continue
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
        </form>

      </div>
    </>
)

export default function ScreenprotectionFormLayout() {
  const router = useRouter()
  const activeIndex = steps.indexOf
  return (
    <Transition>
    
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
