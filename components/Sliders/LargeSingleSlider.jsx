/* eslint-disable @next/next/no-img-element */
import Carousel from "react-multi-carousel";
import { data } from "../../pages/api/newsletter";
import Button from "../Button";

const LargeSingleSlider = ({ }) => {


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
                        <img className="w- [400px] h- [350px] content-cover" src={edge?.image} alt={edge?.title}  />
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

export default LargeSingleSlider;
