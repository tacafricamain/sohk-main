import React from 'react'
import CardSlider from '../Sliders/CardSlider'
import ConditionalSlider from '../Sliders/ConditionalSlider'

export default function Activities() {

  return (
    <div id='activities' className=' bg-softGrey'>
        <div className='text-center'>
            <h3 className='text-gold font-mavin mt-24 text-2xl pt-8'  >Our Activities</h3>
            <h2 className='font-mavin text-3xl my-3 '>Our Learning Offers</h2>
            <p className='text-greyBlack font-["openSans"] '> Learning would become fun because it would bubble up from within <br className='hidden lg:block' /> and not be forced in from without.</p>
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
