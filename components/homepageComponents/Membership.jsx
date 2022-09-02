import React from 'react'
import Button from '../Button'

export default function Membership() {
  return (
    <div className=' text-white flex justify-center bg-gradient-to-r from-gold to-orange' >
        <div className='h-[8rem] w-10/12 flex justify-between items-center '>
            <p className='font-mavin text-2xl'>Learn as if you were going  <br className='hidden lg:block' /> to live forever!</p>

            <div>
                <button type="button" className=" inline border border-white bg-transparent focus:outline-none font-medium rounded-lg text-sm px-8 py-4 text-center mr-2">Start Your Membership</button>
            </div>
        </div>

    </div>
  )
}
