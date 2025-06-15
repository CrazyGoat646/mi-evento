import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";

export default function EventDetail() {
  const { id } = useParams();

  return (
    <div className="pt-4 pb-24 px-4 min-h-screen">
      <img
        src="/images/premios.png"
        className="w-full max-h-80 object-contain rounded mb-4"
        alt="Desafío Boot Camp"
      />
      <h1 className="text-2xl font-bold mb-2">Entrega de premios Innovatech 2025</h1>
      <p className="mb-4 text-gray-700">
        CIFP Universidade Laboral (A Coruña)
        <br></br>
        <br />
        A entrega de premios do programa InnovaTech 2024/2025 reune os proxectos máis innovadores do alumnado de Formación Profesional de toda Galicia. Será unha xornada para compartir ilusión, creatividade e moita tecnoloxía, tras meses de traballo e aprendizaxe.
        <br />
        Dende o IES Lois Peña Novo desexamos moita sorte a tódolos equipos participantes! Que siga a innovación, a colaboración e o espírito emprendedor!
      </p>

      {/* Barra fija de botones */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t py-3 flex justify-center gap-10 z-50">
        <img
          src="/images/reglamento.png"
          alt="Reglamento"
          className="w-10 h-auto cursor-default"
        />
        <a
          href="https://www.google.es/maps/place/CIFP+Universidade+Laboral/@43.3169306,-8.3858133,14.17z/data=!4m6!3m5!1s0xd2e64b8bfe41c1b:0xc733087538d7c2ec!8m2!3d43.3190351!4d-8.3763634!16s%2Fg%2F11cm03bhvq?hl=es&entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/lugar.png"
            alt="Lugar"
            className="w-10 max-w-[3rem] h-auto hover:scale-105 transition-transform"
          />
        </a>

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



