/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

export default function Objective() {
  return (
    <div id='aboutus' className='flex lg:h-screen '>
        <div className='flex flex-col lg:flex-row lg:w-[80vw] mt-16 lg:m-auto '>
            <h3 className='lg:hidden w-11/12 mx-auto mb-4 text-gold max-h- text-center  text-2xl font-mavin'>Our Objective</h3>
            <div  className='lg:w-11/12 m-4 rounded-3xl overflow-hidden'>
                {/* mobile */}
                <img alt='sports' className=' object-cover lg:hidden' src={'https://res.cloudinary.com/tacafrica/image/upload/v1669305042/my_folder/sohk/For_Mobile-10_1__result_wdsypy.webp'}/>
                <img alt='sports' className=' object-cover lg:hidden' src={'https://res.cloudinary.com/tacafrica/image/upload/v1669305042/my_folder/sohk/WhatsApp_Image_2022-11-24_at_2.43.47_PM_result_cxeigl.webp'}/>
                {/* desktop */}
                <img alt='sports' className=' object-cover hidden lg:block' src={'https://res.cloudinary.com/tacafrica/image/upload/v1669305179/my_folder/sohk/For_web-01_result_gflznl.webp'}/>
            </div>
            {/* <div  className='w-11/12 mx-auto lg:w-6/12 my-auto lg:ml-7'>
                <h3 className='hidden lg:block text-gold text-2xl font-mavin'>Our Objective</h3>
                <h2 className=' font-mavin text-3xl my-5'>To deliver absolute service to humanity</h2>
                <p className='font-light font-["openSans"]'> SOHK is a mind reorientation school based on recreational events, talent discovery and sports curiculum activities that transforms the Psyche, Mind and well being of individuals exposed and afflicted by trauma, drug abuse, and depression. As an NGO, SOHK bring together local and global subject matter experts from a multidisciplinary background of sports, academia, law enforcement agencies, social infrastructure, equipment manufacturers, and civil society with a focus to solving Nigeria’s social vices challenges which includes; Cultism, Prostitution, Kidnapping, Armed Robbery, Rape, etc, through rehabilitation, mentoring, coaching, youth capacity development, specialized digital skills training, and mental empowerment to grow and promote Morally Global Young Leaders in Nigeria through Mentorship.</p>
            </div> */}
        </div>
    </div>
  )
}
