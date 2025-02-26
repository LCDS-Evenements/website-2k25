"use client";

import { all, allResponsive } from "@/config/artists";
import { ticketsLink } from "@/config/links";
import { ArtistCardLarge } from "@/react/components/artist-card-large";
import { ArtistCardResponsive } from "@/react/components/artist-card-responsive/artist-card-responsive";
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

      <section className="sm:h-[calc(100dvh-11.5rem)]">
        <Image 
          src="/cover.svg" 
          alt="Illustration qui représente la direction artistique du site et du festival Les CuicuiteDays 2k25" 
          fetchPriority="high" 
          loading="eager" 
          width={100} 
          height={100} 
          className="w-full h-auto hidden sm:block"
        />

        <Image 
          src="/cover-small.svg" 
          alt="Illustration qui représente la direction artistique du site et du festival Les CuicuiteDays 2k25" 
          fetchPriority="high" 
          loading="eager" 
          width={100} 
          height={100} 
          className="w-full h-auto block sm:hidden"
        />
      </section>

      <section className="py-16 sm:py-32" id="line-up">
        {/* <div className="flex items-center gap-4 mb-5">
          <Button text="Tous" active={filter === "all"} onClick={() => setFilter("all")} />
  
          <Button text="Vendredi" active={filter === "friday"} onClick={() => setFilter("friday")} />
  
          <Button text="Samedi" active={filter === "saturday"} onClick={() => setFilter("saturday")} />
        </div> */}

        <div className="grid-cols-3 gap-8 hidden sm:grid">
          <div className="row-span-1 min-h-52 flex items-center justify-center">
            <h2 className="flex flex-col items-start">
              <span className="font-black text-[3vw] bg-light-blut-gradient leading-none text-transparent bg-clip-text">La</span>
              <span className="font-black text-[7vw] bg-light-blut-gradient leading-none text-transparent bg-clip-text">LineUp</span>
            </h2>
          </div>

          {all.map((artist, index) => (
            <ArtistCardLarge 
              key={index} 
              type={artist.type} 
              artist={{ hours: artist.hours, image: artist.image, link: artist.link, musicType: artist.musicType, name: artist.name }} 
              containerClassName={artist.containerClassName} 
              imageClassName={artist.imageClassName}
              comingSoon={artist.comingSoon} 
            />
          ))}
        </div>

        <div className="grid-cols-3 gap-4 grid sm:hidden">
          <div className="row-span-1 min-h-16 flex items-center justify-center col-span-3">
            <h2 className="flex flex-col w-full items-start">
              <span className="font-black text-2xl bg-light-blut-gradient leading-none text-transparent bg-clip-text">La</span>
              <span className="font-black text-5xl bg-light-blut-gradient leading-none text-transparent bg-clip-text">LineUp</span>
            </h2>
          </div>

          {allResponsive.map((artist, index) => (
            <ArtistCardResponsive 
              key={index} 
              type={artist.type} 
              artist={{ hours: artist.hours, image: artist.image, link: artist.link, musicType: artist.musicType, name: artist.name }} 
              containerClassName={artist.containerClassName} 
              imageClassName={artist.imageClassName} 
              comingSoon={artist.comingSoon}
            />
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-32" id="times">
        <div className="bg-times-section p-12 rounded-2xl flex flex-col items-center gap-8">
          <h2 className="font-light text-3xl bg-light-blut-gradient leading-none text-transparent bg-clip-text">Dates & Horaires</h2>

          <div className="flex flex-col sm:flex-row items-center gap-16 sm:gap-36">
            <div className="flex flex-col justify-start gap-4">
              <h3 className="flex flex-col items-start">
                <span className="font-black text-xl sm:text-3xl bg-light-blut-gradient leading-none text-transparent bg-clip-text">Vendredi</span>
                <span className="font-black text-5xl sm:text-7xl bg-light-blut-gradient leading-none text-transparent bg-clip-text">13 Juin</span>
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
                <span className="font-black text-xl sm:text-3xl bg-light-blut-gradient leading-none text-transparent bg-clip-text">Samedi</span>
                <span className="font-black text-5xl sm:text-7xl bg-light-blut-gradient leading-none text-transparent bg-clip-text">14 Juin</span>
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

          <Link href={ticketsLink} prefetch={false} target="_blank" rel="noopener noreferrer">
            <button className="py-1 px-3 sm:py-2 sm:px-4 rounded-lg bg-button text-typo-black font-bold text-base">Je réserve mes places</button>
          </Link>
        </div>
      </section>

      <section className="py-16 sm:py-32" id="history">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-0">
          <div className="flex flex-col items-start gap-8">
            <h2 className="flex flex-col items-start">
              <span className="font-black text-2xl sm:text-5xl bg-light-blut-gradient leading-none text-transparent bg-clip-text">Notre</span>
              <span className="font-black text-5xl sm:text-9xl bg-light-blut-gradient leading-none text-transparent bg-clip-text">Histoire</span>
            </h2>

            <p className="text-typo-white font-normal text-sm sm:text-base max-w-3xl">
              Découvrez Les CuicuiteDays, un festival musical unique en son genre qui célèbre sa troisième édition publique. Né d'une réunion amicale entre étudiants, cet événement s'est transformé en un véritable festival ouvert à tous, porté par une équipe passionnée et dynamique. ☀️
              <br /><br />               
              Durant deux jours intenses, profitez d'une programmation exceptionnelle avec plus de 10 artistes sur scène, des animations variées, une sélection de food-trucks gourmands, le tout dans une ambiance festive et conviviale. Un événement culturel incontournable qui ne cesse de grandir et d'enchanter son public 🎉
            </p>
          </div>

          <Image src="/story-picture.svg" alt="Photo de Humain, artistes de la précédente édition" width={100} height={100} className="w-auto h-auto" fetchPriority="low" loading="eager"  />
        </div>
      </section>

      {/* <section className="py-16 sm:py-32" id="sponsors">
        <h2 className="flex flex-col items-start">
          <span className="font-black text-2xl sm:text-5xl bg-light-blut-gradient leading-none text-transparent bg-clip-text">Nos</span>
          <span className="font-black text-5xl sm:text-9xl bg-light-blut-gradient leading-none text-transparent bg-clip-text">Sponsors</span>
        </h2>
      </section> */}
    </>
  );
}
