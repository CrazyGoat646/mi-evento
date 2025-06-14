import { useParams, Link } from "react-router-dom";
import Header from "../components/Header"; // Asegúrate de que esta ruta sea correcta

export default function EventDetail() {
  const { id } = useParams();

  return (
    <div className="p-4">
      <Header /> {/* Agregamos el Header */}
      <img src="/images/Boot2.png" className="w-full h-52 object-cover rounded mb-4" alt="" />
      <h1 className="text-2xl font-bold mb-2">Desafío Boot Camp</h1>
      <p className="mb-4 text-gray-700">
        Desafío Boot Camp es mucho más que una carrera de obstáculos, es un evento deportivo rodeado de actividades y propuestas que tienen a la Ciudad de Vigo como centro, alrededor del cual todo gira.

Desafío Boot Camp es uno de los motores de turismo deportivo más potentes de las Rías Baixas en general de Vigo en particular.

Es un evento que se celebra en Vigo desde el año 2015. En las pasadas 7 ediciones la organización (Pepita-Tery Producciones SL – Diesemm) organizamos una carrera de 6-7 km con 30-35 obstáculos para que fuesen superados por todos los participantes adultos y un recorrido específico de 1 km y 15 obstáculos para los más pequeños.

El objetivo es atraer a todos los públicos: Elite-Popular y Kid
      </p>
       <div className="space-x-2 mb-4">
        <button className="bg-gray-400 text-white px-4 py-2 rounded cursor-default">
          Reglamento
        </button>
        <button className="bg-gray-400 text-white px-4 py-2 rounded cursor-default">
          Lugar
        </button>
        <Link
          to="/"
          className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
        >
          Eventos
        </Link>
      </div>
      <div className="space-x-2">
        <Link
          to="encuesta"
          className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
        >
          Encuesta
        </Link>
        <Link
          to="stream"
          className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
        >
          Streaming
        </Link>
      </div>
    </div>
  );
}
