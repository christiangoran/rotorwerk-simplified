import { WrenchIcon } from "@heroicons/react/20/solid";
import wea from "../assets/wind.webp";

export default function Wea() {
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
      <div className="grid-cols-1 gap-16 grid mx-auto max-w-6xl lg:grid-cols-4">
        <div className="col-span-1 text-center lg:col-span-4">
          <p className="text-base font-semibold leading-7 text-lime-800">
            WEA-Entwicklung
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Entwicklung von Windkraftanlagen / Windenergieanlagen einzelnen
            Komponenten
          </h1>
        </div>

        <div className="col-span-1 lg:col-span-2">
          <p className="mt-6 text-xl leading-8 text-gray-700">
            Die Konzeptionierung, Auslegung und Dimensionierung von
            <b> Windenergieanlagen </b>bzw.<b> Windkraftanlagen</b> erfolgt nach
            einer Vielzahl technischer Gesichtspunkte. Dabei muss auf die
            Einhaltung, landesspezifischer, technischer Richtlinien und Normen
            Rücksicht genommen werden. Das Ingenieurbüro Rotorwerk besitzt
            langjährige Erfahrungen auf dem Gebiet der Simulation und
            Dimensionierung, aber auch in Bezug auf die Entwicklung ganzer
            <b> Windkraftanlagen / Windenergieanlagen</b> ebenso wie einzelner
            <b> Windenergieanlagen</b> - Komponenten - sprechen Sie uns einfach
            an.
          </p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Konkrete Einzeldienstleistungen
          </h2>
          <p className="mt-6 leading-8 text-gray-700">
            <b>Lastsimulationen für Windenergieanlagen</b>
          </p>
          <ul role="list" className="mt-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <WrenchIcon
                className="mt-1 h-5 w-5 flex-none text-lime-700"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Lastsimulation
                </strong>{" "}
                für Windenergieanlagen / Windkraftanlagen nach verschiedenen
                Richtlinien (GL, DS 472, IEC 61400, NVN 11400) sowie
                standortspezifische Berechnung (Site Approval)
              </span>
            </li>
            <li className="flex gap-x-3">
              <WrenchIcon
                className="mt-1 h-5 w-5 flex-none text-lime-700"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Simulation
                </strong>{" "}
                von ON- und OFF-SHORE Anlagen
              </span>
            </li>
          </ul>
          <p className="mt-6 leading-8 text-gray-700">
            <b>Lastsimulationen für Windenergieanlagen</b>
          </p>
          <ul role="list" className="mt-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <WrenchIcon
                className="mt-1 h-5 w-5 flex-none text-lime-700"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Konstruktion, Berechnung und Dimensionierung
                </strong>{" "}
                der Komponenten von Windenergieanlagen bzw. Windkraftanlagen
              </span>
            </li>
            <li className="flex gap-x-3">
              <WrenchIcon
                className="mt-1 h-5 w-5 flex-none text-lime-700"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Erstellung
                </strong>{" "}
                technischer Zeichnungen
              </span>
            </li>
            <li className="flex gap-x-3">
              <WrenchIcon
                className="mt-1 h-5 w-5 flex-none text-lime-700"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Ermittlung der statischen
                </strong>{" "}
                sowie der Betriebsfestigkeit
              </span>
            </li>
            <li className="flex gap-x-3">
              <WrenchIcon
                className="mt-1 h-5 w-5 flex-none text-lime-700"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Festigkeitsberechnungen
                </strong>{" "}
                auf numerischem bzw. analytischem Weg
              </span>
            </li>
            <li className="flex gap-x-3">
              <WrenchIcon
                className="mt-1 h-5 w-5 flex-none text-lime-700"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Modellierung von Bauteilen
                </strong>{" "}
                im Verbund bei finite Elemente Berechnungen
              </span>
            </li>
            <li className="flex gap-x-3">
              <WrenchIcon
                className="mt-1 h-5 w-5 flex-none text-lime-700"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Dimensionierung
                </strong>{" "}
                und Auswahl von maschinenbaulichen Zulieferkomponenten
              </span>
            </li>
            <li className="flex gap-x-3">
              <WrenchIcon
                className="mt-1 h-5 w-5 flex-none text-lime-700"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Untersuchungen
                </strong>{" "}
                zu Schadensfällen
              </span>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <img
            className="w-[48rem] mt-10 max-w-500 max-h-1000 rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={wea}
            alt="Image of a wind powerplant"
          />{" "}
          <p className="mt-6 leading-8 text-gray-700">
            <b>Erstellung / Zusammenstellung von Zertifizierungsunterlagen</b>{" "}
            und Betreuung während der Zertifizierung und Betreuung des Prozesses
            bis zur Ausstellung des Zertifikats
          </p>
          <p className="mt-6 leading-8 text-gray-700">
            <b>Auswertung von Messungen und Vergleich mit Lastsimulation</b>
          </p>
          <ul role="list" className="mt-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <WrenchIcon
                className="mt-1 h-5 w-5 flex-none text-lime-700"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Betreuung
                </strong>{" "}
                von Belastungsmessungen
              </span>
            </li>
            <li className="flex gap-x-3">
              <WrenchIcon
                className="mt-1 h-5 w-5 flex-none text-lime-700"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Aufbereitung und Analyse
                </strong>{" "}
                von Messdaten
              </span>
            </li>
            <li className="flex gap-x-3">
              <WrenchIcon
                className="mt-1 h-5 w-5 flex-none text-lime-700"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Vergleich von Messungen
                </strong>{" "}
                mit Lastsimulationen
              </span>
            </li>
            <li className="flex gap-x-3">
              <WrenchIcon
                className="mt-1 h-5 w-5 flex-none text-lime-700"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Auswertung von Belastungsmessungen
                </strong>{" "}
                mit Bezug auf die Dimensionierung
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        {/* ------------------ RIGHT ORIENTED IMAGE ELEMENT ------------------ */}
        <div className="-ml-12 -mt-12 p-12 pb-50 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"></div>

        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
