import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Image from "next/image";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-[#080808] bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={300}
      />
      <div className="flex flex-col md:flex-row items-center">
        <Image
          src={`/assets/PHOTO.gif`}
          alt="Clips projects"
          className="relative z-[2] lg:h-[300px] lg:w-[300px]"
          width={200}
          height={400}
          loading="lazy"
        />
        <h1 className="z-10 text-4xl text-transparent duration-1000 bg-[#0006FF] cursor-default animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
          lukasdumont_
        </h1>
        <Image
          src={`/assets/COUREUR.gif`}
          alt="Clips projects"
          className="relative z-[2] lg:h-[300px] lg:w-[300px]"
          width={200}
          height={400}
          loading="lazy"
        />
      </div>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          Réalisation de clips & spots publiciataires
        </h2>
      </div>
    </div>
  );
}
