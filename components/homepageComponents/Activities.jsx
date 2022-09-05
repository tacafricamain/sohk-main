import React from 'react'
import CardSlider from '../Sliders/CardSlider'
import ConditionalSlider from '../Sliders/ConditionalSlider'

export default function Activities() {

  return (
    <div id='activities' className=' bg-softGrey'>
        <div className='text-center'>
            <h3 className='text-gold font-mavin mt-24 text-2xl'  >Our Activities</h3>
            <h2 className='font-mavin text-3xl my-3 '>Our Sporting School Offers</h2>
            <p className='text-greyBlack font-["openSans"] '>School of Hardknocks is passionate about empowering kids and adults of all ages <br className='hidden lg:block' /> with research-based extra curriculum activities with certified coaches.</p>
        </div>
        <div className='lg:hidden'>
          <ConditionalSlider /> 
        </div>
        <div className='hidden lg:block'>
          <CardSlider />
        </div>
    </div>
  )
}
