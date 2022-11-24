import Button from '../Button'
import { useState, useEffect } from 'react'
import Link from 'next/link'


export default function HeroSection(){

    return(
        <section id='home' className=" h-screen  overflow-hidden bg-fixed bg-center bg-cover bg-mobileBG lg:bg-test2" style={{backgroundAttachment: 'scroll' }} >
            <div className="h-screen  overflow-hidden flex flex-col justify-end  " style={{background: 'rgba(0, 0, 0, 0.75)' }} >
                <div className=' w-10/12 mb-48 lg:mb-20 2xl:mb-[10%] mx-auto'>
                    <p className='text-[#ff9700] text-lg lg:text-3xl 2xl:text-4xl font-mavin '>We Are The School Of Hard Knocks</p>
                    <h1 className='text-white text-3xl lg:text-6xl my-6 font-mavin  overflow-hidden'>Welcome To <br /> SOHK Foundation-NG </h1>
                    <p className='text-white font-light font-["openSans"] text-xl mb-7'>The prestigious School of Hardknocks SOHK- Foundation Nigeria has constructed a facility entirely dedicated for service to humanity. You can also be part of this foundation by contributing financially, through mentorship, or serving as advisory to the organization.  
                    </p>
                    <Link href='/services'>
                        <a>

                    <Button text={'Discover More'} />
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    )   
}