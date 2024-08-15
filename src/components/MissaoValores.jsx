import { TitleSection } from "./Utils";

export function MissaoValores() {
  return (
    <div className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-5">
          <TitleSection title={"NOSSA BANDEIRA É O POVO!"} />
          <h2 className="text-3xl font-semibold text-blue-950">
            Nossa Missão & Valores
          </h2>
          <p className="sm:max-w-[70%] text-sm">
            Rufino e Nilvia Prisco são exemplo de transparência e seriedade.
            Ambos, com dedicação, fizeram muito pelo nosso município. A frase
            que carregam "Onde há trabalho - tem crescimento!" simbolizam suas
            virtudes baseadas em fazer a diferença.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5 mt-14">
          <div className="bg-white p-5 space-y-1 shadow-lg md:col-span-2">
            <span className="text-orange-500 font-bold">01</span>
            <h4 className="text-blue-950 font-bold">
              Experiência e Compromisso
            </h4>
            <p className="text-sm">
              Candidato preparado e com aprovação no legislativo e executivo.
              Com muita seriedade irá trabalhar economizando dinheiro público e
              trazendo melhorias para a comunidade.
            </p>
          </div>
          <div className="bg-white p-5 space-y-1 shadow-lg">
            <span className="text-orange-500 font-bold">02</span>
            <h4 className="text-blue-950 font-bold">
              FOCO na Agricultura Familiar
            </h4>
            <p className="text-sm">
              Vamos fortalecer todos os produtores rurais. Gerando renda para as
              famílias e empregos nos diversos setores que atendem a
              agricultura e a pecuária.
            </p>
          </div>
          <div className="bg-white p-5 space-y-1 shadow-lg">
            <span className="text-orange-500 font-bold">03</span>
            <h4 className="text-blue-950 font-bold">
              A melhor INFRAESTRUTURA da região
            </h4>
            <p className="text-sm">
              Trabalharemos diariamente para a entrega de pavimentação asfáltica
              em toda extensão urbana do município. Melhoraremos todas as
              estradas e teremos pontes de concreto.
            </p>
          </div>
          <div className="bg-white p-5 space-y-1 shadow-lg md:col-span-2">
            <span className="text-orange-500 font-bold">04</span>
            <h4 className="text-blue-950 font-bold">
              SAÚDE e EDUCAÇÃO COMO REFÊRENCIA
            </h4>
            <p className="text-sm">
              É compromisso ampliar todos os programas em funcionamento.
              Incluindo a realização contínua de mutirões e a ampliação do ECIM.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
