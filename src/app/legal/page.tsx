import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link"

export default function LegalPage() {
  return (
    <section className="py-20">
      <Link href="/" target="_self" className="flex items-center gap-2 text-typo-white text-base font-normal" prefetch={false}><ArrowLeftIcon size={20} /> Retour</Link>

      <h1 className="flex flex-col items-start gap-2 mt-4 mb-16">
        <span className="font-normal text-8xl text-typo-light-blue">Mentions</span>
        <span className="font-normal text-8xl text-typo-light-blue">Légales</span>
      </h1>

      <div className="p-4 className flex flex-col items-start gap-4 mt-16">
        <h2 className="font-normal text-2xl text-typo-white">Identité</h2>

        <p className="text-typo-white text-base font-light">
          Le site www.cuicuitedays.fr (ci-après dénommé le « Site ») est édité et exploité par l'association LCDS Evenements (ci-après dénommée « LCDS Evenements »), association loi 1901, représentée par M. Augustin FOUILLET, en qualité de Président.
          Reponsable de la publication : M. Hugo CAMPOS, hcampospro@gmail.com.
        </p>
      </div>

      <div className="p-4 className flex flex-col items-start gap-4 mt-16">
        <h2 className="font-normal text-2xl text-typo-white">Contact</h2>

        <p className="text-typo-white text-base font-light">
          Notre service de relations clients est joignable à l'adresse mail suivante : communication.cuicuitedays@gmail.com
        </p>
      </div>

      <div className="p-4 className flex flex-col items-start gap-4 mt-16">
        <h2 className="font-normal text-2xl text-typo-white">Hébergeur</h2>

        <p className="text-typo-white text-base font-light">
          L’hébergement du site est assuré par : GitHub.
          Le deploiement du site est assuré par : Railway.
          Le nom de domaine est attribuer par OVH, 2 rue Kellermann, 59100 Roubaix, France.
        </p>
      </div>

      <div className="p-4 className flex flex-col items-start gap-4 mt-16">
        <h2 className="font-normal text-2xl text-typo-white">Propriété intellectuelle</h2>

        <p className="text-typo-white text-base font-light">
          Le Site est une œuvre de l’esprit protégée par la loi. Son contenu, y compris les textes, illustrations, photographies et présentations sont strictement réservés au titre du droit d'auteur ainsi qu'au titre de la propriété intellectuelle. L'association LCDS Evenements vous accorde une licence limitée, non-exclusive, révocable, sans droit de sous licencier sur le contenu du Site, et ce, pour les simples accès, navigation et utilisation liés au Site. Cette licence ne vous accorde aucun autre droit, en particulier d'exploitation commerciale de ces contenus.
        </p>
      </div>

      <div className="p-4 className flex flex-col items-start gap-4 mt-16">
        <h2 className="font-normal text-2xl text-typo-white">Marques</h2>

        <p className="text-typo-white text-base font-light">
          Les dénominations sociales, marques et signes distinctifs figurant sur le Site sont protégés par les lois françaises et internationales. Toute utilisation, reproduction, diffusion ou représentation de tout ou partie d'un des signes précités sans autorisation expresse écrite est interdite.
        </p>
      </div>

      <div className="p-4 className flex flex-col items-start gap-4 mt-16">
        <h2 className="font-normal text-2xl text-typo-white">Limitation de responsabilité</h2>

        <p className="text-typo-white text-base font-light">
          Nous nous efforçons d'assurer, au mieux de nos possibilités, l'exactitude et l’actualité des informations diffusées sur le site. Nous nous réservons le droit de corriger et de modifier le contenu du site à tout moment et sans préavis. Il appartient aux visiteurs du Site de vérifier l'information donnée sur le site par d'autres moyens, y compris en nous contactant directement. Nous déclinons toute responsabilité (a) pour toute imprécision, inexactitude ou omission relative aux informations disponibles sur le site, (b) pour les dommages résultant d'une modification des informations figurant sur le site causée par une éventuelle manipulation frauduleuse effectuée par des tiers et (c) pour tous dommages, directs ou indirects, quelles qu'en soient les causes, origines, nature ou conséquences, provoqués à raison de l'accès de quiconque au site ou de l'impossibilité d'y accéder, de même que l'utilisation du Site et/ou du crédit accordé à une quelconque information provenant directement ou indirectement de ce dernier.
        </p>
      </div>
    </section>
  )
}