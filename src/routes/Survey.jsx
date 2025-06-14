import { useState } from "react";

export default function Survey() {
  const [formData, setFormData] = useState({
    rating: null,
    attention: "",
    repeat: "",
    comment: ""
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Encuesta enviada:", formData);
    alert("¡Gracias por tu respuesta!");
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center">Encuesta de satisfacción</h1>

      {/* Puntuación del evento */}
      <div>
        <p className="mb-2 font-medium">¿Qué puntuación del 1 al 5 le darías al evento?</p>
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map(num => (
            <button
              key={num}
              className={`w-10 h-10 rounded-full border ${
                formData.rating === num ? "bg-pink-500 text-white" : "bg-white"
              }`}
              onClick={() => handleChange("rating", num)}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      {/* Atención recibida */}
      <div>
        <p className="mb-2 font-medium">¿Cómo calificarías la atención recibida?</p>
        {["Satisfecho", "Nada satisfecho", "No sabe / No responde"].map(opt => (
          <button
            key={opt}
            onClick={() => handleChange("attention", opt)}
            className={`block w-full text-left p-2 mb-2 border rounded ${
              formData.attention === opt ? "bg-pink-500 text-white" : "bg-white"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>

      {/* Repetiría la experiencia */}
      <div>
        <p className="mb-2 font-medium">¿Repetirías la experiencia?</p>
        {["Sí", "No"].map(opt => (
          <button
            key={opt}
            onClick={() => handleChange("repeat", opt)}
            className={`block w-full text-left p-2 mb-2 border rounded ${
              formData.repeat === opt ? "bg-pink-500 text-white" : "bg-white"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>

      {/* Comentario */}
      <div>
        <p className="mb-2 font-medium">Comentarios que podríamos mejorar:</p>
        <textarea
          className="w-full border p-2 rounded"
          placeholder="Añade tu comentario..."
          value={formData.comment}
          onChange={(e) => handleChange("comment", e.target.value)}
        />
      </div>

      {/* Botón enviar */}
      <div className="text-center">
        <button
          onClick={handleSubmit}
          className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700"
        >
          Enviar encuesta
        </button>
      </div>
    </div>
  );
}
