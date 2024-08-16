import { IconFacebook, IconInstagram, IconX } from "@/assets/Icons";
import { CountdownTimer, JoinButton, TitleSection } from "./Utils";
import Link from "next/link";

export function Banner() {
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
        </div>
      </div>
    </div>
  );
}
