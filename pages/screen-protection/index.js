import React from 'react';
import Layout from "./../../components/Layout/index";
import ScreenProtectioncomp from "./../../components/SPcomponent/screenProtection";
import ScreenProtection from "./../../components/SPcomponent/form";
export default function index() {

  return (
    <>
    <ScreenProtectioncomp/>
    <ScreenProtection/>
    </>
  )
}

index.getLayout = function getLayout(page){
  return <Layout>{page}</Layout>
}