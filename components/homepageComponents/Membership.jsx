import React from 'react'
export default function Membership() {
  return (
    <div className=' text-white flex justify-center bg-gradient-to-r from-gold to-orange' >
        <div className='h-[8rem] mx-4 md:w-10/12 flex lg:justify-between justify-center items-center '>
            <p className='font-mavin text-xl hidden lg:block'>Learn as if you were going  <br className='hidden lg:block' /> to live forever!</p>

            <div className='px-1'>
                <button type="button" className=" inline border border-white bg-transparent focus:outline-none font-medium rounded-lg text-sm px-8 py-4 text-center mr-2">Start Your Membership</button>
            </div>
        </div>

    </div>
  )
}
