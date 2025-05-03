import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Landing Tecno - Tu Solución Digital",
  description: "Descubre las mejores soluciones tecnológicas para tu negocio",
  keywords: "tecnología, soluciones digitales, innovación",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={` antialiased`}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
