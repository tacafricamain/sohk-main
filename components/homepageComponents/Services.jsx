import React from 'react'
import SwiperFull from '../Sliders/CardSlider'

export default function Services() {
  return (
    <div className=' bg-softGrey'>
        <div className='text-center'>
            <h3 className='text-gold font-mavin mt-24 text-2xl'  >Professional Services</h3>
            <h2 className='font-mavin text-3xl my-3 '>Our Sporting School Offers</h2>
            <p className='text-greyBlack font-["openSans"] '>School of Hardknocks is passionate about empowering kids and adults of all ages <br className='hidden lg:block' /> with research-based extra curriculum activities with certified coaches.</p>
        </div>
        <SwiperFull />

    </div>
  )
}
