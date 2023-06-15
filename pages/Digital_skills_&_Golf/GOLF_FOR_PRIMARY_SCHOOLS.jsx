/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function GOLF_FOR_PRIMARY_SCHOOLS() {
  return (
      <div className="max-w-7xl mx-auto">
        <div className="w-10/12 mx-auto space-y-6 pt-36">
          <div className="flex flex-col space-y-4 pb-12">
            <span className="text-4xl font-semibold text-black">
            GOLF FOR PRIMARY SCHOOLS
            </span>
            {/* <span className="text-base  text-gray-500">
            Technology Against Crime | March 7, 2023
            </span> */}
          </div>
          <div className="w-full aspect-video bg-gray-400 object-c ontain rounded-xl overflow-hidden">
              <img src="/golf/FB_IMG_1678793117522.jpg" className='w-full object-fill' alt="project 774" />
          </div>
          <div className="flex flex-col gap-4 w-10/12 max-md:w-full mx-auto py-12 justify-between">
            <div className=" space-y-4">
              <p className="text-base  text-gray-800 leading-6">
              The School of HardKnocks Foundation is launching a new programme where we offer children in primary schools their first introduction to Golf training. We strongly believe that these kids will enjoy playing golf and that the game will help them build qualities and life skills that they would need as they grow older. The age of these children was put into consideration when preparing the resources of the Golf Curriculum for primary schools, so that they can find the game engaging and interesting. We have a lot of testimonies from young children to attest to the fact that learning Golf at an early age has helped to enhance their learning capabilities and had a positive impact on their overall well-being.
              </p>
              <div className='flex justify-center my-4 '>
                  <div className='container h-full grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-4 lg:h-[30rem] '>
                        <div className='lg:col-span-2 lg:row-span-2 bg-sky-400'>
                              <img
                                  src="/golf/FB_IMG_1678793135679.jpg"
                                  alt="golf for schools"
                                  className='max-h-full w-full object-cover'
                                  />
                      </div>
                        <div className='bg-red-300 '>
                        <img
                          src="/golf/FB_IMG_1678792440010.jpg"
                          alt="golf for schools"
                          className='max-h-full w-full object-cover'
                          />
                      </div>
                      <div className="bg-green-500">
                      <img
                          src="/golf/FB_IMG_1678792431402.jpg"
                          alt="golf for schools"
                          className='max- h-full object-cover'
                          />
                      </div>
                      <div className="bg-blue-400">
                      <img
                          src="/golf/FB_IMG_1678793082504.jpg"
                          alt="golf for schools"
                          className='max- h-full object-cover'
                          />
                      </div>
                      <div className="bg-yellow-400">
                      <img
                          src="/golf/FB_IMG_1678793071600.jpg"
                          alt="golf for schools"
                          className='max- h-full object-cover'
                          />
                      </div>
                  </div>
                </div>
                <p>
              Golf is a game of life. Whether your dream is to make it a hobby or a career, learning the basics of Golf at an early age will serve you forever. The Primary School Golf Programme will no doubt provide mentoring and coaching opportunities to these young ones, which will help shape their future. The wider benefits of Golf can help the physical and mental wellbeing of more young people. Over the next few years, more primary schools will be included in the programme because we believe that there are a lot of children who will be excited to explore the game of Golf and its tremendous benefits.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}
