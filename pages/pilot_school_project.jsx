/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Head from 'next/head'
import VideoComp from '../components/video'
import YoutubeEmbed from '../components/video';

export default function SchoolProject() {

    const videoSrc = 'https://www.youtube.com/watch?v=JBUnIRlYvuo&ab_channel=School-of-HardknocksFoundation';
    const videoThumbnail = 'https://res.cloudinary.com/tacafrica/image/upload/v1683971134/image00002_krsbdi.jpg'

    return (

        <>
            <Head>
              <title>School of HardKnocks nigeria</title>
              <meta name="description" content="SOHK Pilot Program To Schools In FCT" />
              <meta name="viewport" content="minimum-scale=1, minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='mx-4 lg:mx-8 font-SpaceGrotesk max-w-7xl'>
                <div id='aboutus' className='flex items-center h-[40rem] lg:h-[45rem] bg-schoolProjectHeroBg bg-cover bg-top mt-12 rounded-t-3xl' >
                    <div className='w-full  relative'>
                        <div className='flex flex-col justify-center items-center w-full h-[40rem] lg:h-[45rem]'>
                            <h1 className='text-center text-white font-bold text-4xl lg:text-8xl mb-10 font-PanchangExtrabold'>SOHK Pilot
                                <br/>
                                Program To
                                <br/>
                                Schools In FCT</h1>
                            <button className="button-48 border-2 border-blue-500 mx-auto" role="button">
                                <span className="text-white hover:text-black text-base lg:text-lg font-semibold lg:px-10 font-PanchangRegular ">READ MORE BELOW</span>
                            </button>
                        </div>
                        <img src="/bottom_green_image_01.png" alt="bottom_green_image" className='absolute -bottom-[0.1rem]'/>
                    </div>
                </div>
                {/*  */}
                <div>
                    <section className='pb-12 lg:h-[35rem]  bg-[#0098ff] relative'>
                        <img src="/bottom_white_image_01.png" alt="bottom_green_image" className='absolute bottom-0'/>
                        <div className='flex flex-col lg:flex-row pt-20 mx-5 space-y-12 lg:space-y-0 lg:space-x-12'>
                            <div className='text-center'  >
                                <img src="/coach.png" alt="" className='w-[120px] h-[120px] mx-auto'  />
                                <h2 className='font-semibold font-PanchangSemibold text-2xl' >Career Coaching</h2>
                                <p className='text-base my-6 font-SpaceGrotesk opacity-90' >
                                    We strive to allow children create a better relationship with themselves and build teams through continous learning.
                                </p>
                            </div>
                            <div className='text-center'  >
                                <img src="/digital.png" alt="" className='w-[120px] h-[120px] mx-auto' />
                                <h2 className='font-semibold font-PanchangSemibold text-2xl' >
                                    Digital Skills</h2>
                                <p className='text-base my-6 font-SpaceGrotesk opacity-90' > {` This section aims at providing digital specialized tools to improve students' IQ and build a solid foundation`} </p>
                            </div>
                            <div className='text-center' >
                                <img src="/sports.png" alt="" className='w-[120px] h-[120px] mx-auto' />
                                <h2 className='font-semibold font-PanchangSemibold text-2xl' >
                                    Sports Training</h2>
                                <p className='text-base my-6 font-SpaceGrotesk opacity-90' >
                                    The Sports section is aimed at providing comprehensive packages for all students to help them reach their full potential.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className='bg-[#c3d9ff] flex flex-col lg:flex-row lg:pt-20 '>
                        <div className='w-full lg:w-6/12'>
                            <img src="/illustration_image_01.png" alt="" className='my-20 lg:my-0' />
                        </div>
                        <div className='flex flex-col items-center w-full lg:w-6/12'>
                            <p className='font-semibold font-PanchangSemibold'>OUR MISSION</p>
                            <h3 className='font-semibold font-PanchangBold text-2xl text-center mb-5'>To Build Young
                                <br className='block lg:hidden'/>{` `} { /* for space */}
                                Leaders Through
                                <br className=''/>
                                Sports And Digital
                                <br className='block lg:hidden '/>{` `} { /* for space */}
                                Skills</h3>
                            <div className=' lg:m-5 w-full '>
                                <YoutubeEmbed embedId={'JBUnIRlYvuo'} videoSrc={'youtube'} />
                                {/* <img src="https://res.cloudinary.com/tacafrica/image/upload/v1683971134/image00002_krsbdi.jpg" alt=""/> */}
                            </div>
                        </div>
                    </section>
                </div>
                {/*  */}
                <div className='space-y-10 lg:space-y-20 bg-[#c3d9ff] lg:pt-0 px-8'>
                    <section className='flex flex-col lg:flex-row w-full pt-28'>
                        <img src="https://res.cloudinary.com/tacafrica/image/upload/v1684090798/Artboard_1_ypyh8f.png" alt="" className='lg:w-5/12 lg:mr-8 rounded-full'/>
                        <div className='lg:w-7/12 lg:mx-20 my-auto'>
                            <p className='font-semibold text-xl mb-3 mt-12 font-PanchangSemibold'>PREAMBLE</p>
                            <h3 className='text-4xl lg:text-5xl font-semibold font-PanchangSemibold'>What Is This
                                <br className='hidden lg:block ' />{` `} { /* for space */}
                                Free Training?</h3>
                            <p className='text-xl my-6 font-SpaceGrotesk opacity-90' >
                                This is an initiative of TAC Africa, helping youths in government Primary Schools, Junior Secondary Schools, and Senior Secondary Schools to develop digital, physical skills and Soft Skills. This will no doubt shape their future and the society at large. Our core trainings are hinged on i.e
                            </p>
                            <ul className='font-semibold leading-6 text-xl space-y-2 font-SpaceGrotesk opacity-90 checkMark'>
                                <li>Drone Pilot Training</li>
                                <li>Artificial Intelligence and Robotics Training</li>
                                <li>Cyber Security and Cyber Defense Training</li>
                                <li>Blockchain and Cryptocurrency Training</li>
                                <li>Technology For Social Good
                                    <ul className='ml-20 space-y-2 pt-4'>
                                        <li>Golf Training</li>
                                        <li>Tennis Training</li>
                                        <li>Taekwando Training</li>
                                        <li> Coaching / Mentorship Training</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className='flex flex-col-reverse  lg:flex-row w-full pt-32 lg:pt-0'>
                        <div className='lg:w-7/12 lg:mx-20 my-auto'>
                            <p className='font-semibold text-xl mb-3 mt-12 font-PanchangSemibold'>OUR DRIVE</p>
                            <h3 className='text-4xl lg:text-5xl font-semibold font-PanchangSemibold'>Catching Them Young</h3>
                            <p className='text-xl my-6 font-SpaceGrotesk opacity-90'>
                                This free training will allow for the evolution of talents across Nigeria, using these schools as a pilot phase. The essence of acquiring relevant skills in the 21st century cannot be over emphasized.
                            </p>
                            <div className='flex items-center'>
                                <img src="/trophy.png" alt="trophy icon" className='w-[100px]'  />
                                <p className='text-2xl font-semibold '>{`For us, it's all about Excellence`}</p>
                            </div>
                        </div>
                        <img src="https://res.cloudinary.com/tacafrica/image/upload/v1684091914/Artboard_1_w3qeww.png" alt="" className='lg:w-5/12 lg:mr-8 rounded-full'/>
                    </section>

                    <section className='flex flex-col lg:flex-row w-full pt-32 lg:pt-0'>
                        <img src="https://res.cloudinary.com/tacafrica/image/upload/v1683976921/image00083_rtscxc.png" alt="" className='lg:w-5/12 lg:mr-8 rounded-full'/>
                        <div className='lg:w-7/12 lg:mx-20 my-auto'>
                            <p className='font-semibold text-xl mb-3 mt-12 font-PanchangSemibold'>OUR METHODOLOGY</p>
                            <h3 className='text-4xl lg:text-5xl font-semibold font-PanchangSemibold'>Free Trainings To Over 450 Students</h3>
                            <p className='text-xl my-6 font-SpaceGrotesk opacity-90'>
                                This free training, in conjunction with Universal Basic Education Council (UBEC) and Secondary Education Board (SEB), is extended to 15 Government schools with a selection of 30 students from each school. These include:
                            </p>
                            <ul className='font-semibold leading-6 text-xl space-y-2 font-SpaceGrotesk opacity-90 checkMark'>
                                <li>5 Govt. Primary Schools</li>
                                <li>5 Govt. Junior Secondary Schools</li>
                                <li>5 Govt.Senior Secondary Schools</li>
                            </ul>
                        </div>
                    </section>
                </div>
                <section className='flex flex-col lg:flex-row w-full bg-[#c3d9ff]'>
                    <div className='w-full mt-10'>
                        <div className='m-5'>
                            <p className='font-semibold text-xl mt-12 font-PanchangSemibold'>SOHK BY NUMBERS</p>
                            <h2 className='text-4xl lg:text-5xl mb-3 font-semibold font-PanchangSemibold'>Numbers Of The
                                <br/>
                                First SOHK Pilot
                                <br/>
                                Program.</h2>
                        </div>
                        <div className='flex  flex-col lg:flex-row w-full lg:space-x-5 mt-20'>
                            <div className='w-full m-5 lg:space-x-0'>
                                <div className=' my-5'>
                                    <h4 className='font-semibold text-xl mb-3 font-PanchangSemibold'>Since</h4>
                                    <h3 className='text-4xl lg:text-5xl font-semibold font-PanchangSemibold'>2018</h3>
                                    <p className='font-SpaceGrotesk font-semibold opacity-90'>
                                        SOHK Nigeria was conceived in 2018 and has impacted many lives through sports and Innovation as seen in our success stories and testimonials.
                                    </p>
                                </div>
                                <div className='my-5'>
                                    <h4 className='font-semibold text-xl  font-PanchangSemibold'>Approved Government Primary Schools</h4>
                                    <h3 className='text-4xl lg:text-5xl mb-3 font-semibold font-PanchangSemibold'>05</h3>
                                    <ul className='font-SpaceGrotesk font-semibold opacity-90'>
                                        <li>
                                            - LEA Primary School, Phase 4 Kubwa</li>
                                        <li>
                                            - Chikakore Primary School Kubwa</li>
                                        <li>
                                            - LEA Primary School, Nyanya 1</li>
                                        <li>
                                            - LEA Primary School, Sauka</li>
                                        <li>
                                            - LEA Primary School, Festival Road, Area 10</li>
                                    </ul>
                                </div>

                            </div>
                            <div className='w-full m-5'>
                            <div className='my-5'>
                                    <h4 className='font-semibold text-xl font-PanchangSemibold'>
                                        Approved Junior Secondary Schools
                                    </h4>
                                    <h3 className='text-4xl lg:text-5xl mb-3 font-semibold font-PanchangSemibold'>05</h3>
                                    <ul className='font-SpaceGrotesk font-semibold opacity-90'>
                                        <li>
                                            - JSS Dutse Sagwari</li>
                                        <li>
                                            - JSS Kubwa 1</li>
                                        <li>
                                            - JSS Asokoro</li>
                                        <li>
                                            - JSS Area 11</li>
                                        <li>
                                            - JSS Tudun Wada</li>
                                    </ul>
                                </div>
                                <div className='my-5'>
                                    <h4 className='font-semibold text-xl  font-PanchangSemibold'>Approved Senior Secondary Schools</h4>
                                    <h3 className='text-4xl lg:text-5xl mb-3 font-semibold font-PanchangSemibold'>05</h3>
                                    <ul className='font-SpaceGrotesk font-semibold opacity-90'>
                                        <li>
                                            - GSS Bwari</li>
                                        <li>
                                            - GDSS Bwari</li>
                                        <li>
                                            - GSS Kubwa</li>
                                        <li>
                                            - GSS Wuse Zone 3</li>
                                        <li>
                                            - GSS Tudun Wada</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <img src="https://res.cloudinary.com/tacafrica/image/upload/v1684087317/illustration_image_02-01_ax1iwd.png" alt=""/>
                    </div>
                </section>

            </div>
        </>
    )
}
