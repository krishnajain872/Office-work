import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../app/store/apiSlice";
import { setAuth } from "../app/store/authSlice";
import SignUp from "../components/auth/SignUp";

export default function Register() {
  const firebaseIdToken = useSelector((s) => s.auth.firebaseIdToken);
  const [register, { data, error, isLoading }] = useRegisterMutation();
  const router = useRouter();
  const dispatch = useDispatch()

  useEffect(() => {
    if (!firebaseIdToken) {
      router.replace("/signin");
      dispatch(setAuth)
    }
  }, [firebaseIdToken]);

  useEffect(() => {
    console.log(data,error);
    if (data) {
      // dispatch(setAuth(data))
      router.replace("/");
    }
  }, [data,error]);
  const handleFormSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email;
    const name = e.target.name;
    register({
      email,
      name,
      firebaseIdToken,
    });
  };

  return <SignUp formTitle="Sign Up" onSubmit={handleFormSubmit} />;
}



Register.getInitialProps = ({res,user})=>{
  if (res) {
    res.writeHead(307, { Location: '/signin' })
    res.end()
}
return {}
}