/* eslint-disable react/jsx-key */
import React from 'react'
import Button from '../Button'

export default function Contact() {
   const myENV = process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY
  return (
    <>
{/* <link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" /> */}

<section id='contact' className="bg-white w-10/12 lg:w-8/12 mx-auto py-20 lg:py-[120px] overflow-hidden relative z-10">
   <div className="container">
      <div className="flex flex-wrap -mx-4">
         <div className="w-full lg:w-1/2 xl:w-6/12 px-4">
            <div className="max-w-[570px] mb-12 lg:mb-0">
               <span className="block mb-4 text-base text-primary font-semibold text-gold">
               Get in touch with us
               </span>
               <h2
                  className="
                  text-dark
                  font-mavin
                  mb-6
                  uppercase
                  font-bold
                  text-[32px]
                  sm:text-[40px]
                  lg:text-[36px]
                  xl:text-[40px]
                  "
                  >
                    {/* Don't hesitate to contact us */}
                  {`Don't hesitate to contact us`}
               </h2>
                {/* Need additional help or info? We're just a click away! */}
               <p className="text-base text-body-color leading-relaxed">
               {`Need additional help or info?`} 
               </p>
               <p className="text-base text-body-color leading-relaxed mb-9">
               {`We're just a click away!`} 
               </p>

            </div>
         </div>
         <div className="w-full lg:w-1/2 xl:w-5/12">
            <div className="bg-[#F5F2F7] relative rounded-lg p-8 sm:p-12 shadow-lg">
               <form action="https://api.web3forms.com/submit" method="POST">
               <input type="hidden" name="access_key" value={myENV} />
               <div className="grid grid-cols-2 gap-4">
      <div className="form-group mb-6">
        <input type="text" className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
          aria-describedby="emailHelp123" placeholder="First name" />
      </div>
      <div className="form-group mb-6">
        <input type="text" className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
          aria-describedby="emailHelp124" placeholder="Last name" />
      </div>
    </div>
                  <div className="mb-6">
                     <input
                        type="text"
                        placeholder="Your Name"
                        className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                        />
                  </div>
                  <div className="mb-6">
                     <textarea
                        rows="6"
                        placeholder="Your Message"
                        className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[#f0f0f0]
                        resize-none
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                        ></textarea>
                  </div>
                  <input type="hidden" name="redirect" value="/aboutus"></input>
                  <div className='flex flex-col' >
                    <Button type="submit" text={'Send Message'} />
                  </div>
               </form>
            </div>
         </div>
      </div>
   </div>
</section>
    </>
  )
}