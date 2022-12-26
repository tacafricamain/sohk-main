/* eslint-disable react/jsx-key */
// import {GetStaticProps} from 'next';
import React from 'react'
import { data } from '../api/newsletter';

export default function Newsletters() {
    return (
        <div className=' bg-white '>
            <div className="pt-32 pb-32 px-6 flex flex-col gap-4 items-center justify-center">
                {
                data.map((post, i) => (
                    <a className='w-full lg:w-[600px] mx-auto' href={
                        `${
                            post.link
                    }`
                    
                    }>
                        <div className="rounded-sm  grid grid-cols-12  bg-gray-200 shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform">
                            {/* <!-- Title --> */}
                            <div className="col-span-11 xl:ml-5">
                                <p className="text-blue-600 font-semibold">
                                       { post.title}
                                </p>
                            </div>

                            {/* <!-- Description --> */}

                            <div className=" col-span-11 xl:ml-5">
                                <p className="text-sm text-gray-800 font-light ">
                                    {
                                        post.description
                                    }
                                </p>
                            </div>
                        </div>

                    </a>
                ))
            } </div>
        </div>
    )
}
