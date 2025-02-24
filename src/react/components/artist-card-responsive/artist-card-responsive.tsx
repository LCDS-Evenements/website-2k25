import { cn } from '@/utils/cn'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Component } from '@/utils/type'
import { ArtistCardResponsiveProps } from './artist-card-responsive.type'

export const ArtistCardResponsive: Component<ArtistCardResponsiveProps> = ({artist, type, containerClassName, imageClassName}) => {
  return (
    <Link 
      href={artist.link} 
      target="_blank" 
      prefetch={false}  
      className={cn(
        "min-h-48 rounded-2xl bg-artist-card py-6 px-2 relative overflow-hidden border-white col-span-3",
        containerClassName
      )}
    >
      <div className="flex flex-col items-end z-10">
        <span className="bg-artist-card-pillule rounded-lg p-1 text-typo-white font-normal text-xs leading-4">{artist.hours}</span>

        <h3 className="text-typo-black font-bold text-xl leading-9">{artist.name}</h3>

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
