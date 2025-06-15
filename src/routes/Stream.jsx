import Header from "../components/Header";

export default function Stream() {
  const chatMessages = [
    { user: "Guada", color: "text-red-500", message: "¡Esta pantalla aún está en fase beta!" },
    { user: "Brais", color: "text-blue-500", message: "¿Cuándo estará disponible el streaming?" },
    { user: "Angel", color: "text-green-500", message: "Estoy probando, ¡va quedando genial!" },
  ];

  return (
    <div className="flex flex-col h-screen">
      <Header />

      <div className="relative max-h-64 mx-auto w-full">
        <img
          src="/images/equipo.png"
          alt="Evento"
          className="w-full h-64 object-contain"
        />
        <button
          className="absolute inset-0 flex items-center justify-center"
          onClick={() => {}}
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
            <span className={`mr-2 w-3 h-3 rounded-full ${msg.color} inline-block`} />
            <span className={`font-semibold mr-1 ${msg.color}`}>{msg.user}:</span>
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


