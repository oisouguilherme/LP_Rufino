import { Banner } from "../components/Banner";
import { MissaoValores } from "../components/MissaoValores";
import { Prioridades } from "../components/Prioridades";
import { Sobre } from "../components/Sobre";

export default function HomePage() {
  return (
    <main>
      <Banner />
      <MissaoValores />
      <Sobre />
      <Prioridades />
      <footer className="bg-gray-50 py-1 text-xs">
        <p className="flex items-center gap-2 justify-center text-center">
          © Todos os direitos reservados 2024 | Coligação: Onde há trabalho, tem
          crescimento. PL / PDT / PSD / AVANTE / NOVO | 56.473.605/0001-54 |
          Desenvolvido por
          <a
            href="https://guilherme-portfolio-frontend.netlify.app"
            target="_blank"
            className="text-violet-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
            </svg>
          </a>
        </p>
      </footer>
    </main>
  );
}
