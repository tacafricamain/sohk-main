import React from 'react'
import Button from '../Button'

export default function Membership() {
    return (
        <div className=' text-white flex justify-center bg-darkBlue '>
            <div className='h-[8rem] mx-4 md:w-10/12 flex lg:justify-between justify-center items-center '>
                <p className='font-mavin text-xl hidden lg:block'>Learn as if you were going
                    <br className='hidden lg:block'/>
                    to live forever!</p>

                <div className='px-1'>
                    <a id='member' href="/pdf/TAC Community Hub Membership form.pdf">
                        <Button text={'Download membership form'}/>
                    </a>
                </div>
            </div>

        </div>
    )
}
