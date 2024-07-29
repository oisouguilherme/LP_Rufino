import { IconFacebook, IconInstagram, IconX } from "@/assets/Icons";
import { CountdownTimer, JoinButton, TitleSection } from "./Utils";
import Link from "next/link";

export function Banner() {
  return (
    <div className="bg-black">
      <div className="max-w-6xl mx-auto min-h-screen text-white grid grid-cols-2 items-center relative">
        <div className="space-y-5">
          <TitleSection title={"Eleicão 2024"} />
          <h1 className="text-5xl font-bold">Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus saepe magni ipsam, dolor eum reiciendis.
          </p>
          <CountdownTimer targetDate="2024-10-01T00:00:00" />
          <JoinButton text={"Entrar"} />
        </div>
        <div className="absolute right-0 top-1/3 flex flex-col gap-3">
          <Link
            href={"https://www.instagram.com/rufinofolador/"}
            target="_blank"
            className="hover:text-orange-500 duration-300"
          >
            <IconInstagram size={18} />
          </Link>
          <Link href={"#"} className="hover:text-orange-500 duration-300">
            <IconFacebook size={18} />
          </Link>
          <Link href={"#"} className="hover:text-orange-500 duration-300">
            <IconX size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
