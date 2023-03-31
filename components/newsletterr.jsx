import React, { useEffect } from "react";
import "swiper/swiper-bundle.min.css";
import { useSwiper } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';

import { Navigation,Autoplay, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';

export default function Testimonials() {


    const swiper = useSwiper();
    const SwiperButtonNext = ({ children }) => {
        return <button onClick={() => swiper.slideNext()}>{children}</button>;
    };
    
    return (
        <>
            <section className="bg-gray-100">
            
           
                <div className="mx-auto max-w-[1340px] px-4 py-16 sm:px-6 sm:py-24 lg:mr-0 lg:pl-8 lg:pr-0">
                    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:items-center lg:gap-x-16">
                        <div className="max-w-xl text-center sm:text-left">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                {/* {`Don't just take our word for it...`} */}
                                <br className="hidden sm:block lg:hidden" />
                                Our Weekly NewsLetters
                            </h2>

                            <p className="mt-4 text-gray-500">
                            Explore our official newsletter with stories from our ongoing programmes and get the facts, expert opinion and practical training, advice on the topic you care about. Find out more about what SOHK is doing and how you can join us or support our activities by clicking on any of our newsletters.
                            </p>

                            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                                <button id="swiper-back" className="swiper-back rounded-full border border-pink-600 p-3 text-pink-600 hover:bg-pink-600 hover:text-white">
                                    <span className="sr-only swiper-button-prev" >Previous Slide</span>
                                    prev
                                </button>

                                <button id="swiper-forward" className="swiper-forward rounded-full border border-pink-600 p-3 text-pink-600 hover:bg-pink-600 hover:text-white">
                                    <span className="sr-only swiper-button-next" >Next Slide</span>
                                    next
                                </button>
                            </div>
                        </div>

                        <div className="-mx-6 lg:col-span-2 lg:mx-0">
                            {/* <div className="swiper-container !overflow-hidden">
                                <div className="swiper-wrapper"> */}
                    <Swiper
                     // install Swiper modules
                        modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                          }}
                          speed={5000}
                          loop={true}
                        navigation={{ nextEl: ".swiper-forward", prevEl: ".swiper-back" }}
                        // pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                      {/* <SwiperButtonNext>Slide</SwiperButtonNext> */}
                                    <SwiperSlide className="swiper-slide">
                                        <blockquote className="flex h-full flex-col justify-between bg-white p-12">
                                            <div>
                                                <div className="flex gap-0.5 text-green-500"></div>

                                                <div className="mt-4">
                                                    <p className="text-2xl font-bold text-pink-600 sm:text-3xl">
                                                        {` Stayin' Alive`}
                                                    </p>

                                                    <p className="mt-4 leading-relaxed text-gray-500">
                                                        No, Rose, they are not breathing. And they have no
                                                        arms or legs … Where are they? You know what? If we
                                                        come across somebody with no arms or legs, do we
                                                        bother resuscitating them? I mean, what quality of
                                                        life do we have there?
                                                    </p>
                                                </div>
                                            </div>

                                            <footer className="mt-8 text-sm text-gray-500">
                                                &mdash; Michael Scott
                                            </footer>
                                        </blockquote>
                                    </SwiperSlide>

                                <SwiperSlide className="swiper-slide">
                                    <blockquote className="flex h-full flex-col justify-between bg-white p-12">
                                        <div>
                                            <div className="flex gap-0.5 text-green-500"></div>

                                            <div className="mt-4">
                                                <p className="text-2xl font-bold text-pink-600 sm:text-3xl">
                                                    The Dundies
                                                </p>

                                                <p className="mt-4 leading-relaxed text-gray-500">
                                                        {`And I feel God in this Chili's tonight.`}
                                                </p>
                                            </div>
                                        </div>

                                        <footer className="mt-8 text-sm text-gray-500">
                                            &mdash; Pam Beesly
                                        </footer>
                                        </blockquote>
                                </SwiperSlide>


                            <SwiperSlide className="swiper-slide">
                                <blockquote className="flex h-full flex-col justify-between bg-white p-12">
                                    <div>
                                        <div className="flex gap-0.5 text-green-500"></div>

                                        <div className="mt-4">
                                            <p className="text-2xl font-bold text-pink-600 sm:text-3xl">
                                                The Alliance
                                            </p>

                                            <p className="mt-4 leading-relaxed text-gray-500">
                                                I DECLARE BANKRUPTCY!
                                            </p>
                                        </div>
                                    </div>

                                    <footer className="mt-8 text-sm text-gray-500">
                                        &mdash; Michael Scott
                                    </footer>
                                    </blockquote>
                            </SwiperSlide>
    </Swiper>
                    </div>
                </div>
            </div>
        {/* </div >
    </div > */}
  </section >
</>
  )
}