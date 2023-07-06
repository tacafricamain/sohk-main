/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import 'reactjs-popup/dist/index.css';
import LargeSingleSlider from "./Sliders/LargeSingleSlider";
import Button from "./Button";
import { data } from "../pages/api/newsletter"


const NewsLetter = () => {

    return (
        <div id='member' className="w-full ">
            <div className="flex flex-col  w-full md:flex-col lg:flex-row mx-auto my-0 xl:px -12 h-full ">
                <div className=' lg:w-7/12 p-8 lg:p-20'>
                    <div className="block h-full space-y-4 ">
                        {/** large screen */}
                        <div className="h-2/5 pt-12 mb-8">
                            <h2 className='font-mavin text-3xl font-bold my-3'>Registration</h2>
                            <p className='text-greyBlack text-xl font-["openSans"] text-left mb-5'>Members of SOHK are passionate individuals who are ready to take the lead in changing their community positively.
                            </p>
                            <p className='text-greyBlack text-xl font-["openSans"] text-left ' >
                                Join us today by simply downloading our membership application form below.
                            </p>
                            <div className=' mt-10 '>
                                <a target='_blank' rel='noopener' href="/pdf/TAC Community Hub Membership form.pdf">
                                    <Button text={'Become A Member'}/>
                                </a>
                            </div>
                        </div>
                        <hr className="h-[2px] bg-black"/>
                        <div className="h-2/4 pt-8 pb-12">
                            <h2 className='font-mavin text-3xl font-bold  mb-3'>Our Weekly NewsLetters</h2>
                            <p className='text-greyBlack text-xl font-["openSans"] text-left mb-5'>
                            Explore our official newsletters with stories from our ongoing Programs and get the facts, expert opinion and practical training as well as advice on the topic you care about.</p>
                            <p className='text-greyBlack text-xl font-["openSans"] text-left'>
                            Find out more about what SOHK is doing and how you can join us or support our activities by clicking on any of our newsletters below.
                            </p>
                        </div>
                    </div>
                </div>

                <div className=" m-5 lg:w-5/12">
                    <span className="block lg:mt-20">
                        <LargeSingleSlider data={data} />
                    </span>
                </div>

            </div>
        </div>
    );
};

export default NewsLetter;
