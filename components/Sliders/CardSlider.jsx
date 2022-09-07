/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Carousel from "react-multi-carousel";

const CardSlider = ({ }) => {
  const data = [
    {
      title: " Digital Specialized Skills Training",
      image: "https://res.cloudinary.com/tacafrica/image/upload/v1661951257/my_folder/compressed/youth-skill-day-compressed/IMG-20220718-WA0026_result_ajz5g0.webp",
      text: "At SOHK, we provide specialized training on skills such as Drone training, AI and Robotics",
      link: "/drone_and_counter_drone",
    },
    {
      title: "Sporting Activities",
      image: "https://res.cloudinary.com/tacafrica/image/upload/v1661950966/my_folder/compressed/int_youth-day-compressed/1-2208130038_result_s0lwbr.webp",
      text: "TAC Community Hub provides a home for sport. We bring together key local partners and ...",
      link: "/",
    },
    {
      title: "Relaxation and Event",
      image: "https://res.cloudinary.com/tacafrica/image/upload/v1661950932/my_folder/compressed/friendshipDay-compressed/1-2207300093_result_se81px.webp",
      text: "The Hub provides a conducive and well furnished space for relaxation and other events. ",
      link: "/",
    },
    {
      title: "Technology Clubs",
      image: "https://res.cloudinary.com/tacafrica/image/upload/v1661951036/my_folder/compressed/mandella-and-chess-day-compressed/1-2207230076_result_ymyfvl.webp",
      text: "At the moment, we have two clubs in this category. These are the Crypto Club and Drone Club.",
      link: "/",
    },
    {
      title: "Mentoring and Coaching Services",
      image: "https://res.cloudinary.com/tacafrica/image/upload/v1661950982/my_folder/compressed/int_youth-day-compressed/1-2208130024_result_stl96u.webp",
      text: "At SOHK, we provide an avenue where people can  come and update their skills by learning...",
      link: "/"
    },
    {
      title: "Office-on-the-go",
      image: "https://res.cloudinary.com/tacafrica/image/upload/v1661951049/my_folder/compressed/mandella-and-chess-day-compressed/1-2207230098_result_n4rzts.webp",
      text: "We provide a conducive office environment for anyone who wants to indulge in brainstorming.",
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
                <Link href={edge.link}>
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
                </Link>
              </div>
            ))}
          </Carousel>
        </div>

      </div>
    </div>
  );
};

export default CardSlider;