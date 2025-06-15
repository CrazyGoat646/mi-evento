import { Link } from "react-router-dom";
import Header from "../components/Header";

const events = [
  {
    id: 1,
    title: "Entrega de premios Innovatech 2025",
    image: "/images/premios.png"
  },
];

export default function Home() {
  return (
    <div className="p-4">
      <Header />
      <h1 className="text-2xl font-bold mb-4 text-center">Nuestros eventos</h1>
      <div className="space-y-4">
        {events.map(event => (
          <Link
            key={event.id}
            to={`/evento/${event.id}`}
            className="block bg-white rounded overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full max-h-80 object-contain bg-white"
            />
            <div className="p-4 text-center font-semibold">{event.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

