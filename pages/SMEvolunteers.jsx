/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Button from '../components/Button'

export default function SMEvolunteers() {
    return (
        <div className='flex flex-col lg:flex-row w-screen px-10 my-10'>
            <div className='flex flex-col w-full justify-center'>
                <h1 className=' text-2xl mb-3 mt-4 font-PanchangSemibold'>JOIN US AS A <br /> SUBJECT MATTER EXPERT</h1>
                <p className='text-base mb-3 mt-4 font-SpaceGrotesk opacity-70' >
                    Join the skilled and dynamic Team at SOHK Nigeria by signing up to be a volunteer for our upcoming Free Training to 450 Students in the FCT.
                    We are looking for passionate, committed and innovative individuals who have made marks in their area of expertise and who are willing to make a valuable impact to the success of this project.
                </p>
                <div>
                    <Button text='Register' />
                </div>
            </div>
            <div className='flex w-full md:ml-10'>
            <div className='hidden md:flex flex-col justify-between mr-10'>
                <img src="https://res.cloudinary.com/tacafrica/image/upload/v1675094181/my_folder/IBB%20golf%20tour/YOD-20230113085_yoriaz.jpg" alt="" className=' lg:mr-8 h-[16rem] rounded-xl mx-auto w-full object-cover'/>
                <img src="https://res.cloudinary.com/tacafrica/image/upload/v1683806248/my_folder/TACteam/WhatsApp_Image_2023-05-11_at_12.33.41_PM_iedf99.jpg" alt="" className=' lg:mr-8 h-[12rem] rounded-xl mx-auto w-full object-cover'/>
            </div>
            <div className=''>
                <img src="https://res.cloudinary.com/tacafrica/image/upload/v1683807305/my_folder/TACteam/21ba6a44-b898-44cd-b388-be23329cb289_tu1ejm.jpg" alt="" className=' lg:mr-8 h-[30rem] rounded-xl mx-auto object-cover'/>
            </div>
            </div>
        </div>
    )
}
