import React from 'react'
import Link from 'next/link'
import Button from '../Button'

export default function Membership() {
  return (
    <div className=' text-white flex justify-center bg-gradient-to-r from-gold to-orange' >
        <div className='h-[8rem] mx-4 md:w-10/12 flex lg:justify-between justify-center items-center '>
            <p className='font-mavin text-xl hidden lg:block'>Learn as if you were going  <br className='hidden lg:block' /> to live forever!</p>

            <div className='px-1'>
            <a id='member' href="https://www.dropbox.com/s/r4le37k1l017vfj/TAC%20Community%20Hub%20Membership%20form.pdf?dl=1">
                        <Button text={'Download membership form'} />
                    </a>
            </div>
        </div>

    </div>
  )
}
