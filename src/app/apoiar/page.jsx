import { TemplateImage } from "@/components/TemplateImage";
import Link from "next/link";

export default function Apioar() {
  return (
    <div className="relative">
      <TemplateImage />
      <footer className="bg-blue-600 py-1 text-xs text-gray-100 ">
        <p className="text-center flex justify-center flex-wrap">
          © Todos os direitos reservados 2024 | Coligação: Onde há trabalho, tem
          crescimento. PL / PDT / PSD / AVANTE / NOVO | 56.473.605/0001-54 |
          <a
            href="https://guilherme-portfolio-frontend.netlify.app"
            target="_blank"
            className="flex items-center gap-2 justify-center "
          >
            Desenvolvido por
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              viewBox="0 0 16 16"
            >
              <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
            </svg>
          </a>
        </p>
      </footer>
      <Link
        href={"/"}
        className="fixed bottom-2 right-2 bg-white p-3 rounded-full text-blue-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
          <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
        </svg>
      </Link>
    </div>
  );
}
