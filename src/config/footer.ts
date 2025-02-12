import { ticketsLink } from "./links"

type FooterLink = {
  label: string;
  href: string;
  target: "_blank" | "_self";
}

export const legalLinks: FooterLink[] = [
  { label: "Conditions générales de ventes", href: "https://www.helloasso.com/cgu-utilisateur", target: "_blank" },
  { label: "Mentions légales", href: "/legal", target: "_self" },
]

export const navigationLinks: FooterLink[] = [
  { label: "Boutique", href: ticketsLink, target: "_blank" },
  { label: "Devenir partenaire", href: "/sponsors-kit.pdf", target: "_blank" },
  { label: "Signaler un problème", href: "mailto:communication.cuicuitedays@gmail.com", target: "_self" },
]

export const socialLinks: FooterLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/cuicuitedays/", target: "_blank" },
  { label: "Tiktok", href: "https://www.tiktok.com/@cuicuitedays", target: "_blank" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100089684250095", target: "_blank" },
  { label: "Youtube", href: "https://www.youtube.com/channel/UCZuHbkmPVDTc3SAgTYzzgfA", target: "_blank" },
]

export const associationLinks: FooterLink[] = [
  { label: "Nous contacter", href: "mailto:communication.cuicuitedays@gmail.com", target: "_self" },
  { label: "Crédits", href: "/credits", target: "_self" },
]