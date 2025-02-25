import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <section className="h-[calc(100dvh-5.5rem)] md:pt-44 pt-20">
      <Link href="/" target="_self" className="flex items-center gap-2 text-typo-white text-base font-normal" prefetch={false}><ArrowLeftIcon size={20} /> Retour</Link>

      <h1 className="flex flex-col items-start gap-2 mt-4">
        <span className="font-normal text-8xl text-typo-light-blue">Cette page</span>
        <span className="font-normal text-8xl text-typo-light-blue">n'existe pas</span>
      </h1>

      <div className="p-4 className flex flex-col items-start gap-4 mt-16">
        <h2 className="font-normal text-2xl text-typo-white">Oupsssss !</h2>

        <p className="max-w-2xl text-typo-white text-base font-light">
          Il semblerait que cette page ait pris son envol vers des contrées inconnues…
          Pas de panique ! Il te suffit juste de suivre les oiseaux et de revenir à la Page d’accueil
          Et en attendant, tends l’oreille… On entendrait presque un petit cui-cui au loin.
        </p>
      </div>

      <Image 
        src="/ressort.svg" 
        alt="Ressort de la DA du festival" 
        fetchPriority="high" 
        className="block absolute bottom-0 right-0 object-cover w-full h-full -z-10" 
        width={100} 
        height={100} 
        loading="eager" 
        />
    </section>
  )
}