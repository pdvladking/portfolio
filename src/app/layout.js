import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientWrapper from "./ClientWrapper"; // new file you'll create

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Raja | UI/UX Designer & Full-Stack Developer",
  description:
    "From ashes to algorithms—Raja builds immersive interfaces, clean layouts, and purposeful code. Explore projects, skills, and design philosophy.",
  keywords: [
    "Raja",
    "UI/UX Designer",
    "Full-Stack Developer",
    "React",
    "Tailwind",
    "Next.js",
    "Portfolio",
    "MERN Stack",
  ],
  authors: [{ name: "Raja" }],
  creator: "Raja",
  themeColor: "#111827",
  openGraph: {
    title: "Raja | UI/UX Designer & Full-Stack Developer",
    description:
      "Explore Raja's portfolio — immersive interfaces, clean layouts, and purposeful code.",
    url: "https://yourdomain.com",
    siteName: "Raja Portfolio",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Raja Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raja | UI/UX Designer & Full-Stack Developer",
    description:
      "Explore Raja's portfolio — immersive interfaces, clean layouts, and purposeful code.",
    images: ["https://yourdomain.com/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
