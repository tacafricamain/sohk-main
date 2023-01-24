import Button from '../Button'
import { useState, useEffect } from 'react'
import Link from 'next/link'


export default function HeroSection(){

    return(
        <section id='home' className=" h-[110vh] mt-12 overflow-hidden bg-fixed bg-center bg-cover bg-mobileBG lg:bg-test2" style={{backgroundAttachment: 'scroll' }} >
            <div className="h-screen  overflow-hidden flex flex-col justify-end  "
                // style={{ background: 'rgba(0, 0, 0, 0.3)' }}
            >
                {/* <div className='  m-auto'>
                    <a id='member' href="https://www.dropbox.com/s/r4le37k1l017vfj/TAC%20Community%20Hub%20Membership%20form.pdf?dl=1">
                        <Button text={'Download S.O.H.K membership form'} />
                    </a>
                </div> */}
            </div>
        </section>
    )   
}