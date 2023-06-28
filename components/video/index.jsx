/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const YoutubeEmbed = ({ embedId, videoSrc, thumbnail, extraStyles }) => {
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
                className="w-full mx-auto rounded-xl overflow-hidden"
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
                    src={ thumbnail ? `https://img.youtube.com/vi/${embedId}/0.jpg` : `https://res.cloudinary.com/tacafrica/image/upload/v1683971134/image00002_krsbdi.jpg`}
                    alt="video thumbnail"
                    className={` ${extraStyles ?? 'h-[480px]'}  lg:w-11/12 left-0 top-0 rounded-xl overflow-hidden object-cover`}
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
