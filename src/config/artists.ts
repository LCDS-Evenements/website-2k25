type Artist = {
  name: string;
  musicType: string;
  hours: string;
  image: string;
  link: string;
  type: "small" | "big";
  imageClassName?: string;
  containerClassName?: string;
  comingSoon: boolean;
}

export const all: Artist[] = [
  { name: "Boris & Moris", hours: "Ven | 01:30", musicType: "Electro", image: "/artists/boris-moris.svg", link: "https://www.youtube.com/@BorisMoris", type: "big", comingSoon: false },
  { name: "Heads Up", hours: "Ven | 21:00", musicType: "Punk Rock", image: "/artists/heads-up.svg", link: "https://www.youtube.com/@headsup3544", type: "small", comingSoon: false },
  { name: "Supa Mana", hours: "Ven | 22:30", musicType: "Reggae Dub", image: "/artists/supa-mana.svg", link: "https://www.youtube.com/channel/UCNdBVna996MaWDoSAJw7xaQ", type: "small", imageClassName: "h-[65%] w-[70%]", comingSoon: false },
  { name: "Soom T", hours: "Sam | 22:00", musicType: "Hip Hop / Reggae", image: "/artists/soom-t.svg", link: "https://www.youtube.com/@SoomTOfficial", type: "big", comingSoon: false },
  { name: "Jive Me", hours: "Sam | 23:30", musicType: "Electro / Pop", image: "/artists/jive-me.svg", link: "https://www.youtube.com/@JiveMe", type: "big", comingSoon: false },
  { name: "Humain", hours: "Sam | 01:30", musicType: "Electro", image: "/artists/humain.svg", link: "https://open.spotify.com/intl-fr/artist/1MN6t4NUBQaUCWnOElk4op", type: "small", imageClassName: "h-[100%] w-3/4", comingSoon: false },
  { name: "Future Rupture", hours: "Sam | 20:30", musicType: "Electro Pop", image: "/artists/future-rupture.svg", link: "aldkjalksjd", type: "big", comingSoon: true },
  { name: "Supa Mana", hours: "Ven | 19:00", musicType: "Reggae", image: "/artists/supa-mana.svg", link: "aldkjalksjd", type: "small", imageClassName: "h-[100%] w-1/2", comingSoon: true },
  { name: "Supa Mana", hours: "Ven | 19:00", musicType: "Reggae", image: "/artists/supa-mana.svg", link: "aldkjalksjd", type: "small", imageClassName: "h-[100%] w-1/2", comingSoon: true },
  { name: "Supa Mana", hours: "Ven | 19:00", musicType: "Reggae", image: "/artists/supa-mana.svg", link: "aldkjalksjd", type: "big", comingSoon: true },
  { name: "Supa Mana", hours: "Ven | 19:00", musicType: "Reggae", image: "/artists/supa-mana.svg", link: "aldkjalksjd", type: "small", imageClassName: "h-[100%] w-1/2", comingSoon: true },
  { name: "Supa Mana", hours: "Ven | 19:00", musicType: "Reggae", image: "/artists/supa-mana.svg", link: "aldkjalksjd", type: "small", imageClassName: "h-[100%] w-1/2", comingSoon: true },
]

export const allResponsive: Artist[] = [
  { name: "Boris & Moris", hours: "Ven | 01:30", musicType: "Electro", image: "/artists/boris-moris.svg", link: "https://www.youtube.com/@BorisMoris", type: "big", imageClassName: "h-[100%] w-[60%]", comingSoon: false },
  { name: "Heads Up", hours: "Ven | 21:00", musicType: "Punk Rock", image: "/artists/heads-up.svg", link: "https://www.youtube.com/@headsup3544", type: "small", comingSoon: false },
  { name: "Supa Mana", hours: "Ven | 22:30", musicType: "Reggae Dub", image: "/artists/supa-mana.svg", link: "https://www.youtube.com/channel/UCNdBVna996MaWDoSAJw7xaQ", type: "small", imageClassName: "h-[100%] w-[60%]", comingSoon: false },
  { name: "Soom T", hours: "Sam | 22:00", musicType: "Hip Hop / Reggae", image: "/artists/soom-t.svg", link: "https://www.youtube.com/@SoomTOfficial", type: "big", imageClassName: "h-[100%] w-full", comingSoon: false },
  { name: "Jive Me", hours: "Sam | 23:30", musicType: "Electro / Pop", image: "/artists/jive-me.svg", link: "https://www.youtube.com/@JiveMe", type: "big", imageClassName: "h-[100%] w-3/4", comingSoon: false },
  { name: "Humain", hours: "Sam | 01:30", musicType: "Electro", image: "/artists/humain.svg", link: "https://open.spotify.com/intl-fr/artist/1MN6t4NUBQaUCWnOElk4op", type: "small", imageClassName: "h-[100%] w-[85%]", comingSoon: false },
  { name: "Future Rupture", hours: "Sam | 20:30", musicType: "Electro Pop", image: "/artists/future-rupture.svg", link: "aldkjalksjd", type: "big", imageClassName: "h-[100%] w-3/4", comingSoon: true },
  { name: "Supa Mana", hours: "Ven | 19:00", musicType: "Reggae", image: "/artists/supa-mana.svg", link: "aldkjalksjd", type: "small", imageClassName: "h-[100%] w-1/2", comingSoon: true },
  { name: "Supa Mana", hours: "Ven | 19:00", musicType: "Reggae", image: "/artists/supa-mana.svg", link: "aldkjalksjd", type: "small", imageClassName: "h-[100%] w-1/2", comingSoon: true },
  { name: "Supa Mana", hours: "Ven | 19:00", musicType: "Reggae", image: "/artists/supa-mana.svg", link: "aldkjalksjd", type: "big", comingSoon: true },
  { name: "Supa Mana", hours: "Ven | 19:00", musicType: "Reggae", image: "/artists/supa-mana.svg", link: "aldkjalksjd", type: "small", imageClassName: "h-[100%] w-1/2", comingSoon: true },
  { name: "Supa Mana", hours: "Ven | 19:00", musicType: "Reggae", image: "/artists/supa-mana.svg", link: "aldkjalksjd", type: "small", imageClassName: "h-[100%] w-1/2", comingSoon: true },
]