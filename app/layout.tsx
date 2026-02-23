import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "@/components/providers";

const quicksand = localFont({
  src: './fonts/Quicksand-Regular.ttf',
})

export const metadata: Metadata = {
  title: "Gestion commerciale gratuite",
  description: "La plateforme de gestion commerciale gratuite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${quicksand.className} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
