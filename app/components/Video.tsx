import React from "react";

interface VideoProps {
  currentVideoIndex: number;
}

const Video: React.FC<VideoProps> = ({ currentVideoIndex }) => {
  const videos = [
    {
      id: 1,
      src: "https://player.vimeo.com/video/907926614?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    {
      id: 2,
      src: "https://player.vimeo.com/video/907919617?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    { id: 3, src: "https://player.vimeo.com/video/907929090?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" },
    { id: 4, src: "https://player.vimeo.com/video/907920481?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" },
  ];

  // return videos.map((video, index) => (
  //   <video
  //     key={video.id}
  //     className={`video ${
  //       index + 1 === currentVideoIndex ? "active" : "hidden"
  //     } w-[250px] h-auto relative z-10 rounded-[12px] shadow-md`}
  //     controls
  //   >
  //     <source className="" src={video.src} type="video/mp4" />
  //     Your browser does not support the video tag.
  //   </video>
  // ));

  return videos.map((video, index) => (
    <iframe
      key={video.id}
      className={`video ${
        index + 1 === currentVideoIndex ? "active" : "hidden"
      } w-[300px] h-[500px] relative z-10 rounded-[12px] shadow-md`}
      src={video.src}
      // width="500"
      // height="890"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      title="Vanadis_beautysalon"
    ></iframe>
  ));
};

export default Video;
