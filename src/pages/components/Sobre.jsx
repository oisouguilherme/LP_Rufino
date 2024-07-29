import Image from "next/image";
import Link from "next/link";
import ImageTeste from "../../assets/pain.jpg";
import { JoinButton, TitleSection } from "./Utils";

export function Sobre() {
  return (
    <div className="grid grid-cols-2">
      <Image src={ImageTeste} className="object-cover h-full" />

      <div className="p-10 space-y-5 bg-blue-950 h-full flex flex-col justify-center text-gray-50">
        <TitleSection title={"Sobre mim"} />

        <h2 className="text-3xl uppercase font-semibold">
          Conheça nosso <span className="text-orange-500">candidato</span>
        </h2>
        <div className="space-y-2 w-[80%]">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi,
            modi labore quibusdam quos omnis neque accusamus ipsam aspernatur.
            Similique, dolores.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi,
            modi labore quibusdam quos omnis neque accusamus ipsam aspernatur.
            Similique, dolores.
          </p>
        </div>
        <div className="bg-blue-900/50 border-l-4 border-orange-500 max-w-[80%]">
          <p className="p-5 font-medium uppercase">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque,
            consectetur?
          </p>
        </div>

        <JoinButton text={"Entrar"} />
      </div>
    </div>
  );
}
