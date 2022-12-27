import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setAddress } from '../../../app/store/addressSlice'
import { useDeleteAddressMutation, useGetAddressQuery, useLazyGetAddressQuery } from '../../../app/store/apiSlice'
import { setAddressId } from '../../../app/store/repairOrederSlice'
import BookRepairLayout from '../../../components/Layout/BookRepairLayout'


const useAddress = () => {

    const router = useRouter()
    const dispatch = useDispatch()
    const [get, { data, error, isLoading }] = useLazyGetAddressQuery()
    const [deleteAddress, { data: deleted, error: deletetionError, isLoading: deleting }] = useDeleteAddressMutation()
    useEffect(() => {
        get()
    }, [])
    useEffect(() => {
        console.log(data);
        if (error?.status == 404) router.replace('address/add')
    }, [error])
    useEffect(() => {
        if (deleted) {
            get()
        }
    }, [deleted])
    

    return [deleteAddress, { data, isLoading, deleting }]
}

export default function Address() {
    const router = useRouter()
    const dispatch = useDispatch()
    const [deleteAddress, { data, isLoading, deleting }] = useAddress()
    useEffect(() => {
        if (data instanceof Array && data[0]?._id) setSelected(data[0]._id)

    }, [data])
    // const { data, error, isLoading } = useGetAddressQuery()
    // const [deleteAddress, { data: deleted, error: deletetionError, isLoading: deleting }] = useDeleteAddressMutation()
    // useEffect(() => {
    //     console.log(data);
    //     if (error?.status == 404) router.replace('address/add')
    //     if (data instanceof Array && data[0]?._id) setSelected(data[0]._id)
    // }, [data, error])
    const [selected, setSelected] = useState()


    const handleContinue = () => {
        dispatch(setAddressId(selected))
        dispatch(setAddress(data.find(ele=>ele._id==selected)))
        router.push('/book-a-repair/review')
    }

    return (
        <>
            <h2 className='font-light text-4xl text-darkLight mb-8 cursor-pointer'>Book a repair</h2>
            <div href='/book-a-repair/address/get' className='flex items-center mb-6' onClick={() => router.push('/book-a-repair/address/add')}>
                <img src='/plus.webp' alt="" className='w-12' />
                <p>Add new address</p>
            </div>
            {
                data?.map(({
                    _id,
                    addressType,
                    phoneNumber,
                    area,
                    plotNumber,
                    landmark,
                    city,
                    state,
                    pincode

                }) => <div className="mb-6 white-glass p-4 sm:p-8 rounded-xl" key={_id} onClick={() => { setSelected(_id) }}>
                        <div className="flex flex-col sm:flex-row">
                            <div className="left">
                                <div className="flex items-center mb-2">
                                    <input type="radio" name="" id="" checked={selected == _id} />
                                    <h3 className='ml-2 text-primary font-medium text-xl'>{addressType} Address</h3>
                                </div>
                                <p className='text-gray-500 mb-2'>{`${plotNumber}, ${area} ,${city}, ${state} - ${pincode}`}</p>
                                <p className='text-gray-500 mb-2'><b>Mobile: </b>{phoneNumber}</p>
                            </div>
                            <div className="right sm:w-28 w-full flex justify-end sm:block">
                                <img src="/options.svg" alt="" className='w-12 h-12 sm:mb-4 mr-4' />
                                <img src="/trash.svg" alt="" className='w-14 h-14 sm:mb-4 mr-4' onClick={() => { deleteAddress(_id) }} />
                            </div>
                        </div>
                    </div>)

            }
            <button className='brand-btn' onClick={handleContinue}>
                Continue
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </button>
        </>
    )
}


Address.getLayout = function (page) {
    return (
        <BookRepairLayout>
            {page}
        </BookRepairLayout>
    )
}


