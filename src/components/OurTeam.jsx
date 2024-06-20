import norbert from "../assets/norbert.png";
import meeting from "../assets/fillers-1.webp";
import filler2 from "../assets/fillers-2.webp";
import writing from "../assets/fillers-3.webp";

const OurPeople = () => {
  return (
    <section className="relative px-4 py-8 text-left bg-white sm:py-48 sm:px-6 lg:px-8">
      <div className="mx-auto width-full">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="lg:col-start-1 lg:pr-8">
            <div className="lg:pr-4">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Unser Team
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Bei Rotorwerk sind wir stolz auf unseren kooperativen Geist und
                unsere teamorientierte Arbeitsweise. Unser Netzwerk aus
                erfahrenen Fachkräften arbeitet im Einklang, um Innovation
                voranzutreiben und außergewöhnliche Ingenieurlösungen zu
                liefern. Jedes Projekt profitiert von unserem kollektiven
                Fachwissen, das höchste Qualität und Kundenzufriedenheit
                gewährleistet.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                Durch die Förderung einer Kultur der kontinuierlichen
                Verbesserung und der Liebe zum Detail übertrifft unser Team
                ständig die Erwartungen. Erfahren Sie, wie unsere gemeinsamen
                Anstrengungen Ihre Ingenieurprojekte zum Leben erwecken können.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 mt-6 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-lime-900 hover:bg-lime-700"
              >
                Arbeiten Sie mit uns
              </a>
            </div>
            <div className="col-span-2 pt-12 overflow-hidden rounded-lg aspect-w- aspect-h-1 sm:aspect-w-1 sm:aspect-h-1">
              <img
                src={meeting}
                alt="Team 4"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:col-start-2">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-2 lg:gap-8">
              <div className="relative col-span-1 mt-0 overflow-hidden rounded-lg aspect-w-2 aspect-h-1 sm:aspect-w-1 sm:aspect-h-1">
                <img
                  src={writing}
                  alt="Team 2"
                  className="object-cover rounded-lg h-400"
                />
              </div>
              <div className="relative mt-24 overflow-hidden aspect-w-24 aspect-h-1 sm:aspect-w-1 sm:aspect-h-1">
                <img
                  src={norbert}
                  alt="Team 1"
                  className="object-cover rounded-lg h-300"
                />
              </div>

              <div className="col-span-2 mt-12 overflow-hidden aspect-w-2 aspect-h-1 sm:aspect-w-2 sm:aspect-h-1 lg:row-span-2">
                <img
                  src={filler2}
                  alt="Team 3"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPeople;
