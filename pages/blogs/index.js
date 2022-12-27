import React from "react";
import BlogCard from "../../components/homeComponent/Blog/BlogCard";
import Layout from "../../components/Layout"
export default function BlogShow() {
  return <BlogCard />;
}

BlogShow.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
