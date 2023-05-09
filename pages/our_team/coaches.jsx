/* eslint-disable @next/next/no-img-element */
import React from 'react'
import item from '../api/staffData.json'
import { useRouter } from "next/router"
import Link from 'next/link'

export default function Coaches() {

  const router = useRouter().asPath
  
  return (
    <div className="pt-20 mb-20 flex flex-col items-center justify-center space-y-10">
              <span>
      <h2 className=' gap-6 gap-y-8 text-xl mb-5 text-blue-700 uppercase font-semibold'>Coaches</h2>
      <div className="grid grid-cols-12 gap-6 gap-y-8 max-w-6xl">

        {
          item.coaches.map(({ name, designation, image, about, slug }) => (
            <>
              <div key={name} className="col-span-12 sm:col-span-6 md:col-span-3 shadow rounded-md">
                  <div className="w-full flex flex-col">
                      <div className="relative rounded-lg overflow-hidden mx-auto my-5">
                          <span>
                              <img src={image} alt={name} className="w-40 h-40 object-cover rounded-full"/>
                          </span>
                      </div>

                      <div className="flex flex-row mt-2 gap-2">

                          <div className="flex flex-col px-4 pb-4">
                              <span>
                                  <p className="text-gray-600 text-sm font-semibold text-center">{name}</p>
                              </span>
                              <span className="text-gray-600 text-xs mt-2 hover:text-gray-600 font-bold">
                                  {designation}
                              </span>
                              <span className="text-gray-600 text-base mt-2 hover:text-gray-600 text-3">
                                  {about}
                              </span>
                              <span>
                              <Link href={ router.includes('our_team/coaches') ?  `/our_team/${slug}` : `/our_team/${slug}` }  >
                                  Read More
                              </Link>
                              </span>
                          </div>

                      </div>
                  </div>
              </div>
            </>
        
          ))
        }
     
        </div>
      </span>
    </div>
  )
}
