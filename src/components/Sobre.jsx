"use client";
import Image from "next/image";
import FotoRufino from "../assets/foto.jpg";
import { JoinButton, TitleSection } from "./Utils";

export function Sobre() {
  const handleOpenPDF = () => {
    window.open("/PLANO_DE_GOVERNO.pdf", "_blank");
  };
  return (
    <div className="grid sm:grid-cols-3">
      <Image src={FotoRufino} alt="Foto de" className="object-cover h-full" />

      <div className="p-4 sm:p-10 space-y-5 bg-blue-600 h-full flex flex-col justify-center text-gray-50 sm:col-span-2">
        <TitleSection title={"Sobre mim"} />

        <h2 className="text-3xl uppercase font-bold">QUEM SOU EU?</h2>
        <div className="space-y-1 sm:w-[80%]">
          <p>
            Sou o seu <b>Candidato a Prefeito.</b>
          </p>
          <p>Agricultor, pai de 4 filhos e esposo da Abadia. </p>
          <p>
            Conheço de perto a necessidade do povo. Trabalhei 4 anos como
            vereador de nossa cidade e 8 anos como vice-prefeito. Junto ao
            executivo pude concretizar muitas obras e quero agora, com
            experiência, continuar o trabalho de excelência.
          </p>
        </div>
        <div className="bg-blue-900/50 border-l-4 border-orange-400 sm:max-w-[80%]">
          <p className="p-5 font-medium uppercase">
            A EXPERIÊNCIA A FAVOR DO POVO! <br /> PARA O PROGRESSO CONTINUAR:
            VOTE 22.
          </p>
        </div>
        <div className="flex gap-5 flex-wrap">
          <JoinButton text={"ACOMPANHE AQUI"} />
          <button
            onClick={handleOpenPDF}
            className="bg-orange-400 hover:bg-orange-500 duration-300 sm:max-w-80 w-full text-center py-2 flex justify-center items-center gap-2 uppercase"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-clipboard-check-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708" />
            </svg>
            Plano de Governo
          </button>
        </div>
      </div>
    </div>
  );
}
