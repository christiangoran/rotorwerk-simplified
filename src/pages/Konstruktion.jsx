import { useLanguage } from "../context/LanguageContext";
import {
  Cog8ToothIcon,
  CogIcon,
  VariableIcon,
  WrenchIcon,
} from "@heroicons/react/20/solid";
import konstruktion from "../assets/konstruktion-1.webp";

const content = {
  de: {
    weCreateFor: "Wir erstellen auch",
    constructions: "Konstruktionen",
    forSectorsAndIndustries: "Entwürfe für die Branchen und Sektoren",
    additionalServices: "Besondere Dienstleistungen in diesem Zusammenhang",
  },
  en: {
    weCreateFor: "We also create",
    constructions: "Constructions",
    forSectorsAndIndustries: "Designs for sectors and industries",
    additionalServices: "Special services in this context",
  },
};

const industryAreas = {
  de: [
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
  ],
  en: [
    {
      title: "Heavy Machinery Engineering",
      description:
        "We specialize in designing heavy machinery that meets the highest standards of durability and efficiency. Our innovative engineering solutions deliver peak performance in the most demanding environments, making us a trusted partner in the heavy machinery sector.",
      icon: WrenchIcon,
    },
    {
      title: "Special Machinery Engineering",
      description:
        "Tailored solutions for unique challenges. Our special machinery engineering services provide specialized equipment tailored to your specific operational requirements. We combine cutting-edge technology with expert craftsmanship to create machines that boost productivity and efficiency.",
      icon: WrenchIcon,
    },
    {
      title: "Wind Industry Engineering",
      description:
        "Driving innovation in the wind industry, we offer comprehensive engineering solutions for wind energy projects. From planning to implementation, our expertise ensures optimal performance and reliability of wind turbines and related components, contributing to a sustainable future.",
      icon: WrenchIcon,
    },
    {
      title: "General Mechanical Engineering",
      description:
        "Delivering excellence in mechanical engineering, we provide a wide range of services from concept to completion. Our experienced team applies advanced engineering principles to design, analyze, and optimize mechanical systems for various industrial applications.",
      icon: WrenchIcon,
    },
    {
      title: "Steel Construction Engineering",
      description:
        "Expertise in steel construction design and manufacturing. We provide robust and innovative engineering solutions for steel construction projects, ensuring safety, stability, and durability. Our services cover everything from initial planning to final construction.",
      icon: WrenchIcon,
    },
    {
      title: "Lightweight Engineering",
      description:
        "Optimizing performance with lightweight construction. Our engineering solutions focus on reducing weight without compromising strength and durability. Ideal for industries where efficiency and performance are critical, our lightweight designs set the standard.",
      icon: WrenchIcon,
    },
    {
      title: "Load Handling Equipment Engineering",
      description:
        "Designing reliable load handling equipment to enhance safety and efficiency. Our engineering services for load handling equipment ensure your operations run smoothly and safely, with equipment that meets stringent standards and specific requirements.",
      icon: WrenchIcon,
    },
  ],
};
export default function Konstruktion() {
  const { language } = useLanguage();
  const langContent = content[language];
  const langIndustryAreas = industryAreas[language];

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
                {langContent.weCreateFor}
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {langContent.constructions}
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                {langContent.forSectorsAndIndustries}:
              </p>
            </div>
          </div>
        </div>

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
                {langIndustryAreas.map((area, index) => (
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
                {langContent.additionalServices}:
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
