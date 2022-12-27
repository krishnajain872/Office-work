import React from "react";
import Layout from "../components/Layout";

export default function About() {
  return (
    <section className="about mt-4 lg:mt-8">
      <div className="container">
        <div className="mb-4 simple-col">
          <h2 className="mb-2 slider_title">About <span>Us</span></h2>
          <p>We are a doorstep mobile repair service provider, currently servicing the city of Jaipur. At our company, we believe in providing convenient and hassle-free repair services to our customers. Our team of certified expert technicians can fix any kind of mobile problem, and we do it all at your location.</p>
          <p>Our company was founded in 2019, and we have quickly become a recognized Startup by Startup India and I Start Rjasthan. In the past three years, we have repaired over 1200 mobile phones in Jaipur alone.</p>
          <p>We are dedicated to providing the best possible service to our customers. Our technicians are highly skilled and experienced, and we use only the highest quality parts for all of our repairs. We also offer a warranty on all of our services, so you can trust that your phone will be in good hands.</p>
        </div>
        <div className="mb-4 simple-col">
          <h2 className="mb-2 slider_title">Our <span>Mission</span></h2>
          <p>To provide customers with a convenient and trustworthy mobile repair service that allows them to get their devices fixed quickly and easily at their doorstep.</p>
          <p>To offer high-quality repairs at competitive prices, using skilled technicians and the latest tools and technology.</p>
          <p>To continuously improve our services and expand our range of offerings, providing customers with a one-stop-shop for all of their mobile repair needs.</p>
          <p>To build a reputation as the go-to choice for mobile repair, becoming the first company that customers think of when they need to get their devices fixed.</p>
          <p>To deliver exceptional customer service, ensuring that each customer is satisfied with the quality of our repairs and the speed at which they are completed.</p>
          <p>To establish strong relationships with our customers, earning their trust and loyalty through our commitment to providing the best possible mobile repair service.</p>
        </div>
        <div className="mb-4 simple-col">
          <h2 className="mb-2 slider_title">Our <span>Vision</span></h2>
          <p>We aim to be the go-to choice for customers in need of mobile repairs, offering a convenient and trustworthy service that allows them to get their devices fixed without having to leave their home or office.</p>
          <p>Our skilled technicians will arrive at the customer&apos;s doorstep equipped with the tools and expertise needed to diagnose and repair a wide range of mobile devices, including smartphones, tablets, and other portable electronics.</p>
          <p>We will strive to provide the highest level of service, ensuring that each customer is satisfied with the quality of our repairs and the speed at which they are completed.</p>
          <p>We will also offer competitive pricing, making it affordable for customers to get their mobile devices fixed without having to compromise on the quality of the repair.</p>
          <p>In addition to our core mobile repair services, we will also offer other related services, such as screen replacements, battery replacements, and software updates, to provide customers with a one-stop-shop for all of their mobile repair needs.</p>
          <p>We will continuously improve our services through ongoing training and investment in the latest tools and technology, ensuring that we remain at the forefront of the mobile repair industry.</p>
          <p>Our goal is to become the first choice for customers when it comes to mobile repair, offering a reliable and affordable service that allows them to get their devices fixed quickly and easily.</p>
        </div>
      </div>
    </section>
  );
}

About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
