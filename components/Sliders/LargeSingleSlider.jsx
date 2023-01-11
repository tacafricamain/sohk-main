/* eslint-disable @next/next/no-img-element */
import Carousel from "react-multi-carousel";
import { data } from "../../pages/api/newsletter";

const LargeSingleSlider = ({ }) => {


  const responsive = {
    desktopAndMobile: {
      breakpoint: { max: 3000,  min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="w-[700px]">
      <div className="max-w-[600px] pb-20 px-10 mx-auto">
        <div className=" pb-8 ">
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
                <a key={i} href={edge.link}>

                <div
                    key={i}
                    className="flex-none w-12/12 lg:w-10/12 mx-auto overflow-hidden rounded-lg md:mr-4 md:pb-4 "
                    >
                        <div className="py-2">
                        <img className="w-[400px] h-[350px] " src={edge?.image} alt={edge?.title} />
                        <div className=" leading-6 ">
                            <p className="mb-6 font-mavin text-2xl">
                            {edge?.title}
                            </p>
                        </div>
                        <div className="text-sm flex">
                            <div className='w-16 h-16 p-2 mr-3 inline-block rounded-full bg-gradient-to-r from-gold to-orange rotate'>
                                <div className='rounded-full w-full h-full bg-white'></div>
                            </div>
                            <span className='inline-block my-auto'>
                                <p className="font-bold font-['openSans'] ">
                                {/* {edge?.description} */}
                                </p>
                                <p className='w-[300px]'>{edge?.description}</p>
                            </span>
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

export default LargeSingleSlider;