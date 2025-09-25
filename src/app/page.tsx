import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full relative bg-gradient-to-br from-stone-950 via-stone-900 to-stone-800 overflow-hidden">
      
      {/* Fondo decorativo con forma diagonal */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-pink-900/30 to-stone-900/20 rotate-[-12deg] origin-top-left"></div>

      {/* Contenedor principal */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-12 gap-10">

        {/* Texto */}
        <div className="flex flex-col text-center md:text-left gap-6 md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Bienvenido a <span className="text-pink-500">Bronx</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-lg">
            Tu barbería premium en la ciudad, donde estilo y cuidado personal se encuentran.
          </p>
          <Link href='/reservar' className="mt-4 px-8 py-3 rounded-full bg-pink-600 hover:bg-pink-500 transition-all shadow-lg text-lg font-medium self-center md:self-start">
            Reservar Cita
          </Link>
        </div>

        {/* Imagen decorativa */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 bg-pink-600 rounded-full shadow-2xl animate-pulse"></div>
        </div>

      </div>
    </div>
  );
}
