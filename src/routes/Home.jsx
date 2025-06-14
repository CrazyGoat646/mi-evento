import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Desafío Boot Camp Vigo",
    image: "/images/Bootcamp.png"
  },
  {
    id: 2,
    title: "Gastro Movida",
    image: "/images/Gastro.png"
  },
  {
    id: 3,
    title: "LA21 Media Maratón de Vigo",
    image: "/images/Maraton.png"
  }
];

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Nuestros eventos</h1>
      <div className="space-y-4">
        {events.map(event => (
          <Link
            key={event.id}
            to={`/evento/${event.id}`}
            className="block bg-white rounded overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-4 text-center font-semibold">{event.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

