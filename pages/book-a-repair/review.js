import { Fragment, useEffect, useRef, useState } from "react";
import BookRepairLayout from "../../components/Layout/BookRepairLayout";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { Router, useRouter } from "next/router";
import { useCreateOrderMutation, useGetAddressQuery } from "../../app/store/apiSlice";

const serviceHighlights = [
  { title: "Safe & Secure ", details: "Our engineer does the repair in front of you to keep the process transparent & ensure each mobile component remains intact." },
  { title: "Trusted & Trained Engineers", details: "Each of our professional has years of experience & is trained by experts to ensure your device is in safest of hands  " }
  , { title: "Same Day Service ", details: "Fastest possible service at your doorstep as we know how important your device is." },
  { title: "Payment Post Service", details: "Pay only after the service has been completed." }
]

export default function Review() {
  const [open, setOpen] = useState(false);
  const router = useRouter()
  const cancelButtonRef = useRef(null);
  const [create, { data, error, isLoading }] = useCreateOrderMutation()
  const { data: addresses } = useGetAddressQuery()
  const {
    phone,
    altPhone,
    plotNumber,
    area,
    pincode,
    landmark,
    addressTyp,
    city,
    state } = useSelector(s => s.address)

  useEffect(() => {
    if (data) {
      setOpen(true)
      console.log(data);
    } else {
      console.log("errored :", error);
    }
  }, [data, error])
  const { mobile: { brand, model, color }, issues, repairDate, timeSlotId, addressId } = useSelector(s => s.repairOrder)


  const handleSubmit = () => {
    create({
      mobile: {
        brand,
        model,
        color
      },
      issues,
      timeSlotId,
      addressId,
      repairDate
    })
  }


  return (
    <>
      <h2 className="text-2xl font-medium text-primary mb-4">Order Details</h2>
      <div className="flex items-center mb-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png"
          alt=""
          className="w-16"
        />
        <div className="ml-4 detail">
          <p className="text-secondary text-lg mb-1">{`${brand} ${model}`}</p>
          <p className="text-secondary text-lg mb-1">{color}</p>
        </div>
      </div>
      <div className="mb-8">
        <p className="text-secondary text-lg mb-1 font-light">
          <span className="font-medium">Repairing Date:</span> {repairDate}
        </p>
        <p className="text-secondary text-lg mb-1 font-light">
          <span className="font-medium">Time slot:</span> 01:30 pm
        </p>
        <p className="text-secondary text-lg mb-1 font-light">
          your mobile has <span className="font-medium">{issues.join(', ')}</span>
        </p>
      </div>
      <h2 className="text-2xl font-medium text-primary mb-4">
        Address Details
      </h2>
      <div className="mb-8">
      {`${plotNumber}, ${area}, ${city}, ${state} - ${pincode} `}
      </div>
      <h2 className="text-2xl font-medium text-primary mb-4">
        Service Highlights
      </h2>
      <div className="mb-8">

        {
          serviceHighlights.map(({ title, details },ind) => <details key={ind} className="white-glass mb-3 rounded-lg p-3">
            <summary className="question py-3 px-4 cursor-pointer select-none w-full outline-none">
              {title}
            </summary>
            <p className="pt-1 pb-3 px-4">
              {details}
            </p>
          </details>)
        }
      </div>
      <button className="brand-btn" onClick={handleSubmit}>
        Place order
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
      <div className="mb-4">
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            initialFocus={cancelButtonRef}
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 backblur transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <img src="/success.gif" alt="" className="w-full" />
                          <Dialog.Title
                            as="h3"
                            className="text-lg font-medium leading-6 text-gray-900"
                          >
                            Booking ID : {data?.bookingId}
                          </Dialog.Title>
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">
                            The order was submitted successfully. Our executive will contact you shortly.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" px-4 py-3 justify-between sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        className="brand-btn"
                        onClick={() => router.push('/myorder')}
                      >
                        Checkout
                      </button>
                      <button
                        type="button"
                        className="mt-3 text-primary underline"
                        onClick={() => router.push("/")}
                        ref={cancelButtonRef}
                      >
                        Done
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </>
  );
}

Review.getLayout = function (page) {
  return <BookRepairLayout>{page}</BookRepairLayout>;
};
