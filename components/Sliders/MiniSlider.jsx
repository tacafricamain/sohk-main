/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Carousel from "react-multi-carousel";

const MiniSlider = ({ }) => {
  const data = [
    {
      name: "Somade Akinola", //https://www.pexels.com/photo/close-up-view-of-a-golden-coin-315788/
      image: "https://res.cloudinary.com/tacafrica/image/upload/v1661951048/my_folder/compressed/mandella-and-chess-day-compressed/1-2207230009_result_rrgy6s.webp",
      text: "The coaches at *SOHK* have an infectious excitement for sports. *SOHK* has taken me from a tentative, average player to a confident, solid competitor.",
      role: "Player",
    },
    {
      name: "Theophilus Akubo",
      image: "https://res.cloudinary.com/tacafrica/image/upload/v1661951257/my_folder/compressed/youth-skill-day-compressed/IMG-20220718-WA0026_result_ajz5g0.webp",
      text: "Tennis didn't exist in my world until I heard of *SOHK*. I decided to explore the possibility of actually playing. Now I am in the court and having the time of my life. I am very grateful to *SOHK* for helping me discover a sport I can play well into my golden years.",
      role: "Tennis Player",
    },
    {
      name: "Matthew Ameh",
      image: "https://res.cloudinary.com/tacafrica/image/upload/v1661950966/my_folder/compressed/int_youth-day-compressed/1-2208130038_result_s0lwbr.webp",
      text: "Just recently, my son started learning taekwondo at *SOHK*. He looks forward to going every week and the coaches are amazing! I would definitely recommend for anyone interested in taekwondo, tennis etc for their child.",
      role: "Parent",
    },
    {
      name: "Oiza Emmanuel",
      image: "https://res.cloudinary.com/tacafrica/image/upload/v1661950932/my_folder/compressed/friendshipDay-compressed/1-2207300093_result_se81px.webp",
      text: "Half an hour with SOHK will tell you all you need to know. The coach's passion for helping people learn real tennis is self-evident. He loves the sport and wants to share that. It was important for me that my kids develop the proper technique",
      role: "parent",
    },
    {
      name: "Rabiu Ayomide",
      image: "https://res.cloudinary.com/tacafrica/image/upload/v1661950928/my_folder/compressed/friendshipDay-compressed/1-2207300111_result_m1x2fd.webp",
      text: "I have seen SOHK work with my elementary school-age children and students of all ages. The coaches have a remarkable ability to analyze and convey stroke nuances in an age-appropriate man",
      role: "parent",
    },
  ];

  const responsive = {
    desktopAndMobile: {
      breakpoint: { max: 3000,  min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="w-full">
      <div className=" pb-20 my-0">
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
              <div
                key={i}
                className="flex-none w-12/12 lg:w-10/12 mr-8 overflow-hidden rounded-lg md:mr-4 md:pb-4 "
              >
                    <div className="py-2">
                      <div className=" leading-6 ">
                        <p className="mb-6 text-base font-light  ">
                          {edge?.text}
                        </p>
                      </div>
                      <div className="text-sm flex">
                        <div className='w-16 h-16 p-2 mr-3 inline-block rounded-full bg-gradient-to-r from-gold to-orange rotate'>
                            <div className='rounded-full w-full h-full bg-white'></div>
                        </div>
                        <span className='inline-block my-auto'>
                            <p className="font-bold font-['openSans'] ">
                            {edge?.name}
                            </p>
                            <p className=''>{edge?.role}</p>
                        </span>
                      </div>
                    </div>
              </div>
            ))}
          </Carousel>
        </div>

      </div>
    </div>
  );
};

export default MiniSlider;