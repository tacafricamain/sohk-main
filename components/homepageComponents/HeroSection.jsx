/* eslint-disable @next/next/no-img-element */
import Button from '../Button'
import { useState, useEffect } from 'react'
import Link from 'next/link'


export default function HeroSection(){

    return(

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
                src="https://res.cloudinary.com/tacafrica/image/upload/v1678189517/project%20774/YOd20230216021_vshcsg.jpg"
                className="object-cover"
                style={{width: '100%', height: '100%'}} />
            <img alt="Technology Against Crime ideology"
                src="https://res.cloudinary.com/tacafrica/image/upload/v1665933795/my_folder/wetransfer_oct_2023/image00051_rcoxyz.jpg"
                className="object-cover"
                style={{width: '100%', height: '100%'}} /> 
            </div>
        </div>    
    )   
}