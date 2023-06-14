/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function SchoolProject() {


    return (

        <>
            <Head>
                <title>School of HardKnocks nigeria</title>
                <meta name="description" content="SOHK Pilot Program To Schools In FCT"/>
                <meta name="viewport" content="minimum-scale=1, minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className='mx-4 lg:mx-8 font-SpaceGrotesk'>
                <div id='aboutus' className='flex items-center h-[50vh] lg:h-[40rem] bg-[#0A157C] bg- aboutUsHeroBg bg-cover bg-top mt-12 rounded-t-3xl'>
                    <div className='w-full h-full relative '>
                        <div className='absolute bg-black top-0 left-0 right-0 bottom-0 opacity-50 rounded-t-3xl'></div>
                        <div className='flex flex-col relative lg:justify-start items-center w-full h-[40rem] lg:h-[45rem]'>
                            <h1 className='text-center text-white font-bold text-4xl lg:text-5xl mt-48 font-PanchangExtrabold'>
                                {/* A Radical
                                <br/>
                                Approach  To 21st Century Education */}
                                About Us
                            </h1>
                        </div>
                        <img src="/Vector18.png" alt="bottom_green_image" className='absolute -bottom-[0.1rem]'/>
                    </div>
                </div>
                {/*  */}
                <div>
                    <section className=' pb-12 relative'>
                        <section className=' flex flex-col '>
                            <div className='text-center font-SpaceGrotesk pt-8 lg:pt-16 text-black'>
                                <h2 className='font-semibold font-PanchangBold text-2xl lg:text-4xl  text-center mb-5'>What sets the School of
                                    <br/>
                                    Hardknocks apart?

                                </h2>
                                <p className='text-xl max-w-5xl mx-auto'>For starters, we are characterized by a number of key
                                    <br/>
                                    features that set it apart from traditional schools These include the following:
                                </p>
                            </div>

                        </section>

                        <section className=' flex flex-col max-w-6xl mx-auto mt-12 space-y-5 lg:space-y-10'>
                            <div className="flex flex-col lg:flex-row w-full justify-center space-y-5 lg:space-y-0">
                                <div className="bg-[#F5F5F6] rounded-xl p-5 w-full lg:mx-5 lg:w-5/12 ">
                                    <img src="/aboutus/digitalLearning.png" alt="aboutUs" className='w-20'/>
                                    <h3 className='text-md font-bold'>Digital learning</h3>
                                    <p>Think online classes, interactive apps, and educational games that use technology to enhance the learning experience.</p>
                                </div>
                                <div className="bg-[#F5F5F6] rounded-xl p-5 w-full lg:mx-5 lg:w-5/12 ">
                                    <img src="/aboutus/learning.png" alt="aboutUs" className='w-20'/>
                                    <h3 className='text-md font-bold'>Project based learning</h3>
                                    <p>A teaching method that has students working on real-world projects to develop practical skills and knowledge needed in our society.</p>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row w-full justify-center space-y-5 lg:space-y-0">
                                <div className="bg-[#F5F5F6] rounded-xl p-5 w-full lg:mx-5 lg:w-5/12 ">
                                    <img src="/aboutus/sports.png" alt="aboutUs" className='w-20'/>
                                    <h3 className='text-md font-bold'>Sports and extra curriculum activities</h3>
                                    <p>An approach to education that considers each
                                      student`s unique strengths, weaknesses, interests,
                                      and learning style.</p>
                                </div>
                                <div className="bg-[#F5F5F6] rounded-xl p-5 w-full lg:mx-5 lg:w-5/12 ">
                                    <img src="/aboutus/networking.png" alt="aboutUs" className='w-20'/>
                                    <h3 className='text-md font-bold'>Networking and Connections</h3>
                                    <p>We prioritize social connections which can be valuable sources of support, advice, and inspiration for both kids, teenagers, and adults.</p>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row w-full justify-center space-y-5 lg:space-y-0">
                                <div className="bg-[#F5F5F6] rounded-xl p-5 w-full lg:mx-5 lg:w-5/12 ">
                                    <img src="/aboutus/practicalSkill.png" alt="aboutUs" className='w-20'/>
                                    <h3 className='text-md font-bold'>Practical skill acquisition</h3>
                                    <p>A focus on global citizenship, cultural awareness, and understanding of different perspectives which are helpful to all works of life.</p>
                                </div>
                                <div className="bg-[#F5F5F6] rounded-xl p-5 w-full lg:mx-5 lg:w-5/12 ">
                                    <img src="/aboutus/STEAM.png" alt="aboutUs" className='w-20'/>
                                    <h3 className='text-md font-bold'>Adherence to STEAM education style</h3>
                                    <p>A curriculum that integrates science, technology, engineering, arts, and math to prepare students for careers in these fields</p>
                                </div>
                            </div>
                        </section>

                    </section>
                </div>
                {/*  */}

                <div className='space-y-10 max-w-5xl mx-auto lg:space-y-14 lg:pt-0 px-8 mb-14'>
                    <section className='flex flex-col lg:flex-row-reverse justify-between w-full'>
                        <div  className='relative lg:w-4/12'>
                            <img src="https://res.cloudinary.com/tacafrica/image/upload/v1661951046/my_folder/compressed/mandella-and-chess-day-compressed/1-2207230065_result_vm4qzp.webp" alt="our focus area" className=' rounded-t-3xl h-[30rem] lg:rounded-full object-cover'/>
                            <img src="/Vector18.png" alt="bottom_green_image" className='absolute md:hidden  -bottom-[0.1rem]'/>
                        </div>
                        <div className='lg:w-7/12  my-auto'>
                            <p className='font-semibold text-md mb-3 mt-12 font-PanchangSemibold'>OUR FOCUS AREAS</p>
                            <h3 className='text-4xl lg:text-2xl font-semibold font-PanchangSemibold'>Active Learning and Skill Development</h3>
                            <div className='space-y-3'>
                                <p className=' font-SpaceGrotesk opacity-90'>
                                    At the School of Hardknocks, students are not just passive learners. They are active participants in their own education.
                                </p>
                                <p className=' font-SpaceGrotesk opacity-90 pb-4'>
                                    They are encouraged to explore, experiment, and collaborate with their peers and teachers to develop the critical thinking, problem-solving, creativity, and communication skills that are essential for success in the modern world.
                                </p>

                                <Link href="/pilot_school_project" className='inline'>
                                  <a className='inline text-[#3908FF] mt-10' >Read more about our school project <img src="/aboutus/right arrow.png" alt="right arrow"  className='w-4 inline ml-2' /> </a>
                                </Link>
                            </div>

                        </div>
                    </section>

                    <section className='flex flex-col lg:flex-row w-full'>
                    <div  className='relative lg:w-4/12'>
                            <img src="https://res.cloudinary.com/tacafrica/image/upload/v1665933765/my_folder/wetransfer_oct_2023/image00021_wpjrm8.jpg" alt="thats not all" className='rounded-t-3xl h-[30rem] lg:rounded-full object-cover'/>
                            <img src="/Vector18.png" alt="bottom_green_image" className='absolute md:hidden  -bottom-[0.1rem]'/>
                        </div>
                        <div className='lg:w-7/12 lg:mx-20 my-auto'>
                            <p className='font-semibold text-md mb-3 mt-12 font-PanchangSemibold'>
                                {`THAT'S NOT ALL`}</p>
                            <h3 className='text-4xl lg:text-2xl font-semibold font-PanchangSemibold'>
                                {`There's more! Here's the Best Part`}</h3>
                            <div className='space-y-5'>
                                <p className=' my-6 font-SpaceGrotesk opacity-90'>

                                    {`We aren't a rigid, one-size-fits-all model. It's flexible and adaptable, and can be customized to meet the needs and goals of each individual school and community.`} </p>
                            </div>
                            <p className='font-bold text-sm'>OUR WORKING MODEL:</p>
                            <div className='flex space-x-3'>
                              <span className="bg-[#F5F5F6] px-4 py-2">
                                <img src="/aboutus/play.png" alt="play" className='w-10' />
                                <p className='text-sm text-center'>Play</p>
                              </span>
                              <span className="bg-[#F5F5F6] px-4 py-2">
                                <img src="/aboutus/STEAM.png" alt="steam" className='w-10' />
                                <p className='text-sm text-center'>Learn</p>
                              </span>
                              <span className="bg-[#F5F5F6] px-4 py-2">
                                <img src="/aboutus/earn.png" alt="earn" className='w-10' />
                                <p className='text-sm text-center'>Earn</p>
                              </span>
                            </div>
                        </div>
                    </section>

                </div>

            </div>
        </>
    )
}
