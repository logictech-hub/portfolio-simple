import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shyamalendu Nayak - Fullstack Developer",
  description: "Portfolio of Shyamalendu Nayak, a Fullstack Software Engineer specializing in React, Next.js, and modern web technologies.",
  openGraph: {
    title: "Shyamalendu Nayak - Fullstack Developer",
    description: "Explore the portfolio of Shyamalendu Nayak, showcasing projects, skills, and experience in Fullstack development using modern web technologies.",
    url: "https://shyam.dev",
    images: [
      {
        url: "metaDataImage.png",
        width: 800,
        height: 600,
        alt: "Portfolio Preview of Shyamalendu Nayak",
      },
    ],
    siteName: "Shyamalendu Nayak's Portfolio",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Portfolio Preview of Shyamalendu Nayak",
  //   description: "Shyamalendu Nayak's Portfolio",
  //   images: ["https://yourwebsite.com/path-to-image.jpg"], // Replace with your image URL
  //   site: "@your_twitter_handle", // Optional Twitter handle
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-gray-950 relative pt-28 sm:pt-36`}>
        <div className="bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[15rem] 2xl:left-[5rem]"></div>
        <ActiveSectionContextProvider>
          <Header />
          {/* {children} */}
          <div className="flex justify-center items-center pt-[200px]">Coming soon...</div>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
