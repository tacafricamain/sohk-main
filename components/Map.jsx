/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Map() {
    return (
        <div className="relative w-full map mt-80 md:mt-28 bg-slate-100 ">
            <div className='absolute bg-white rounded-lg h-96 md:h-40 w-11/12 md:w-10/12 shadow-[0_8px_30px_rgb(0,0,0,0.12)] top-2/4 md:top-1 left-1/2 transform -translate-x-1/2 -translate-y-[170%] md:-translate-y-1/2'>
                <div className="flex flex-col md:flex-row h-full sm:divide-y-2 md:divide-y-0 md:divide-x-2 divide-slate-200 py-3">
                    <div className='flex w-full h-1/3  md:h-full font-mavin text-lg md:text-3xl  '>
                        <h2 className='m-auto text-xl font-bold'>Come Visit Us at
                            <br/>
                             School Of Hardknocks Foundation Nigeria</h2>
                    </div>
                    <div className="flex  flex-col md:flex-row w-full md:h-full justify-center md:justify-start md:items-center md:space-x-4 h-full px-5 md:pl-10 ">
                        <span className=''>
                            <img src="/shooting-stars.gif" alt="shooting-stars.gif" className='w-32 -rotate-90'/>
                        </span>
                        <span>
                            <h3 className='font-mavin text-2xl md:text-2xl'>Been Here Lately?</h3>
                            <p className='font-mavin text-sm'>Take a moment to leave a review for us</p>
                            {/* <div className='flex flex-col md:flex-row'> */}
                            <a href='https://g.page/r/CVRa9DwAm7B0EBM/review' target='_blank' rel="noreferrer" className=' flex flex-col md:flex-row'>
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
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.7013122235794!2d7.339415874283801!3d9.181392490886157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104dd922e873f3f1%3A0x74b09b003cf45a54!2sSchool%20of%20HardKnocks%20Foundation%20Nigeria!5e0!3m2!1sen!2sng!4v1685976351947!5m2!1sen!2sng" allowFullScreen=""
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
