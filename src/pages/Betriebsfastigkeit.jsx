import { WrenchIcon } from "@heroicons/react/20/solid";
import structure from "../assets/structure.webp";

export default function Betriebsfestigkeit() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 text-left">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-lime-800">
                Verwendung von Software
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Betriebsfestigkeit
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                In vielen Branchen ist die Prüfungen von Bauteilen auf
                Betriebsfestigkeit erforderlich, wie z.B. für WEA-Hersteller
                (IEC 61400-1 und GL-Richtlinie für die Zertifizierung von
                Windenergieanlagen), im Schiffbau (GL-Richtlinie für Schiffs-
                und Offshore-Technologie) oder im Stahlbau (Eurocode 3). Wir
                haben dafür ein spezielles Software-Tool entwickelt.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Betriebsfestigkeitsberechnung mit Zeitreihen
              </h2>
            </div>
          </div>
        </div>

        {/* ------------------ RIGHT ORIENTED IMAGE ELEMENT ------------------ */}
        <div className="-ml-12 -mt-12 p-12 pb-50 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-300 max-h-100 rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={structure}
            alt="Image of a mathematical structure"
          />
        </div>

        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="mt-8">
                <b>
                  {" "}
                  Bisher: Berechnung mittels Rain-Flow-Count bzw.
                  Einstufenkollektiv
                </b>{" "}
                Bisher wurde zur Ermittlung der Betriebsfestigkeit der zeitliche
                Zusammenhang zwischen angreifenden Kräften und Momente und ihrem
                Auftreten nicht berücksichtigt. Lediglich die statistische
                Häufigkeit ihres Erscheinens wurde in Bezug zu
                Materialkennwerten gesetzt (Wöhlerlinie), wie z.B. mittels
                Rain-Flow-Count bzw. Einstufenkollektiv.
              </p>
              <p className="mt-8">
                <b>Neu: Berücksichtigung von Zeitreihen </b>Mit Hilfe speziell
                entwickelter Simulations- und Auswertetechnologie ist es jetzt
                möglich, den Zusammenhang zwischen den unterschiedlichen Kraft-
                bzw. Momentwirkungen und deren zeitgleichen Auftreten zu
                berücksichtigen. Damit können jetzt viel genauere Aussagen zum
                Materialverhalten über lange Zeiträume getroffen werden. Dies
                ist insbesondere dort von Bedeutung, wo mehrere in
                unterschiedliche Richtung wirkende Kräfte und Momente
                gleichzeitig und außerdem variabel auftreten, wie z.B. bei
                Windenergieanlagen.
              </p>
              <p className="mt-8">
                <b>Die Vorteile auf einen Blick</b>
              </p>

              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <WrenchIcon
                    className="mt-1 h-5 w-5 flex-none text-lime-700"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      zeitlicher Zusammenhang
                    </strong>{" "}
                    zwischen den Lastkomponenten bleibt erhalten
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <WrenchIcon
                    className="mt-1 h-5 w-5 flex-none text-lime-700"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Berechnung des gesamten FE-Modells
                    </strong>{" "}
                    (d.h. über alle Knoten)
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <WrenchIcon
                    className="mt-1 h-5 w-5 flex-none text-lime-700"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      optische Darstellung
                    </strong>{" "}
                    der Schädigungsverteilung im Bauteil
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <WrenchIcon
                    className="mt-1 h-5 w-5 flex-none text-lime-700"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Berücksichtigung unterschiedlicher Materialien
                    </strong>{" "}
                    (d.h. Anwendung unterschiedlicher Wöhlerlinien)
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <WrenchIcon
                    className="mt-1 h-5 w-5 flex-none text-lime-700"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Darstellung der Spannungsschwingbreiten
                    </strong>{" "}
                    für Schweißkonstruktionen möglich
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}