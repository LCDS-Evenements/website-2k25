type NavbarLink = {
  label: string;
  href: string;
  target: "_blank" | "_self";
}

export const navbarLinks: NavbarLink[] = [
  { label: "Line Up", href: "/#line-up", target: "_self" },
  { label: "Horaires", href: "/#times", target: "_self" },
  { label: "Histoire", href: "/#history", target: "_self" },
  // { label: "Sponsors", href: "/#sponsors", target: "_self" },
  // { label: "Merch", href: "/merchandising", target: "_self" },
  { label: "Aftermovies", href: "/aftermovies", target: "_self" },
  // { label: "FAQ", href: "/#faq", target: "_self" },
]