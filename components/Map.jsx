/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Button from './Button'
import Link from 'next/link'

export default function Map() {
    return (
        <div className="relative w-full map mt-80 md:mt-28 bg-slate-100 ">
            <div className='absolute bg-white rounded-lg h-96 md:h-40 w-11/12 md:w-10/12 shadow-[0_8px_30px_rgb(0,0,0,0.12)] top-2/4 md:top-1 left-1/2 transform -translate-x-1/2 -translate-y-[170%] md:-translate-y-1/2'>
                <div className="flex flex-col md:flex-row h-full sm:divide-y-2 md:divide-y-0 md:divide-x-2 divide-slate-200 py-3">
                    <div className='flex w-full h-1/3  md:h-full font-mavin text-xl md:text-3xl  '>
                        <h2 className='m-auto'>Come Visit Us
                            <br/>
                            At the TAC community Hub</h2>
                    </div>
                    <div className="flex  flex-col md:flex-row w-full md:h-full justify-center md:justify-start md:items-center md:space-x-4 h-full px-5 md:pl-10 ">
                        <span className=''>
                            <img src="/shooting-stars.gif" alt="shooting-stars.gif" className='w-32 -rotate-90'/>
                        </span>
                        <span>
                            <h3 className='font-mavin text-2xl md:text-2xl'>Been Here Lately?</h3>
                            <p className='font-mavin text-sm'>Take a moment to leave a review for us</p>
                            {/* <div className='flex flex-col md:flex-row'> */}
                            <a href='https://www.google.com/maps/place/58JV%2B97F+TAC+Africa+Community+Hub,+901101,+Abuja,+Federal+Capital+Territory/@9.1813933,7.3419903,16z/data=!4m6!3m5!1s0x104dd9fc990fcb29:0xf260b1e8512372ff!8m2!3d9.1813933!4d7.3419903!16s%2Fg%2F11t6mqcr8d?authuser=0&hl=en' target='_blank' rel="noreferrer" className=' flex flex-col md:flex-row'>
                                <button className="text-white bg-darkBlue hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-3 mt-3 text-center mr-2">
                                    Rate Us
                                </button>
                            </a>
                            {/* </div> */} </span>
                    </div>
                </div>
            </div>
            <h2 className="text-3xl p-6  text-center font-mavin mb-6">
                {/* Come Visit Us At the TAC community Hub */} </h2>
            <div className="h-[80vh]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.7013032334535!2d7.341990300000001!3d9.1813933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104dd9fc990fcb29%3A0xf260b1e8512372ff!2sTAC%20Africa%20Community%20Hub!5e0!3m2!1sen!2sng!4v1662564357096!5m2!1sen!2sng" allowFullScreen=""
                    style={
                        {
                            border: "0",
                            height: '80vh',
                            width: '100%'
                        }
                    }
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}
