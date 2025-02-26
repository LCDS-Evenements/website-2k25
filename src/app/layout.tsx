import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
import { cn } from "@/utils/cn";
import { Navbar } from "@/react/components/navbar/navbar";
import { Footer } from "@/react/components/footer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
});

const data = {
  title: "Les CuicuiteDays | 13 & 14 Juin 2025",
  description: [
    "Les CuicuiteDays revienne cette année pour une nouvelle édition qui aura lieu les 13 et 14 juin 2025. 📅",
    "Durant ces deux jours vous pourrez retrouver une 10aime d'artistes qui se produiront sur la scène du festival. 🎤"
  ].join(" "),
  siteName: "Les CuicuiteDays | 13 & 14 Juin 2025"
};

export const metadata: Metadata = {
  metadataBase: new URL("https://cuicuitedays.fr/"),

  title: {
    template: "%s - " + data.title,
    default: data.title,
    absolute: data.title
  },
  description: data.description,
  applicationName: data.siteName,

  keywords: ["festival", "musique", "concert", "cuicuitedays", "amis", "food trucks", "billetterie", "bressuire", "noirlieu", "deux-sèvres", "nouvelle-aquitaine"],

  openGraph: {
    title: {
      template: "%s - " + data.title,
      default: data.title,
      absolute: data.title
    },
    description: data.description,
    siteName: data.siteName,
    url: "https://cuicuitedays.fr/",
    type: "website",
    images: "https://cuicuitedays.fr/icon.png"
  },

  twitter: {
    title: {
      template: "%s - " + data.title,
      default: data.title,
      absolute: data.title
    },
    description: data.description,
    site: data.siteName,
    images: "https://cuicuitedays.fr/icon.png"
  }
};

export const viewport: Viewport = {
  themeColor: "#084f5c"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={cn("antialiased", poppins.className, "w-screen min-h-screen bg-layout bg-cover bg-no-repeat")}>
        <main className="pt-6 px-4 md:px-28 lg:px-36 xl:px-52">
          <Navbar />

          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
