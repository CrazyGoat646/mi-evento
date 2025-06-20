
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function Survey() {
  const navigate = useNavigate();
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
    alert("¡Gracias por tu resposta!");
    setFormData({
      rating: null,
      attention: "",
      repeat: "",
      comment: ""
    });
  };

  return (
    <>
      <Header />
      <div className="p-6 space-y-6">
        <button
          onClick={() => navigate(-1)}
          className="text-[#DF4661] underline"
        >
          ← Volver atrás
        </button>

        <h1 className="text-2xl font-bold text-center">Enquisa de satisfacción</h1>

        <div>
          <p className="mb-2 font-medium">Que puntuación lle darías ao evento de 1 a 5?</p>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map(num => (
              <button
                key={num}
                className={`w-10 h-10 rounded-full border ${
                  formData.rating === num ? "text-white" : "bg-white"
                }`}
                style={{
                  backgroundColor: formData.rating === num ? "#DF4661" : "white",
                  borderColor: "#DF4661",
                }}
                onClick={() => handleChange("rating", num)}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 font-medium">Como cualificarías a atención recibida?</p>
          {["Satisfeito/a", "Nada satisfeito/a", "Non o sei / Non responde"].map(opt => (
            <button
              key={opt}
              onClick={() => handleChange("attention", opt)}
              className="block w-full text-left p-2 mb-2 border rounded"
              style={{
                backgroundColor: formData.attention === opt ? "#DF4661" : "white",
                color: formData.attention === opt ? "white" : "black",
                borderColor: "#DF4661",
              }}
            >
              {opt}
            </button>
          ))}
        </div>

        <div>
          <p className="mb-2 font-medium">Repetirías a experiencia?</p>
          {["Sí", "No"].map(opt => (
            <button
              key={opt}
              onClick={() => handleChange("repeat", opt)}
              className="block w-full text-left p-2 mb-2 border rounded"
              style={{
                backgroundColor: formData.repeat === opt ? "#DF4661" : "white",
                color: formData.repeat === opt ? "white" : "black",
                borderColor: "#DF4661",
              }}
            >
              {opt}
            </button>
          ))}
        </div>

        <div>
          <p className="mb-2 font-medium">Comentarios que poderiamos mellorar:</p>
          <textarea
            className="w-full border p-2 rounded"
            placeholder="Engade o teu comentario..."
            value={formData.comment}
            onChange={(e) => handleChange("comment", e.target.value)}
          />
        </div>

        <div className="text-center">
          <button
            onClick={handleSubmit}
            className="text-white px-6 py-2 rounded hover:brightness-110"
            style={{ backgroundColor: "#DF4661" }}
          >
            Enviar enquisa
          </button>
        </div>
      </div>
    </>
  );
}
