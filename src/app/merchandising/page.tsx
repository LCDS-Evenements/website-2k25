"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowBigLeftIcon, ArrowBigRightIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/utils/cn";
import { merchLink } from "@/config/links";

export default function MerchandisingPage() {
  const [tee, setTee] = useState<string>("front")
  const [sweat, setSweat] = useState<string>("front")

  const handleTee = () => {
    if (tee === "front") {
      setTee("back")
    } else {
      setTee("front")
    }
  }

  const handleSweat = () => {
    if (sweat === "front") {
      setSweat("back")
    } else {
      setSweat("front")
    }
  }

  return (
    <section className="py-20">
      <h1 className="flex flex-col items-start mb-8">
        <span className="font-black text-3xl text-typo-light-blue leading-none">Notre</span>
        <span className="font-black text-4xl text-typo-light-blue leading-none">Merchandising</span>
      </h1>

      <div className="flex flex-col justify-center gap-12">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
          <div className="bg-silver-gradient rounded-lg lg:w-2/5 w-full relative flex items-center justify-center">
            <Image src="/tee-front.png" alt="tee shirt" width={300} height={300} className={cn("w-[65%] h-full", tee === "front" ? "block" : "hidden")} />
            <Image src="/tee-back.png" alt="tee shirt" width={300} height={300} className={cn("w-[65%] h-full", tee === "back" ? "block" : "hidden")} />

            <div className="flex items-center w-full justify-evenly absolute bottom-10">
              <button onClick={handleTee} className="bg-layout rounded-lg p-2 lg:p-4 text-typo-white"><ArrowBigLeftIcon /></button>
              <button onClick={handleTee} className="bg-layout rounded-lg p-2 lg:p-4 text-typo-white"><ArrowBigRightIcon /></button>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center w-full lg:w-1/2">
            <h4 className="text-typo-light-blue text-2xl font-bold mb-4">Le Tee Shirt</h4>
            <p className="text-typo-white font-normal text-base mb-2">Tee shirt de la nouvelle édition des CuicuiteDays 2k25 en collaboration avec la marque de prêt à porter Banc de Sable ! Vous retrouverez sur le devant le logo du festival et au dos un dessin qui représente une pochette de vynile au couleur du festival.</p>
            <span className="text-typo-white font-normal text-base mb-4">Taille disponible : XL | L | M | S | XS | XXS</span>
            <span className="text-typo-white font-normal text-base mb-4">Le design du produit peut ne pas être identique à celui que vous allez recevoir, certaines légères modifications peuvent être apportées.</span>
            <Link className="bg-merch-button rounded-lg px-4 py-2 font-medium text-base text-typo-white" href={merchLink}>Voir la boutique</Link>
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-4">
          <div className="flex flex-col items-start justify-center w-full lg:w-1/2">
            <h4 className="text-typo-light-blue text-2xl font-bold mb-4">Le Sweat</h4>
            <p className="text-typo-white font-normal text-base mb-2">Sweat de la nouvelle édition des CuicuiteDays 2k25 en collaboration avec la marque de prêt à porter Banc de Sable ! Vous retrouverez sur le devant le logo du festival et au dos le nom du festival avec la DA du festival.</p>
            <span className="text-typo-white font-normal text-base mb-4">Taille disponible : XL | L | M | S | XS | XXS</span>
            <span className="text-typo-white font-normal text-base mb-4">Le design du produit peut ne pas être identique à celui que vous allez recevoir, certaines légères modifications peuvent être apportées.</span>
            <Link className="bg-merch-button rounded-lg px-4 py-2 font-medium text-base text-typo-white" href={merchLink}>Voir la boutique</Link>
          </div>

          <div className="bg-silver-gradient rounded-lg lg:w-2/5 w-full relative flex items-center justify-center">
            <Image src="/sweat-front.png" alt="sweat" width={300} height={300} className={cn("w-[65%] h-full", sweat === "front" ? "block" : "hidden")} />
            <Image src="/sweat-back.png" alt="sweat" width={300} height={300} className={cn("w-[65%] h-full", sweat === "back" ? "block" : "hidden")} />


            <div className="flex items-center w-full justify-evenly absolute bottom-10">
              <button onClick={handleSweat} className="bg-layout rounded-lg p-2 lg:p-4 text-typo-white"><ArrowBigLeftIcon /></button>
              <button onClick={handleSweat} className="bg-layout rounded-lg p-2 lg:p-4 text-typo-white"><ArrowBigRightIcon /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}