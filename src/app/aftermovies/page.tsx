"use client";

import { aftermovies } from "@/config/aftermovies";
import { cn } from "@/utils/cn";
import { useState } from "react";

export default function AftermoviesPage() {
  const [activeYear, setActiveYear] = useState<"2024" | "2023" | "2022">("2024");

  return (
    <section className="py-20">
      <h1 className="flex flex-col items-start gap-2 mb-4">
        <span className="font-black text-3xl text-typo-light-blue">Nos</span>
        <span className="font-black text-3xl text-typo-light-blue">Aftermovies</span>
      </h1>

      <div className="flex items-center gap-4 mb-4">
        <button 
          className={cn(
            "px-4 py-2 rounded-lg border-2 border-typo-white hover:bg-button-aftermovie cursor-pointer group/2024",
            activeYear === "2024" && "bg-button-aftermovie"
          )} 
          onClick={() => setActiveYear("2024")}
        >
          <span className={cn("font-bold text-base text-typo-white group-hover/2024:text-typo-black", activeYear === "2024" && "text-typo-black")}>
            2024
          </span>
        </button>

        <button 
          className={cn(
            "px-4 py-2 rounded-lg border-2 border-typo-white hover:bg-button-aftermovie cursor-pointer group/2023",
            activeYear === "2023" && "bg-button-aftermovie"
          )} 
          onClick={() => setActiveYear("2023")}
        >
          <span className={cn("font-bold text-base text-typo-white group-hover/2023:text-typo-black", activeYear === "2023" && "text-typo-black")}>
            2023
          </span>
        </button>

        <button 
          className={cn(
            "px-4 py-2 rounded-lg border-2 border-typo-white hover:bg-button-aftermovie cursor-pointer group/2022",
            activeYear === "2022" && "bg-button-aftermovie"
          )} 
          onClick={() => setActiveYear("2022")}
        >
          <span className={cn("font-bold text-base text-typo-white group-hover/2022:text-typo-black", activeYear === "2022" && "text-typo-black")}>
            2022
          </span>
        </button>
      </div>

      <iframe
          className="w-full aspect-video self-stretch md:min-h-96 rounded-2xl"
          src={aftermovies[activeYear]}
          title="Product Overview Video"
          aria-hidden="true"
      />
    </section>
  )
}