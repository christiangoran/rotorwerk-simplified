import {
  Cog8ToothIcon,
  CogIcon,
  VariableIcon,
  WrenchIcon,
} from "@heroicons/react/20/solid";
import konstruktion from "../assets/konstruktion-1.webp";

const industryAreas = [
  {
    title: "Schwermaschinenbau",
    description:
      "Wir sind spezialisiert auf die Konstruktion von Schwermaschinen, die den höchsten Anforderungen an Haltbarkeit und Effizienz entsprechen. Unsere innovativen Ingenieurlösungen sorgen für Spitzenleistungen in den anspruchsvollsten Umgebungen und machen uns zu einem vertrauenswürdigen Partner im Schwermaschinensektor.",
    icon: WrenchIcon,
  },
  {
    title: "Sondermaschinenbau",
    description:
      "Maßgeschneiderte Lösungen für einzigartige Herausforderungen. Unsere Dienstleistungen im Sondermaschinenbau liefern spezialisierte Ausrüstungen, die auf Ihre spezifischen Betriebsanforderungen zugeschnitten sind. Wir kombinieren modernste Technologie mit fachmännischem Handwerk, um Maschinen zu schaffen, die Produktivität und Effizienz steigern.",
    icon: WrenchIcon,
  },
  {
    title: "Windindustrie-Engineering",
    description:
      "Innovation in der Windindustrie vorantreiben, bieten wir umfassende Ingenieurlösungen für Windenergieprojekte. Von der Planung bis zur Umsetzung sorgt unser Fachwissen für optimale Leistung und Zuverlässigkeit von Windturbinen und zugehörigen Komponenten und trägt zu einer nachhaltigen Zukunft bei.",
    icon: WrenchIcon,
  },
  {
    title: "Allgemeiner Maschinenbau",
    description:
      "Exzellenz im Maschinenbau liefern wir ein breites Spektrum an Dienstleistungen von der Konzeption bis zur Fertigstellung. Unser erfahrenes Team wendet fortschrittliche Ingenieurprinzipien an, um mechanische Systeme für verschiedene industrielle Anwendungen zu entwerfen, zu analysieren und zu optimieren.",
    icon: WrenchIcon,
  },
  {
    title: "Stahlbau-Engineering",
    description:
      "Expertise im Stahlbau-Design und in der Fertigung. Wir bieten robuste und innovative Ingenieurlösungen für Stahlbauprojekte und sorgen für Sicherheit, Stabilität und Langlebigkeit. Unsere Dienstleistungen decken alles ab, von der ersten Planung bis zur endgültigen Konstruktion.",
    icon: WrenchIcon,
  },
  {
    title: "Leichtbau-Engineering",
    description:
      "Optimierung der Leistung mit Leichtbau. Unsere Ingenieurlösungen konzentrieren sich auf die Gewichtsreduzierung, ohne dabei an Festigkeit und Haltbarkeit einzubüßen. Ideal für Branchen, in denen Effizienz und Leistung entscheidend sind, setzen unsere Leichtbau-Designs Maßstäbe.",
    icon: WrenchIcon,
  },
  {
    title: "Lastenhandhabungsgeräte-Engineering",
    description:
      "Konstruktion zuverlässiger Lastenhandhabungsgeräte zur Verbesserung von Sicherheit und Effizienz. Unsere Ingenieurdienstleistungen für Lastenhandhabungsgeräte sorgen dafür, dass Ihre Abläufe reibungslos und sicher ablaufen, mit Geräten, die den strengen Standards und spezifischen Anforderungen entsprechen.",
    icon: WrenchIcon,
  },
];

export default function Konstruktion() {
  return (
    <div className="relative px-6 py-24 overflow-hidden text-left bg-white isolate sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 overflow-hidden -z-10">
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
      <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-yellow-600">
                Wir erstellen auch
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Konstruktionen
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Entwürfe für die Branchen und Sektoren:
              </p>
            </div>
          </div>
        </div>

        {/* ------------------ RIGHT ORIENTED IMAGE ELEMENT ------------------ */}
        <div className="p-12 -mt-12 -ml-12 pb-50 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-300 max-h-100 rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={konstruktion}
            alt="Image of people working at a desk"
          />
        </div>

        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                {industryAreas.map((area, index) => (
                  <li key={index} className="flex gap-x-3">
                    <area.icon className="w-6 h-6 text-lime-900" />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        {area.title}
                      </strong>{" "}
                      {area.description}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-6">
                Wenn die Konstruktion auf Verformungen, Verschiebungen,
                statische Festigkeit und Lebensdauer (Ermüdungsfestigkeit)
                untersucht werden soll, verwenden wir dafür die{" "}
                <b>Finite-Elemente-Methode (FEM-Berechnung)</b>.
              </p>
              <p className="mt-6">
                Alles, was wir weiter von Ihnen für die <b>FEM-Berechnung</b>{" "}
                oder <b>Analyse</b> benötigen, sind alle benachbarten
                Komponenten und deren Eigenschaften, das Lager, falls es sich in
                den benachbarten Komponenten befindet, und die Last.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Besondere Dienstleistungen in diesem Zusammenhang:
              </h2>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <Cog8ToothIcon
                    className="flex-none w-5 h-5 mt-1 text-lime-700"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Neukonstruktion für die oben genannten Industrien und
                      Bereiche
                    </strong>{" "}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CogIcon
                    className="flex-none w-5 h-5 mt-1 text-lime-700"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Änderungskonstruktionen
                    </strong>{" "}
                    {/* Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo. */}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <VariableIcon
                    className="flex-none w-5 h-5 mt-1 text-lime-700"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Festigkeitsberechnungen, Strukturverhalten,
                      Schwingungsanalysen
                    </strong>{" "}
                    {/* Ac tincidunt sapien vehicula erat auctor pellentesque
                    rhoncus. Et magna sit morbi lobortis. */}
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
