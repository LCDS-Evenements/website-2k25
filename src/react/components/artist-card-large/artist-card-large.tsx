import { Component } from "@/utils/type"
import type { ArtistCardLargeProps } from "./artist-card-large.type"
import { cn } from "@/utils/cn"
import Image from "next/image"
import Link from "next/link"

export const ArtistCardLarge: Component<ArtistCardLargeProps> = ({ artist, type, containerClassName, imageClassName, comingSoon }) => {
  if (comingSoon) {
    return (
      <div
        className={cn(
          "min-h-52 rounded-2xl bg-artist-card py-6 px-2 relative overflow-hidden border-white",
          type === "big" ? "row-span-2" : "row-span-1",
          
          containerClassName
        )}
      >
        <div className="flex items-center justify-center w-full h-full">
          <p className="text-typo-black font-bold text-lg leading-4">Prochainement... 🤫</p>
        </div>
      </div>
    )
  }

  return (
    <Link 
      href={artist.link} 
      target="_blank" 
      prefetch={false}  
      className={cn(
        "min-h-52 rounded-2xl bg-artist-card py-6 px-2 relative overflow-hidden border-white",
        type === "big" ? "row-span-2" : "row-span-1",
        
        containerClassName
      )}
    >
      <div className="flex flex-col items-end gap-2 z-10">
        <span className="bg-artist-card-pillule rounded-lg p-1 text-typo-white font-normal leading-4">{artist.hours}</span>

        <h3 className="text-typo-black font-bold text-3xl leading-9">{artist.name}</h3>

        <p className="text-typo-black font-normal text-sm leading-4">{artist.musicType}</p>
      </div>

      <Image 
        src={artist.image} 
        alt={`Photo de l'artiste ${artist.name}`} 
        width={100} 
        height={100} 
        className={cn(
          "absolute bottom-0 left-0 block object-cover w-full h-[75%] z-20",
          imageClassName
        )} 
        fetchPriority="low" 
        loading="lazy" 
      />
    </Link>
  )
}
