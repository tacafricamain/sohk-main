/* eslint-disable @next/next/no-img-element */
import MiniSlider from "../Sliders/MiniSlider";
import { ImQuotesRight } from 'react-icons/im'


export default function Testimonials() {
  return (
    <div className='flex lg:h-screen bg-[#F7F5F2]'>
    <div className='flex flex-col lg:flex-row lg:w-[80vw] mt-16 lg:m-auto '>
        <h3 className='lg:hidden w-11/12 mx-auto mb-4 text-gold text-2xl font-mavin'>Testimonials</h3>
        <div  className='lg:w-5/12 m-4 rounded-3xl overflow-hidden h-[27rem]'>
            <img alt='sports' className=' object-cover ' src={'https://res.cloudinary.com/tacafrica/image/upload/v1661951192/my_folder/compressed/tennis-championship-compressed/1-2208070040_result_meiley.webp'}/>
        </div>
        <div  className='w-11/12 mx-auto lg:w-6/12  lg:ml-7 '>
            <h3 className='hidden lg:block text-gold text-2xl mt-3 font-mavin'>Testimonials</h3>
            <h2 className=' font-mavin text-3xl mt-5 '>What they say about us</h2>
            <p className='font-light'>Find out what others, having benefited are saying.</p>

            <div className='my-5'>
                <ImQuotesRight color='#FA9600' fontSize="2.5rem" />
            </div>  
            <MiniSlider />
        </div>
    </div>
</div>
  )
}
