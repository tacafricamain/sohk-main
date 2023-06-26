/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Head from 'next/head'
import Button from '../components/Button'
import Link from 'next/link'

export default function Donate() {
    return (
        <>
            <Head>
                <title>School of HardKnocks nigeria</title>
                <meta name="description" content="SOHK Pilot Program To Schools In FCT"/>
                <meta name="viewport" content="minimum-scale=1, minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div id='aboutus' className='flex items-center h-[50vh] lg:h-[40rem] bg-aboutUsHeroBg bg-cover bg-top mt-12 rounded-t-3xl mx-4 lg:mx-8'>
                <div className='w-full h-full relative '>
                    <div className='absolute top-0 left-0 right-0 bottom-0 opacity-70 rounded-t-3xl'></div>
                    <div className='flex flex-col relative lg:justify-start items-center w-full h-[40rem] lg:h-[45rem]'>
                        <h1 className='text-center text-white font-bold text-3xl lg:text-4xl mt-24 lg:mt-48 mb-8  uppercase font-SpaceGrotesk'>
                            DONATIONS AND
                            <br/>
                            SPONSORSHIPS
                        </h1>

                    </div>
                    <img src="/Vector18.png" alt="bottom_green_image" className='absolute -bottom-[0.1rem]'/>
                </div>
            </div>
            <section className='m-8'>
                <div className=' lg:max-w-5xl mx-auto mb-24'>
                    <div className=' flex flex-col mb-12'>
                        <div className='text-center space-y-12 font-SpaceGrotesk pt-8 lg:pt-16 text-black'>
                            <p className='text-xl max-w-5xl mx-auto font-semibold'>You can support our mission by helping out
                                <br/>
                                with any of these items:
                            </p>
                            <ul className='text-left'>
                                <li className=""> - Teaching Equipment and Materials</li>
                                <li className=""> - Sport gears - Groceries Items</li>
                                <li className=""> - Cash Donations</li>
                                <li className=""> - Digital Currencies</li>
                                <li className=""> - Talent Volunteering</li>
                                <li className=""> - Coaching and Mentorship</li>
                            </ul>
                        </div>

                    </div>
                    <div>


                    <h3 className='font-semibold text-xl'>For Cash Deposit:</h3>
                    <section className='flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-12 pt-8'>
                        <div className='p-8  bg-[#fafaf9] rounded-xl'>
                        <b>Bank name</b> - Fidelity Bank <br />
                        <b>Acc No.</b> - 4011282913 <br />
                        <b>Acc Name</b> - Technology Against Crime Initiative <br />
                        </div>
                        <div className='p-8  bg-[#fafaf9] rounded-xl'>
                        <b> Bank Name</b> - Mutual Trust Bank <br />
                        <b> Acc. No.</b> - 1100779642. <br />
                        <b> Account Name</b> - Technology Against Crime Initiative <br />
                        </div>
                    </section>

                    </div>
                </div>
            </section>
        </>

    )
}
