import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import { Toaster } from "react-hot-toast";
import { InspWrapper } from "@/components/InspectLet/InspectLetWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rivaldo Sabino - Software Engineer",
  description:
    "Portfolio of Rivaldo Sabino, a Fullstack Software Engineer specializing in React, Next.js, and modern web technologies.",
  openGraph: {
    title: "Rivaldo Sabino - Software Engineer",
    description:
      "Explore the portfolio of Rivaldo Sabino, showcasing projects, skills, and experience in Fullstack development using modern web technologies.",
    url: "https://rivaldo-sabino.vercel.app/",
    images: [
      {
        url: "metaDataImage.png",
        width: 800,
        height: 600,
        alt: "Portfolio Preview of Rivaldo Sabino",
      },
    ],
    siteName: "Rivaldo Sabino's Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-900 text-gray-950 relative pt-28 sm:pt-36`}
      >
        <div className="md:bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="md:bg-[#dbd7fb] absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[15rem] 2xl:left-[5rem]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <InspWrapper />
            {/* <ThemeSwitch /> */}
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
