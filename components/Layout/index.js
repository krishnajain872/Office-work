import React from "react";
import Transition from "../transitions";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Transition>{children}</Transition>
      <Footer />
    </>
  );
}
