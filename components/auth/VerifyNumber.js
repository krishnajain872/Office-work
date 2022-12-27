// https://drive.google.com/uc?export=view&id=1d47mwg7MgrRhZBFqEjcPqXf2a0rTcfRX

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const RecaptchaContainer = React.memo(function CaptchaContainer() {
  return (
    <div
      id="recaptcha-container"
      style={{
        margin: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    />
  );
});


export default function VerifyNumber({ formTitle, onSubmitHandler, err }) {
    const router = useRouter();
    const [phone, setPhone] = useState("");
    const phoneInputHandler = ({ target: { value: num } }) => {
      if (( num.length < 11) || num === "") {
        setPhone(num);
      }
    };
    const canSubmit = phone.length == 10;
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (canSubmit) {
        onSubmitHandler(e);
      }
    };
  return (
    <div className="authBg" style={{
      background: `url(${"/authbg.webp"})no-repeat center center/cover`,
    }}>
      <div className="black-glass py-12 px-8 rounded-lg max-w-xl w-11/12">
        <h3 className="auth-title mb-8 text-white text-4xl font-light">
          {formTitle}
        </h3>
        <form action="" autoComplete="off" onSubmit={handleSubmit}>
          <input
          
            required
            onChange={phoneInputHandler}
            value={phone}
            type="tel"
            maxLength={"10"}
            name="phone"
            inputMode="tel"
            autoComplete="tel"
            placeholder="Enter Your Mobile No"
            className="placeholder-white text-white white-glass w-full p-4 outline-none focus:outline-none mb-8 rounded-md"
          />
          {err && (
            <div
          
              className="white-glass text-red-700 px-4 py-3 rounded relative mb-8"
              role="alert"
            >
              {/* <strong className="font-bold">{err}</strong> */}
              <span className="block sm:inline"> {err}</span>
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => {
                router.replace(router.pathname, undefined, { shallow: true });
              }}>
                <svg
                  className="fill-current h-6 w-6 text-red-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>remove</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </div>
          )}
          <button className="brand-btn" disabled={!canSubmit}>
            Get OTP
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
          <RecaptchaContainer />
        </form>
      </div>
    </div>
  );
}
