import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Selecciona un Evento</h1>
      <Link to="/evento/1" className="block p-4 bg-white rounded shadow">
        Evento 1
      </Link>
    </div>
  );
}
