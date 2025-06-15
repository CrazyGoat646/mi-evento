import Header from "../components/Header";
import equipoImage from "../assets/equipo.jpg";
import tecladoImage from "/images/teclado.png";

export default function Stream() {
  const chatMessages = [
    { user: "Guada", message: "¡Esta pantalla aún está en fase beta!", color: "text-pink-500", dot: "bg-pink-500" },
    { user: "Brais", message: "¿Cuándo estará disponible el streaming?", color: "text-green-500", dot: "bg-green-500" },
    { user: "Angel", message: "Estoy probando, ¡va quedando genial!", color: "text-blue-500", dot: "bg-blue-500" }
  ];

  return (
    <div className="flex flex-col h-screen relative">
      <Header />

      {/* Imagen con botón play encima */}
      <div className="relative w-full max-h-64">
        <img src={equipoImage} alt="Evento" className="w-full max-h-64 object-contain mx-auto" />
        <button className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black bg-opacity-50 rounded-full p-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      </div>

      {/* Chat con nombres en colores y punto */}
      <div className="p-4 overflow-y-auto flex-1 space-y-2">
        {chatMessages.map((msg, index) => (
          <div key={index} className="bg-gray-100 p-2 rounded shadow-sm flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${msg.dot}`}></span>
            <span className={`font-semibold ${msg.color}`}>{msg.user}:</span>
            <span>{msg.message}</span>
          </div>
        ))}
      </div>

      {/* Imagen teclado como barra fija */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t py-2 flex justify-center z-50">
        <img
          src={tecladoImage}
          alt="Teclado"
          className="w-12 h-auto hover:scale-105 transition-transform"
        />
      </div>
    </div>
  );
}


