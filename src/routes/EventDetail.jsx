import { useParams, Link } from "react-router-dom";
import Header from ".../components/Header";

export default function EventDetail() {
  const { id } = useParams();

  return (
    <div className="p-4">
      <img src="/images/Bootcamp.png" className="w-full h-52 object-cover rounded mb-4" alt="" />
      <h1 className="text-2xl font-bold mb-2">Desafío Boot Camp</h1>
      <p className="mb-4 text-gray-700">
        Es mucho más que una carrera de obstáculos, es un evento deportivo con actividades para todos. Se celebra en Vigo desde 2015...
      </p>
      <div className="space-x-2">
        <Link to="encuesta" className="bg-pink-600 text-white px-4 py-2 rounded">Encuesta</Link>
        <Link to="stream" className="bg-gray-800 text-white px-4 py-2 rounded">Streaming</Link>
      </div>
    </div>
  );
}

