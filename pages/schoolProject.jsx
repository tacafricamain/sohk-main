/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function SchoolProject() {
    return (
      
    <div className='mx-10'>       
        <div id='aboutus' className='flex items-center min-h-[45rem] bg-aboutUsHeroBg bg-cover  mt-32 rounded-t-3xl'>           
            <div className='w-full  relat ive'>
                <div className='flex flex-col justify-center items-center w-full h-[45rem]'>                  
                    <h1 className='text-center text-white font-bold text-8xl'>SOHK Pilot <br /> Program To <br /> Schools In FCT</h1>
                    <button className="button-48 border-2 border-blue-500 mx-auto" role="button">
                        <span className="text-white hover:text-black text-xl font-semibold px-16 ">READ MORE BELOW</span>
                    </button>
                </div>
                <img src="/bottom_green_image_01.png" alt="bottom_green_image" className='' />
            </div>
        </div>
        <section className='h-[45rem] bg-blue-600 relative'>
            <img src="/bottom_white_image_01.png" alt="bottom_green_image" className='absolute bottom-0' />
        </section>
        <section className='h-[45rem] bg-white flex'>
            <div className='w-full'>
                <img src="/illustration_image_01.png" alt="" />
            </div>
            <div className='flex flex-col items-center w-full'>
                <h2 className='font-semibold' >OUR MISSION</h2>
                <h3 className='font-semibold text-3xl text-center' >To Build Young Leaders Through <br /> Sports And Digital Skills</h3>
                <div className='rounded-xl overflow-hidden m-5'>
                    <img src="https://res.cloudinary.com/tacafrica/image/upload/v1683971134/image00002_krsbdi.jpg" alt="" />
                </div>
            </div>
        </section>
        
    </div>
  )
}

