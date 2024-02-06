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
    <div className="relative overflow-hidden bg-[#080808]">
      <Navigation />
      <div className="px-6 mx-auto max-w-7xl lg:px-8 pt-16 md:pt-0">
        <div className="relative pb-8 grid items-center grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <div className="bg-[#ffba00] w-[100px]  md:h-[80%] absolute md:bottom-0"></div>
          <div className="shadow-xl flex flex-col-reverse w-full border-t border-gray-900/10 lg:border-t-0 md:ml-8">
            <Carousel />
            <div className="flex justify-center -mt-16 md:mt-0">
              <Image
                src={CasapingGIF}
                alt="Casapring GIF"
                className="-ml-4 md:-ml-0 sm:h-[400px] sm:max-w-[400px] relative z-[10]"
              />
            </div>
          </div>

          <div className="relative z-[10] md:ml-16 md:mt-32">
            <Card>
              <div>
                <article className="relative w-full h-full p-4 md:p-8">
                  <h2
                    id="featured-post"
                    className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                  >
                    {/* {featured.title} */}
                  </h2>
                  <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                    {featured.description}
                  </p>
                </article>
              </div>
            </Card>
          </div>
        </div>

        <div className="relative overflow-hidden w-full pb-14 ">
          <Image
            src={clipsGIF}
            alt="Clips projects"
            className="mx-auto sm:m-10 w-[300px] h-[300px] relative z-[2]"
          />

          <div className="absolute z-[1] bottom-0 left-1/2 -translate-x-1/2 bg-[#00FF00] w-[200px] md:w-[150px] h-[110rem] md:h-full"></div>

          <div className="relative z-[2] grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {music.map((music, index) => (
              <Link
                href={music.url}
                target="_blank"
                key={`${music.title}-${index}`}
                className="overflow-hidden cursor-pointer sm:w-[300px] rounded-[12px]"
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.6) 0px 5px 10px",
                  WebkitBoxShadow:
                    "rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.6) 0px 5px 10px",
                }}
              >
                <div className="">
                  <Image
                    src={music.src}
                    className="object-cover w-full  transition-transform duration-300 transform hover:scale-105"
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

        <div className="flex flex-col md:flex-row items-center justify-center px-6 mx-auto lg:px-8 pb-16">
          <div className="flex flex-col md:flex-row items-center md:gap-24 md:mt-[64px]">
            <div className="flex flex-col items-center relative z-10">
              <Image
                src={CorporateGIF}
                alt="CORPORATE gif"
                className="self-center"
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

            <div className="relative mt-[98px] md:mt-0">
              <div className="w-[300px] bg-[#0006ff] h-[500px] absolute -right-16 -top-16 shadow-md"></div>

              <div
                className="overflow-hidden rounded-[12px]"
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.6) 0px 5px 10px",
                  WebkitBoxShadow:
                    "rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.6) 0px 5px 10px",
                }}
              >
                {" "}
                <Video currentVideoIndex={currentVideo} />
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
