/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

export default function Story() {
  return (
    <div id='aboutus' className='flex lg:h-screen '>
        <div className='flex flex-col lg:flex-row lg:w-[80vw] mt-16 lg:m-auto '>
            <h3 className='lg:hidden w-11/12 mx-auto mb-4 text-gold max-h- text-center  text-2xl font-mavin'>Our Story</h3>
            <div  className='lg:w-5/12 m-4 rounded-3xl overflow-hidden'>
                <img alt='sports' className='h-[25rem] object-cover' src={'https://res.cloudinary.com/tacafrica/image/upload/v1663587445/my_folder/int%20youth%20day/compressed/1-2208130096_result_bsi8o6.webp'}/>
            </div>
            <div  className='w-11/12 mx-auto lg:w-6/12 my-auto lg:ml-7'>
                <h3 className='hidden lg:block text-gold text-2xl font-mavin'>Our Story</h3>
                <h2 className=' font-mavin text-3xl my-5'>Learning Without Borders</h2>
                <p className='font-light font-["openSans"]'>There would be an opportunity finally for every <br className='hidden lg:block' /> youngster and indeed every person, <br className='hidden lg:block' /> to learn what he or she wants to learn, <br className='hidden lg:block'/> in his or her own time, at his or her own speed,<br className='hidden lg:block' /> in his or her own way.</p>
                <p className='mt-5 mb-12 lg:mb-0 font-["openSans"]'>{`Our Motto is 'Conquer Or Die'`}</p>
            </div>
        </div>
    </div>
  )
}
