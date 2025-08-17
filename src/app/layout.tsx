import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arena Gym - Gimnasio Exclusivo en Tampico | Entrenamiento Personalizado",
  description: "Arena Gym es tu gimnasio exclusivo en Tampico. Entrenamiento personalizado, asesoría nutricional profesional y ambiente sin aglomeraciones. ¡Transforma tu vida hoy!",
  keywords: "gimnasio tampico, entrenamiento personalizado, fitness tampico, gym exclusivo, nutrición deportiva, arena gym",
  authors: [{ name: "Arena Gym" }],
  openGraph: {
    title: "Arena Gym - Gimnasio Exclusivo en Tampico",
    description: "Entrenamiento personalizado en un ambiente exclusivo. Transforma tu vida con nuestros especialistas en fitness y nutrición.",
    url: "https://arenagym.com",
    siteName: "Arena Gym",
    type: "website",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arena Gym - Gimnasio Exclusivo en Tampico",
    description: "Entrenamiento personalizado en un ambiente exclusivo. Transforma tu vida con nuestros especialistas en fitness y nutrición.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
