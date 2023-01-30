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
                    <h2  className='font-mavin text-3xl my-3  text-center'>Registration</h2>
                          <p className='text-greyBlack text-sm font-["openSans"] text-left' >Members of SOHK are passionate individuals who are ready to take the lead in changing their community positively. Join us today by simply downloading our membership application form below.</p>
                    <div className=' mt-10 '>
                        <a target='_blank' rel='noopener' href="/pdf/TAC Community Hub Membership form.pdf">
                            <Button text={'Download membership form'} />
                        </a>
                    </div>
                </div>
                <div className="h-2/4">
                    <h2 className='font-mavin text-3xl my-3  text-center'>Our Weekly NewsLetters</h2>
                    <p className='text-greyBlack  text-sm font-["openSans"] text-left'>
                              Explore our official newsletter with stories from our ongoing programmes and get the facts, expert opinion and practical training, advice on the topic you care about.</p>
                    <p className='text-greyBlack t text-sm font-["openSans"] text-left'>
                                Find out more about what  SOHK is doing  and how you can join us or support our activities by clicking on any of our newsletters below
                    </p>
                </div> 
            </div>
              </div>
              <div className=" m-5">
                <div className="md:hidden py-4 space-y-8">   
                <div className="h-2/4">
                    <h2  className='font-mavin text-3xl my-3 uppercase text-center'>Registration</h2>
                          <p className='text-greyBlack text-sm font-["openSans"] text-left' >Members of SOHK are passionate individuals who are ready to take the lead in changing their community positively. Join us today by simply downloading our membership application form below.</p>
                    <div className=' mt-10 '>
                        <a  href="/pdf/TAC Community Hub Membership form.pdf" >
                            <Button text={'Download membership form'} />
                        </a>
                    </div>
                </div>
                <div className="h-2/4">
                    <h2 className='font-mavin text-3xl my-3 leading  text-center'>Our Weekly NewsLetters</h2>
                    <p className='text-greyBlack text-sm font-["openSans"] text-left'>
                              Explore our official newsletter with stories from our ongoing programmes and get the facts, expert opinion and practical training, advice on the topic you care about.</p>
                    <p className='text-greyBlack text-sm font-["openSans"] text-left'>
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