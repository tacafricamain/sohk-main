/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Carousel from "react-multi-carousel";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { data } from '../pages/api/newsletter'
import { BiDownload } from 'react-icons/bi'
import LargeSingleSlider from "./Sliders/LargeSingleSlider";
import Button from "./Button";


const NewsLetter = ({ }) => {

  return (
    <div id='member' className="w-full pt-12 md:pt-20 bg-softGrey md:h-screen ">
          <div className="flex flex-col-reverse md:flex-row  md:pb-20 mx-auto my-0 xl:px-12 h-full ">
              
          <div className='text-center'>
            <div className="hidden md:block h-full space-y-4"> 
                <div className="h-2/4">
                    <h2  className='font-mavin text-3xl my-3 uppercase text-center'>REGISTRATION</h2>
                          <p className='text-greyBlack text-sm font-["openSans"]' >Members of SOHK are passionate individuals who are ready to take the lead in changing their community positively. Join us today by simply downloading our membership application form below.</p>
                    <div className=' mt-10 m-auto'>
                        <a  href="https://www.dropbox.com/s/r4le37k1l017vfj/TAC%20Community%20Hub%20Membership%20form.pdf?dl=1">
                            <Button text={'Download S.O.H.K membership form'} />
                        </a>
                    </div>
                </div>
                <div className="h-2/4">
                    <h2 className='font-mavin text-3xl my-3 uppercase  text-center'>Our Weakly NewsLetters</h2>
                    <p className='text-greyBlack  text-sm font-["openSans"]'>
                              Explore our official newsletter with stories from our ongoing programmes and get the facts, expert opinion and practical training, advice on the topic you care about.</p>
                    <p className='text-greyBlack t text-sm font-["openSans"]'>
                                Find out more about what  SOHK is doing  and how you can join us or support our activities by clicking on any of our newsletters below
                    </p>
                </div> 
            </div>
            
            {/* {data.map((edge, i) => (
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
                            </div>
                      </div>
                </div>
                    </a>
            ))} */}
              </div>
              <div className=" m-5">
                <div className="md:hidden py-4 space-y-8">   
                <div className="h-2/4">
                    <h2  className='font-mavin text-3xl my-3 uppercase text-center'>REGISTRATION</h2>
                          <p className='text-greyBlack text-sm font-["openSans"]' >Members of SOHK are passionate individuals who are ready to take the lead in changing their community positively. Join us today by simply downloading our membership application form below.</p>
                    <div className=' mt-10 m-auto'>
                        <a  href="https://www.dropbox.com/s/r4le37k1l017vfj/TAC%20Community%20Hub%20Membership%20form.pdf?dl=1">
                            <Button text={'Download S.O.H.K membership form'} />
                        </a>
                    </div>
                </div>
                <div className="h-2/4">
                    <h2 className='font-mavin text-3xl my-3 uppercase  text-center'>Our Weakly NewsLetters</h2>
                    <p className='text-greyBlack text-sm font-["openSans"]'>
                              Explore our official newsletter with stories from our ongoing programmes and get the facts, expert opinion and practical training, advice on the topic you care about.</p>
                    <p className='text-greyBlack text-sm font-["openSans"]'>
                                Find out more about what  SOHK is doing  and how you can join us or support our activities by clicking on any of our newsletters below
                    </p>
                </div> 
                </div>
                  
                  <span className="block">
                      
                <LargeSingleSlider />   
                  </span>
              </div>
                  
      </div>
    </div>
  );
};

export default NewsLetter;