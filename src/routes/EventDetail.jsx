import { useParams, Link } from "react-router-dom";

export default function EventDetail() {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex flex-col justify-between p-4">
      <div>
        <img
          src="/images/premios.png"
          className="w-full h-52 object-cover rounded mb-4"
          alt="Desafío Boot Camp"
        />
        <h1 className="text-2xl font-bold mb-2">Desafío Boot Camp</h1>
        <p className="mb-4 text-gray-700">
          Ubicación: CIFP Universidade Laboral (A Coruña)
          <br />
          Descrición: A entrega de premios do programa InnovaTech 2024/2025 reune os proxectos máis innovadores do alumnado de Formación Profesional de toda Galicia. Será unha xornada para compartir ilusión, creatividade e moita tecnoloxía, tras meses de traballo e aprendizaxe.
          <br />
          Dende o IES Lois Peña Novo desexamos moita sorte a tódolos equipos participantes! Que siga a innovación, a colaboración e o espírito emprendedor!
        </p>
      </div>

      <div className="flex flex-wrap gap-4 justify-center mt-8">
        <img
          src="/images/reglamento.png"
          alt="Reglamento"
          className="w-12 max-w-[3rem] h-auto cursor-default"
        />
        <img
          src="/images/lugar.png"
          alt="Lugar"
          className="w-12 max-w-[3rem] h-auto cursor-default"
        />
        <Link to="/">
          <img
            src="/images/eventos.png"
            alt="Eventos"
            className="w-12 max-w-[3rem] h-auto hover:scale-105 transition-transform"
          />
        </Link>
        <Link to="encuesta">
          <img
            src="/images/encuesta.png"
            alt="Encuesta"
            className="w-12 max-w-[3rem] h-auto hover:scale-105 transition-transform"
          />
        </Link>
        <Link to="stream">
          <img
            src="/images/chat.png"
            alt="Streaming"
            className="w-12 max-w-[3rem] h-auto hover:scale-105 transition-transform"
          />
        </Link>
      </div>
    </div>
  );
}

