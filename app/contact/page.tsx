"use client";
import { Instagram, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Image from "next/image";
import profileImg from "../projects/Assets/PHOTO_CONTACT.png";
import Footer from "../components/Footer";

const socials = [
  {
    icon: <Instagram size={20} />,
    href: "https://Instagram.com/Lukasdumont_",
    label: "Instagram",
    handle: "@Lukasdumont_",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:Lukasdumont@icloud.com",
    label: "Email",
    handle: "Lukasdumont@icloud.com",
  },
  {
    icon: <Twitter size={20} />,
    href: "https://Twitter.com/Lukasdumont_",
    label: "Twitter",
    handle: "Twitter",
  },
];

export default function Example() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <div className="lg:px-[130px] ">
        <Navigation />
        <div className="flex flex-col md:flex-row gap-4 pt-[170px] px-8 md:px-16">
          <Image
            className="w-[300px] md:h-[300px] object-cover"
            src={profileImg}
            alt={`profile image`}
          />

          <div className="md:ml-[10px]">
            <h4 className="text-white text-4xl font-bold md:text-6xl mb-2">
              Lukas dunmont
            </h4>
            <p className="text-white">
              Realisateur de documentaire,clips & spots publicitaires
              <br />
              Paris
            </p>
          </div>
        </div>
        <div className="container flex items-center justify-center py-16 px-4 mx-auto">
          <div className="grid w-full grid-cols-1 gap-8 mx-auto sm:grid-cols-3 lg:gap-0">
            {socials.map((s) => (
              <Card>
                <Link
                  href={s.href}
                  target="_blank"
                  className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
                >
                  <span
                    className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                    {s.icon}
                  </span>{" "}
                  <div className="z-10 flex flex-col items-center">
                    <span className="text-[12px] lg:text-[15px] font-medium duration-150 xl:text-2xl text-zinc-200 group-hover:text-white font-display">
                      {s.handle}
                    </span>
                    <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                      {s.label}
                    </span>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
