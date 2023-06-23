/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Button from '../components/Button'

export default function Earn() {


    return (

        <>
            <Head>
                <title>School of HardKnocks nigeria</title>
                <meta name="description" content="SOHK Pilot Program To Schools In FCT"/>
                <meta name="viewport" content="minimum-scale=1, minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className='mx-4 lg:mx-8 font-SpaceGrotesk'>
                <div id='aboutus' className='flex items-center w-full h-[50vh] lg:h-[40rem] bg-[#0A157C] bg-aboutUsHeroBg bg-cover bg-top mt-12 rounded-t-3xl relative'>

                    <div className='w-full h-full relative '>
                        <img src="/Vector18.png" alt="bottom_green_image" className='absolute -bottom-[0.1rem]'/>
                    </div>
                    <span className="mx-auto absolute w-60 h-60 left-1/2 transform -translate-x-1/2 translate-y-[100%]  bg-[#F5F5F6] px-4 py-2 group cursor-pointer ">
                        <div className=''>
                            <img src="/aboutus/earn.png" alt="earn" className='w-60 '/>
                        </div>
                    </span>
                </div>
                {/*  */}
                <div>
                    <section className=' pb-12 relative'>
                        <section className=' flex flex-col '>
                            <div className='text-center font-SpaceGrotesk pt-8 lg:pt-16 text-black'>
                                <h2 className='font-semibold font-PanchangBold text-2xl lg:text-4xl  text-center mb-5'>
                                    How We Play at SOHK
                                </h2>
                                <p className='text-xl max-w-5xl mx-auto'>We believe in the power of
                                    <br/>
                                    engaging and interactive learning
                                    <br/>
                                    experiences
                                </p>
                            </div>

                        </section>
                        {/* here */}
                        <div className="grid grid-cols-12 gap-6 gap-y-8 ">
                            <div className="col-span-12 sm:col-span-6 md:col-span-3 rounded-md bg-white relative ">
                                <div id='aboutus' className='flex items-center h-[50vh] lg:h-[20rem] bg-[#0A157C] bg-aboutUsHeroBg bg-cover bg-top mt-12 rounded-t-3xl'>
                                    <div className='w-full h-full relative '>
                                        <div className='absolute bg-black top-0 left-0 right-0 bottom-0 opacity-50 rounded-t-3xl'></div>
                                        <div className='flex flex-col relative lg:justify-start items-center w-full h-[40rem] lg:h-[45rem]'></div>
                                        <img src="/Vector18.png" alt="bottom_green_image" className='absolute -bottom-[0.1rem]'/>
                                    </div>
                                </div>
                                <div className='flex flex-col text-[#0E113D]'>
                                    <h3 className='font-bold text-xl'>Blockchain and Cryptocurrency
                                    </h3>
                                    <p className='font-bold mb-4'>Training</p>
                                    <ul className='list-disc pl-6'>
                                        <li>Block Chain Regulation and Legal Issues</li>
                                        <li>Block Chain Against Corruption</li>
                                        <li>Practical Use of Block Chain Tokenomics</li>
                                        <li>Crypto Currency Forensics & Investigation Methodology</li>
                                        <li>Block Chain Education and Research</li>

                                    </ul>
                                    <span className='mt-5'>
                                        <a href='/pdf/SOHK General Brochure.pdf' target='_blank' rel="noreferrer">
                                            <Button text={'Download Brochure'}
                                                extraStyles='bg-transparent border w-full bg-[#0E113D]'/>
                                        </a>
                                    </span>
                                </div>
                            </div>

                            <div className="col-span-12 sm:col-span-6 md:col-span-3 rounded-md bg-white relative">
                                <div id='aboutus' className='flex items-center h-[50vh] lg:h-[20rem] bg-[#0A157C] bg-mentorShipImage bg-cover bg-top mt-12 rounded-t-3xl'>
                                    <div className='w-full h-full relative '>
                                        <div className='absolute bg-black top-0 left-0 right-0 bottom-0 opacity-50 rounded-t-3xl'></div>
                                        <div className='flex flex-col relative lg:justify-start items-center w-full h-[40rem] lg:h-[45rem]'></div>
                                        <img src="/Vector18.png" alt="bottom_green_image" className='absolute -bottom-[0.1rem]'/>
                                    </div>
                                </div>
                                <div className='flex flex-col text-[#0E113D]'>
                                    <h3 className='font-bold text-xl'>Mentorship & Public Speaking Trainings</h3>
                                    <p className='font-bold mb-4'>What`s Included?</p>
                                    <ul className='list-disc pl-6'>
                                        <li>Introduction</li>
                                        <li>Techniques in Speaking</li>
                                        <li>Organization and Delivery</li>
                                        <li>Types of Speaking</li>
                                        {/* <li>Introduction to basic (Kibon Chaggi)</li>
                                            <li>Introduction to Stance (Sohgi)</li>
                                            <li>Basic application of leg technique</li> */} </ul>
                                </div>
                            </div>

                        </div>
                        {/*  */} </section>
                </div>
                {/*  */}
                <div className=' bg-[#EDEDED] rounded-lg h-96 md:h-40 shadow-[0_8px_30px_rgb(0,0,0,0.12)] '>
                    <div className="flex flex-col md:flex-row h-full sm:divide-y-2 md:divide-y-0 md:divide-x-2 divide-slate-200 py-3">
                        <div className='flex w-full h-1/3  md:h-full font-mavin text-lg md:text-3xl  '>
                            <h2 className='m-auto text-xl font-bold'>See detailed info about the above fun
                                <br/>
                                activities when you download our brochure.</h2>
                        </div>
                        <div className="flex  flex-col md:flex-row w-full md:h-full justify-center md:justify-start md:items-center md:space-x-4 h-full px-5 md:pl-10 ">
                            <span>
                                <a href='/pdf/SOHK General Brochure.pdf' target='_blank' rel="noreferrer">
                                    <Button text={'Download Brochure'}
                                        extraStyles='bg-transparent border w-full bg-[#00C2FF]'/>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
