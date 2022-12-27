import Router, { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { verify } from '../../app/firebaseAuth';
import { useLoginMutation } from '../../app/store/apiSlice'
import { setAuth, setFirebaseIdToken, setPhone } from "../../app/store/authSlice";
import VerifyOtp from '../../components/auth/VerifyOtp';
import OtpField from 'react-otp-field'

const useLogin = () => {
  const [otp, setOtp] = useState('');
  const router = useRouter();
  const redirectTo = useSelector((s) => s.ui.redirects.successLogin);
  const [login, { data, error, isLoading }] = useLoginMutation();
const dispatch = useDispatch()
  useEffect(() => {
    console.log(redirectTo);
    console.log(data);
    if (data?.token) {
      dispatch(setAuth(data))

      router.push(redirectTo || '/')
    }
  }, [data])
  return [login, { isLoading, error }]
}

export default function Verify() {

  const [otp, setOtp] = useState("");
  const [login, { isLoading, error }] = useLogin()
  const router = useRouter()
  const dispatch = useDispatch();
  const phone = useSelector((s) => s.auth.phone);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    try {
      if(!verify){
        return router.push(`/signin?err=Please enter your number`)
      }
      verify
        .confirm(otp)
        .then((result) => {
          result.user.getIdToken().then((firebaseIdToken) => {
            dispatch(setFirebaseIdToken(firebaseIdToken));
            console.log(firebaseIdToken);
            login({
              firebaseIdToken
            });
          });
        })
        .catch((err) => {
          alert("Wrong code");
        });
    } catch (err) {
      console.log(err);
      router.push("/signin/verify" + `?err=Something went wrong`);
    }
  };
  return (
    <div className="authBg" style={{
      background: `url(${"/authbg.webp"})no-repeat center center/cover`,
    }}>
      <div className="black-glass py-12 px-8 rounded-lg max-w-xl w-11/12">
        <h3 className="auth-title mb-8 text-white text-4xl font-light">
          {"Enter your OTP"}
        </h3>
        <form action="" autoComplete="off" onSubmit={onSubmitHandler}>
          <div className="mb-6">
            <OtpField
              value={otp}
              onChange={(v) => setOtp(v)}
              numInputs={6}
              onChangeRegex={/^([0-9]{0,})$/}
              autoFocus
              classNames='flex w-full otp_field gap-6'
              isTypeNumber
              inputProps={{ className: 'flex w-full', disabled: false }}
            />
          </div>
          <button className="brand-btn">
            Verify
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
    </div>)
}
