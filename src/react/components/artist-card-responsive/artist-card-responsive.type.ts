export type ArtistCardResponsiveProps = {
  artist: {
    name: string;
    musicType: string;
    hours: string;
    image: string;
    link: string;
  },
  type: "small" | "big";
  containerClassName?: string;
  imageClassName?: string;
  comingSoon: boolean;
};