// src/app/layout.tsx
import { NavBar } from "@/components/navBar";
import Footer from "@/components/footer";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-stone-950 text-white`}>
        {/* Navbar fijo */}
        <NavBar />

        {/* Contenido con espacio arriba */}
        <main className="pt-20">{children}</main>

        <Footer/>
      </body>
    </html>
  );
}
