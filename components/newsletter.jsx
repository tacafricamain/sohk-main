/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Carousel from "react-multi-carousel";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {data} from '../pages/api/newsletter'
import {BiDownload} from 'react-icons/bi'
import LargeSingleSlider from "./Sliders/LargeSingleSlider";
import Button from "./Button";


const NewsLetter = ({}) => {

    return (
        <div id='member' className="w-full shadow-xl">
            <div className="flex flex-col  w-full md:flex-col lg:flex-row mx-auto my-0 xl:px -12 h-full ">

                <div className=' bg-blueHighLight lg:w-7/12 p-20'>
                    <div></div>
                    <div className="block h-full space-y-4 ">
                        {/** large screen */}
                        <div className="h-2/4 py-12">
                            <h2 className='font-mavin text-3xl my-3'>Registration</h2>
                            <p className='text-greyBlack text-xl font-["openSans"] text-left'>Members of SOHK are passionate individuals who are ready to take the lead in changing their community positively. Join us today by simply downloading our membership application form below.</p>
                            <div className=' mt-10 '>
                                <a target='_blank' rel='noopener' href="/pdf/TAC Community Hub Membership form.pdf">
                                    <Button text={'Become A Member'}/>
                                </a>
                            </div>
                        </div>
                        <hr className="h-[2px] bg-black" />
                        <div className="h-2/4 py-12">
                            <h2 className='font-mavin text-3xl mb-3'>Our Weekly NewsLetters</h2>
                            <p className='text-greyBlack text-xl font-["openSans"] text-left'>
                                Explore our official newsletter with stories from our ongoing programmes and get the facts, expert opinion and practical training, advice on the topic you care about.</p>
                            <p className='text-greyBlack text-xl font-["openSans"] text-left'>
                                Find out more about what  SOHK is doing  and how you can join us or support our activities by clicking on any of our newsletters below
                            </p>
                        </div>
                    </div>
                </div>

                <div className=" m-5 lg:w-5/12">
                    <span className="block lg:mt-20">
                        <LargeSingleSlider/>
                    </span>
                </div>

            </div>
        </div>
    );
};

export default NewsLetter;
