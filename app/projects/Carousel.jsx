"use client";
import "./carousel.css";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

const cards = [
  {
    title: "Les rappeurs qui courent dans les champs...",
    url: "https://youtu.be/2kOF7jJLY6o?si=GK1pCl3bX5JLs3vn",
    src: "/assets/CASAPING08.jpeg",
  },
  {
    title: `J'avais 1 objectif : c'était de faire du bif !`,
    url: "https://youtu.be/4YnpWBj55cE?si=njeakTGLIs0NdcyT",
    src: "/assets/CASAPING09.jpeg",
  },
  {
    title: `Mes inspirations c'était Kanye et Booba !`,
    url: "https://youtu.be/wUUxE42CotA?si=7cWDghXEARLgO6te",
    src: "/assets/CASAPING10.jpeg",
  },
  {
    title: "Des cours de chant en tant que rappeur ?",
    url: "https://youtu.be/OHVwnDGmnnI?si=bowWqHWow2ZAFEGC",
    src: "/assets/CASAPING11.jpeg",
  },
  {
    title: `Comment s'entourer et créer une communauté dans la musique ?`,
    url: "https://youtu.be/BFmqLMGrYLo?si=Tq-SGDyKk7s2eiMq",
    src: "/assets/CASAPING12.jpeg",
  },
];

const Carousel = () => {
  // Nombre de cartes à afficher
  const visibleCards = 3;

  const [selected, setSelected] = useState(3);

  const move = (direction) => {
    if (direction === "next") {
      setSelected((prev) => (prev + 1) % cards.length);
    } else if (direction === "prev") {
      setSelected((prev) => (prev - 1 + cards.length) % cards.length);
    }
  };

  // Function to retrieve only the cards to display
  const visibleImages = () => {
    let orderedImages = [];
    for (let i = 0; i < visibleCards; i++) {
      let index = (selected + i) % cards.length;
      orderedImages.push(cards[index]);
    }
    return orderedImages;
  };
  return (
    <section className="flex justify-between items-center">
      <button
        onClick={() => move("prev")}
        className="relative z-10 text-white bg-gray-300 bg-opacity-40 rounded-full p-2 -mr-12"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </button>

      <div className="flex justify-between" id="carousel">
        {visibleImages().map((card, index) => (
          <Link
            className={`${
              index === 0
                ? "mr-[-50px]"
                : index === 2
                ? "ml-[-50px]"
                : "relative z-[20]"
            }  border-opacity-80 cursor-pointer rounded-[12px] overflow-hidden`}
            // border-gray-500 border-[2px]
            href={card.url}
            target="_blank"
            key={`${card.title}-${index}`}
          >
            <div className="relative rounded-full">
              <div
                className={`${
                  index === 0 ? "" : index === 2 ? "" : "hidden"
                } overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] z-[1] bg-opacity-50`}
              ></div>
              <img
                src={card.src}
                alt="Casaping Youtube"
                className="w-full bg-cover object-fit"
              />
              <div
                style={{
                  background: `url(/assets/CASAPING10.jpeg)`,
                  backgroundSize: "contain",
                }}
                className="h-[100px] bg-black relative py-3 px-2 md:px-4 md:py-5 bg-gradient-to-br opacity-100 via-zinc-100/10 transition duration-1000 group-hover:opacity-50"
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    WebkitBackdropFilter: "blur(16px)",
                    backdropFilter: "blur(16px)",
                  }}
                ></div>
                <h3 className="relative text-white text-sm md:text-[15px] lg:text-[12px] xl:text-[15px] stroke-black stroke-1 shadow-sm">
                  {card.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <button
        onClick={() => move("next")}
        className="relative z-10 text-white bg-gray-300 bg-opacity-40 rounded-full p-2 -ml-12"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </section>
  );
};

export default Carousel;
