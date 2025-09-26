import ListaBarberos from "@/components/listBarberos/Barberos";
export default function Nosotros() {
  return (
    <section className="h-screen flex justify-center items-center bg-gradient-to-br from-stone-950 via-stone-900 to-stone-800 text-white px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Columna Izquierda - Barbero */}
        <div className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform">
          <h2 className="text-2xl font-bold mb-4 text-pink-500">Nuestros Barberos</h2>
          <img
            src="/barbero.jpg"
            alt="Barbero trabajando"
            className="w-40 h-40 rounded-full object-cover border-4 border-pink-600 shadow-md mb-4"
          />
          <p className="text-gray-300 text-sm">
            Profesionales con experiencia dedicados a tu estilo y cuidado personal.
          </p>
        </div>

        {/* Columna Derecha - Descripción */}
        <div className="bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Sobre Nosotros</h1>
          <p className="text-gray-300 leading-relaxed">
            En <span className="text-pink-500 font-semibold">Bronx Barbería</span>{" "}
            creemos que cada corte de pelo y cada detalle importa. Nuestro equipo
            combina técnicas clásicas con un estilo moderno para ofrecerte un
            servicio único. Aquí no solo cuidamos tu look, también buscamos que
            disfrutes de una experiencia premium en cada visita.
          </p>
        </div>
      </div>
    </section>
  );
}
