"use client"
import Link from "next/link";
import { useState } from "react";

export function NavBar() {
    const [open , setOpen] = useState(false)
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-gradient-to-b from-stone-900 to-pink-700 shadow-lg">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        
        {/* Logo */}
        <div className="">
          <Link href={"/"} className="flex items-center gap-2">
            <img src="./logo-bronx.jpg" alt="Logo" className="w-10 h-10 object-contain" />
            <p className="text-xl font-bold tracking-wide hover:text-pink-600">Bronx</p>
          </Link>
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-xl font-medium">
          <Link href="/nosotros" className="hover:text-pink-600 hover:scale-125 transition ease-in-out duration-300">
            Nosotros
          </Link>
          <Link href="/productos" className="hover:text-pink-600 hover:scale-125 transition ease-in-out duration-300">
            Productos
          </Link>
        </div>

        {/* Botón CTA */}
        <div className="hidden md:block">
          <button className="px-5 py-2 rounded-full bg-pink-600 hover:bg-pink-500 transition-colors cursor-pointer shadow-md">
            Reservar Cita
          </button>
        </div>

        {/* Menu Hamburguesa Movile */}
        <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>///</button>
        </div>
      </nav>

      {/* Menú Mobile */}
      {open && (
        <div className="md:hidden bg-stone-900/95 backdrop-blur-md text-white px-6 py-4 flex flex-col gap-4 shadow-lg items-center">
          <Link
            href="/nosotros"
            className="hover:text-pink-950 hover:bg-pink-500 transition-colors p-2 text-center bg-pink-950 rounded-2xl w-80"
            onClick={() => setOpen(false)}
          >
            Nosotros
          </Link>
          <Link
            href="/productos"
            className="hover:text-pink-950 hover:bg-pink-500 transition p-2 text-center bg-pink-950 rounded-2xl w-80"
            onClick={() => setOpen(false)}
          >
            Productos
          </Link>
          <button className="mt-2 px-5 py-2 rounded-full bg-pink-600 hover:bg-pink-500 transition-colors shadow-md w-160">
            Reservar Cita
          </button>
        </div>
      )}
    </header>
  );
}
