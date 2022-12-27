import React, { Component } from "react";
import Slider from "react-slick";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
const offerLInk = [
  {
    link: "",
    backgroundUrl: "/offers/b1.webp",
  },
  {
    link: "",
    backgroundUrl: "/offers/b2.webp",
  },
  {
    link: "",
    backgroundUrl: "/offers/b3.webp",
  },
  {
    link: "",
    backgroundUrl: "/offers/b4.webp",
  },
];
export default class MultiSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    };
    
    return (
      <section className="mt-4 lg:mt-8">
        <div className="container">
          <h2 className="slider_title mb-4">
            latest <span>offers</span>
          </h2>
          <Slider {...settings}>
            {offerLInk.map(({ backgroundUrl, link }) => {
              return (
                <div key={link} className="mb-2">
                  <a rel="noopener noreferrer" className="" href={link}>
                    <div className="pr-4">
                      <img
                        src={backgroundUrl}
                        alt={backgroundUrl}
                        className="w-full offer_sec rounded-2xl"
                      ></img>
                    </div>
                  </a>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    );
  }
}
