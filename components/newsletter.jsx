/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Carousel from "react-multi-carousel";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { data } from '../pages/api/newsletter'


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
          <div className="pt-12 pb-20 mx-auto my-0 xl:px-12">
              
          <div className='text-center'>
            <h2 className='font-mavin text-3xl my-3 '>Our NewsLetters</h2>
            {/* <p className='text-greyBlack font-["openSans"]'> Learning would become fun because it would bubble up from within <br className='hidden lg:block' /> and not be forced in from without.</p> */}
        </div>


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
            renderButtonGroupOutside={true}
            renderDotsOutside={true}
          >
            {data.map((edge, i) => (
                <a href={edge.link}  className="space-y-4 cursor-pointer">
            <div
                key={i}
                className="flex-none w-12/12 lg:w-10/12 mr-8 overflow-hidden rounded-lg md:mr-4 md:pb-4 "
            >
                <div className="aspect-w-16 aspect-h-9 rounded-lg border-8 border-white h-[150px]">      
                      <div className="px-4 py-2">
                        <div className="font-medium leading-6 ">
                          <h3 className="text-center max-h-12 mb-3 text-lg font-semibold lg:font-bold font-mavin text-gold">
                            {edge?.title}
                          </h3>
                          <p className='text-greyBlack text-center text-sm font-["openSans"]'>{ edge.description }</p>
                        </div>
                      </div>
                </div>
                </div>
                    </a>
            ))}
          </Carousel>
        </div>

      </div>
    </div>
  );
};

export default NewsLetter;