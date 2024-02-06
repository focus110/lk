"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Carousel from "./Carousel";
import CasapingGIF from "./Assets/CASAPING.gif";
import CorporateGIF from "./Assets/CORPORATE.gif";
import clipsGIF from "./Assets/CLIPS.gif";

import SMASH from "./Assets/SMASH.jpeg";
import GUCCI from "./Assets/GUCCI.jpeg";
import LACLIM from "./Assets/LA CLIM.jpeg";
import MA3LICH from "./Assets/MA3LICH.jpeg";
import NPTK from "./Assets/NPTK.jpeg";
import PESETAS from "./Assets/PESETAS.jpeg";
import SOUVENIRS from "./Assets/SOUVENIRS.jpeg";
import CASABLANCAFREESTYLE from "./Assets/CASABLANCA FREESTYLE.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import Video from "../components/Video";
import Footer from "../components/Footer";

export const revalidate = 60;
export default function ProjectsPage() {
  const featured = allProjects.find((project) => project.slug === "casaping");
  const music = [
    {
      title: "SMASH",
      src: SMASH,
      url: "https://youtu.be/7A0RSxJG7oQ?si=rpukAcU4vymEOgtc",
    },
    {
      title: "CASABLANCA FREESTYLE",
      src: CASABLANCAFREESTYLE,
      url: "https://youtu.be/2hQid50S384?si=c1Ac7cpeK5VPbwKp",
    },
    {
      title: "SOUVENIRS",
      src: SOUVENIRS,
      url: "https://youtu.be/L334z3mn8zc?si=ly2MAse1sUowStZv",
    },
    {
      title: "MA3LICH",
      src: MA3LICH,
      url: "https://youtu.be/lLmfkE8n5RY?si=SdBT-sMLVf4LVhWW",
    },
    {
      title: "LA CLIM",
      src: LACLIM,
      url: "https://youtu.be/z4HxrEk4dgg?si=zjPvRChlg1eDZ987",
    },
    {
      title: "GUCCI",
      src: GUCCI,
      url: "https://youtu.be/oM4yQJYp4fA?si=WYEsfPOX9iGkJI7L",
    },
    {
      title: "PESETAS",
      src: PESETAS,
      url: "https://youtu.be/NikXUDXecZg?si=yTbCuESpKYScZ7dK",
    },
    {
      title: "NPTK",
      src: NPTK,
      url: "https://youtu.be/UrP7tsTsi9o?si=wJjk1n3zZcbR4CbA",
    },
  ];
  const [currentVideo, setCurrentVideo] = useState(4);

  const slideVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const handleVideoChange = (newVideo) => {
    setCurrentVideo("");
    setCurrentVideo(newVideo);
  };

  useEffect(() => {
    AOS.init({
      // Global settings:
      offset: 200,
      duration: 1000,
      easing: "ease",
      // once: true,
    });
  }, []);

  return (
    <div className="relative overflow-hidden">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="relative flex flex-col-reverse lg:grid items-center grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <div
            className="bg-[#ffba00] w-[100px]  md:h-[80%] absolute md:bottom-0"
          ></div>
          <div className=" relative z-[10] md:ml-8">
            <Card>
              <Link href={`${featured.url}`} target="_blank">
                <article className="relative w-full h-full p-4 md:p-8">
                  <h2
                    id="featured-post"
                    className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                  >
                    {featured.title}
                  </h2>
                  <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                    {featured.description}
                  </p>
                </article>
              </Link>
            </Card>
          </div>

          <div className="flex flex-col-reverse md:flex-col w-full mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            <Carousel />
            <div className="flex justify-center -mt-16 md:mt-0">
              <Image
                src={CasapingGIF}
                alt="Casapring GIF"
                className="w-[300px] -ml-4 md:-ml-0 sm:h-[400px] sm:max-w-[350px] relative z-[10]"
              />
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden w-full pb-14 ">
          <Image
            src={clipsGIF}
            alt="Clips projects"
            className="sm:m-10 w-[300px] h-[300px] relative z-[2]"
          />

          <div
            data-aos="fade-down"
            className="slideFrmD absolute z-[1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00FF00] w-[100px] md:w-[150px] h-full sm:h-screen -mt-[640px] sm:-mt-[400px] -ml-10 sm:-ml-0"
          ></div>

          <div className="relative z-[2] grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {music.map((music, index) => (
              <Link
                href={music.url}
                target="_blank"
                key={`${music.title}-${index}`}
                className="overflow-hidden cursor-pointer sm:w-[300px] rounded-[12px]"
              >
                <div className="">
                  <Image
                    src={music.src}
                    className="object-cover w-full "
                    alt="Casaping Youtube"
                  />
                  <div className="relative w-full h-14 transition duration-1000 group-hover:opacity-50 -mt-10">
                    <div
                      className="w-full h-14"
                      style={{
                        backdropFilter: "blur(16px)",
                        WebkitBackdropFilter: "blur(16px)",
                      }}
                    ></div>
                    <div className="text-shadow-lg absolute top-1/2 -translate-y-1/2  z-10 text-white text-base font-bold p-4">
                      <h3>{music.title}</h3>
                      <p className="text-sm font-normal -mt-1">Adaeb</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center px-6 pt-2 mx-auto lg:px-8 md:pt-16 lg:pt-16 pb-16">
          <div className="flex flex-col md:flex-row items-center md:gap-24">
            <div className="flex flex-col items-center relative z-10">
              <Image
                src={CorporateGIF}
                alt="CORPORATE gif"
                className="w-[300px] md:w-[400px] h-[450px] self-center"
              />
              <div className="flex items-center mb-4">
                <h3
                  onClick={() => {
                    handleVideoChange(4);
                  }}
                  className="text-white font-semibold cursor-pointer mr-1"
                >
                  Vanadis_Beautysalon{" "}
                  <span className="text-gray-400 italic font-normal">
                    Zurich
                  </span>
                </h3>
                <h3
                  onClick={() => {
                    handleVideoChange(3);
                  }}
                  className="text-white font-semibold cursor-pointer"
                >
                  | Soleil Rouge{" "}
                  <span className="text-gray-400 italic font-normal">
                    Geneve
                  </span>
                </h3>
              </div>
              <div className="flex items-center">
                <div
                  onClick={() => {
                    handleVideoChange(2);
                  }}
                  className="text-white font-semibold cursor-pointer mr-1"
                >
                  Wolfgang Label
                  <span className="text-gray-400 italic font-normal">
                    {" "}
                    Paris
                  </span>
                </div>
                <h3
                  onClick={() => {
                    handleVideoChange(1);
                  }}
                  className="text-white font-semibold cursor-pointer"
                >
                  | Valmy Boulangerie{" "}
                  <span className="text-gray-400 italic font-normal">
                    Paris
                  </span>
                </h3>
              </div>
            </div>

            <div className="relative mt-24 ">
              <div
                data-aos="fade-left"
                className="w-[230px] bg-blue-600 h-[400px] absolute -right-16 -top-16 shadow-md"
              ></div>

              <Video currentVideoIndex={currentVideo} />
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
