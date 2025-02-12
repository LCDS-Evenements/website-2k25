type Artist = {
  name: string;
  musicType: string;
  hours: string;
  image: string;
  link: string;
  type: "small" | "big";
  imageClassName?: string;
  containerClassName?: string;
}

export const all: Artist[] = [
  { name: "Boris & Moris", hours: "Sam | 01:00", musicType: "House / Electro", image: "/boris-moris.svg", link: "aldkjalksjd", type: "big" },
  { name: "Supa Mana", hours: "Ven | 19:00", musicType: "Reggae", image: "/supa-mana.svg", link: "aldkjalksjd", type: "small" },
  { name: "Supa Mana", hours: "Ven | 19:00", musicType: "Reggae", image: "/supa-mana.svg", link: "aldkjalksjd", type: "small" },
  { name: "Supa Mana", hours: "Ven | 19:00", musicType: "Reggae", image: "/supa-mana.svg", link: "aldkjalksjd", type: "big" },
  { name: "Jive Me", hours: "Ven | 21:00", musicType: "Electro Pop", image: "/jive-me.svg", link: "aldkjalksjd", type: "big" },
  { name: "Supa Mana", hours: "Ven | 19:00", musicType: "Reggae", image: "/supa-mana.svg", link: "aldkjalksjd", type: "small" },
  { name: "Jive Me", hours: "Ven | 21:00", musicType: "Electro Pop", image: "/jive-me.svg", link: "aldkjalksjd", type: "big" },
  { name: "Supa Mana", hours: "Ven | 19:00", musicType: "Reggae", image: "/supa-mana.svg", link: "aldkjalksjd", type: "small" },
  { name: "Supa Mana", hours: "Ven | 19:00", musicType: "Reggae", image: "/supa-mana.svg", link: "aldkjalksjd", type: "small" },
  { name: "Supa Mana", hours: "Ven | 19:00", musicType: "Reggae", image: "/supa-mana.svg", link: "aldkjalksjd", type: "big" },
  { name: "Supa Mana", hours: "Ven | 19:00", musicType: "Reggae", image: "/supa-mana.svg", link: "aldkjalksjd", type: "small" },
  { name: "Supa Mana", hours: "Ven | 19:00", musicType: "Reggae", image: "/supa-mana.svg", link: "aldkjalksjd", type: "small" },
]