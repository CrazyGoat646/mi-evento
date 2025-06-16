import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";

export default function EventDetail() {
  const { id } = useParams();
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="pt-4 pb-24 px-4 min-h-screen">
      <Header />

      <img
        src="/images/premios.png"
        className="w-full max-h-80 object-contain rounded mb-4"
        alt="Desafío Boot Camp"
      />
      <h1 className="text-2xl font-bold mb-2">Entrega de premios Innovatech 2025</h1>
      <p className="mb-4 text-gray-700">
        CIFP Universidade Laboral (A Coruña)
        <br />
        <br />
        A entrega de premios do programa InnovaTech 2024/2025 reune os proxectos máis innovadores do alumnado de Formación Profesional de toda Galicia. Será unha xornada para compartir ilusión, creatividade e moita tecnoloxía, tras meses de traballo e aprendizaxe.
        <br />
        Dende o IES Lois Peña Novo desexamos moita sorte a tódolos equipos participantes! Que siga a innovación, a colaboración e o espírito emprendedor!
      </p>

      {/* MODAL DEL MAPA */}
      {showMap && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 w-[90%] max-w-2xl relative">
            <button
              onClick={() => setShowMap(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl font-bold"
            >
              ✕
            </button>
            <iframe
              title="Mapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11422.775674457637!2d-8.3858133!3d43.3169306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2e64b8bfe41c1b%3A0xc733087538d7c2ec!2sCIFP%20Universidade%20Laboral!5e0!3m2!1ses!2ses!4v1718540920105!5m2!1ses!2ses"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      )}

      {/* Barra fija de botones */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t py-3 flex justify-center gap-10 z-40">
        <img
          src="/images/reglamento.png"
          alt="Reglamento"
          className="w-10 h-auto cursor-default"
        />

        <button onClick={() => setShowMap(true)}>
          <img
            src="/images/lugar.png"
            alt="Lugar"
            className="w-10 max-w-[3rem] h-auto hover:scale-105 transition-transform"
          />
        </button>

        <Link to="/">
          <img
            src="/images/eventos.png"
            alt="Eventos"
            className="w-10 h-auto hover:scale-105 transition-transform"
          />
        </Link>
        <Link to="encuesta">
          <img
            src="/images/encuesta.png"
            alt="Encuesta"
            className="w-10 h-auto hover:scale-105 transition-transform"
          />
        </Link>
        <Link to="stream">
          <img
            src="/images/chat.png"
            alt="Streaming"
            className="w-10 h-auto hover:scale-105 transition-transform"
          />
        </Link>
      </div>
    </div>
  );
}




