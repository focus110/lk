import React from "react";

interface VideoProps {
  currentVideoIndex: number;
}

const Video: React.FC<VideoProps> = ({ currentVideoIndex }) => {
  const videos = [
    { id: 1, src: "/videos/Valmy.mp4" },
    { id: 2, src: "/videos/WolfgangLabel.mp4" },
    { id: 3, src: "/videos/SoleilRouge.mp4" },
    { id: 4, src: "/videos/Vanadis_beautysalon.mp4" },
  ];

  return videos.map((video, index) => (
    <video
      key={video.id}
      className={`video ${
        index + 1 === currentVideoIndex ? "active" : "hidden"
      } w-[250px] h-auto relative z-10 rounded-[12px] shadow-md`}
      controls
    >
      <source className="" src={video.src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  ));
};

export default Video;
