/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function GOLF_FOR_SENIOR_SECONDARY_SCHOOLS() {
  return (
      <div className="w-full  ">
        <div className="w-10/12 mx-auto space-y-6 pt-36">
          <div className="flex flex-col space-y-4 pb-12">
            <span className="text-4xl font-semibold text-black">
            GOLF FOR SENIOR SECONDARY SCHOOLS 
            </span>
            {/* <span className="text-base  text-gray-500">
            Technology Against Crime | March 7, 2023
            </span> */}
          </div>
          <div className="w-full aspect-video bg-gray-400 object-contain rounded-xl overflow-hidden">
              <img src="/golf/FB_IMG_1678793088288.jpg" alt="project 774" className='w-full' />
          </div>
          <div className="flex flex-col gap-4 w-10/12 max-md:w-full mx-auto py-12 justify-between">
            <div className=" space-y-4">
              <p className="text-base  text-gray-800 leading-6">
              
              We will be offering Golf Training at an advanced level to students in this Category who have either taken beginner steps in primary School or those who are willing to put in the work and effort to learn the sport. Students who have previously disengaged themselves from traditional sports available in most schools can find this sport inclusive and more engaging. Participants in this category will be introduced to the core fundamentals of Golf that will have them on the course in no time. 
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
              This includes the use of a theoretical and practical comprehensive resource manual modified to suit their abilities. Students will be encouraged to take part in competitive opportunities such as tournaments and Competitions where they may receive scholarships to further their career or to advance to a professional level. 
              In this category, students will gain necessary skills and training to handle the business side of the sport such as golf management, golf operations, Golf Tournament organizations which will be useful to them upon graduation. They will receive expert tuition from our qualified and friendly coaches and access to Foundation workshops.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}
