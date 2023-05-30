/* eslint-disable react/jsx-key */
import Link from 'next/link'


export default function BottomPopUp({ showBottomModal, setShowBottomModal }) {
  return (

// <!-- Modal toggle -->
          <div className={` ${showBottomModal ? '': 'hidden'}
                            overflow-y-auto overflow-x-hidden fixed bottom-0
                            right-0 h-modal
                            my-auto w-5/6 lg:w-3/6
                            fade_in rounded-2xl
                            `}
                            // style={{background: 'rgba(0, 0, 0, 0.69)' }}
    >
                  <button type="button" onClick={() => setShowBottomModal(!showBottomModal)} className="absolute border  top-3 right-3 bg-slate-500  text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-toggle="defaultModal">
                      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      {/* <span className="sr-only">Close modal</span> */}
            </button>

            <div className='flex justify-center h-full'>
              <div className="flex self-center p-4  ">
              {/* <!-- component --> */}
<div className="bg-gray-100">
      <div className="bg-white flex flex-col justify-center h-full p-6 md:mx-auto">

        <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">JOIN US AS A SUBJECT MATTER EXPERT</h3>
            <p className="text-gray-600 my-2">
Join the skilled and dynamic Team at SOHK Nigeria by signing up to be a volunteer for our upcoming free training to 450 students in the FCT.
We are looking for passionate, committed and innovative individuals who have made marks in their area of expertise and who are willing to make a valuable impact to the success of this project.</p>

        </div>
    </div>
  </div>
              </div>
            </div>
          </div>

  )
}
