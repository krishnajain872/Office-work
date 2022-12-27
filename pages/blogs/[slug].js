import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux';
import BlogSection from '../../components/homeComponent/Blog/BlogSection';
import Layout from '../../components/Layout';

export default function Blog() {
  const router = useRouter()
  const blogId = router.query.slug;
  const blogs = useSelector(s => s.blogs)
  // console.log(blogs);
  const blog = blogs.find(b => b.id == blogId)
  if(blog){
    return (
      <BlogSection {...blog} />
    )
  } else {
    return <h1>Loading...</h1>
  }

}
Blog.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
