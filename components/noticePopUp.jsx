/* eslint-disable react/jsx-key */
import Link from 'next/link'


export default function NoticePopup({ showModal, setShowModal }) {
  return (
    
// <!-- Modal toggle -->
          <div className={` ${showModal? '': 'hidden'} 
                            overflow-y-auto overflow-x-hidden fixed top-0 
                            right-0 left-0 z-50 w-full md:inset-0 h-modal 
                            my-auto md:h-full 
                            fade_in h-screen
                            `}  
                            style={{background: 'rgba(0, 0, 0, 0.69)' }} >
                              
            <div className='flex justify-center h-full'>
              <div className="flex self-center p-4 w-full max-w-2xl">
                  {/* <!-- Modal content --> */}
                  <div className=" bg-white rounded-lg shadow ">
                      {/* <!-- Modal header --> */}
                      <div className="flex justify-between items-start p-4 rounded-t border-b">
                          <h3 className="text-xl font-semibold text-gray-900 ">
                              Become a member
                          </h3>
                          <button type="button" onClick={() => setShowModal(!showModal)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-toggle="defaultModal">
                              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                              <span className="sr-only">Close modal</span>
                          </button>
                      </div>
                      {/* <!-- Modal body --> */}
                      <div className="p-6 space-y-6">
                          <p className="text-base leading-relaxed text-gray-500 ">
                          To enjoy the full benefits that the school of hardknocks has to offer Download and fillout the membership form below 
                          </p>
                          
                      </div>
                      {/* <!-- Modal footer --> */}
                      <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 ">
                          <button data-modal-toggle="defaultModal" type="button" className="text-white bg-gold hover:bg-gold focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            <Link href="https://www.dropbox.com/s/r4le37k1l017vfj/TAC%20Community%20Hub%20Membership%20form.pdf?dl=0">
                            <a >
                            {`Download membership form`}
                            </a>
                            </Link>
                            </button>
                          <button onClick={() => setShowModal(!showModal)} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 ">Decline</button>
                      </div>
                  </div>
              </div>
            </div>
          </div>

  )
}
