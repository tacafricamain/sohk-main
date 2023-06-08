/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Head from 'next/head'
import VideoComp from '../components/video'
import YoutubeEmbed from '../components/video';

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
                <div id='aboutus' className='flex items-center h-[40rem] lg:h-[45rem] bg-aboutUsHeroBg bg-cover bg-top mt-12 rounded-t-3xl'>
                    <div className='w-full  relative '>
                      <div className='absolute bg-black'></div>
                        <div className='flex flex-col justify-center items-center w-full h-[40rem] lg:h-[45rem]'>
                            <h1 className='text-center text-black font-bold text-4xl lg:text-5xl mb-10 font-PanchangExtrabold'>
                                A Radical
                                <br/>
                                Approach  To 21st Century Education
                            </h1>
                            <span className='space-x-4 flex text-3xl  items-center'>
                                <p>Play</p>
                                <p>Learn</p>
                                <p>Earn</p>
                            </span>
                        </div>
                        <img src="/bottom_green_image_01.png" alt="bottom_green_image" className='absolute -bottom-[0.1rem]'/>
                    </div>
                </div>
                {/*  */}
                <div>
                    <section className='pb-12 lg:h-[75rem]  bg-[#0098ff] relative'>
                        <img src="/bottom_white_image_01.png" alt="bottom_green_image" className='absolute bottom-0'/>
                        <section className='bg-[#0098ff]  flex flex-col lg:fl ex-row lg:pt-20 '>
                            <div className='text-center font-SpaceGrotesk pt-16 text-white'>
                                <h2 className='font-semibold font-PanchangBold  text-4xl  text-center mb-5'>So what makes
                                    <br/>
                                    the School of Hardknocks
                                    <br/>
                                    different?
                                </h2>
                                <p className='text-3xl max-w-5xl mx-auto'>For starters, it`s characterized by a number of key features that set it apart from traditional schools:</p>
                            </div>

                        </section>
                        <div className='flex flex-col lg:flex-row pt-20 mx-5 space-y-12 lg:space-y-0 lg:space-x-12 text-white'>
                            <div className='text-center'>
                                <img src="/coach.png" alt="" className='w-[120px] h-[120px] mx-auto'/>
                                <h2 className='font-semibold font-PanchangSemibold text-2xl'>
                                    Digital Learning:</h2>
                                <p className='text-base my-6 font-SpaceGrotesk opacity-90'>
                                    Think online classes, interactive apps, and educational games that use technology to enhance the learning experience.
                                </p>
                            </div>
                            <div className='text-center'>
                                <img src="/digital.png" alt="" className='w-[120px] h-[120px] mx-auto'/>
                                <h2 className='font-semibold font-PanchangSemibold text-2xl'>
                                    Project-Based Learning:</h2>
                                <p className='text-base my-6 font-SpaceGrotesk opacity-90'>
                                    {`  A teaching method that has students working on real-world projects to develop practical skills and knowledge.`} </p>
                            </div>
                            <div className='text-center'>
                                <img src="/sports.png" alt="" className='w-[120px] h-[120px] mx-auto'/>
                                <h2 className='font-semibold font-PanchangSemibold text-2xl'>
                                    Personalized Learning:</h2>
                                <p className='text-base my-6 font-SpaceGrotesk opacity-90'>
                                    An approach to education that considers each student`s unique strengths, weaknesses, interests, and learning style.
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row pt-20 mx-5 space-y-12 lg:space-y-0 lg:space-x-12 lg:w-8/12 text-white'>
                            <div className='text-center'>
                                <img src="/coach.png" alt="" className='w-[120px] h-[120px] mx-auto'/>
                                <h2 className='font-semibold font-PanchangSemibold text-2xl'>Learning:</h2>
                                <p className='text-base my-6 font-SpaceGrotesk opacity-90'>
                                    A focus on global citizenship, cultural awareness, and understanding of different perspectives.
                                </p>
                            </div>
                            <div className='text-center'>
                                <img src="/digital.png" alt="" className='w-[120px] h-[120px] mx-auto'/>
                                <h2 className='font-semibold font-PanchangSemibold text-2xl'>
                                    STEAM Education:
                                </h2>
                                <p className='text-base my-6 font-SpaceGrotesk opacity-90'>
                                    {`A curriculum that integrates science, technology, engineering, arts, and math to prepare students for careers in these fields.`} </p>
                            </div>
                        </div>
                    </section>
                </div>
                {/*  */}

                <div className='px-8 bg-[#c3d9ff] py-20'>
                    <section className='flex flex-col-reverse  lg:flex-row w-full pt-32 lg:pt-0'>
                        <div className='lg:w-7/12 lg:mx-20 my-auto'>
                            <p className='text-xl my-6 font-SpaceGrotesk opacity-90'>
                            At the School of Hardknocks, students are not just passive learners. They`re active participants in their own education. They`re encouraged to explore, experiment, and collaborate with their peers and teachers to develop the critical thinking, problem-solving, creativity, and communication skills that are essential for success in the modern world.
                            </p>
                        </div>
                        <img src="https://res.cloudinary.com/tacafrica/image/upload/v1661951046/my_folder/compressed/mandella-and-chess-day-compressed/1-2207230065_result_vm4qzp.webp" alt="" className='lg:w-5/12 lg:mr-8 rounded-full'/>
                    </section>

                    <section className='flex flex-col lg:flex-row w-full pt-32 lg:pt-0 '>
                        <img src="https://res.cloudinary.com/tacafrica/image/upload/v1661951039/my_folder/compressed/mandella-and-chess-day-compressed/1-2207230069_result_pio8ig.webp" alt="" className='lg:w-5/12 lg:mr-8 rounded-full'/>
                        <div className='lg:w-7/12 lg:mx-20 my-auto'>
                            <p className='text-xl my-6 font-SpaceGrotesk opacity-90'>
                            But here`s the best part: the School of Hard Knocks isn`t a rigid, one-size-fits-all model. It`s flexible and adaptable, and can be customized to meet the needs and goals of each individual school and community. Whether you`re in a small rural school or a large urban district, you can apply the principles of the School of Hard Knocks to create a learning environment that`s engaging, effective, and empowering for all students.
                            </p>

                        </div>
                    </section>

                </div>

            </div>
        </>
    )
}
