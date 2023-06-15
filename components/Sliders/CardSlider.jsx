/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Carousel from "react-multi-carousel";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { data } from '../../pages/api/data'


const CardSlider = ({ }) => {

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
    <div className="w-full">
      <div className="pt-12 pb-20 mx-auto my-0 xl:px-12">
        <div className="pl-4 pb-8 ">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            // ssr={!true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={15000}
            keyBoardControl={true}
            customTransition="all 0.3s"
            transitionDuration={1500}
            containerClass="carousel-container "
            // removeArrowOnDeviceType={['tablet', 'mobile']}
            renderButtonGroupOutside={true}
            renderDotsOutside={true}
            // deviceType={props.deviceType}
            // dotListClass="relative pt-2  z-50"
            // itemClass="carousel-item-padding-40-px flex flex-no-wrap items-stretch "
          >
            {data.map((edge, i) => (
              <Popup trigger={
                <div
                  key={i}
                  className="flex-none w-12/12 lg:w-10/12 mr-8 overflow-hidden rounded-lg md:mr-4 md:pb-4 "
                >
                  {/* <Link href={edge.link}> */}
                    <a className="space-y-4">
                      <div className="aspect-w-16 aspect-h-9 rounded-lg border-8 border-white">
                        <img
                          className="object-cover h-[300px] w-full shadow-md hover:shadow-x3 "
                          src={edge?.image}
                          alt={edge.image}
                        />
                      </div>
                      <div className="px-4 py-2">
                        <div className="text-lg font-medium leading-6 text-center">
                          <h3 className=" max-h-12 mb-3 text-base font-semibold lg:font-bold font-mavin ">
                            {edge?.title}
                          </h3>
                        </div>
                        <div className="text-sm ">
                          <p className="text-center h-4 line-clamp-3 font-['openSans'] ">
                            {edge?.text}
                          </p>
                        </div>
                      </div>
                    </a>
                  {/* </Link> */}
                </div>
                } position="right center" modal>
                    <div className='px-6 bg-yellow-50 '>
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
          </Carousel>
        </div>

      </div>
    </div>
  );
};

export default CardSlider;
