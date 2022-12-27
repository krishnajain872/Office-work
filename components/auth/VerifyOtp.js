import React, {useState} from 'react'
import OtpField from 'react-otp-field'
const VerifyOtp = ({formTitle}) => {
  const [value, setValue] = useState('');
  return (
    <div className="authBg" style={{
        background: `url(${"/authbg.webp"})no-repeat center center/cover`,
      }}>
        <div className="black-glass py-12 px-8 rounded-lg max-w-xl w-11/12">
          <h3 className="auth-title mb-8 text-white text-4xl font-light">
            {formTitle}
          </h3>
          <form action="" autoComplete="off">
            <div className="mb-6">
              <OtpField
                value={value}
                onChange={setValue}
                numInputs={6}
                onChangeRegex={/^([0-9]{0,})$/}
                autoFocus
                classNames='flex w-full otp_field gap-6'
                isTypeNumber
                inputProps={{ className: 'flex w-full', disabled: false }}
              />
            </div>
            <button className="brand-btn">
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
          </form>
        </div>
      </div>
  )
}
export default VerifyOtp