import { IconFacebook, IconInstagram, IconX } from "@/assets/Icons";
import { CountdownTimer, JoinButton, TitleSection } from "./Utils";
import Link from "next/link";

export function Banner() {
  return (
    <div className="bg-[url('/bg-mobile.jpg')] sm:bg-[url('/bg-desktop.jpg')] bg-no-repeat bg-cover bg-center">
      <div className="max-w-6xl mx-auto px-4 min-h-screen text-white grid sm:grid-cols-2 items-center relative pb-8 pt-[480px] sm:pt-0">
        <div className="space-y-5">
          <TitleSection title={"Eleicão 2024"} />
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
        <div className="absolute right-4 top-4 sm:top-1/3 flex flex-col gap-3">
          <a
            href={"https://www.instagram.com/rufinofolador/"}
            target="_blank"
            className="hover:text-orange-500 duration-300"
          >
            <IconInstagram size={18} />
          </a>
          <a
            href={"https://www.facebook.com/profile.php?id=61557887701559"}
            className="hover:text-orange-500 duration-300"
          >
            <IconFacebook size={18} />
          </a>
          {/*  <Link href={"#"} className="hover:text-orange-500 duration-300">
            <IconX size={18} />
          </Link> */}
        </div>
      </div>
    </div>
  );
}
