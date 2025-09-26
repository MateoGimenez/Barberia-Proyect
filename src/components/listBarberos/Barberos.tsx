"use client"
import { useEffect, useState } from "react"
import { getBarberos } from "@/service/Barberos"

type Barbero = {
  id: number
  nombre: string
  especialidad: string
  telefono: string
}

export default function ListaBarberos() {
  const [barberos, setBarberos] = useState<Barbero[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBarberos()
      console.log(data)
      setBarberos(data)
    }
    fetchData()
  }, [])

  return (
    <div className="grid grid-cols-2 gap-6 p-4">
      {barberos.map((b) => (
        <div key={b.id} className="rounded-xl shadow-md p-4 bg-white">
          <h3 className="text-lg font-bold">{b.nombre}</h3>
          <p className="text-gray-600">{b.especialidad}</p>
          <p className="text-gray-500">📞 {b.telefono}</p>
        </div>
      ))}
    </div>
  )
}
