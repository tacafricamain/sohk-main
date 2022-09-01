/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Carousel from "react-multi-carousel";

const CardSlider = ({ }) => {
  const data = [
    {
      title: "Brain Gym", //https://www.pexels.com/photo/close-up-view-of-a-golden-coin-315788/
      image: "https://res.cloudinary.com/tacafrica/image/upload/v1661951048/my_folder/compressed/mandella-and-chess-day-compressed/1-2207230009_result_rrgy6s.webp",
      text: "School of Hardknocks is passionate about empowering kids and adults of all",
      link: "/cyber_security_and_cyber_defense",
    },
    {
      title: "Digital Training",
      image: "https://res.cloudinary.com/tacafrica/image/upload/v1661951257/my_folder/compressed/youth-skill-day-compressed/IMG-20220718-WA0026_result_ajz5g0.webp",
      text: "The future of aviation is gradually being powered by unmanned Aerial Vehicles.",
      link: "/drone_and_counter_drone",
    },
    {
      title: "Sporting Activities",
      image: "https://res.cloudinary.com/tacafrica/image/upload/v1661950966/my_folder/compressed/int_youth-day-compressed/1-2208130038_result_s0lwbr.webp",
      text: "School of Hardknocks is passionate about empowering kids and adults of all",
      link: "/artificial_intelligence_and_robotics",
    },
    {
      title: "Events And Hangout",
      image: "https://res.cloudinary.com/tacafrica/image/upload/v1661950932/my_folder/compressed/friendshipDay-compressed/1-2207300093_result_se81px.webp",
      text: "School of Hardknocks is passionate about empowering kids and adults of all",
      link: "/tech_for_social_good",
    },
    {
      title: "Meet and Greet",
      image: "https://res.cloudinary.com/tacafrica/image/upload/v1661950928/my_folder/compressed/friendshipDay-compressed/1-2207300111_result_m1x2fd.webp",
      text: "School of Hardknocks is passionate about empowering kids and adults of all",
      link: "/tech_for_social_good",
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
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={15000}
            keyBoardControl={true}
            customTransition="all .5"
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
                        className="object-cover h-[300px] shadow-md hover:shadow-xl "
                        src={edge?.image}
                        alt={edge.image}
                      />
                    </div>
                    <div className="px-4 py-2">
                      <div className="text-lg font-medium leading-6 text-center">
                        <h3 className=" max-h-10 mb-3 text-base font-semibold lg:font-bold font-mavin text-gold">
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