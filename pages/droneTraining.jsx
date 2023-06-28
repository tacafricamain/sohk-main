/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Head from 'next/head'
import Button from '../components/Button'
import Carousel from "react-multi-carousel";
import data from '../pages/api/droneVideo.json'
import YoutubeEmbed from '../components/video';

export default function DroneTraining() {

  const trainingData = [
    {
      image: 'https://res.cloudinary.com/tacafrica/image/upload/v1683806248/my_folder/TACteam/WhatsApp_Image_2023-05-11_at_12.33.41_PM_iedf99.jpg',
      socials: [],
      link: 'https://www.schoolofhardknocks.com.ng/our_team/dr_jerry_akubo'
    },
    {
      image: 'https://res.cloudinary.com/tacafrica/image/upload/v1670457150/my_folder/TACteam/ibro_ardo1w.png',
      socials: [],
      link: 'https://www.schoolofhardknocks.com.ng/our_team/Ibrahim_M_Ali'
    },
    {
      image: 'https://res.cloudinary.com/tacafrica/image/upload/v1683806248/my_folder/TACteam/WhatsApp_Image_2023-05-11_at_12.33.41_PM_iedf99.jpg',
      socials: [],
      link: 'https://www.schoolofhardknocks.com.ng/our_team/dr_jerry_akubo'
    },
    {
      image: 'https://res.cloudinary.com/tacafrica/image/upload/v1670457150/my_folder/TACteam/ibro_ardo1w.png',
      socials: [],
      link: 'https://www.schoolofhardknocks.com.ng/our_team/Ibrahim_M_Ali'
    }
  ]


    return (
        <>
            <Head>
                <title>School of HardKnocks nigeria</title>
                <meta name="description" content="SOHK Pilot Program To Schools In FCT"/>
                <meta name="viewport" content="minimum-scale=1, minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <section className='flex flex-col lg:flex-row mx-4 lg:mx-8 font-SpaceGrotesk max-w-7xl py-12'>
                <div className=' lg:w-6/12 p-6'>
                    <img src="https://res.cloudinary.com/tacafrica/image/upload/v1687533112/my_folder/Website%20pics/drone_wczt3b.jpg" alt="drone training image" className='w-full object-cover max-h-[500px] lg:m-8 rounded-lg overflow-hidden'/>
                </div>
                <div className="lg:w-6/12 flex flex-col space-y-4 my-auto p-6 lg:p-12">
                    <h3 className='text-5xl font-semibold'>What the <br /> class entails?</h3>
                    <p>Through homework and regular feedback in the private Facebook group we will build your confidence and fast-track your learning curve. So you can start having more fun creating cool shots, like you should be!</p>
                    <img src="" alt=""/>
                    <Button text='Reserve My Spot'/>
                </div>
            </section>
            <section className='bg-[#E6E6E6] py-20 '>
              <div className='flex flex-col items-center font-SpaceGrotesk p-8 lg:pt-16 text-black'>
                <div>
                    <h2 className='font-semibold font-PanchangBold text-2xl lg:text-4xl mb-5'>
                        What you will gain on this course
                    </h2>
                    <ul className=' list-disc pl-6'>
                        <li>Block Chain Regulation and Legal Issues</li>
                        <li>Degen Trading</li>
                        <li>Practical Use of Block Chain Tokenomics</li>
                        <li>Crypto Currency Forensics & Investigation Methodology</li>
                        <li>Crypto Futures Trading</li>
                    </ul>
                </div>
              </div>
            </section>
            <section className='flex w-full my-20'>
                <div className='hidden lg:block ml-20 max-w-xl w-4/12 mt-12 '>
                    <h3 className='text-4xl font-semibold'>Related Videos</h3>
                    <p className='text-xl'>Through homework and regular <br /> feedback in the private.</p>
                </div>
                <div className='bg-[#00063C] rounded-tl-xl rounded-tr-xl pt-8 text-white ml-10 lg:ml-0 lg:w-8/12'>
                    <div className='block lg:hidden lg:ml-20 ml-10 mt-12 '>
                        <h3 className='text-4xl font-semibold'>Related Videos</h3>
                        <p className='text-xl'>Through homework and regular <br /> feedback in the private.</p>
                    </div>
                    <LargeSingleSlider data={data} />
                </div>
            </section>
            <section className='flex w-full my-20'>
                <div className=' pt-8 text-black ml-5 lg:ml-0 lg:w-8/12'>
                    <div className='flex lg:hidden lg:ml-20 ml-5 mt-12 '>
                        <h3 className='text-xl font-semibold'>Meet Your <br /> Trainers</h3>
                        <p className='text-sm flex flex-col justify-end'> - Hand picked just for you</p>
                    </div>
                    <div className="flex flex-col w-full md:flex-col lg:flex-row mx-auto my-0 xl:px -12 h-full ">
                      <TrainersSlider data={trainingData} />
                    </div>
                </div>
            </section>
            <section>

            </section>
        </>
    )
}


/* eslint-disable @next/next/no-img-element */


const LargeSingleSlider = ({ data }) => {


  const responsive = {
    desktopAndMobile: {
      breakpoint: { max: 3000,  min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className=" container m-4">
      <div className="lg:min-w-[1400px] mx-5 h-full overflow-hidden">
        <div className=" flex flex-col justify-center ">
          <Carousel
            swipeable={true}
            draggable={true}
            responsive={responsive}
            // ssr={!true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="all 0.3s"
            transitionDuration={1500}
            containerClass="carousel-container "
            renderButtonGroupOutside={true}
            renderDotsOutside={true}
          >
            {data.droneVideo.map((edge, i) => (

              <div
                    key={i}
                    className="flex-none w-12/12 mx-auto overflow-hidden rounded-lg md:mr-4 md:pb-4 my-auto"
                    >
                    <div className="py-2 mb-8">
                        <YoutubeEmbed embedId={edge.link} videoSrc={edge.videoSrc} extraStyles={'h-[350px]'} thumbnail />
                  </div>
                </div>
            ))}
          </Carousel>
        </div>

      </div>
    </div>
  );
};


const TrainersSlider = ({ data }) => {

  const responsive = {
    desktopAndMobile: {
      breakpoint: { max: 3000,  min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className=" container bg-white">
      <div className="lg:max-w-[600px] mx-10 h-full">
        <div className=" lg:pb-8 flex flex-col justify-center ">
          <Carousel
            swipeable={true}
            draggable={true}
            responsive={responsive}
            // ssr={!true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="all 0.3s"
            transitionDuration={1500}
            containerClass="carousel-container "
            renderButtonGroupOutside={true}
            renderDotsOutside={true}
          >
            {data.map((edge, i) => (

              <div
                    key={i}
                    className="flex-none w-12/12 mx-auto overflow-hidden rounded-lg md:mr-4 md:pb-4 my-auto"
                    >
                    <div className="py-2 mb-8">
                        <img className="w- [400px] h-[350px] content-cover" src={edge?.image} alt={edge?.title}  />
                        <div className='pl -5'>
                          <div className=" leading-6 ">
                              <p className="mt-6 mb-3 font-mavin font-bold text-xl lg:text-2xl ">
                              {edge?.title}
                              </p>
                          </div>
                          <div className="text-sm flex">

                              <span className='inline-block my-auto'>
                                  <p className="text-xl font-['openSans'] ">
                                  {edge?.description}
                                  </p>
                                  {/* <p >{edge?.description}</p> */}
                              </span>
                          </div>
                        </div>
                  </div>
                  <a key={i} href={edge.link} className="mt-10" target='_blank' rel="noreferrer" >
                    <Button text={'Download Newsletter'} />
                  </a>
                </div>
            ))}
          </Carousel>
        </div>

      </div>
    </div>
  );
};
