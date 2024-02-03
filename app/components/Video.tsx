import React from "react";

interface VideoProps {
  currentVideoIndex: number;
}

const Video: React.FC<VideoProps> = ({ currentVideoIndex }) => {
  const videos = [
    {
      id: 1,
      src: "https://player.vimeo.com/video/908586077?h=542a5581d3",
    },
    {
      id: 2,
      src: "https://player.vimeo.com/video/908595937?h=6f417fb2cd",
    },
    {
      id: 3,
      src: "https://player.vimeo.com/video/908584428?h=75307162ae",
    },
    {
      id: 4,
      src: "https://player.vimeo.com/video/908587250?h=db0dbc54ec",
    },
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

  // Section ancienne

  return videos.map((video, index) => (
    <iframe
      key={video.id}
      className={`video ${
        index + 1 === currentVideoIndex ? "active" : "hidden"
      } w-[300px] h-[500px] relative z-10 rounded-[12px] shadow-md`}
      src={video.src}
      // width="500"
      // height="890"
      allow="autoplay; fullscreen; picture-in-picture"
      title="Video"
    ></iframe>
  ));
};

export default Video;
