import React, { useState } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

import DevicecureLogo from "./Logo";
import { useRouter } from "next/router";
import navigation from '../../../app/utils/links.json'
import { useSelector } from "react-redux";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Header() {
  const router = useRouter();
  const { asPath: currentPath } = router;
  const {isLoggedIn:isAuth,name} = useSelector(s=>s.auth)
  const navTo = (href) => {
    router.push(href)
  }
  // this state is for mobile navigation 
  const [isType, setIsType] = useState('isService');
  const [newType, changeType] = useState(true);
  // end here 
  return (
    <>
      <Disclosure as="nav" className="brand_navbar sticky top-0 z-[99]">
        {({ open }) => (
          <>
            <div className="container">
              <div className="relative flex h-16 items-center justify-between">
                {/* <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div> */}
                {/* this area is for large screen navigation  */}
                <div className="flex flex-1 items-center lg:items-stretch lg:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <DevicecureLogo />
                  </div>
                  <div className="hidden lg:ml-6 lg:block">
                    <div className="flex space-x-4">
                      {navigation.map(({ name, href }) => {
                        const current = currentPath == href;
                        return (
                          <a
                            key={name}
                            onClick={() => { navTo(href) }}
                            className={classNames(
                              current ? "active text-primary" : "text-secondary",
                              "px-3 py-1 my-1 font-medium nav_link cursor-pointer"
                            )}
                            aria-current={current ? "page" : undefined}
                          >
                            {name}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
                {/* and this end here  */}
                {/* this area is for user sign up icon and user profile  */}
                {!isAuth && <button className="col-span-2" onClick={() => router.push('/signin')}> <img src="/login.svg" alt="login icon" className="opacity-70 w-[28px]" /></button>
                }
                {isAuth && <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full text-sm focus:outline-none  items-center gap-1 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <div className="w-[40px] h-[40px] flex items-center justify-center bg-primaryLight rounded-full">
                          <p className="font-bold text-xl text-primary">{name[0]}</p>
                        </div>
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </span>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item >
                          <div className="bg-primaryLight py-2 px-4 rounded-b-xl">
                            <p className="text-primary text-xl font-barnd_font ">Hii!</p>
                            <p className="text-secondary text-xs">{name}</p>
                          </div>
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              onClick={() => router.push('/myorder')}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "flex items-center px-4 rounded-md m-2 py-2 text-sm text-gray-700 cursor-pointer"
                              )}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-secondary mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                              </svg>
                              My Orders
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "flex items-center text-primary px-4 py-2 m-2 text-sm text-gray-700 rounded-md underline"
                              )}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                              </svg>
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>}
              </div>
              {/* and this and here  */}
            </div>
          </>
        )}
      </Disclosure>
      {/* this is the menu panel for mobile view   */}
      <div className="bottom-nav">
        <div className="container">
          <div className="tabing grid grid-cols-2 gap-1 bg-[#E3CDFF] p-1 mb-2 place-content-stretch rounded-md md:hidden">
            <button onClick={() => { setIsType('isService'); changeType(!newType) }} className={classNames(newType ? "bg-white text-primary" : "bg-transparent text-primary", "col-span-1 duration-500 text-center rounded-md py-1 text-[10px]")}>Services</button>
            <button onClick={() => { setIsType('isInfo'); changeType(!newType) }} className={classNames(newType ? "bg-transparent text-primary" : "bg-white text-primary", "col-span-1 duration-500 text-center rounded-md py-1 text-[10px]")}>Info</button>
          </div>
          <div className="flex items-center justify-between gap-2 md:gap-4">
            {navigation.map((item) => {
              const current = currentPath == item.href;
              return(
                <a
                  key={item.name}
                  onClick={() => { navTo(item.href) }}
                  aria-current={current ? "page" : undefined}
                  className={`${item.type}_link ${isType} selectNone`}
                  >
                  <div 
                    className={classNames(
                      current
                        ? "bottom-active bg-[#E3CDFF]"
                        : "bg-transparent", `md:py-4 md:px-4 py-0 px-0 w-[60px] h-[60px] md:w-auto md:h-auto md:rounded-md rounded-full flex md:flex-row flex-col justify-center items-center cursor-pointer duration-400`
                    )}
                  >
                    <img src={item.icon} alt={`${item.name} mobile icon`}
                      className={classNames(
                        current
                          ? "grayscale-0"
                          : "grayscale"
                        , "md:w-[16px] md:h-[16px] w-[26px] h-[26px] md:mr-2 mb-1 md:md-0 duration-400"
                      )}
                    />
                    <p
                      className={classNames(
                        current
                          ? "text-primary"
                          : "text-secondary"
                        , "text-[10px] md:text-[14px] font-normal duration-400"
                      )}
                    >
                      {item.nameMobile}
                    </p>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
      {/* and this is end here  */}
    </>
  );
}
