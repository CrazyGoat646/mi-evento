import { Link } from "react-router-dom";

export default function EventDetail() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Desafío Boot Camp</h1>
      <p className="mb-4">Evento deportivo con obstáculos en Vigo.</p>
      <Link to="encuesta" className="bg-blue-500 text-white px-4 py-2 rounded">Enquisa</Link>
      <Link to="stream" className="ml-2 bg-gray-700 text-white px-4 py-2 rounded">Streaming</Link>
    </div>
  );
}
