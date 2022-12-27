import Router, { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react'
import { useCreateAddressMutation } from '../../../app/store/apiSlice';
import BookRepairLayout from '../../../components/Layout/BookRepairLayout';

const AddAdderss = () => {
    const router = useRouter()
    const nameRef = useRef(null)
    const phoneRef = useRef(null)
    const altPhoneRef = useRef(null)
    const pincodeRef = useRef(null)
    const areaRef = useRef(null)
    const plotNumberRef = useRef(null)
    const landmarkRef = useRef(null)
    // const addressType - 
    const [create,{data,error,isLoading}] = useCreateAddressMutation()
    const handleContinue = ()=>{
        create( {
            "customerName" : nameRef.current.value,
            "phoneNumber" : phoneRef.current.value,
            "altPhoneNumber": altPhoneRef.current.value,
            "plotNumber" : plotNumberRef.current.value,
            "landmark": landmarkRef.current.value,
            "area" : areaRef.current.value,
            "pincode" : pincodeRef.current.value,
            "city" : "Jaipur",
            "state" : "Rajasthan",
            "addressType" : "HOME"
        })
        
    }

    useEffect(()=>{
        if(data) router.push('/book-a-repair/address')
    },[data])


    return (
        <>
            <h2 className="font-extrabold text-4xl text-[#00000099] mb-8">Add New Address</h2>
            <div className="form_group">
                <div className="grid grid-cols-12 gap-4 mb-8 traplace">

                    <div className="col-span-6"><input type="text" ref={nameRef} name="name" id="" className='w-full black-glass-repair' placeholder='Name' /></div>
                    <div className="col-span-6"><input type="text" ref={phoneRef} name="phone" id="" className='w-full black-glass-repair' placeholder='Mobile Number' /></div>
                    <div className="col-span-6"><input type="text" ref={altPhoneRef} name="altPhone" id="" className='w-full black-glass-repair' placeholder='Alternate Phone Number (optional)' /></div>
                    <div className="col-span-6"><input type="text" ref={pincodeRef} name="pincode" id="" className='w-full black-glass-repair' placeholder='Pincode' /></div>
                    <div className="col-span-12"><input type="text" ref={plotNumberRef} name="" id="" className='w-full black-glass-repair' placeholder='House NO. Apartment Name' /></div>
                    <div className="col-span-6"><input type="text" ref={areaRef} name="area" id="" className='w-full black-glass-repair' placeholder='Road, Area, Locality ' /></div>
                    <div className="col-span-6"><input type="text" ref={landmarkRef} name="" id="" className='w-full black-glass-repair' placeholder='Landmark (Optional)' /></div>
                    <div className="col-span-6"><input type="text" name="" id="" className='w-full black-glass-repair' placeholder='Landmark (Optional)' /></div>

                </div>
                <button
                    className="brand-btn"
                    onClick={handleContinue}
                    type="submit"
                >
                    Continue
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
            </div>
        </>
    )
}

AddAdderss.getLayout = function (page) {
    return <BookRepairLayout>{page}</BookRepairLayout>;
};

export default AddAdderss

