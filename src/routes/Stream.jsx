import Header from "../components/Header";

function getColor(user) {
  switch(user) {
    case "Guada": return "#EF4444"; // rojo
    case "Brais": return "#3B82F6"; // azul
    case "Angel": return "#10B981"; // verde
    default: return "#000000";
  }
}

export default function Stream() {
  const chatMessages = [
    { user: "Guada", message: "Esta pantalla aínda está en versión beta!" },
    { user: "Brais", message: "Cando estará dispoñible a transmisión en directo?" },
    { user: "Angel", message: "Estou probándoo, ten moi boa pinta!" },
  ];

  return (
    <div className="flex flex-col h-screen">
      <Header />

      <div className="relative w-full max-w-4xl mx-auto h-64 rounded overflow-hidden">
        <img
          src="/images/equipo.jpg"
          alt="Evento"
          className="w-full h-full object-cover"
        />
        <button
          className="absolute inset-0 flex items-center justify-center"
          onClick={() => {}}
          aria-label="Play"
        >
          <div className="bg-black bg-opacity-50 rounded-full p-4">
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6 4l10 6-10 6V4z" />
            </svg>
          </div>
        </button>
      </div>

      <div className="p-4 overflow-y-auto max-h-72 flex-1">
        {chatMessages.map((msg, index) => (
          <p key={index} className="mb-2 flex items-center">
            <span
              className="mr-2 inline-block rounded-full"
              style={{ width: 12, height: 12, backgroundColor: getColor(msg.user) }}
            />
            <span
              className="font-semibold mr-1"
              style={{ color: getColor(msg.user) }}
            >
              {msg.user}:
            </span>
            <span>{msg.message}</span>
          </p>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t py-2 flex justify-center z-50">
        <img
          src="/images/teclado.png"
          alt="Teclado"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}



