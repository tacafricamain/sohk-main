/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Carousel from "react-multi-carousel";
import {data} from '../../pages/api/data';
import Button from '../Button';
import Link from 'next/link';

export default function Hero() {
    return (
        <>
            <div id='aboutus' className='flex items-center h-[50vh] lg:h-[40rem] bg-newHomeImage bg-cover bg-top mt-12 rounded-t-3xl mx-4 lg:mx-8'>
                <div className='w-full h-full relative '>
                    <div className='absolute bg-[#0b1dc1] top-0 left-0 right-0 bottom-0 opacity-70 rounded-t-3xl'></div>
                    <div className='flex flex-col relative lg:justify-start items-center w-full h-[40rem] lg:h-[45rem]'>
                        <h1 className='text-center text-white font-bold text-3xl lg:text-4xl mt-24 lg:mt-48 mb-8  uppercase font-SpaceGrotesk'>
                            A Radical
                                          Approach
                            <br/>
                            To 21st Century Education
                        </h1>
                        <div className='flex flex-col space-y-2'>
                            <Link href='/aboutus'>
                              <a>
                                <Button text={'Read More'}
                                    extraStyles='bg-[#00C2FF] w-full'/>
                              </a>
                            </Link>
                            <Link href='/'>
                              <a>
                              <Button text={'Download Brochure'}
                                  extraStyles='bg-transparent border w-full'/>
                              </a>
                            </Link>
                        </div>
                    </div>
                    <img src="/Vector18.png" alt="bottom_green_image" className='absolute -bottom-[0.1rem]'/>
                </div>
            </div>
        </>

    // <section className='relative mx-10 mt-20 '
    // >

    //     <div className="flex flex-col lg:flex-row mx-auto max-w-screen-xl px-4 py-3 lg:py-20 sm:px-6 lg:flex lg:h-screen lg:items- center lg:px-8">
    //         <div className="max-w-3xl lg:px-16 mt-4 lg:mt-14 sm:text-left z-30">
    //             <h1 className="font-extrabold text-5xl text-white mb-6">
    //                 {/* MrTidy Nigeria */}
    //                 <strong className="z-50 text-3xl lg:text-5xl block font-extrabol font-semibold bg-clip-text">
    //                 A Radical <br /> Approach  To 21st Century Education
    //                 </strong>
    //             </h1>

    //             <div className='my-3 space-x-3 text-[#F3C626] '><b>PLAY </b> <span className='font-bold'>|</span><b> LEARN  </b> <span className='font-bold'>|</span> <b>EARN</b></div>

    //             <p className="mt-4 max-w-lg sm:text-xl leading-normal text-white">
    //                   {`At its core, the School of Hard knocks curriculum is an innovative approach to education that's designed to equip students with the skills they'll need`}
    //               </p>
    //               <div>
    //                 <Link href="/aboutus"  className='z-[100]' >
    //                     <a className='z-[100]'>
    //                         <Button extraStyles="hidden lg:block bg-white text-black mt-5" text={'Learn More'} />
    //                     </a>
    //                 </Link>
    //               </div>
    //           </div>
    //           <LargeSingleSlider data={data} />


    //     </div>
    //     </section>
    )
}


const LargeSingleSlider = ({data}) => {


    const responsive = {
        desktopAndMobile: {
            breakpoint: {
                max: 3000,
                min: 0
            },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        }
    };

    return (
        <div className=" max-w-xl container lg:my-auto">
            <div className="lg:max-w-[600px] md:mx-10 h-full">
                <div className=" lg:pb-8 flex flex-col justify-center ">
                    <Carousel swipeable={true}
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
                        renderDotsOutside={true}>
                        {
                        data.map((edge, i) => (

                            <div key={i}
                                className=" flex-none w-12/12 mx-auto overflow-hidden rounded-lg md:mr-4 md:pb-4 my-auto">
                                {/* <img src={edge?.image} alt={edge?.name} className='lg:w-5/12 lg:mr-8 object-cover rounded-xl max-h-[500px]'/> */}
                                <div className="py-2 md:mb-8">
                                    <div className=" max-h-[600px] m-auto">
                                        <img className="h-[300px] lg:h-[450px]  w-full content-cover object-cover rounded-xl"
                                            src={
                                                edge ?. image
                                            }
                                            alt={
                                                edge ?. name
                                            }/>
                                    </div>
                                </div>

                            </div>
                        ))
                    } </Carousel>
                    <Link href="/aboutus" className='z-50'>
                        <a className='z-50'>
                            <Button extraStyles="lg:hidden bg-blue-700 text-white mt-5"
                                text={'Learn More'}/>
                        </a>
                    </Link>
                </div>

            </div>
        </div>
    );
};
