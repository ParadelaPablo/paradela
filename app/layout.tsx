import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://paradela.com"),
  alternates: {
    canonical: "https://paradela.com",
  },
  title: "Pablo Paradela - Full Stack Developer",
  description:
    "Pablo Paradela is a Full Stack Java Developer with expertise in frontend and backend development.",
  keywords:
    "Pablo Paradela, Full Stack Developer, Java, Spring Boot, PostgreSQL, RESTful APIs, React, TypeScript, HTML, CSS, Frontend Development, Backend Development, UI/UX Design, Agile Development, Responsive Design, Software Engineering, Technology, Innovation, Team Collaboration, Testing, Debugging, Scalable Applications",
  openGraph: {
    locale: "en_US",
    siteName: "Pablo Paradela",
    type: "website",
    title: "Pablo Paradela",
    description:
      "Pablo Paradela is a Full Stack Java Developer with expertise in frontend and backend development.",
    url: "https://paradela.com",
    images: [
      {
        url: "./og-large-meik-2.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pablo Paradela",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
