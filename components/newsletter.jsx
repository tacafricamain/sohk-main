/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Carousel from "react-multi-carousel";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { data } from '../pages/api/newsletter'
import { BiDownload } from 'react-icons/bi'


const NewsLetter = ({ }) => {
  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1536 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    laptop: {
      breakpoint: { max: 1536, min: 768 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 768, min: 640 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="w-full bg-softGrey">
          <div className="flex flex-col-reverse  md:flex-row  pt-12 pb-20 mx-auto my-0 xl:px-12">
              
          <div className='text-center'>
            <div className="hidden md:block">   
                <h2 className='font-mavin text-3xl my-3 '>Our Weakly NewsLetters</h2>
                <p className='text-greyBlack text-center text-sm font-["openSans"]'>
                    Get upto date information about the happenings at the School Of HardKnocks
                </p>
            </div>
            {data.map((edge, i) => (
                <a href={edge.link}  className="space-y-4 cursor-pointer">
            <div
                key={i}
                className="flex-none w-12/12 lg:w-10/12 mr-8 overflow-hidden rounded-lg md:mr-4 md:pb-4 ">
                      <div className="px-4 py-2">
                        <div className="font-medium leading-6 ">
                          <h3 className="text-center max-h-12 mb-3 text-lg font-semibold lg:font-bold font-mavin ">
                            <BiDownload className="inline mr-3" /> download 
                            {' ' + edge?.title}
                          </h3>
                          {/* <p className='text-greyBlack text-center text-sm font-["openSans"]'>{ edge.description }</p> */}
                        </div>
                      </div>
                </div>
                    </a>
            ))}
              </div>
              <div className="max-w-[700px] m-5">
              <div className="md:hidden  py-4">   
                <h2 className='font-mavin text-3xl my-3 '>Our Weakly NewsLetters</h2>
                <p className='text-greyBlack text-center text-sm font-["openSans"]'>
                    Get upto date information about the happenings at the School Of HardKnocks
                </p>
            </div>
                  <img src="https://res.cloudinary.com/tacafrica/image/upload/v1660567313/my_folder/int%20youth%20day/1-2208130100_llasyk.jpg" alt="" />
              </div>
                  
      </div>
    </div>
  );
};

export default NewsLetter;