import React from 'react'
import Slider from "react-slick";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", }}
        onClick={onClick}
      />
    );
  }
  const brands = [
    { link: "#", icon:"/brand_icons/Apple-logo.webp"},
    { link: "#", icon:"/brand_icons/Huawei-Logo.webp"},
    { link: "#", icon:"/brand_icons/mi.webp"},
    { link: "#", icon:"/brand_icons/motorola.webp"},
    { link: "#", icon:"/brand_icons/oneplus.webp"},
    { link: "#", icon:"/brand_icons/oppo.webp"},
    { link: "#", icon:"/brand_icons/realme.webp"},
    { link: "#", icon:"/brand_icons/samsung.webp"},
    { link: "#", icon:"/brand_icons/vivo.webp"},
  ];
export default function Brand() {
    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        infinite: true,
        variableWidth: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
  return (
    <section className="brands mt-4 lg:mt-8">
        <div className="container">
        <h2 className="slider_title mb-4">popular brand we <span>repair</span></h2>
            <Slider {...settings}>
            {brands.map(({icon, link}) => {
            return (
                <div key={link}>
                    <a href={link} className="">
                        <img src={icon} className="h-8 lg:h-14 m-6"/>
                    </a>
                </div>
            )
             })}
            </Slider>
        </div>
    </section>
  );
}