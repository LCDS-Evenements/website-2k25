import Link from "next/link"
import Image from "next/image"
import { navbarLinks } from "@/config/navbar"
import { ticketsLink } from "@/config/links"

export const Navbar = () => {
  return (
    <nav style={{ background: "linear-gradient(89.29deg, #FFDCDC -23.34%, #FAF7F8 46.24%, #E0E9FF 111.76%)" }} className="py-2 px-4 rounded-2xl flex items-center justify-between">
      <Link href="/" prefetch={false}>
        <Image src="/biscuit-logo-navbar.svg" alt="Logo des CuicuiteDays 2k25" fetchPriority="high" loading="eager" width={100} height={100} className="w-auto h-auto" />
      </Link>

      <div className="flex items-center gap-5">
        {navbarLinks.map((link, id) => (
          <Link key={id} href={link.href} target={link.target} prefetch={false} className="navbar-link font-bold text-base text-transparent bg-clip-text">
            {link.label}
          </Link>
        ))}
      

        <Link href={ticketsLink} prefetch={false}>
          <button className="py-2 px-4 rounded-lg ticket-button cursor-pointer">
            <span style={{ backgroundImage: "linear-gradient(103deg, #FFDCDC 23.61%, #FAF7F8 55.12%, #E0E9FF 82.8%)" }} className="font-bold text-base text-transparent bg-clip-text">
              Billetterie
            </span>
          </button>
        </Link>
      </div>
    </nav>
  )
}
