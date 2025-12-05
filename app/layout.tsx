import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "HyBridger CMS – Designer + Dev + AI",
  description: "A modern headless CMS prototype built with Next.js & Contentful.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white dark:bg-black">
        <section className="min-h-screen max-w-6xl mx-auto px-5">
          <main>{children}</main>
        </section>
      </body>
    </html>
  );
}
