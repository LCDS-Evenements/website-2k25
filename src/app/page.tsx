"use client";

import { all } from "@/config/artists";
import { ArtistCard } from "@/react/components/artist-card";
import { Button } from "@/react/components/button";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState<"all" | "friday" | "saturday">("all");

  return (
    <>
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
      <section className="py-32">
        <div className="flex items-center gap-4 mb-5">
          <Button text="Tous" active={filter === "all"} onClick={() => setFilter("all")} />
  
          <Button text="Vendredi" active={filter === "friday"} onClick={() => setFilter("friday")} />
  
          <Button text="Samedi" active={filter === "saturday"} onClick={() => setFilter("saturday")} />
        </div>

        <div className="grid grid-cols-3 grid-rows-6 gap-8">
          <div className="row-span-1 min-h-52 flex items-center justify-center">
            <h1 className="flex flex-col items-start mb-4">
              <span className="font-black text-5xl bg-light-blut-gradient leading-none text-transparent bg-clip-text">La</span>
              <span className="font-black text-9xl bg-light-blut-gradient leading-none text-transparent bg-clip-text">LineUp</span>
            </h1>
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
    </>
  );
}
