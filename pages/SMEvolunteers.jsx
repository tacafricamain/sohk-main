/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Button from '../components/Button'
/* eslint-disable @next/next/no-img-element */
import Carousel from "react-multi-carousel";
// import { data } from "../../pages/api/newsletter";
import data from "../pages/api/staffData.json"

export default function SMEvolunteers() {
    return (
        <div className='flex flex-col-reverse lg:flex-row w-screen px-10 py-20 bg-[#c3d9ff]'>
            <div className='flex flex-col w-full justify-center'>
                <h1 className=' text-2xl mb-3 mt-4 font-PanchangSemibold'> <b className='text-3xl uppercase'>JOIN US AS A</b>  <br /> SUBJECT MATTER EXPERT</h1>
                <div className='text-base mb-3 mt-4 font-SpaceGrotesk opacity-70 space-y-4'>
                    <p>
                        Join the skilled and dynamic Team at SOHK Nigeria by signing up to be a volunteer for our upcoming Free Training to 450 Students in the FCT.
                        </p>
                        <p>
                        We are looking for passionate, committed and innovative individuals who have made marks in their area of expertise and who are willing to make a valuable impact to the success of this project.
                    </p>
                </div>
                <div>
                    <a href='https://forms.gle/nWGKb3FG4vwpXqQbA' target='_blank' rel="noreferrer" >
                        <Button text='Volunteer Here' />
                    </a>
                </div>
            </div>
            <div className='flex w-full md:ml-10'>
                <LargeSingleSlider data={data.subjectMatterExpert} />
            {/* <div className='hidden md:flex flex-col justify-between mr-10'>
                <img src="https://res.cloudinary.com/tacafrica/image/upload/v1675094160/my_folder/IBB%20golf%20tour/YOD-20230113009_z5dsih.jpg" alt="" className=' lg:mr-8 h-[16rem] rounded-xl mx-auto w-full object-cover'/>
                <img src="https://res.cloudinary.com/tacafrica/image/upload/v1675095182/my_folder/SOHK%20Team%20%40%20TAC%20HQ/YOD-20230113022_ge7k1m.jpg" alt="" className=' lg:mr-8 h-[12rem] rounded-xl mx-auto w-full object-cover'/>
            </div>
            <div className=''>
                <img src="https://res.cloudinary.com/tacafrica/image/upload/v1683807305/my_folder/TACteam/21ba6a44-b898-44cd-b388-be23329cb289_tu1ejm.jpg" alt="" className=' lg:mr-8 h-[30rem] rounded-xl mx-auto object-cover'/>
            </div> */}
            </div>
        </div>
    )
}




const LargeSingleSlider = ({ data }) => {


  const responsive = {
    desktopAndMobile: {
      breakpoint: { max: 3000,  min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className=" container">
      <div className="lg:max-w-[600px] md:mx-10 h-full">
        <div className=" lg:pb-8 flex flex-col justify-center ">
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
            {data.map((edge, i) => (

              <div
                    key={i}
                    className=" flex-none w-12/12 mx-auto overflow-hidden rounded-lg md:mr-4 md:pb-4 my-auto"
                    >
                    <div className="py-2 md:mb-8">
                        <div className=" max-h-[600px] m-auto">
                            <img className=" h-[350px] md:h-full w-full conten t-cover object-cover" src={edge?.image} alt={edge?.name}  />
                        </div>
                        <div className='pl -5'>
                          <div className=" leading-6 ">
                              <p className="mt-6 mb-3 font-mavin text-xl lg:text-2xl ">
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

                  <a key={i} href={`/our_team/${edge.slug}`} className="mt-10" target='_blank' rel="noreferrer" >
                    <Button text={'View Profile'} />
                  </a>
                </div>
            ))}
          </Carousel>
        </div>

      </div>
    </div>
  );
};
