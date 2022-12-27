import VerifyNumber from "../../components/auth/VerifyNumber";
import React, { useEffect } from "react";
import { setPhone } from "../../app/store/authSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { firebase, auth, setVerify } from "../../app/firebaseAuth";

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const err = router.query.err;

  const onSubmit = (e) => {
    e.preventDefault();
    const phone = e.target.phone.value;
    let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container");

    router.prefetch(`${router.pathname}/verify`);

    auth
      .signInWithPhoneNumber("+91" + phone, verify)
      .then((res) => {
        verify.clear();
        setVerify(res);
        router.replace(`${router.pathname}/verify`);
      })
      .catch((err) => {
        alert(err);
      });
    dispatch(setPhone(phone));
  };
  return (
    <VerifyNumber formTitle="Sign In" err={err} onSubmitHandler={onSubmit} />
  );
}
