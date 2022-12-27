import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";

export default function SignUp({ formTitle, onSubmit }) {
 

  return (
    <div className="authBg" style={{background: `url(/authbg.webp) no-repeat center center/cover`}}>
      <div className="container">
        <div className="grid grid-cols-12 gap-4 w-full py-12">
          <div className="col-span-12 md:col-start-1 md:col-end-7 lg:col-start-1 lg:col-end-4">
            <div className="flex justify-between items-center md:items-start flex-col h-full">
              <a href="#" className="mb-8">
                <img src="logo_full_land.png " alt="" className="w-60" />
              </a>
              <div className="social_login flex items-center md:items-start flex-col">
                <h3 className="text-white text-center md:text-left font-light text-3xl mb-6">
                  Continue With Google
                </h3>
                <a href="#">
                  <img src="googleAuth.png" alt="" className="w-60" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-start-9 lg:col-end-13 md:col-start-7 md:col-end-13">
            <div className="w-full">
              <div className="black-glass py-12 px-8 rounded-lg">
                <h3 className="auth-title mb-8 text-white text-4xl font-light">
                  {formTitle}
                </h3>

                <form
                  action=""
                  autoComplete="off"
                  className="traplace"
                  onSubmit={onSubmit}
                >
                  <input
                    type="text"
                    name="name"
                    required
                    minLength={3}
                    autoComplete="off"
                    placeholder="Enter Your Name"
                    className="text-white white-glass w-full p-4 outline-none focus:outline-none mb-8 rounded-md"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="off"
                    placeholder="Enter Your Email"
                    className="text-white white-glass w-full p-4 outline-none focus:outline-none mb-8 rounded-md"
                  />
                  <p className="text-white mb-4">
                    By continuing, you agree to Devicecure&apos;s
                    <a href="staging.devicecure.in/terms-conditions" className="text-blue-400">
                      &nbsp;Conditions of Use&nbsp;
                    </a>
and
                    <a href="staging.devicecure.in/privacy-policy" className="text-blue-400">
                      &nbsp; Privacy Notice.
                    </a>
                  </p>
                  <button className="brand-btn" type="submit">
                    Create account
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


