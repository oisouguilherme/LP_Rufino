"use client";
import { IconFacebook, IconInstagram, IconX } from "@/assets/Icons";
import { CountdownTimer, JoinButton, TitleSection } from "./Utils";

export function Banner() {
  const handleOpenPDF = () => {
    window.open("/PLANO_DE_GOVERNO.pdf", "_blank");
  };

  return (
    <div className="bg-[url('/bg-mobile.jpg')] sm:bg-[url('/bg-desktop.jpg')] bg-no-repeat bg-cover bg-center">
      <div className="max-w-6xl mx-auto px-4 min-h-screen text-white grid sm:grid-cols-2 items-center relative pb-8 pt-[480px] sm:pt-0">
        <div className="space-y-5">
          <div className="space-y-5">
            <div className="flex gap-3 justify-end sm:justify-start">
              <a
                href={"https://www.instagram.com/rufinofolador/"}
                target="_blank"
                className="hover:text-orange-500 duration-300"
              >
                <IconInstagram size={24} />
              </a>
              <a
                href={"https://www.facebook.com/profile.php?id=61557887701559"}
                className="hover:text-orange-500 duration-300"
              >
                <IconFacebook size={24} />
              </a>
            </div>
            <TitleSection title={"Eleicão 2024"} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold">
            ONDE HÁ TRABALHO, TEM CRESCIMENTO!
          </h1>
          <p>
            Somos os representantes da visão audaciosa de superação e progresso
            para nossa cidade.
          </p>
          <p>PARA PREFEITO DE BURITIS, VOTE EM RUFINO. VOTE 22!</p>
          <CountdownTimer targetDate="2024-10-06T00:00:00" />
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
