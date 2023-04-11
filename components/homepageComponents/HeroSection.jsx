/* eslint-disable @next/next/no-img-element */
import Button from '../Button'
import { useState, useEffect } from 'react'
import Link from 'next/link'


export default function HeroSection(){

    return(
        // bg-mobileBG lg:
        // <section id='home' className="h-[100vh] overflow-hidden bg-fixed bg-center bg-cover
        // bg-test2" style={{ backgroundAttachment: 'scroll' }} >
        //     <div className="h-screen  overflow-hidden flex flex-col justify-end  "
        //     >
               
        //     </div>
        // </section>


        <div className="flex-col bg-main_grey ">
            <div
              className='h-screen w-full bg-main_grey flex items-end overflow-hidden object-cover img_landing-container'
            >
            <img alt="Technology Against Crime ideology"
                src="https://res.cloudinary.com/tacafrica/image/upload/v1675095202/my_folder/Vitality%20Clubhouse%20Tour/YOD05720230112_qpcnb2.jpg"
                className="object-cover"
                style={{width: '100%', height: '100%'}} />
            <img alt="Technology Against Crime ideology"
                src="https://res.cloudinary.com/tacafrica/image/upload/v1675094158/my_folder/IBB%20golf%20tour/YOD-20230113014_ayqghs.jpg"
                className="object-cover"
                style={{width: '100%', height: '100%'}} />
            <img alt="Technology Against Crime ideology"
                src="https://res.cloudinary.com/tacafrica/image/upload/v1675095202/my_folder/Vitality%20Clubhouse%20Tour/YOD05720230112_qpcnb2.jpg"
                className="object-cover"
                style={{width: '100%', height: '100%'}} />
            <img alt="Technology Against Crime ideology"
                src="https://res.cloudinary.com/tacafrica/image/upload/v1663156490/my_folder/mandella_and_chess_day/Screenshot_from_2022-09-14_12-53-30_qz5g3p.png"
                className="object-cover"
                style={{width: '100%', height: '100%'}} /> 
            </div>
        </div>    
    )   
}