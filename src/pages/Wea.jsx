import { WrenchIcon } from "@heroicons/react/20/solid";
import wea from "../assets/wind.webp";
import { useLanguage } from "../context/LanguageContext";

const content = {
  de: {
    title: "WEA-Entwicklung",
    mainTitle:
      "Entwicklung von Windkraftanlagen / Windenergieanlagen und einzelnen Komponenten",
    description:
      "Die Konzeptionierung, Auslegung und Dimensionierung von Windenergieanlagen bzw. Windkraftanlagen erfolgt nach einer Vielzahl technischer Gesichtspunkte. Dabei muss auf die Einhaltung, landesspezifischer, technischer Richtlinien und Normen Rücksicht genommen werden. Das Ingenieurbüro Rotorwerk besitzt langjährige Erfahrungen auf dem Gebiet der Simulation und Dimensionierung, aber auch in Bezug auf die Entwicklung ganzer Windkraftanlagen / Windenergieanlagen ebenso wie einzelner Windenergieanlagen-Komponenten - sprechen Sie uns einfach an.",
    servicesTitle: "Konkrete Einzeldienstleistungen",
    services: [
      {
        title: "Lastsimulation",
        description:
          "Lastsimulation für Windenergieanlagen / Windkraftanlagen nach verschiedenen Richtlinien (GL, DS 472, IEC 61400, NVN 11400) sowie standortspezifische Berechnung (Site Approval)",
      },
      {
        title: "Simulation",
        description: "Simulation von ON- und OFF-SHORE Anlagen",
      },
      {
        title: "Konstruktion, Berechnung und Dimensionierung",
        description:
          "der Komponenten von Windenergieanlagen bzw. Windkraftanlagen",
      },
      {
        title: "Erstellung technischer Zeichnungen",
      },
      {
        title: "Ermittlung der statischen sowie der Betriebsfestigkeit",
      },
      {
        title: "Festigkeitsberechnungen",
        description: "auf numerischem bzw. analytischem Weg",
      },
      {
        title: "Modellierung von Bauteilen",
        description: "im Verbund bei finite Elemente Berechnungen",
      },
      {
        title:
          "Dimensionierung und Auswahl von maschinenbaulichen Zulieferkomponenten",
      },
      {
        title: "Untersuchungen zu Schadensfällen",
      },
      {
        title: "Erstellung / Zusammenstellung von Zertifizierungsunterlagen",
        description:
          "und Betreuung während der Zertifizierung und Betreuung des Prozesses bis zur Ausstellung des Zertifikats",
      },
      {
        title: "Auswertung von Messungen und Vergleich mit Lastsimulation",
      },
      {
        title: "Betreuung von Belastungsmessungen",
      },
      {
        title: "Aufbereitung und Analyse von Messdaten",
      },
      {
        title: "Vergleich von Messungen mit Lastsimulationen",
      },
      {
        title:
          "Auswertung von Belastungsmessungen mit Bezug auf die Dimensionierung",
      },
    ],
  },
  en: {
    title: "WEA Development",
    mainTitle: "Development of wind turbines and individual components",
    description:
      "The design, layout, and dimensioning of wind turbines are carried out according to a variety of technical aspects. National technical guidelines and standards must be observed. The Rotorwerk engineering office has many years of experience in the field of simulation and dimensioning, as well as in the development of entire wind turbines and individual wind turbine components - just contact us.",
    servicesTitle: "Specific Individual Services",
    services: [
      {
        title: "Load Simulation",
        description:
          "Load simulation for wind turbines according to various guidelines (GL, DS 472, IEC 61400, NVN 11400) as well as site-specific calculation (Site Approval)",
      },
      {
        title: "Simulation",
        description: "Simulation of ON- and OFF-SHORE systems",
      },
      {
        title: "Design, Calculation, and Dimensioning",
        description: "of the components of wind turbines",
      },
      {
        title: "Creation of technical drawings",
      },
      {
        title: "Determination of static and operational strength",
      },
      {
        title: "Strength calculations",
        description: "by numerical or analytical method",
      },
      {
        title: "Modeling of components",
        description: "in composite with finite element calculations",
      },
      {
        title: "Dimensioning and selection of mechanical supplier components",
      },
      {
        title: "Investigations of damage cases",
      },
      {
        title:
          "Creation / Compilation of certification documents and support during certification and support of the process until the certificate is issued",
      },
      {
        title: "Evaluation of measurements and comparison with load simulation",
      },
      {
        title: "Support for load measurements",
      },
      {
        title: "Preparation and analysis of measurement data",
      },
      {
        title: "Comparison of measurements with load simulations",
      },
      {
        title: "Evaluation of load measurements with regard to dimensioning",
      },
    ],
  },
};
export default function Wea() {
  const { language } = useLanguage();
  const { title, mainTitle, description, servicesTitle, services } =
    content[language];

  return (
    <div className="relative px-6 pt-24 overflow-hidden text-left bg-white isolate sm:pt-32 lg:overflow-visible lg:px-0">
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
      <div className="grid max-w-6xl grid-cols-1 gap-16 mx-auto lg:grid-cols-4">
        <div className="col-span-1 text-center lg:col-span-4">
          <p className="text-base font-semibold leading-7 text-yellow-600">
            {title}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {mainTitle}
          </h1>
        </div>

        <div className="col-span-1 lg:col-span-2">
          <p className="mt-6 text-xl leading-8 text-gray-700">{description}</p>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            {servicesTitle}
          </h2>
          <ul role="list" className="mt-8 space-y-8 text-gray-600">
            {services.slice(0, 2).map((service, index) => (
              <li key={index} className="flex gap-x-3">
                <WrenchIcon
                  className="flex-none w-5 h-5 mt-1 text-lime-700"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    {service.title}
                  </strong>{" "}
                  {service.description}
                </span>
              </li>
            ))}
          </ul>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            {servicesTitle}
          </h2>
          <ul role="list" className="mt-8 space-y-8 text-gray-600">
            {services.slice(2, services.length).map((service, index) => (
              <li key={index} className="flex gap-x-3">
                <WrenchIcon
                  className="flex-none w-5 h-5 mt-1 text-lime-700"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    {service.title}
                  </strong>{" "}
                  {service.description}
                </span>
              </li>
            ))}
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
                className="flex-none w-5 h-5 mt-1 text-lime-700"
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
                className="flex-none w-5 h-5 mt-1 text-lime-700"
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
                className="flex-none w-5 h-5 mt-1 text-lime-700"
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
                className="flex-none w-5 h-5 mt-1 text-lime-700"
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

      <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        {/* ------------------ RIGHT ORIENTED IMAGE ELEMENT ------------------ */}
        <div className="p-12 -mt-12 -ml-12 pb-50 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"></div>

        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
