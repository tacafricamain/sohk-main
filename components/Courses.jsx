/* eslint-disable @next/next/no-img-element */
import React from 'react'
import MiniSlider from './Sliders/MiniSlider'

export default function Courses() {
    const services = [
        'Certifiable curriculum with world leading coaches',
        'Seasoned Coaches and guidemarkers',
        'Flexible learning hours for children and adults',
        'Detailed marksmanship between students and tutors',
        'Top notch craftmanship environment',
        'Conducive office space and facility'
    ]
  return (
    <div id='services' className='flex '>
        <div className='flex flex-col lg:flex-row lg:w-[80vw] mt-16 lg:m-auto lg:h-screen '>
            <h3 className='lg:hidden w-11/12 mx-auto mb-4 text-gold text-2xl font-mavin'>Courses</h3>
            <div  className='lg:w-5/12 m-4 my-auto space-y-3 my_grid'>
                <div className=' overflow-hidden rounded-lg'>
                    <img alt='sports' className='object-fit ' src={'https://res.cloudinary.com/tacafrica/image/upload/v1661950987/my_folder/compressed/int_youth-day-compressed/1-2208130097_result_vh9xol.webp'}/>
                </div>
                <div className='inner_grid space-x-3'>
                    <div className='overflow-hidden rounded-lg' >
                        <img alt='sports' className='object-cover  h-full' src={'https://res.cloudinary.com/tacafrica/image/upload/v1661950971/my_folder/compressed/int_youth-day-compressed/1-2208130137_result_hvsunq.webp'}/>
                    </div>
                    <div className='overflow-hidden rounded-lg' >
                        <img alt='sports' className='object-cover h-full' src={'https://res.cloudinary.com/tacafrica/image/upload/v1661950981/my_folder/compressed/int_youth-day-compressed/1-2208130004_result_w7bffg.webp'}/>
                    </div>
                </div>     
            </div>
            <div  className='w-11/12 mx-auto lg:w-7/12 my-auto lg:ml-7'>
                <h3 className='hidden lg:block text-gold text-2xl font-mavin'>Courses</h3>
                <h2 className=' font-mavin text-3xl mt-5'>Quality Courses for you <br className='hidden lg:block'/> and your wards.</h2>
                <p className='mb-5 mt-2'>Certifiable curriculum with world leading coaches</p>
                <ul className='mb-12 lg:mb-0'>
                    {services.map(service => (
                        <li key={service} className='mb-3'>
                            <button className='border-gold border-4 w-4 h-4 mr-3 rounded-full inline' />
                            <p className='inline'>{service}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}
