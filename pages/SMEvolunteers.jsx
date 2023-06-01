/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Button from '../components/Button'
import Link from 'next/link'

export default function SMEvolunteers() {
    return (
        <div className='flex flex-col lg:flex-row w-screen px-10 py-20 bg-[#c3d9ff]'>
            <div className='flex flex-col w-full justify-center'>
                <h1 className=' text-2xl mb-3 mt-4 font-PanchangSemibold'> <b className='text-3xl uppercase'>JOIN US AS A</b>  <br /> SUBJECT MATTER EXPERT</h1>
                <div className='text-base mb-3 mt-4 font-SpaceGrotesk opacity-70 space-y-4'>
                    <p>
                        Join the skilled and dynamic Team at SOHK Nigeria by signing up to be a volunteer for our upcoming Free Training to 450 Students in the FCT.
                        </p>
                        <p>
                        We are looking for passionate, committed and innovative individuals who have made marks in their area of expertise and who are willing to make a valuable impact to the success of this project.
                    </p>
                </div>
                <div>
                    <a href='https://forms.gle/nWGKb3FG4vwpXqQbA' target='_blank' rel="noreferrer" >
                        <Button text='Volunteer Here' />
                    </a>
                </div>
            </div>
            <div className='flex w-full md:ml-10'>
            <div className='hidden md:flex flex-col justify-between mr-10'>
                <img src="https://res.cloudinary.com/tacafrica/image/upload/v1675094160/my_folder/IBB%20golf%20tour/YOD-20230113009_z5dsih.jpg" alt="" className=' lg:mr-8 h-[16rem] rounded-xl mx-auto w-full object-cover'/>
                <img src="https://res.cloudinary.com/tacafrica/image/upload/v1675095182/my_folder/SOHK%20Team%20%40%20TAC%20HQ/YOD-20230113022_ge7k1m.jpg" alt="" className=' lg:mr-8 h-[12rem] rounded-xl mx-auto w-full object-cover'/>
            </div>
            <div className=''>
                <img src="https://res.cloudinary.com/tacafrica/image/upload/v1683807305/my_folder/TACteam/21ba6a44-b898-44cd-b388-be23329cb289_tu1ejm.jpg" alt="" className=' lg:mr-8 h-[30rem] rounded-xl mx-auto object-cover'/>
            </div>
            </div>
        </div>
    )
}
