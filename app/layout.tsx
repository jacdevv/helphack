import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Image from "next/image";
import Link from "next/link";

const inter = Rubik({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HelpHack",
  description: "Empowering the next generation of hackers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <nav className="flex justify-between py-4 px-8 fixed w-full top-0 backdrop-blur-xl z-20">
            <div>
              <Link href="/" className="flex gap-2 items-center">
                <Image src="/favicon.ico" width="50" height="50" alt="logo" />
              </Link>
            </div>
            <div className="flex gap-5 items-center">
              <Link href="/#hackathon">
                <p>hackathons</p>
              </Link>
              <Link href="/#project">
                <p>projects</p>
              </Link>
            </div>
          </nav>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
