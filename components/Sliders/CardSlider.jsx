/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Carousel from "react-multi-carousel";

const CardSlider = ({ }) => {
  const data = [
    {
      title: " Golf Academy",
      image: "https://res.cloudinary.com/tacafrica/image/upload/v1669128666/my_folder/sohk/jj_ru4spg.png",
      // text: "At SOHK, we provide specialized training on skills such as Drone training, AI and Robotics",
      link: "/drone_and_counter_drone",
    },
    {
      title: "Tennis Academy ",
      image: "https://res.cloudinary.com/tacafrica/image/upload/v1669127206/my_folder/sohk/1-2208130060_b3ep2q.jpg",
      // text: "TAC Community Hub provides a home for sport. We bring together key local partners and ...",
      link: "/",
    },
    {
      title: "Digital Specialized Skills",
      image: "https://res.cloudinary.com/tacafrica/image/upload/v1669127204/my_folder/sohk/image00009_igqvlf.jpg",
      // text: "The Hub provides a conducive and well furnished space for relaxation and other events. ",
      link: "/",
    },
    {
      title: "Digital Communication Skills",
      image: "https://res.cloudinary.com/tacafrica/image/upload/v1669127205/my_folder/sohk/1-2207230068_ukqrkd.jpg",
      // text: "At the moment, we have two clubs in this category. These are the Crypto Club and Drone Club.",
      link: "/",
    },
    {
      title: "Coaching and Mentorship",
      image: "https://res.cloudinary.com/tacafrica/image/upload/v1669127258/my_folder/sohk/1-2207230100_o1x2sk.jpg",
      // text: "At SOHK, we provide an avenue where people can  come and update their skills by learning...",
      link: "/"
    },
    {
      title: "Rehabilitation",
      image: "https://res.cloudinary.com/tacafrica/image/upload/v1669127203/my_folder/sohk/image00034_u7vdgo.jpg",
      // text: "We provide a conducive office environment for anyone who wants to indulge in brainstorming.",
      link: "/"
    },

  ];

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
              <div
                key={i}
                className="flex-none w-12/12 lg:w-10/12 mr-8 overflow-hidden rounded-lg md:mr-4 md:pb-4 "
              >
                {/* <Link href={edge.link}> */}
                  <a className="space-y-4">
                    <div className="aspect-w-16 aspect-h-9 rounded-lg border-8 border-white">
                      <img
                        className="object-cover h-[300px] w-full shadow-md hover:shadow-xl "
                        src={edge?.image}
                        alt={edge.image}
                      />
                    </div>
                    <div className="px-4 py-2">
                      <div className="text-lg font-medium leading-6 text-center">
                        <h3 className=" max-h-12 mb-3 text-base font-semibold lg:font-bold font-mavin text-gold">
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
            ))}
          </Carousel>
        </div>

      </div>
    </div>
  );
};

export default CardSlider;