/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

export default function Story() {
  return (
    <div className='flex h-screen'>
        <div className='flex flex-col lg:flex-row lg:w-[80vw] mt-16 lg:m-auto '>
            <h3 className='lg:hidden w-11/12 mx-auto mb-4 text-gold  text-center  text-2xl font-mavin'>Our Story</h3>
            <div  className='lg:w-5/12 m-4 rounded-3xl'>
                <img alt='sports' className='h-[25rem] object-cover' src={'https://res.cloudinary.com/tacafrica/image/upload/v1661954751/my_folder/compressed/tennis-championship-compressed/1-2208070025_result_hewoei.webp'}/>
            </div>
            <div  className='w-11/12 mx-auto lg:w-6/12 my-auto lg:ml-7'>
                <h3 className='hidden lg:block text-gold text-2xl font-mavin'>Our Story</h3>
                <h2 className=' font-mavin text-3xl my-5'>Sporting Without Borders</h2>
                <p className='font-light font-["openSans"]'>The School of Hard Knocks is a cutting edge Co-creation <br className='hidden lg:block' /> Hub for Sports, Research and Community Development <br className='hidden lg:block'/> Activities for Kids of all age and adults of all works of life.<br className='hidden lg:block' /> It is a subscription based community and located within <br className='hidden lg:block' /> the suburb of the Federal Capital Territory, Abuja – Nigeria.</p>
                <p className='mt-5 font-["openSans"]'>{`Our Motto is 'Learn Or Die'`}</p>
            </div>
        </div>
    </div>
  )
}
