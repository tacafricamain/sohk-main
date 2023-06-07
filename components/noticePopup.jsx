/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Link from 'next/link'
import cookieCutter from 'cookie-cutter'
import { useState, useEffect } from 'react'

export default function NoticePopup() {

  const [showModal, setShowModal] = useState(true)

  useEffect(() => {
    let SOHK_FCT_Training_cookie = cookieCutter.get('SOHK_FCT_Training')

    if (!SOHK_FCT_Training_cookie) {
      cookieCutter.set('SOHK_FCT_Training', true)
      // setShowModal(SOHK_FCT_Training_cookie)
    } else {
      cookieCutter.set('SOHK_FCT_Training', false)
      setShowModal(false)
    }

  },[])


  return (

// <!-- Modal toggle -->
          <div className={` ${showModal? '': 'hidden'}
                            overflow-y-auto overflow-x-hidden fixed top-0
                            right-0 left-0 z-50 w-full md:inset-0 h-modal
                            my-auto md:h-full
                            fade_in h-screen
                            `}
                            style={{background: 'rgba(0, 0, 0, 0.69)' }}
                            onClick={() => setShowModal(!showModal)}
                            >
      <div className='flex justify-center h-full'>

              <div className="flex self-center lg:p-4 w-full max-w-4xl">
                  {/* <!-- Modal content --> */}
                  <div className="relative bg-[#090538] rounded-2xl shadow m-auto ">
            {/* <!-- Modal body --> */}

            <button type="button" onClick={() => setShowModal(!showModal)} className="absolute border  top-3 right-3 bg-slate-500  text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-toggle="defaultModal">
                      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      {/* <span className="sr-only">Close modal</span> */}
            </button>

                      <div className="flex flex-col-reverse mb-10 lg:mb-0 lg:flex-row space-y-6">
                        <div className='lg:mx-12 my-auto w-[300px]'>
                          <h1 className='text-white text-center lg:text-left'>OUR LATEST PROJECT</h1>
                          <p className="text-white mt-4 font-bold text-3xl  lg:text-4xl leading-[2.2rem] text-center lg:text-left">
                            SOHK Free <br className='hidden lg:block' />
                            Trainings <br className='hidden lg:block'  />
                            to Government
                            <br className='hidden lg:block' /> Schools in FCT
                          </p>
                          {/* <!-- Modal footer --> */}
                          <div className="flex justify-center lg:justify-start mt-6 space-x-2 rounded-b  ">
                            <Link  href='/pilot_school_project' >
                              <a >
                              <button data-modal-toggle="defaultModal" type="button"
                                  className="text-whit focus:ring-4    focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-buttonBG object-fill w-full m-3 lg:w-[205px]">
                                  {/* <Link href="/"> */}
                                  {`Read More`}
                                  {/* </Link> */}
                              </button>
                                  </a>
                            </Link>
                          </div>
                        </div>
                          <span className=''>
                            <img src='https://res.cloudinary.com/tacafrica/image/upload/v1684157324/my_folder/assets/Mask_grouppopupimg_e3gd2d.png' alt='popup img' className='mr-6 h-[332px] z-10 object-contain w-full' />
                          </span>
                      </div>
                  </div>
              </div>
            </div>
          </div>

  )
}
