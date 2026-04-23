import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/language-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export const metadata: Metadata = {
  metadataBase: new URL("https://thriveskilltech.com"),
  title: {
    default: "Thrive Skill Tech | Content to Career",
    template: "%s | Thrive Skill Tech"
  },
  description:
    "Practical ed-tech platform for Digital Marketing, SEO, Content Creation, AI Tools, Video Editing, and Social Media Marketing.",
  keywords: [
    "Thrive Skill Tech",
    "Digital Marketing Course",
    "SEO Course",
    "Content Creation",
    "AI Tools",
    "Social Media Marketing",
    "EdTech India"
  ],
  openGraph: {
    title: "Thrive Skill Tech",
    description: "Turn Skills Into Income",
    siteName: "Thrive Skill Tech",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
        </LanguageProvider>
      </body>
    </html>
  );
}
