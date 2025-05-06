import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Tecnophone - Fundas personalizadas",
  description: "Descubre las mejores fundas personalizadas para tu iphone",
  keywords: "tecnophone, fundas, personalizadas, iphone"
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
