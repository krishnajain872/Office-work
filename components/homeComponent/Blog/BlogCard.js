import { useRouter } from 'next/router'
import BlogData from '../../../app/store/blogsJson.js'
import React, {useState} from 'react'
import { useSelector } from 'react-redux'
/* const BlogData = [
    { link: "#", heading: "The Coldest Sunset", date: "12 oct 2022", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.", by: "devicecure", src: "/blog1.png" },
    { link: "#", heading: "The Coldest Sunset", date: "12 oct 2022", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.", by: "devicecure", src: "/blog2.png" },
    { link: "#", heading: "The Coldest Sunset", date: "12 oct 2022", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.", by: "devicecure", src: "/blog3.png" },
    { link: "#", heading: "The Coldest Sunset", date: "12 oct 2022", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.", by: "devicecure", src: "/blog4.png" },
] */
const BlogCard = () => {
    const router= useRouter()
    const blogs = useSelector(s=>s.blogs)
    return (
        <section className="blog_section mt-4 lg:mt-8">
            <div className="container">
                <h2 className="slider_title mb-4">read our latest <span>blog</span></h2>
                <div className="grid grid-cols-12 gap-4" >
                    {BlogData.map(({ id, title, date, content, image, by }) => {
                        // const [blogdes, setblogdes] = useState(true);
                        return (
                            <div className="col-span-full sm:col-span-6 md:col-span-3 cursor-pointer" key={id} onClick={()=>router.push(`/blogs/${id}`)}>
                                <a >
                                    <div className="rounded-lg overflow-hidden">
                                        <img className="w-full" src={image} alt={title} />
                                        <div className='bg-primaryLight py-2 px-3'>
                                            <p className='text-xs text-primary font-medium'>{date}</p>
                                        </div>
                                        <div className="pr-2 py-4">
                                            <h5 className="text-xl text-secondary mb-3">{title.slice(0, 50)}...</h5>
                                            <p className='text-md text-secondaryLight mb-3'>{content.slice(0, 150)}...</p>
                                            <small><b>Written By: <span className='text-primary'> {by}</span></b></small>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default BlogCard