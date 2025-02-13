"use client";

import { all } from "@/config/artists";
import { ticketsLink } from "@/config/links";
import { ArtistCard } from "@/react/components/artist-card";
import { Button } from "@/react/components/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState<"all" | "friday" | "saturday">("all");

  return (
    <>
      <h1 className="hidden">Les CuicuiteDays 2k25 | 13 & 14 Juin</h1>

      <section className="h-[calc(100dvh-11.5rem)]">
        <Image 
          src="/cover.svg" 
          alt="Illustration qui représente la direction artistique du site et du festival Les CuicuiteDays 2k25" 
          fetchPriority="high" 
          loading="eager" 
          width={100} 
          height={100} 
          className="w-full h-auto"
        />
      </section>

      <section className="py-32" id="line-up">
        <div className="flex items-center gap-4 mb-5">
          <Button text="Tous" active={filter === "all"} onClick={() => setFilter("all")} />
  
          <Button text="Vendredi" active={filter === "friday"} onClick={() => setFilter("friday")} />
  
          <Button text="Samedi" active={filter === "saturday"} onClick={() => setFilter("saturday")} />
        </div>

        <div className="grid grid-cols-3 grid-rows-6 gap-8">
          <div className="row-span-1 min-h-52 flex items-center justify-center">
            <h2 className="flex flex-col items-start">
              <span className="font-black text-5xl bg-light-blut-gradient leading-none text-transparent bg-clip-text">La</span>
              <span className="font-black text-9xl bg-light-blut-gradient leading-none text-transparent bg-clip-text">LineUp</span>
            </h2>
          </div>

          {all.map((artist, index) => (
            <ArtistCard 
              key={index} type={artist.type} 
              artist={{ hours: artist.hours, image: artist.image, link: artist.link, musicType: artist.musicType, name: artist.name }} 
              containerClassName={artist.containerClassName} 
              imageClassName={artist.imageClassName} 
            />
          ))}
        </div>
      </section>

      <section className="py-32" id="times">
        <div className="bg-times-section p-12 rounded-2xl flex flex-col items-center gap-8">
          <h2 className="font-light text-3xl bg-light-blut-gradient leading-none text-transparent bg-clip-text">Dates & Horaires</h2>

          <div className="flex items-center gap-36">
            <div className="flex flex-col justify-start gap-4">
              <h3 className="flex flex-col items-start">
                <span className="font-black text-3xl bg-light-blut-gradient leading-none text-transparent bg-clip-text">Vendredi</span>
                <span className="font-black text-7xl bg-light-blut-gradient leading-none text-transparent bg-clip-text">13 Juin</span>
              </h3>

              <p className="flex flex-col items-start">
                <span className="font-bold text-base bg-light-blut-gradient leading-none text-transparent bg-clip-text">Mainstage</span>
                <span className="font-normal text-4xl bg-light-blut-gradient leading-none text-transparent bg-clip-text flex items-center gap-2">
                  19h00 <ArrowRightIcon className="text-typo-light-blue" /> 03h00
                </span>
              </p>

              <p className="flex flex-col items-start">
                <span className="font-bold text-base bg-light-blut-gradient leading-none text-transparent bg-clip-text">Bivouac Stage</span>
                <span className="font-normal text-4xl bg-light-blut-gradient leading-none text-transparent bg-clip-text flex items-center gap-2">
                  03h00 <ArrowRightIcon className="text-typo-light-blue" /> 05h00
                </span>
              </p>
            </div>

            <div className="flex flex-col justify-start gap-4">
              <h3 className="flex flex-col items-start">
                <span className="font-black text-3xl bg-light-blut-gradient leading-none text-transparent bg-clip-text">Samedi</span>
                <span className="font-black text-7xl bg-light-blut-gradient leading-none text-transparent bg-clip-text">14 Juin</span>
              </h3>

              <p className="flex flex-col items-start">
                <span className="font-bold text-base bg-light-blut-gradient leading-none text-transparent bg-clip-text">Mainstage</span>
                <span className="font-normal text-4xl bg-light-blut-gradient leading-none text-transparent bg-clip-text flex items-center gap-2">
                  19h00 <ArrowRightIcon className="text-typo-light-blue" /> 03h00
                </span>
              </p>

              <p className="flex flex-col items-start">
                <span className="font-bold text-base bg-light-blut-gradient leading-none text-transparent bg-clip-text">Bivouac Stage</span>
                <span className="font-normal text-4xl bg-light-blut-gradient leading-none text-transparent bg-clip-text flex items-center gap-2">
                  03h00 <ArrowRightIcon className="text-typo-light-blue" /> 05h00
                </span>
              </p>
            </div>
          </div>

          <Link href={ticketsLink} prefetch={false} target="_blank">
            <button className="py-2 px-4 rounded-lg bg-button text-typo-black font-bold text-base">Je réserve mes places</button>
          </Link>
        </div>
      </section>
    </>
  );
}
