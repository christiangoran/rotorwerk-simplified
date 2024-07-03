import { WrenchIcon } from "@heroicons/react/20/solid";
import structure from "../assets/structure.webp";
import { useLanguage } from "../context/LanguageContext";

const content = {
  de: {
    softwareUsage: "Verwendung von Software",
    title: "Betriebsfestigkeit",
    intro:
      "In vielen Branchen ist die Prüfungen von Bauteilen auf Betriebsfestigkeit erforderlich, wie z.B. für WEA-Hersteller (IEC 61400-1 und GL-Richtlinie für die Zertifizierung von Windenergieanlagen), im Schiffbau (GL-Richtlinie für Schiffs- und Offshore-Technologie) oder im Stahlbau (Eurocode 3). Wir haben dafür ein spezielles Software-Tool entwickelt.",
    newMethod: "Betriebsfestigkeitsberechnung mit Zeitreihen",
    previousMethod:
      "Bisher: Berechnung mittels Rain-Flow-Count bzw. Einstufenkollektiv",
    previousMethodDesc:
      "Bisher wurde zur Ermittlung der Betriebsfestigkeit der zeitliche Zusammenhang zwischen angreifenden Kräften und Momente und ihrem Auftreten nicht berücksichtigt. Lediglich die statistische Häufigkeit ihres Erscheinens wurde in Bezug zu Materialkennwerten gesetzt (Wöhlerlinie), wie z.B. mittels Rain-Flow-Count bzw. Einstufenkollektiv.",
    newMethodDesc:
      "Neu: Berücksichtigung von Zeitreihen Mit Hilfe speziell entwickelter Simulations- und Auswertetechnologie ist es jetzt möglich, den Zusammenhang zwischen den unterschiedlichen Kraft- bzw. Momentwirkungen und deren zeitgleichen Auftreten zu berücksichtigen. Damit können jetzt viel genauere Aussagen zum Materialverhalten über lange Zeiträume getroffen werden. Dies ist insbesondere dort von Bedeutung, wo mehrere in unterschiedliche Richtung wirkende Kräfte und Momente gleichzeitig und außerdem variabel auftreten, wie z.B. bei Windenergieanlagen.",
    advantages: "Die Vorteile auf einen Blick",
    advantageItems: [
      "Zeitlicher Zusammenhang zwischen den Lastkomponenten bleibt erhalten",
      "Berechnung des gesamten FE-Modells (d.h. über alle Knoten)",
      "Optische Darstellung der Schädigungsverteilung im Bauteil",
      "Berücksichtigung unterschiedlicher Materialien (d.h. Anwendung unterschiedlicher Wöhlerlinien)",
      "Darstellung der Spannungsschwingbreiten für Schweißkonstruktionen möglich",
    ],
  },
  en: {
    softwareUsage: "Software Usage",
    title: "Fatigue Strength",
    intro:
      "In many industries, the testing of components for fatigue strength is required, such as for wind turbine manufacturers (IEC 61400-1 and GL guideline for the certification of wind turbines), in shipbuilding (GL guideline for ship and offshore technology) or in steel construction (Eurocode 3). We have developed a special software tool for this.",
    newMethod: "Fatigue Strength Calculation with Time Series",
    previousMethod:
      "Previous: Calculation using Rain-Flow Count or Step Collectives",
    previousMethodDesc:
      "Previously, the temporal relationship between acting forces and moments and their occurrence was not taken into account for determining fatigue strength. Only the statistical frequency of their occurrence was related to material properties (Wöhler curve), such as using rain-flow count or step collectives.",
    newMethodDesc:
      "New: Consideration of Time Series With the help of specially developed simulation and evaluation technology, it is now possible to consider the relationship between the different force or moment effects and their simultaneous occurrence. This now allows much more accurate statements about material behavior over long periods of time. This is particularly important where several forces and moments acting in different directions occur simultaneously and are also variable, such as in wind turbines.",
    advantages: "The Advantages at a Glance",
    advantageItems: [
      "The temporal relationship between the load components is preserved",
      "Calculation of the entire FE model (i.e., over all nodes)",
      "Visual representation of the damage distribution in the component",
      "Consideration of different materials (i.e., application of different Wöhler curves)",
      "Representation of stress swing widths for welded structures possible",
    ],
  },
};

export default function Betriebsfestigkeit() {
  const { language } = useLanguage();
  const langContent = content[language];

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
      <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-yellow-600">
                {langContent.softwareUsage}
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {langContent.title}
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                {langContent.intro}
              </p>
              <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900">
                {langContent.newMethod}
              </h2>
            </div>
          </div>
        </div>

        <div className="p-12 -mt-12 -ml-12 pb-50 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-300 max-h-100 rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={structure}
            alt="Image of a mathematical structure"
          />
        </div>

        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="">
                <b>{langContent.previousMethod}</b>{" "}
                {langContent.previousMethodDesc}
              </p>
              <p className="mt-6">
                <b>{langContent.newMethod}</b> {langContent.newMethodDesc}
              </p>
              <p className="mt-6">
                <b>{langContent.advantages}</b>
              </p>

              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                {langContent.advantageItems.map((item, index) => (
                  <li key={index} className="flex gap-x-3">
                    <WrenchIcon
                      className="flex-none w-5 h-5 mt-1 text-lime-700"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        {item}
                      </strong>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
