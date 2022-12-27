import React from 'react'
const WhyChoose = () => {
  return (
    <section className="whychoose mt-4 lg:mt-8 overflow-hidden">
        <div className="container">
        <h2 className="slider_title mb-4">why choose <span>devicecure</span></h2>
            <div className="grid grid-cols-12 gap-4">
               <div className="col-span-6 md:col-span-3 select-none">
                  <div className="choose_card sm:p-8">
                     <div className="relative">
                        <img src="whytext1.webp" alt="" className='why_text' />
                        <img src="whyicon1.webp" alt="" className='why_icon' />
                     </div>
                  </div>
                </div>
              <div className="col-span-6 md:col-span-3 select-none">
                   <div className="choose_card sm:p-8">
                    <div className="relative">
                       <img src="whytext2.webp" alt="" className='why_text' />
                       <img src="whyicon2.webp" alt="" className='why_icon' />
                    </div>
                   </div>
                </div>
              <div className="col-span-6 md:col-span-3 select-none">
                  <div className="choose_card sm:p-8">
                    <div className="relative">
                       <img src="whytext3.webp" alt="" className='why_text' />
                       <img src="whyicon3.webp" alt="" className='why_icon' />
                    </div>
                  </div>
                </div>
              <div className="col-span-6 md:col-span-3 select-none">
                  <div className="choose_card sm:p-8">
                    <div className="relative">
                       <img src="whytext4.webp" alt="" className='why_text' />
                       <img src="whyicon4.webp" alt="" className='why_icon' />
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyChoose