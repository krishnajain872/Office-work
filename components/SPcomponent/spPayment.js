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

export default function Payment() {
  const options = [
    {
      brand: { value: "Samsung", label: "Samsung" },
      model: { value: "note123", label: "note123" },
      invoiceAmount: { value: "50000", label: "500000" },
      Purchase: { value: "wqeq", label: "wqe" },
      iemi: { value: "vawqe", label: "qwe" },
    },
  ];

  const brandRef = useRef(null);
  const modelRef = useRef(null);
  const colorRef = useRef(null);
  const issuesRef = useRef(null);
  const timeSlotRef = useRef(null);
  const dateRef = useRef(null);

  const handleContinue = (e) => {
    e.preventDefault();
    const brand = brandRef.current?.getValue()[0]?.value;
    const model = modelRef.current?.getValue()[0]?.value;
    const color = colorRef.current?.getValue()[0]?.value;
    var issues = issuesRef.current?.getValue();
    const timeSlotId = timeSlotRef.current?.getValue()[0]?.value;
  };
  return (
    <>
      <h2 className="font-extrabold text-4xl text-[#00000099] mb-8">
        Protection Plan
      </h2>
      <div className="form_group">
        <form onSubmit={handleContinue}>
          <div className="grid grid-cols-12 gap-4 mb-8 traplace">
            <div className="col-span-12 md:col-span-6 multiseletform">
              <Creatable
                ref={brandRef}
                options={options.brand}
                onChange={({ value }) => console.log(value)}
                placeholder="Full Name"
                className="book-form-container"
                classNamePrefix="book-form"
              />
            </div>
            <div className="col-span-12 md:col-span-6 multiseletform">
              <Creatable
                ref={brandRef}
                options={options.brand}
                onChange={({ value }) => console.log(value)}
                placeholder="Email"
                className="book-form-container"
                classNamePrefix="book-form"
              />
            </div>

            <div className="col-span-12 md:col-span-12 multiseletform">
              <Creatable
                ref={brandRef}
                options={options.brand}
                onChange={({ value }) => console.log(value)}
                placeholder="Mobile Number"
                className="book-form-container"
                classNamePrefix="book-form"
              />
            </div>
            <div className="w-96" >
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600  bg-violet-200 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                // value={item.time}
                // name="time"
                // onChange={onChangeCheckBox}
                // id={item.time}
                // checked={item.checked}
              />
              <label
                for="link-checkbox"
                class="ml-2 text-sm font-medium  text-gray-900 dark:text-gray-300"
              >
                I agree with the{" "}
                <a
                  href="https://laravel.devicecure.in/terms-conditions"
                  class="text-blue-600 dark:text-blue-500 hover:underline "
                  style={{ color: "#561E9D" }}
                >
                  terms and conditions
                </a>
                .
              </label>

              {/* <p className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 inline-block"> */}
              {/* I am 18 year above and agree to all<span style={{ color: "#561E9D" }}> terms & conditions </span> */}
              {/* </p> */}
            </div>
          </div>
          <Link href="/screen-protection/Reciept">
            <button className="brand-btn" type="submit">
              Proceed To Payment
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
        </form>
      </div>
    </>
  );
}

// Form.getLayout = function (page) {

//   return <formLayout>{page}</formLayout>;
// };
