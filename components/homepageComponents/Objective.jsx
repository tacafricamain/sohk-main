/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Button from '../Button'
import Link from 'next/link'

export default function Objective() {
    return (
        <div className='space-y-10 lg:space-y-20 lg:pt-0 px-8'>
            <section className='flex flex-col justify-center lg:flex-row w-full pt-28'>
                <img src="https://res.cloudinary.com/tacafrica/image/upload/v1684090798/Artboard_1_ypyh8f.png" alt="" className='lg:w-4/12 lg:ml-8 rounded-full max-h-[600px]'/>
                <div className='lg:w-6/12 lg:mx-20 my-auto'>
                    <h3 className='text-4xl lg:text-3xl font-semibold font-PanchangSemibold'>Welcome To SOHK
                        <br className='hidden lg:block '/>{` `}
                        {/* for space */}
                        Foundation, Nigeria</h3>
                    <span className='space-y-3'>
                        <p className='text-xl my-6 font-SpaceGrotesk opacity-90'>
                            SOHK Nigeria is a mind re-orientation school that uses recreational events, talent discovery, and sports-based activities to transform the Psyche, Mind, and well-being of individuals.
                        </p>
                        <p className='text-xl my-6 font-SpaceGrotesk opacity-90'>
                            Our targets are in-school children, out-of-school children, artisans, and persons exposed to, or afflicted by trauma, drug abuse, depression amongst others.
                        </p>
                    </span>
                    <hr className='h-2 my-4'/>
                    <span>
                        <p>
                            There is nothing outside of yourself that can ever enable you to get better, stronger, richer, quicker or smarter.
                        </p>
                        <b>
                            - Miyamoto Musashi</b>
                    </span>
                </div>
            </section>

            <section className='flex flex-col-reverse  lg:flex-row w-full pt-32 lg:pt-0'>
                <div className='lg:w-6/12 lg:mx-20 my-auto'>
                    <p className='font-semibold text-lg mb-3 mt-12 font-PanchangSemibold'>OUR SCHOOLS PROJECT
                    </p>
                    <h3 className='text-4xl lg:text-3xl font-semibold font-PanchangSemibold'>Our First Pilot Programs
                        <br className='hidden lg:block '/>{` `}
                        {/* for space */}
                        to Schools in FCT</h3>
                    <p className='text-xl my-6 font-SpaceGrotesk opacity-90'>
                        This free training will allow for the evolution of talents across Nigeria, using these schools as a pilot phase. The essence of acquiring relevant skills in the 21st century cannot be over emphasized.
                    </p>
                    <Link href='/pilot_school_project'>
                        <a>
                            <Button text={'Read More'}/>
                        </a>
                    </Link>
                </div>
                <img src="https://res.cloudinary.com/tacafrica/image/upload/v1684091914/Artboard_1_w3qeww.png" alt="" className='lg:w-4/12 lg:mr-8 rounded-full max-h-[600px]'/>
            </section>

        </div>
    )
}
