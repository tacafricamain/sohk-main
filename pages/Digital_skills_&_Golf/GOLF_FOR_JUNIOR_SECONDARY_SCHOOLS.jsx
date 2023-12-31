/* eslint-disable @next/next/no-img-element */

import React from 'react'

export default function GOLF_FOR_JUNIOR_SECONDARY_SCHOOLS () {
    return (
        <div className="max-w-7xl mx-auto">
          <div className="w-10/12 mx-auto space-y-6 pt-36">
            <div className="flex flex-col space-y-4 pb-12">
              <span className="text-4xl font-semibold text-black">
              GOLF FOR JUNIOR SECONDARY SCHOOLS
              </span>
              {/* <span className="text-base  text-gray-500">
              Technology Against Crime | March 7, 2023
              </span> */}
            </div>
            <div className="w-full aspect-video bg-gray-400 object-contain rounded-xl overflow-hidden">
                <img src="/golf/FB_IMG_1678792613488.jpg" alt="project 774" className='w-full' />
            </div>
            <div className="flex flex-col gap-4 w-10/12 max-md:w-full mx-auto py-12 justify-between">
              <div className=" space-y-4">
                <p className="text-base  text-gray-800 leading-6">
                Golf fosters friendly association between players of all ages and abilities. The Junior Secondary Golf Programme is designed to introduce students to the main skills of Golf through activities that can be modified for their abilities. The Golf Curriculum in the Junior Secondary School Category gives a solid foundation of the rules, regulations and etiquette of the game.  This initiative will allow children in the Junior Government Secondary Schools to have a quality Golf experience at school and instill in them the confidence to explore the sport as a hobby or career, either at this moment or in the future.
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
                And because Golf is both fun and challenging, with a low risk of injury, it is a very safe sport to play. Participants in this category will be introduced to a more comprehensive introduction to the basics of Golf course, and be exposed to exciting Golf related opportunities as well as learn valuable life skills such as Leadership, Communication, Self-management, Sportsmanship, Perseverance etc. They would be able to enjoy access to more equipment, coaching and mentorship resources as well as training from professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
}
