import BlogCard from "../components/homeComponent/Blog/BlogCard";
import Brand from "../components/homeComponent/Brands";
import HeroSection from "../components/homeComponent/HeroSection";
import Slider from "../components/Slider";
import Testimonial from "../components/homeComponent/Testimonial";
import WhyChoose from "../components/homeComponent/WhyChoose";
import Layout from "../components/Layout";
import Backdrop from "../components/UI/Backdrop";
import SeoSection from "../components/homeComponent/Seo";
import Head from "next/head";



export default function Home({options}) {
  return (
    <>
    <Head>
        <meta name="description" content="Looking for a reliable and fast mobile repairing service in Jaipur? We offer doorstep repairs with a turnaround time of just 59 minutes, as well as online and in-store options. Our team works transparently and offers up to 3 months of warranty on all our repairs."/>
    </Head>
      <main>
        <HeroSection options={options} />
        <Brand />
        <Slider />
        <WhyChoose />
        <BlogCard />
        <Testimonial />
        <SeoSection />
      </main>
    </>
   
  );
}


Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}


export async function getStaticProps() {
  const res = await fetch('https://api.devicecure.in/data/repair')
  const options = await res.json()
  return {
    props: {
      options,
    },
  }
}
