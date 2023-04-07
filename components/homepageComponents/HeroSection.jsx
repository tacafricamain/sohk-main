import Button from '../Button'
import { useState, useEffect } from 'react'
import Link from 'next/link'


export default function HeroSection(){

    return(
        // bg-mobileBG lg:
        <section id='home' className="h-[100vh] overflow-hidden bg-fixed bg-center bg-cover 
        bg-test2" style={{ backgroundAttachment: 'scroll' }} >
            <div className="h-screen  overflow-hidden flex flex-col justify-end  "
                // style={{ background: 'rgba(0, 0, 0, 0.3)' }}
            >
                {/* <div className='  m-auto'>
                    <a id='member' href="/pdf/TAC Community Hub Membership form.pdf">
                        <Button text={'Download S.O.H.K membership form'} />
                    </a>
                </div> */}
            </div>
        </section>
    )   
}