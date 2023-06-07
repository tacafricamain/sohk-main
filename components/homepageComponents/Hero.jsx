/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Carousel from "react-multi-carousel";
import { data } from '../../pages/api/data';
import Button from '../Button';

export default function Hero() {
  return (
    <section className='relative mx-10 mt-20 '
    // "bg-[url('https://res.cloudinary.com/tacafrica/image/upload/v1679325020/IMG_9738_bryfni.jpg')] bg-cover bg-center bg-no-repeat"
        >
        <div  className="absolute inset-0 rounded-t-3xl overflow-hidden">
        <div id="stripes">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:flex lg:h-screen lg:items- center lg:px-8">
            <div className="max-w-3xl lg:px-16 mt-14 text-center sm:text-left">
                <h1 className="font-extrabold text-5xl text-white mb-6">
                    {/* MrTidy Nigeria */}
                    <strong className="z-50 text-5xl block font-extrabol font-semibold bg-clip-text">
                    A Radical <br /> Approach  To 21st Century Education
                    </strong>
                </h1>

                <div className='my-3 space-x-3 text-[#F3C626] '><b>PLAY </b> <span className='font-bold'>|</span><b> LEARN  </b> <span className='font-bold'>|</span> <b>EARN</b></div>

                <p className="mt-4 max-w-lg sm:text-xl leading-normal text-white">
                      {`At its core, the School of Hard knocks curriculum is an innovative approach to education that's designed to equip students with the skills they'll need to tackle the challenges and opportunities of the 21st century.`}
                  </p>
                  <Button extraStyles="bg-white text-black mt-5" text={'Learn More'} />
              </div>
              <LargeSingleSlider data={data} />
        </div>
        </section>
  )
}


const LargeSingleSlider = ({ data }) => {


    const responsive = {
      desktopAndMobile: {
        breakpoint: { max: 3000,  min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
    };

    return (
      <div className=" max-w-xl container lg:my-auto">
        <div className="lg:max-w-[600px] md:mx-10 h-full">
          <div className=" lg:pb-8 flex flex-col justify-center ">
            <Carousel
              swipeable={true}
              draggable={true}
              responsive={responsive}
              // ssr={!true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={5000}
              keyBoardControl={true}
              customTransition="all 0.3s"
              transitionDuration={1500}
              containerClass="carousel-container "
              renderButtonGroupOutside={true}
              renderDotsOutside={true}
            >
              {data.map((edge, i) => (

                <div
                      key={i}
                      className=" flex-none w-12/12 mx-auto overflow-hidden rounded-lg md:mr-4 md:pb-4 my-auto"
                  >
                      {/* <img src={edge?.image} alt={edge?.name} className='lg:w-5/12 lg:mr-8 object-cover rounded-xl max-h-[500px]'/> */}
                      <div className="py-2 md:mb-8">
                          <div className=" max-h-[600px] m-auto">
                              <img className=" h-[450px]  w-full content-cover object-cover rounded-xl" src={edge?.image} alt={edge?.name}  />
                          </div>
                      </div>

                  </div>
              ))}
            </Carousel>
          </div>

        </div>
      </div>
    );
  };
