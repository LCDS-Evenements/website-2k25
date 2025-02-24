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
  { name: "Boris & Moris", hours: "Sam | 01:00", musicType: "House / Electro", image: "/artists/boris-moris.svg", link: "aldkjalksjd", type: "big", },
  { name: "Heads Up", hours: "Ven | 21:00", musicType: "Rock", image: "/artists/heads-up.svg", link: "aldkjalksjd", type: "small", },
  { name: "Supa Mana", hours: "Ven | 19:00", musicType: "Reggae", image: "/artists/supa-mana.svg", link: "aldkjalksjd", type: "small", imageClassName: "h-[100%] w-1/2" },
  { name: "Soom T", hours: "Sam | 01:00", musicType: "House / Electro", image: "/artists/soom-t.svg", link: "aldkjalksjd", type: "big" },
  { name: "Future Rupture", hours: "Sam | 19:00", musicType: "Electro Pop", image: "/artists/future-rupture.svg", link: "aldkjalksjd", type: "big" },
  { name: "Supa Mana", hours: "Ven | 19:00", musicType: "Reggae", image: "/artists/supa-mana.svg", link: "aldkjalksjd", type: "small", imageClassName: "h-[100%] w-1/2" },
  { name: "Jive Me", hours: "Ven | 21:00", musicType: "Electro Pop", image: "/artists/jive-me.svg", link: "aldkjalksjd", type: "big" },
  { name: "Supa Mana", hours: "Ven | 19:00", musicType: "Reggae", image: "/artists/supa-mana.svg", link: "aldkjalksjd", type: "small", imageClassName: "h-[100%] w-1/2" },
  { name: "Supa Mana", hours: "Ven | 19:00", musicType: "Reggae", image: "/artists/supa-mana.svg", link: "aldkjalksjd", type: "small", imageClassName: "h-[100%] w-1/2" },
  { name: "Supa Mana", hours: "Ven | 19:00", musicType: "Reggae", image: "/artists/supa-mana.svg", link: "aldkjalksjd", type: "big" },
  { name: "Supa Mana", hours: "Ven | 19:00", musicType: "Reggae", image: "/artists/supa-mana.svg", link: "aldkjalksjd", type: "small", imageClassName: "h-[100%] w-1/2" },
  { name: "Supa Mana", hours: "Ven | 19:00", musicType: "Reggae", image: "/artists/supa-mana.svg", link: "aldkjalksjd", type: "small", imageClassName: "h-[100%] w-1/2" },
]

export const allResponsive: Artist[] = [
  { name: "Boris & Moris", hours: "Sam | 01:00", musicType: "House / Electro", image: "/artists/boris-moris.svg", link: "aldkjalksjd", type: "big", imageClassName: "h-[100%] w-1/2" },
  { name: "Heads Up", hours: "Ven | 21:00", musicType: "Rock", image: "/artists/heads-up.svg", link: "aldkjalksjd", type: "small", },
  { name: "Supa Mana", hours: "Ven | 19:00", musicType: "Reggae", image: "/artists/supa-mana.svg", link: "aldkjalksjd", type: "small", imageClassName: "h-[100%] w-1/2" },
  { name: "Soom T", hours: "Sam | 01:00", musicType: "House / Electro", image: "/artists/soom-t.svg", link: "aldkjalksjd", type: "big", imageClassName: "h-[100%] w-full" },
  { name: "Future Rupture", hours: "Sam | 19:00", musicType: "Electro Pop", image: "/artists/future-rupture.svg", link: "aldkjalksjd", type: "big", imageClassName: "h-[100%] w-3/4" },
  { name: "Supa Mana", hours: "Ven | 19:00", musicType: "Reggae", image: "/artists/supa-mana.svg", link: "aldkjalksjd", type: "small", imageClassName: "h-[100%] w-1/2" },
  { name: "Jive Me", hours: "Ven | 21:00", musicType: "Electro Pop", image: "/artists/jive-me.svg", link: "aldkjalksjd", type: "big", imageClassName: "h-[100%] w-3/4" },
  { name: "Supa Mana", hours: "Ven | 19:00", musicType: "Reggae", image: "/artists/supa-mana.svg", link: "aldkjalksjd", type: "small", imageClassName: "h-[100%] w-1/2" },
  { name: "Supa Mana", hours: "Ven | 19:00", musicType: "Reggae", image: "/artists/supa-mana.svg", link: "aldkjalksjd", type: "small", imageClassName: "h-[100%] w-1/2" },
  { name: "Supa Mana", hours: "Ven | 19:00", musicType: "Reggae", image: "/artists/supa-mana.svg", link: "aldkjalksjd", type: "big" },
  { name: "Supa Mana", hours: "Ven | 19:00", musicType: "Reggae", image: "/artists/supa-mana.svg", link: "aldkjalksjd", type: "small", imageClassName: "h-[100%] w-1/2" },
  { name: "Supa Mana", hours: "Ven | 19:00", musicType: "Reggae", image: "/artists/supa-mana.svg", link: "aldkjalksjd", type: "small", imageClassName: "h-[100%] w-1/2" },
]