"use client"

import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import "./calendarCustom.css"
import { useState } from "react"

type Value = Date | null

export default function Reservar() {
  const [fecha, setFecha] = useState<Value>(new Date())

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-pink-500 text-white flex flex-col items-center py-10 px-4">
      {/* Texto */}
      <div className="text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Elige la fecha de tu turno y vive la experiencia{" "}
          <span className="text-pink-500">Bronx</span>
        </h2>
        <p className="text-gray-300">Reserva fácil y rápido tu próximo corte.</p>
      </div>

      {/* Contenedor principal */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-10 mt-12 w-full max-w-5xl">
        {/* Calendario */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
          <Calendar
            value={fecha}
            onChange={(value) => setFecha(value as Date)}
            tileDisabled={({ date }) =>
              date < new Date(new Date().setHours(0, 0, 0, 0))
            }
          />
        </div>

        {/* Horarios */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg flex-1">
          <h3 className="text-xl font-semibold mb-4">Horarios disponibles</h3>
          <div className="grid grid-cols-2 gap-3">
            {["09:00", "10:00", "11:00", "12:00", "16:00", "17:00"].map(
              (hora) => (
                <button
                  key={hora}
                  className="px-4 py-2 rounded-lg bg-pink-600 hover:bg-pink-700 transition-colors"
                >
                  {hora}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
