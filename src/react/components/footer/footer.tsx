import { associationLinks, legalLinks, navigationLinks, socialLinks } from "@/config/footer"
import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="bg-footer py-16 px-20 flex flex-col lg:flex-row gap-24 items-start lg:items-center justify-between w-screen">
      <Image src="/biscuit-logo-footer.svg" alt="Logo des CuicuiteDays 2k25" fetchPriority="low" loading="lazy" width={100} height={100} className="w-auto h-auto" />

      <div className="flex items-start flex-wrap gap-20 lg:gap-44">
        <div>
          <h3 className="text-2xl font-bold text-typo-black mb-6">Navigation</h3>

          <div className="flex flex-col items-start gap-6">
            {navigationLinks.map((link, id) => (
              <Link key={id} href={link.href} target={link.target} prefetch={false} rel="noopener noreferrer">
                {link.label}
              </Link> 
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-typo-black mb-6">Social</h3>

          <div className="flex flex-col items-start gap-6">
            {socialLinks.map((link, id) => (
              <Link key={id} href={link.href} target={link.target} prefetch={false} rel="noopener noreferrer">
                {link.label}
              </Link> 
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-typo-black mb-6">Association</h3>

          <div className="flex flex-col items-start gap-6">
            {associationLinks.map((link, id) => (
              <Link key={id} href={link.href} target={link.target} prefetch={false} rel="noopener noreferrer">
                {link.label}
              </Link> 
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-typo-black mb-6">Légal</h3>
          
          <div className="flex flex-col items-start gap-6">
            {legalLinks.map((link, id) => (
              <Link key={id} href={link.href} target={link.target} prefetch={false} rel="noopener noreferrer">
                {link.label}
              </Link> 
            ))}
          </div>
        </div>
      </div>
    </footer>  
  )
}
