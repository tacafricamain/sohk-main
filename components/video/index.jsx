// /* eslint-disable @next/next/no-img-element */
// import React, { useState } from "react";

// const YoutubeEmbed = ({ embedId, videoSrc }) => {
    
//     return (
//     <div className="relative w-full p-5" >
//         <img src="https://res.cloudinary.com/tacafrica/image/upload/v1683971134/image00002_krsbdi.jpg"
//             alt="video thumbnail"
//             className="absolute h-[480px] w-11/12 rounded-xl overflow-hidden object-cover" />
//         <img src="/videoicon.png" alt="play thumbnail" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer" />
//     <iframe
//     //   width="500px"
//             height="480"
//             className="w-11/12 mx-auto rounded-xl overflow-hidden"
//             src={
//                 videoSrc == 'youtube' ? `https://www.youtube.com/embed/${embedId}` :
//                 videoSrc == 'gDrive' ? `https://drive.google.com/file/d/${embedId}/preview` : `${embedId}`
//     }
//       frameBorder="0"
//       allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//       // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//       allowFullScreen
//       title="Embedded youtube"
//     />
//   </div>
        
//     )
// }

// export default YoutubeEmbed;



/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const YoutubeEmbed = ({ embedId, videoSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleThumbnailClick = () => {
    setIsPlaying(true);
  };

    return (
      <div>    
            <div className="relative w-full p-5">
            {isPlaying ? (
                <iframe
                height="480"
                className="w-11/12 mx-auto rounded-xl overflow-hidden"
                src={
                    videoSrc === "youtube"
                    ? `https://www.youtube.com/embed/${embedId}?autoplay=1`
                    : videoSrc === "gDrive"
                    ? `https://drive.google.com/file/d/${embedId}/preview`
                    : `${embedId}`
                }
                frameBorder="0"
                allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay'
                allowFullScreen="true"
                    title="Embedded youtube"
                />
            ) : (
                <>
                <img
                    src="https://res.cloudinary.com/tacafrica/image/upload/v1683971134/image00002_krsbdi.jpg"
                    alt="video thumbnail"
                    className=" h-[480px] lg:w-11/12 left-0 top-0 rounded-xl overflow-hidden object-cover"
                />
                <img
                    src="/videoicon.png"
                    alt="play thumbnail"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer"
                    onClick={handleThumbnailClick}
                />
                </>
            )}
            </div>
      </div>
  );
};

export default YoutubeEmbed;
