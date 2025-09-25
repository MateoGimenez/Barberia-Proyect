"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendarCustom.css"; 

export default function Reservar() {
  const [date, setDate] = useState<Date | null>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  

  const horarios = ["10:30", "11:00", "11:30", "12:00", "16:00", "16:30"];

  return (
    <section className="min-h-screen flex justify-center items-center bg-gradient-to-br from-stone-900 via-stone-950 to-black px-6 py-12">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
        
        {/* Columna Izquierda: calendario */}
        <div className="w-full md:w-1/2 p-6 border-b md:border-b-0 md:border-r border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Selecciona una fecha
          </h2>
            <Calendar
            onChange={setDate}
            value={date}
            className="w-full rounded-lg"
            tileDisabled={({ date }: { date: Date }) =>
                date < new Date().setHours(0, 0, 0, 0)
            }
            />

          <p className="text-sm text-gray-500 mt-4">
            Zona horaria: <span className="font-medium">Buenos Aires (GMT-3)</span>
          </p>
        </div>

        {/* Columna Derecha: horarios */}
        <div className="w-full md:w-1/2 p-6 flex flex-col">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Selecciona un horario
          </h2>
          <div className="flex flex-col gap-3">
            {horarios.map((hora) => (
              <button
                key={hora}
                onClick={() => setSelectedTime(hora)}
                className={`px-4 py-2 rounded-lg border ${
                  selectedTime === hora
                    ? "bg-pink-600 text-white border-pink-600"
                    : "border-gray-300 hover:bg-pink-600 hover:text-white"
                } transition`}
              >
                {hora}
              </button>
            ))}
          </div>

          {/* CTA reservar */}
          <button className="mt-8 w-full py-3 rounded-lg bg-pink-600 hover:bg-pink-500 transition text-white font-medium shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!date || !selectedTime}
          >
            Confirmar reserva
          </button>
        </div>
      </div>
    </section>
  );
}
