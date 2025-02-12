"use client";

import { aftermovies } from "@/config/aftermovies";
import { Button } from "@/react/components/button";
import { useState } from "react";

export default function AftermoviesPage() {
  const [activeYear, setActiveYear] = useState<"2024" | "2023" | "2022">("2024");

  return (
    <section className="py-20">
      <h1 className="flex flex-col items-start mb-4">
        <span className="font-black text-3xl text-typo-light-blue leading-none">Nos</span>
        <span className="font-black text-4xl text-typo-light-blue leading-none">Aftermovies</span>
      </h1>

      <div className="flex items-center gap-4 mb-4">
        <Button text="2024" active={activeYear === "2024"} onClick={() => setActiveYear("2024")} />

        <Button text="2023" active={activeYear === "2023"} onClick={() => setActiveYear("2023")} />

        <Button text="2022" active={activeYear === "2022"} onClick={() => setActiveYear("2022")} />
      </div>

      <iframe
          className="w-full aspect-video self-stretch md:min-h-96 rounded-2xl"
          src={aftermovies[activeYear]}
          title="Aftermovie du festival Les CuicuiteDays"
          aria-hidden="true"
      />
    </section>
  )
}