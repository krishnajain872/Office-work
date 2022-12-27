import { useRouter } from "next/router";
import React, { useState } from "react";
import BookRepairLayout from "../../components/Layout/BookRepairLayout";
import mobile from "../../app/utils/brands.json";
import issue from "../../app/utils/issues.json";
import Creatable from 'react-select/creatable';
import Select from 'react-select';
import { useGetRepairDataQuery } from "../../app/store/apiSlice";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setDetails } from "../../app/store/repairOrederSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function BookARepair({ options }) {
  const { colors, currentDate, issues, mobiles, timeSlots } = options;
  const router = useRouter();
  const dispatch = useDispatch()
  const [brandModel, setBrandModel] = useState([])

  const brandRef = useRef(null)
  const modelRef = useRef(null)
  const colorRef = useRef(null)
  const issuesRef = useRef(null)
  const timeSlotRef = useRef(null)
  const dateRef = useRef(null)



  const handleContinue = (e) => {
    e.preventDefault()
    const brand = brandRef.current?.getValue()[0]?.value
    const model = modelRef.current?.getValue()[0]?.value
    const color = colorRef.current?.getValue()[0]?.value
    var issues = issuesRef.current?.getValue()
    const timeSlotId  = timeSlotRef.current?.getValue()[0]?.value
    
    
    if(!(brand && model && color && issues?.length>0 && timeSlotId)) return alert("Please enter all fields")
    issues = issues.map(i=>i.value)
    dispatch(setDetails({
      mobile: {
        brand, model, color
      },
      issues,
      timeSlotId,
      repairDate:JSON.stringify(startDate).split("T")[0]
    }))
    router.replace("/book-a-repair/address")



  }
  // const { data: options, error, isLoading } = useGetRepairDataQuery()
  // this area is  for datepicker 
  const [startDate, setStartDate] = useState(new Date());
  const holidays = [
    new Date (26, 12, 2022),
  ];
  const minDate = new Date();
  const maxDate = new Date(new Date().setDate(new Date().getDate() + 7))
  // end here 
  return (
    <>
      <h2 className="font-extrabold text-4xl text-[#00000099] mb-8">Book a repair</h2>
      <div className="form_group">

        <form onSubmit={handleContinue}>
          <div className="grid grid-cols-12 gap-4 mb-8 traplace">
            <div className="col-span-12 md:col-span-6 multiseletform">
              <Creatable

                ref={brandRef}
                options={mobiles.map(({ name }) => ({ value: name, label: name }))}
                onChange={({ value }) => { (setBrandModel(mobiles.find((m) => m.name == value)?.models?.map((name) => ({ value: name, label: name })))) }}
                placeholder="Select Brand"
                className="book-form-container"
                classNamePrefix="book-form"
              />
            </div>
            <div className="col-span-12 md:col-span-6 multiseletform">
              <Creatable
                ref={modelRef}
                options={brandModel}
                placeholder="Select Model"
                className="book-form-container"
                classNamePrefix="book-form"
              />
            </div>
            <div className="col-span-12 multiseletform">
              <Select
                ref={colorRef}
                options={colors.map(({ name }) => ({ value: name, label: name }))}
                placeholder="Select Color"
                className="book-form-container"
                classNamePrefix="book-form"
              />
            </div>
            <div className="col-span-12 md:col-span-12 multiseletform">
              <Creatable
                ref={issuesRef}
                options={issues.map(({ name }) => ({ value: name, label: name }))}
                isMulti
                placeholder="Issue with Device"
                className="book-form-container"
                classNamePrefix="book-form"
              />
            </div>
            <div className="col-span-12 md:col-span-6 multiseletform relative">
              {/* <input type="date" name="" className="w-full black-glass-repair" id="" /> */}
              <DatePicker selected={startDate} placeholderText="Enter Date" className="w-full black-glass-repair" onChange={(date = new Date()) => setStartDate(date)} minDate={minDate} maxDate={maxDate} excludeDates={[new Date("Dec 26, 2022")]}  dateFormat="MMMM d, yyyy"  />
            </div>
            <div className="col-span-12 md:col-span-6 multiseletform">
              <Select
                ref={timeSlotRef}
                options={timeSlots.map(({ slot, _id }) => ({ value: _id, label: slot }))}
                placeholder="Select Time"
                className="book-form-container"
                classNamePrefix="book-form"
              />
            </div>
          </div>
          <button
            className="brand-btn"
            // onClick={handleContinue}
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
  );
}

BookARepair.getLayout = function (page) {
  return <BookRepairLayout>{page}</BookRepairLayout>;
};


export async function getStaticProps() {
  const res = await fetch('https://api.devicecure.in/data/repair')
  const options = await res.json()
  return {
    props: {
      options,
    },
  }
}
