/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
// import {GetStaticProps} from 'next';
import React from 'react'
import {data} from '../../pages/api/newsletter';
import Link from 'next/link';

export default function Newsletters() {
    return (
        <>

            <section className="flex items-center w-full bg-white">
                <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl ">
                    <h1 // ref={`${text}`}
                        className="mx-auto mob:p-2 text-bold text-6xl laptop:text-8xl w-full"
                    >
                        Newsletter.
                    </h1>
                    <div className="grid grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
                        {
                        data.map((post, i) => (

                            <figure className='flex flex-col items-stretch mb-10 rounded-t-xl overflow-hidden'>
                                <img className="w-full bg-gray-200 h-[277px] object-cover "
                                    src={
                                        post.image
                                    }
                                    alt=""
                                    width="1310"
                                    height="873"/>

                                <p className="mt-5 text-lg font-medium leading-6 text-black">
                                    {
                                    post.title
                                } </p>
                                <p className="mt-3 text-base text-gray-500">
                                    {
                                    post.description
                                } </p>
                                <div className="flex gap-3 mt-3 -10 justify-left">
                                    <span className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600" >
                                        <Link href={
                                            post.link
                                        }>
                                            <a>
                                                <span className=''>
                                                    Read more
                                                </span>
                                            </a>
                                        </Link>
                                        <ion-icon class="flex-none w-3 h-3 ml-3 fill-blue-600 group-active:fill-current md hydrated" name="arrow-forward-outline" role="img" aria-label="arrow forward outline"></ion-icon>
                                    </span>
                                </div>
                            </figure>
                        ))
                    } </div>

                </div>
            </section>

        </>
    )
}
