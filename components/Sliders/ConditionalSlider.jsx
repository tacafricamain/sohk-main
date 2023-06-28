/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Popup from 'reactjs-popup';
import { data } from '../../pages/api/data'



const ConditionalSlider = ({ }) => {

  const contentStyle = { width: '80%' };

  return (
    <div className="w-full">

        { data.map((edge, i) => (
           <Popup trigger={
                <div
                key={i}
                className="flex-none w-11/12 mx-auto mb-16 overflow-hidden rounded-lg md:pb-4 "
              >
                {/* <Link href={edge?.link}> */}
                  <a className="space-y-4">
                    <div className="aspect-w-16 aspect-h-9 rounded-lg border-8 border-white">
                      <img
                        className="object-cover h-[300px] w-full shadow-md hover:shadow-xl "
                        src={edge?.image}
                        alt={edge?.image}
                      />
                    </div>
                    <div className="py-2">
                      <div className="text-lg font-medium leading-6 text-center">
                        <h3 className=" max-h-12 mb-3 text-base font-semibold lg:font-bold font-mavin ">
                          {edge?.title}
                        </h3>
                      </div>
                      <div className="text-sm line-clamp-3">
                        <p className="text-center max-h-fit font-['openSans'] ">
                          {edge?.text}
                        </p>
                      </div>
                    </div>
                  </a>
                {/* </Link> */}
              </div>
              } position="right center" modal {...{ contentStyle}}>
                    <div className='px-4 bg-yellow-50 '>
                      <div className="text-md line-clamp-3 bg-yellow-50 min-h-[20rem] flex flex-col justify-center">
                      <div className=" font-medium leading-6 text-center">
                          <h3 className=" max-h-12 mb-3 text-2xl font-semibold lg:font-bold font-mavin ">
                            {edge?.title}
                          </h3>
                        </div>
                        <p className=" max-h-fit font-['openSans'] ">
                          {edge?.text}
                        </p>
                        <div className='block'>
                          {
                            <ul className='block py-4 text-sm font-semibold'>{edge.serviceList.map((item) => (
                            <li className='mb-2'>
                              - {item}
                            </li>
                            ))}</ul>
                          }
                        </div>
                      </div>
                    </div>
              </Popup>
 ))}
 </div>
  );
};

export default ConditionalSlider;
