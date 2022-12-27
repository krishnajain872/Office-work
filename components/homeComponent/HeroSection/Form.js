import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import mobile from "../../../app/utils/brands.json";
import issue from "../../../app/utils/issues.json";
import { Dialog } from '@headlessui/react';
import { useGetRepairDataQuery } from "../../../app/store/apiSlice";
import Creatable from 'react-select/creatable';
import Select from 'react-select';

export default function Form({ options }) {
  const { colors, currentDate, issues, mobiles, timeSlots } = options;

  
  const [modelList, setModelList] = useState([]);
  const [modalVis, setModalVis] = useState(false)
  const { data, error, isLoading } = useGetRepairDataQuery()
  const [brandModel, setBrandModel] = useState([])

  const router = useRouter()
  const inpRef = useRef(null)
  return (
    <div className="w-full h-full relative overflow-hidden rounded-xl flex items-center" style={{ background: `url(/book_a_repair_bg.webp) no-repeat center center/cover` }}>

      {/* <video id="background-video" loop autoPlay muted data-autoplay className="w-full h-full object-cover absolute top-0 left-0 z-0">
        <source src={`/lottieform.mp4`} type="video/mp4" />
        bro update your browser
      </video> */}
      <div className="form_group w-full z-40 py-12 px-8">
        <div className="flex mb-8">
          {/* <button className="brand-btn mr-4 grow">Repair</button>
          <button className="brand-btn-secondary grow">
            Protection Plan
          </button> */}
          <h2 className="text-4xl font-extrabold text-[#00000099]">Book A Repair</h2>
        </div>
          <Creatable
          key={"1"}
            // options={mobiles.map(({ name,_id }) => ({ value: name, label: name, }))}
            onChange={({ value }) => { (setBrandModel(mobiles.find((m) => m.name == value)?.models?.map((name) => ({ value: name, label: name })))) }}
            placeholder="Select Brand"
            className="book-form-container w-full my-6"
            classNamePrefix="book-form"
          />


          <Creatable
          key={"2"}
            // options={brandModel}
            placeholder="Select Model"
            className="book-form-container w-full my-6"
            classNamePrefix="book-form"
          />


          <Creatable
          key={"3"}
            // options={issues.map(({ name }) => ({ value: name, label: name }))}
            isMulti
            placeholder="Issue with Device"
            className="book-form-container w-full my-6"
            classNamePrefix="book-form"
          />

       
          <button className="brand-btn" onClick={() => router.push('/book-a-repair/review')}>
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
      </div>
    </div >
  );
}
