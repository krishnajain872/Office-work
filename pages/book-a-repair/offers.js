import React from 'react'
import BookRepairLayout from '../../components/Layout/BookRepairLayout'


export default function Offers() {
  return (
    <div>Offers</div>
  )
}


Offers.getLayout = function (page) {
    return (
        <BookRepairLayout>
            {page}
        </BookRepairLayout>
    )
}
