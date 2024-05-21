import { WrenchIcon } from "@heroicons/react/20/solid";
import fem from "../assets/fem.webp";

const specialServices = [
  {
    title: "FEM",
    description:
      "( Finite-Elemente-Methode ) Berechnung und Untersuchung von maschinenbaulichen Komponenten aller Art",
    icon: WrenchIcon,
  },
  {
    title: "Strukturdynamik",
    description:
      "lineare und nichtlineare Strukturdynamik und Festigkeitsberechnung",
    icon: WrenchIcon,
  },
  {
    title: "Untersuchung von Strukturen",
    description: "aus Faser-Kunststoff-Verbund (z.B. GFK, CFK)",
    icon: WrenchIcon,
  },
  {
    title: "Modal- uns Schwingungsanalysen:",
    description:
      "Wir führen Modal- und Schwingungsanalysen durch, um das dynamische Verhalten von Strukturen zu bewerten und mögliche Resonanzprobleme zu identifizieren.",
    icon: WrenchIcon,
  },
  {
    title: "Beulanalysen:",
    description:
      "Unsere Beulanalysen helfen, die strukturelle Stabilität zu gewährleisten, indem sie die kritischen Lasten bewerten, die Verformungen verursachen können.",
    icon: WrenchIcon,
  },
  {
    title: "dynamische, transiente Analysen:",
    description:
      "Wir führen dynamische, transiente Analysen durch, um das zeitabhängige Verhalten von Strukturen unter variierenden Lasten zu untersuchen.",
    icon: WrenchIcon,
  },
  {
    title: "Analysen mit hyperelastischem Material:",
    description:
      "Wir analysieren Strukturen aus hyperelastischen Materialien, um deren Reaktion unter großen Deformationen vorherzusagen.",
    icon: WrenchIcon,
  },
  {
    title: "Nachweise von Lastaufnahmemitteln:",
    description:
      "Wir überprüfen die Tragfähigkeit von Lastaufnahmemitteln, um deren Sicherheit und Zuverlässigkeit zu gewährleisten.",
    icon: WrenchIcon,
  },
  {
    title: "Erstellen von APDl-Macros (ANSYS):",
    description:
      "Wir erstellen APDL-Macros zur Automatisierung von Arbeitsabläufen und zur Modellierung parametrisierbarer Geometrien und Strukturen.",
    icon: WrenchIcon,
  },
];

export default function Fem() {
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
              <p className="text-base font-semibold leading-7 text-yellow-600">
                FEM
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Finite-Elemente-Methode
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Maschinenbauteile sind den unterschiedlichsten Beanspruchungen
                ausgesetzt und müssen hohe Anforderungen hinsichtlich der
                Festigkeit erfüllen. Durch den Einsatz der
                <b> Finite-Elemente-Methode</b> können die verschiedensten
                Bauteile im Vorfeld auf ihre statische Festigkeit und
                Ermüdungsbeanspruchung untersucht und berechnet werden.
              </p>
              <h2 className="mt-16 mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Arbeitsschritte und Leistungen
              </h2>
            </div>
          </div>
        </div>

        {/* ------------------ RIGHT ORIENTED IMAGE ELEMENT ------------------ */}
        <div className="-ml-12 -mt-12 p-12 pb-50 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-300 max-h-100 rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={fem}
            alt="Image of people working at a desk"
          />
        </div>

        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="mt-0">
                Dazu wird das zu untersuchende Bauteil so realitätsnah wie
                notwendig mit all seinen benachbarten Komponenten und deren
                Randbedingungen modelliert. Dabei auftretende Nichtlinearitäten,
                die z.B. durch Lagerungen, Schraubverbindungen entstehen, können
                berücksichtigt werden. Das mechanische Verhalten der Struktur
                wird dadurch wesentlich wirklichkeitsgetreuer wiedergegeben.
              </p>
              <p className="mt-4">
                Ist eine Schwingungsanalyse der Struktur erforderlich, so können
                mit Hilfe der<b> Finite-Elemente-Methode ( FEM Berechnung )</b>{" "}
                die Eigenfrequenzen und Schwingungsmodi bestimmt werden.
              </p>
              <p className="mt-4">
                Alles was wir für eine<b> FEM Berechnung</b> bzw.
                <b> Analyse </b>von Ihnen benötigen, sind die geometrischen
                Daten in Form einer Zeichnung oder als CAD-Datei, die
                verwendeten Materialien und Randbedingungen, wie Lagerung und
                Belastung.
              </p>
              <h3 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Spezielle Dienstleistungen in diesem Kontext:
              </h3>

              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                {specialServices.map((service, index) => (
                  <li key={index} className="flex gap-x-3">
                    <service.icon className="h-6 w-6 text-lime-900" />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        {service.title}
                      </strong>{" "}
                      {service.description}
                    </span>
                  </li>
                ))}
              </ul>
              <h3 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                APDL-Macros (ANSYS)
              </h3>

              <p className="mt-4">
                In ANSYS lassen sich durch die APDL Macro-Programmierung
                Arbeitsschritte automatisieren bzw. lassen sich auch Ergebnisse
                in gewünschten Formaten ausgeben. Im Laufe der Zeit sind bei uns
                einige APDL-Macros entstanden, die uns die tägliche Arbeit mit
                ANSYS erleichtern. Einige unserer APDL-Macros möchten wir den
                Nutzern von ANSYS zur Verfügung stellen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
