import { useParams, Link } from "react-router-dom";
import Header from "../components/Header"; // Asegúrate de que esta ruta sea correcta

export default function EventDetail() {
  const { id } = useParams();

  return (
    <div className="p-4">
      <Header /> {/* Agregamos el Header */}
      <img src="/images/premios.png" className="w-full h-52 object-cover rounded mb-4" alt="" />
      <h1 className="text-2xl font-bold mb-2">Desafío Boot Camp</h1>
      <p className="mb-4 text-gray-700">
       Ubicación: CIFP Universidade Laboral (A Coruña)
Descrición: A entrega de premios do programa InnovaTech 2024/2025 reune os proxectos máis innovadores do alumnado de Formación Profesional de toda Galicia. Será unha xornada para compartir ilusión, creatividade e moita tecnoloxía, tras meses de traballo e aprendizaxe.
Dende o IES Lois Peña Novo desexamos moita sorte a tódolos equipos participantes! Que siga a innovación, a colaboración e o espírito emprendedor!
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
