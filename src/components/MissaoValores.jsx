import { TitleSection } from "./Utils";

export function MissaoValores() {
  return (
    <div className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-5">
          <TitleSection title={"lorem ipsom doloe"} />
          <h2 className="text-3xl font-semibold text-blue-950">
            Nossa Missão & Valores
          </h2>
          <p className="sm:max-w-[70%] text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            blanditiis at ipsam suscipit eveniet. Minustetur adipisicing elit.
            Minus blanditiis at ipsam suscipit eveniet. Minus.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-5 mt-14">
          <div className="bg-white p-5 space-y-1 shadow-lg">
            <span className="text-orange-500 font-bold">01</span>
            <h4 className="text-blue-950 font-bold text-lg">
              Lorem, ipsum dolor
            </h4>
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
              aspernatur officiis debitis. Asperiores consectetur fuga numquam
              recusandae quas quibusdam ratione voluptas quidem perferendis
              iusto quos nobis aut, pariatur reprehenderit illum!
            </p>
          </div>
          <div className="bg-white p-5 space-y-1 shadow-lg">
            <span className="text-orange-500 font-bold">02</span>
            <h4 className="text-blue-950 font-bold text-lg">
              Lorem, ipsum dolor
            </h4>
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
              aspernatur officiis debitis. Asperiores consectetur fuga numquam
              recusandae quas quibusdam ratione voluptas quidem perferendis
              iusto quos nobis aut, pariatur reprehenderit illum!
            </p>
          </div>
          <div className="bg-white p-5 space-y-1 shadow-lg">
            <span className="text-orange-500 font-bold">03</span>
            <h4 className="text-blue-950 font-bold text-lg">
              Lorem, ipsum dolor
            </h4>
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
              aspernatur officiis debitis. Asperiores consectetur fuga numquam
              recusandae quas quibusdam ratione voluptas quidem perferendis
              iusto quos nobis aut, pariatur reprehenderit illum!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
