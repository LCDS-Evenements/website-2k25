import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link"

export default function CreditsPage() {
  return (
    <section className="py-20">
      <Link href="/" target="_self" className="flex items-center gap-2 text-typo-white text-base font-normal" prefetch={false}><ArrowLeftIcon size={20} /> Retour</Link>

      <h1 className="flex flex-col items-start mt-4 mb-16">
        <span className="font-normal text-7xl sm:text-8xl text-typo-light-blue">Crédits</span>
      </h1>

      <div className="p-4 className flex flex-col items-start gap-4 mt-10">
        <h2 className="font-normal text-2xl text-typo-white">Web Design</h2>

        <p className="text-typo-white text-base font-semibold flex flex-col items-start gap-2">
          Baptiste SAVE
          <Link href="https://batsave.tv/" target="_blank" prefetch={false} rel="noopener noreferrer">
            <button className="py-1 px-3 rounded-lg bg-button-ticket hover:bg-button-ticket-hover cursor-pointer">
              <span className="bg-button-ticket-span font-bold text-base text-transparent bg-clip-text">
                Prendre contact
              </span>
            </button>
          </Link>
        </p>
      </div>

      <div className="p-4 className flex flex-col items-start gap-4 mt-10">
        <h2 className="font-normal text-2xl text-typo-white">Développement</h2>

        <p className="text-typo-white text-base font-semibold flex flex-col items-start gap-2">
          Hugo CAMPOS
          <Link href="https://hcampos.fr/" target="_blank" prefetch={false} rel="noopener noreferrer">
            <button className="py-1 px-3 rounded-lg bg-button-ticket hover:bg-button-ticket-hover cursor-pointer">
              <span className="bg-button-ticket-span font-bold text-base text-transparent bg-clip-text">
                Prendre contact
              </span>
            </button>
          </Link>
        </p>
      </div>

      <div className="p-4 className flex flex-col items-start gap-4 mt-10">
        <h2 className="font-normal text-2xl text-typo-white">Design DA</h2>

        <p className="text-typo-white text-base font-semibold flex flex-col items-start gap-2">
          Jeanne CHARRIER
          <Link href="https://www.nenaje.com/" target="_blank" prefetch={false} rel="noopener noreferrer">
            <button className="py-1 px-3 rounded-lg bg-button-ticket hover:bg-button-ticket-hover cursor-pointer">
              <span className="bg-button-ticket-span font-bold text-base text-transparent bg-clip-text">
                Prendre contact
              </span>
            </button>
          </Link>
        </p>
      </div>
    </section>
  )
}