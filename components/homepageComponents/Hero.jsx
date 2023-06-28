/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Button from '../Button';
import Link from 'next/link';

import { useRouter } from 'next/router'



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
                              <a href='/pdf/SOHK General Brochure.pdf' target='_blank' rel="noreferrer" >
                              <Button text={'Download Brochure'}
                                  extraStyles='bg-transparent border w-full'/>
                              </a>
                        </div>
                              <Labels />
                    </div>
                    <img src="/Vector18.png" alt="bottom_green_image" className='absolute -bottom-[0.1rem]'/>
                </div>
            </div>
        </>
    )
}


const Labels = () => {

    const router = useRouter()


    const handleClick = (e, path) => {
      e.preventDefault()
      router.push(`/${path}`)
    }

    return (
        <div className='flex space-x-3 mt-12 z-40'>

        <span className="bg-white px-4 py-2 relative group cursor-pointer w-20 h-20 rounded-lg" onClick={(e) => handleClick(e, 'play')}>
            <div>
                <img src="/aboutus/play.png" alt="play" className='w-10 left-5 absolute group-hover:opacity-0' />
                <img src="/aboutus/play.gif" alt="play" className='w-10 left-5 absolute opacity-0 group-hover:opacity-100' />
            </div>
            <p className='text-sm text-center mt-10'>Play</p>
        </span>
        <span className="bg-white px-4 py-2 relative group cursor-pointer w-20 h-20 rounded-lg" onClick={(e) => handleClick(e, 'learn')}>
          <div>
              <img src="/aboutus/STEAM.png" alt="steam" className='w-10 left-5 absolute group-hover:opacity-0' />
              <img src="/aboutus/STEAM.gif" alt="steam" className='w-10 left-5 absolute opacity-0 group-hover:opacity-100' />
          </div>
          <p className='text-sm text-center mt-10'>Learn</p>
        </span>
        <span className="bg-white px-4 py-2 relative group cursor-pointer w-20 h-20 rounded-lg" onClick={(e) => handleClick(e, 'earn')}>
          <div className=''>
              <img src="/aboutus/earn.png" alt="earn" className='w-10 left-5 absolute group-hover:opacity-0 ' />
              <img src="/aboutus/earn.gif" alt="earn" className='w-10 left-5 absolute opacity-0 group-hover:opacity-100' />
          </div>
          <p className='text-sm text-center mt-10'>Earn</p>
        </span>
      </div>
    )
}
