import { Banner } from "../components/Banner";
import { MissaoValores } from "../components/MissaoValores";
import { Prioridades } from "../components/Prioridades";
import { Sobre } from "../components/Sobre";

export default function HomePage() {
  return (
    <main>
      <Banner />
      <Prioridades />
      <Sobre />
      <MissaoValores />
    </main>
  );
}
