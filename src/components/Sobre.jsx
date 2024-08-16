import Image from "next/image";
import FotoRufino from "../assets/foto.jpg";
import { JoinButton, TitleSection } from "./Utils";

export function Sobre() {
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

        <JoinButton text={"ACOMPANHE AQUI"} />
      </div>
    </div>
  );
}
