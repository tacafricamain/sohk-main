import Button from '../Button'
import { useState, useEffect } from 'react'


export default function HeroSection(){

    return(
        <section id='home' className=" h-screen overflow-hidden bg-fixed bg-center bg-cover bg-mobileBG lg:bg-test2" style={{backgroundAttachment: 'scroll' }} >
            <div className="h-screen overflow-hidden flex flex-col justify-end " style={{background: 'rgba(0, 0, 0, 0.69)' }} >
                <div className=' w-10/12 mb-48 lg:mb-20 2xl:mb-[10%] mx-auto'>
                    <p className='text-[#ff9700] text-lg lg:text-3xl 2xl:text-4xl font-mavin '>We Are The School Of Hard Knocks</p>
                    <h1 className='text-white text-3xl lg:text-7xl my-6 font-mavin  overflow-hidden'>There Is No Stupidity <br /> But A Plurality  Of Talent </h1>
                    <p className='text-white font-light font-["openSans"] text-xl mb-7'>Learning does not stop at the school doors, it continues through life.  <br className='hidden lg:block' /> {`and sometimes it doesn't even happen in the school`}</p>
                    <Button text={'Discover More'} />
                </div>
            </div>
        </section>
    )   
}