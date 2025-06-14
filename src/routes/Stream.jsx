export default function Stream() {
  return (
    <div className="h-screen flex flex-col">
      <div className="relative">
        <img src="/images/stream.jpg" alt="stream" className="w-full h-64 object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white p-2 rounded-full">
            <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4l12 6-12 6V4z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-white p-4 overflow-y-auto">
        <div className="space-y-2 text-sm">
          <p><span className="text-pink-600 font-bold">Carlitos66:</span> Que buen evento</p>
          <p><span className="text-yellow-600 font-bold">Monica970:</span> Increíble</p>
          <p><span className="text-black font-bold">Manuuuuv:</span> Magnífico evento</p>
          <p><span className="text-green-700 font-bold">LunaViajera92:</span> ¿A qué hora empieza?</p>
          {/* Agrega más mensajes simulados si deseas */}
        </div>
      </div>
      <div className="border-t p-2 flex items-center">
        <input type="text" placeholder="Enviar un mensaje" className="flex-1 p-2 border rounded" />
        <button className="ml-2 bg-pink-600 text-white px-4 py-2 rounded">Enviar</button>
      </div>
    </div>
  );
}
