import { useParams, Link } from "react-router-dom";

export default function EventDetail() {
  const { id } = useParams();

  return (
    <div className="p-4">
      <img
        src="/images/Bootcamp.png"
        className="w-full h-52 object-cover rounded mb-4"
        alt="Desafío Boot Camp"
      />
      <h1 className="text-2xl font-bold mb-2">Desafío Boot Camp</h1>
      <p className="mb-4 text-gray-700">
        Es mucho más que una carrera de obstáculos, es un evento deportivo con actividades para todos. Se celebra en Vigo desde 2015...
      </p>

      <div className="flex flex-wrap gap-4 justify-center mb-4">
        <img
          src="/images/reglamento.png"
          alt="Reglamento"
          className="w-32 h-auto cursor-default"
        />
        <img
          src="/images/lugar.png"
          alt="Lugar"
          className="w-32 h-auto cursor-default"
        />
        <Link to="/">
          <img
            src="/images/eventos.png"
            alt="Eventos"
            className="w-32 h-auto hover:scale-105 transition-transform"
          />
        </Link>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link to="encuesta">
          <img
            src="/images/encuesta.png"
            alt="Encuesta"
            className="w-32 h-auto hover:scale-105 transition-transform"
          />
        </Link>
        <Link to="stream">
          <img
            src="/images/chat.png"
            alt="Streaming"
            className="w-32 h-auto hover:scale-105 transition-transform"
          />
        </Link>
      </div>
    </div>
  );
}
