import Header from ".../components/Header";
import streamImage from "/assets/stream.jpg";

export default function Stream() {
  const chatMessages = [
    { user: "LunaBeta", message: "¡Esta pantalla aún está en fase beta!" },
    { user: "TestUser_22", message: "¿Cuándo estará disponible el streaming?" },
    { user: "JaviDev", message: "Estoy probando, ¡va quedando genial!" }
  ];

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1">
        <img src={streamImage} alt="Evento" className="w-full h-64 object-cover" />
        <div className="p-4 overflow-y-auto max-h-72">
          {chatMessages.map((msg, index) => (
            <p key={index} className="mb-2">
              <span className="font-semibold">{msg.user}:</span> {msg.message}
            </p>
          ))}
        </div>
      </div>
      <div className="p-4 border-t flex items-center">
        <input
          type="text"
          disabled
          placeholder="Chat no disponible - fase beta"
          className="flex-1 bg-gray-200 p-2 rounded"
        />
      </div>
    </div>
  );
}

