/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Testimonials from '../components/homepageComponents/Testimonials'

export default function Aboutus() {
  return (
    <div>
      <div className='overflow-hidden bg-fixed bg-center bg-cover bg-aboutUsHeroBg h-[60vh] lg:h-[60vh]' style={{backgroundAttachment: 'scroll' }} >
        <div className="h-full overflow-hidden flex flex-col justify-end " style={{background: 'rgba(0, 0, 0, 0.69)' }}>
          <div className='text-5xl font-mavin font-bold text-white w-10/12 m-auto'>
            <p>About Us</p>
          </div>
        </div>   
      </div>

     
      <div className='w-10/12 my-16 mx-auto'>
        <img className='w-full overflow-hidden object-fill' src="https://res.cloudinary.com/tacafrica/image/upload/v1663156490/my_folder/mandella_and_chess_day/Screenshot_from_2022-09-14_12-53-30_qz5g3p.png" alt="img" />
      <p className='mt-8 font-sans'>{`The School of Hard Knocks is a cutting edge Co-creation Hub for Sports, Research and Community Development. It is open for Kids of all ages and adults from all walks of life. It is a subscription based community and located within the TAC Community Hub facility in the Federal Capital Territory, Abuja- Nigeria. 
      Our motto is 'Conquer or Die'. Our Objective is Networking, co-creation and impacting value. And our mission is to replicate a similar concept and build a strong and vibrant community.`}</p>
      </div>

      <div className='flex lg:h-screen bg-softGrey'>
        <div className='flex flex-col lg:flex-row lg:w-[80vw] mt-16 lg:m-auto '>
            {/* <h3 className='lg:hidden w-11/12 mx-auto mb-4 text-gold text-2xl font-mavin'>Our Story</h3> */}
            <div  className='lg:w-5/12 m-4 rounded-3xl overflow-hidden h-[27rem]'>
                <img alt='sports' className=' object-cover h-full ' src={'https://res.cloudinary.com/tacafrica/image/upload/v1658796405/my_folder/mandella_and_chess_day/1-2207230104_xt4ces.jpg'}/>
            </div>

            <div  className='lg:w-6/12'>
              <div  className='w-11/12  mx-auto lg:ml-7 '>
                  <h3 className=' text-gold text-2xl mt-3 font-mavin'>Our Story</h3>
                  <h2 className=' font-mavin text-3xl mt-5 '>Education Through Sport</h2>
                  <p className='font-light'>School of Hardknocks is passionate about empowering kids and adults of all ages with research-based extra curriculum activities with certified coaches.</p>

              </div>
              <div  className='w-11/12 mx-auto  lg:ml-7 '>
                  <h3 className=' text-gold text-2xl mt-3 font-mavin'>Our Mission</h3>
                  <h2 className=' font-mavin text-3xl mt-5 '>Developing a Knack for learning & Development</h2>
                  <p className='font-light'>School of Hardknocks is passionate about empowering kids and adults of all ages with research-based extra curriculum activities with certified coaches.</p>
              </div>
            </div>
        </div>

      </div>
      <div className='overflow-hidden bg-fixed bg-center bg-cover bg-whyWeDoThis h-screen' style={{backgroundAttachment: 'scroll' }}>
        <div className="h-full overflow-hidden flex flex-col justify-center items-center " style={{background: 'rgba(0, 0, 0, 0.69)' }}>
          <p className='text-gold text-3xl font-sans font-semibold'>Why we do this?</p>
          <p className='font-mavin text-6xl font-bold text-white text-center'>We aim to provoke a strong <br /> lifelong learning outcome</p>
        </div>
      </div>
      <Testimonials />
    </div>
  )
}
