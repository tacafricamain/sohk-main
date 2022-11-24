/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { data } from '../pages/api/data'
import Link from 'next/link'

export default function services() {
  return (
        <div className="w-full">
             <h1 className='text-gold text-center text-3xl lg:text-7xl mb-6 pt-20  font-mavin overflow-hidden'>Our Services</h1>
    
            { data.map((edge, i) => (
                    <div
                    key={i}
                    className="flex-none w-11/12 mx-auto mb-16 overflow-hidden rounded-lg md:pb-4 "
                  >
                    <Link href={edge?.link}>
                      <a className="space-y-4">
                        <div className="aspect-w-16 aspect-h-9 rounded-lg border-8 border-white">
                          <img
                            className="object-cover h-[300px] lg:h-[600px] w-full shadow-md hover:shadow-xl "
                            src={edge?.image}
                            alt={edge?.image}
                          />
                        </div>
                        <div className="px-4 py-2">
                          <div className="text-lg font-medium leading-6 text-center">
                            <h3 className=" max-h-12 mb-3 text-base font-semibold lg:font-bold font-mavin text-gold">
                              {edge?.title}
                            </h3>
                          </div>
                          <div className="text-sm line-clamp-3">
                            <p className="text-center max-h-fit font-['openSans'] ">
                              {edge?.text}
                            </p>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>       
     ))} 
     </div>
  )
}
