import { useRouter } from 'next/router';
import React from 'react'

const BlogSection = ({ id, title, date, content, image, points, by }) => {
    const router = useRouter();
    return (
        <>
            <img src={image} alt={title} className="lg:hidden w-full sticky top-[64px] z-[-1]" />
            <div className="detail_blog my-4 lg:my-8">
                <div className='bg-white rounded-t-xl z-50 pt-2 md:pt-4 lg:pt-0'>
                    <div className="container">
                        <div className="w-full max-w-6xl  mt-6 mx-auto">
                            <div className='grid grid-cols-2 gap-6'>
                                <a onClick={() => router.push('/blogs')} className='bg-gray-100 rounded-full flex items-center py-2 px-4 cursor-pointer max-w-[fit-content] hover:bg-gray-200'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2 text-secodary">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                                    </svg>
                                    <span className='text-medium text-sm text-secondary'>Back</span>
                                </a>
                                <div className='col-span-2'>
                                    <h2 className='lg:mb-4  text-2xl lg:text-4xl font-bold text-secondary'>{title}</h2>
                                    <p className='lg:text-lg text-sm text-black font-bold lg:hidden'>Written By <span className='text-primary font-bold'>{by}</span> on <span className='text-primary font-bold'>{date}</span></p>
                                </div>
                                <div className='hidden lg:block lg:col-span-1'>
                                    <div className='sticky top-[100px]'>

                                        <img src={image} alt={title} className='w-full  rounded-lg mb-6' />
                                        <p className='text-lg text-black font-bold px-2'>Written By <span className='text-primary font-bold'>{by}</span> on <span className='text-primary font-bold'>{date}</span></p>
                                    </div>
                                </div>
                                <div className='col-span-2 lg:col-span-1'>
                                    <p className='text-secondary text-sm leading-loose tracking-wider lg:text-lg mb-5'>{content}</p>
                                    {
                                        points.map(({ title, content },ind) => <div className='mb-5' key={ind}>
                                            <h4 className='text-secondary font-bold text-xl lg:text-2xl mb-1'>{title}</h4>
                                            <p className="text-secondary text-sm leading-loose tracking-wider lg:text-lg">
                                                {content}</p></div>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogSection