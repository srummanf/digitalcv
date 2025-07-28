import "./globals.css";
import { Inter, Work_Sans, Plus_Jakarta_Sans, Manrope } from "next/font/google";
import { generalData } from "@/data/general";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });
const workSans = Work_Sans({ subsets: ["latin"] });
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${generalData.name} - ${generalData.jobTitle}`,
  description: generalData.about,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "",
    siteName: `${generalData.name} - ${generalData.jobTitle}`,
    title: `${generalData.name} - ${generalData.jobTitle}`,
    description: generalData.about,
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: `${generalData.name} - ${generalData.jobTitle}`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} dark:bg-[#222222]`}
      >
        {children}
      </body>
    </html>
  );
}
